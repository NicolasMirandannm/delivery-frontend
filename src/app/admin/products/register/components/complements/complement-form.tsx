import '@/app/utils/utils.css';
import './complement-form.css'
import { obterOpcoesUnidadeMedida, UnityOfMeasureEnum } from '@/app/comum/enums/unity-of-measure-enum';
import { Button, Card, Dropdown, Input, InputNumber, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Warning } from 'postcss';
import { CheckCircleOutlined, IssuesCloseOutlined } from '@ant-design/icons';

export type AmountBySizeForm = {
  sizeDescription: string;
  amountAvailableToCustumer: number;
}

export type ComplementaryItemForm = {
  name: string;
  measureType: UnityOfMeasureEnum;
  amountOfMeasure: number;
}

export type ComplementFields = {
  categoryName: string;
  amountBySize: Array<AmountBySizeForm>;
  complementaryItems: Array<ComplementaryItemForm>
}

const defaultComplementaryItem = {name: '', measureType: UnityOfMeasureEnum.gramas, amountOfMeasure: 1};

export function ComplementForm({ sizes, hableSaveOnError, onSaveHandler }: { sizes: Array<string>, hableSaveOnError: boolean, onSaveHandler: Function }) {
  const [itens, setItens] = useState<Array<ComplementaryItemForm>>([defaultComplementaryItem]);
  const [amountBySize, setAmountBySize] = useState<Array<AmountBySizeForm>>(
    sizes.map((size) => ({sizeDescription: size, amountAvailableToCustumer: 1}))
  );
  const [saveBtnIsDisabled, setSaveBtnIsDisabled] = useState<boolean>(true);
  const addItemBtnIsDisabled = !itens[itens.length - 1]?.name?.length;

  useEffect(() => {
    shouldDisableBtn();
  }, [hableSaveOnError]);

  const addItem = () => {
    setItens([...itens, defaultComplementaryItem])
  }

  const shouldDisableBtn = () => {
    if (!itens.some((item) =>  item.name.length > 0 && item.amountOfMeasure > 0))
      setSaveBtnIsDisabled(true);
    else
      setSaveBtnIsDisabled(false);
  }

  const changeItem = (index: number, item: ComplementaryItemForm) => {
    itens[index] = item;
    setItens([...itens]);
    shouldDisableBtn();
  }

  const changeAmountBySize = (index: number, amount: number) => {
    shouldDisableBtn();
    amountBySize[index].amountAvailableToCustumer = amount;
    setAmountBySize([...amountBySize])
  }

  const saveData = () => {
    setSaveBtnIsDisabled(true);
    onSaveHandler(amountBySize, itens);
  }

  return (
    <div style={{width: '100%'}}>
      <Space direction={ 'vertical' } style={ { width: '100%' } }>
        <Card  title={<p className={'responsive-text'}>Quantidade disponivel por tamanho para seleção do cliente</p>} style={{marginBottom: 10}}>
          <Space direction={ 'horizontal' } style={ { width: '100%' } }>
            { amountBySize.map((size, index) => (
              <div key={ index }>
                <span style={ { marginRight: 10 } }>{ size.sizeDescription }:</span>
                <InputNumber
                  value={ size.amountAvailableToCustumer }
                  onChange={ (value) => changeAmountBySize(index, value ?? 1) }
                  min={ 1 }
                />
              </div>
            )) }
          </Space>
        </Card>
        <Card title={
          <div className={'header-complements'}>
            <p style={{width: '60%'}} className={'responsive-text'}>Itens complementares a serem disponibilizados</p>
            <Button
              style={{width: '30%'}}
              type={'primary'}
              disabled={addItemBtnIsDisabled}
              onClick={addItem}
            >
              Adicionar item
            </Button>
          </div>
        }>
          { itens.map((item, index) => (
            <div key={index} className={ 'centralize-row' } style={ { width: '100%', justifyContent: 'space-evenly' } }>
              <p style={ { marginRight: 10, fontStyle: 'oblique' } }>Item:</p>
              <Input
                placeholder={ 'Nome do item complementar' }
                style={ { width: '65%' } }
                value={ item.name }
                onChange={ (event) => changeItem(index, { ...item, name: event.target.value }) }
              />
              <InputNumber
                value={ item.amountOfMeasure }
                min={ 1 }
                precision={ 2 }
                onChange={ (value) => changeItem(index, { ...item, amountOfMeasure: value ?? 1 }) }
                style={ { width: '10%' } }/>
              <Select
                defaultValue={ item.measureType }
                style={ { width: '15%' } }
                options={ obterOpcoesUnidadeMedida() }
                onChange={ (value) => changeItem(index, { ...item, measureType: value }) }
              />
            </div>
          )) }
        </Card>
        <Button disabled={saveBtnIsDisabled} type={'primary'} style={{width: '100%'}} onClick={saveData}>
          Salvar <IssuesCloseOutlined />
        </Button>
        { !saveBtnIsDisabled && (
          <p className={ 'warn-text' }>
            (Atenção, é necessário salvar o complemento para o vincular com o produto.)
          </p>
        ) }
      </Space>
    </div>
  );
}