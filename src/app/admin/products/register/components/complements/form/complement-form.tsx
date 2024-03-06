import '@/app/utils/utils.css';
import './complement-form.css'
import { obterOpcoesUnidadeMedida, UnityOfMeasureEnum } from '@/app/comum/enums/unity-of-measure-enum';
import { Button, Card, Dropdown, Input, InputNumber, message, Select, Space } from 'antd';
import { useEffect, useState } from 'react';
import { Warning } from 'postcss';
import { CheckCircleOutlined, IssuesCloseOutlined } from '@ant-design/icons';
import {
  AmountBySizeForm,
  ComplementaryItemForm, ComplementFields
} from '@/app/admin/products/register/components/complements/form/complement-form-types';

const defaultComplementaryItem = { name: '', measureType: UnityOfMeasureEnum.gramas, amountOfMeasure: 1 };

export function ComplementForm({ sizes, onSaveHandler, value, id }: {
  sizes: Array<string>,
  onSaveHandler: Function,
  id: number,
  value?: ComplementFields,
}) {
  const [titleOfComplementCategory, setTitleOfComplementCategory] = useState<string>(
    value?.categoryName ?? ''
  );
  const [itens, setItens] = useState<Array<ComplementaryItemForm>>(
    value?.complementaryItems ?? [defaultComplementaryItem]
  );
  const [amountBySize, setAmountBySize] = useState<Array<AmountBySizeForm>>(
    value?.amountBySize ?? sizes.map((size) => ({ sizeDescription: size, amountAvailableToCustumer: 1 }))
  );
  const [saveBtnIsDisabled, setSaveBtnIsDisabled] = useState<boolean>(true);
  const addItemBtnIsDisabled = !itens[itens.length - 1]?.name?.length;

  const addItem = () => {
    setItens([...itens, defaultComplementaryItem])
  }

  const shouldDisableBtn = (changedComplementCategoryName?: string) => {
    if (changedComplementCategoryName?.length === 0) {
      setSaveBtnIsDisabled(true);
      return;
    }
    if (!itens.some((item) => item.name.length > 0 && item.amountOfMeasure > 0)
      || !titleOfComplementCategory.length
      || (changedComplementCategoryName === value?.categoryName)
    )
      setSaveBtnIsDisabled(true);
    else
      setSaveBtnIsDisabled(false);
  }

  const onChangeCategoryName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleOfComplementCategory(event.target.value);
    shouldDisableBtn(event.target.value);
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
    const complementFields: ComplementFields = {
      categoryName: titleOfComplementCategory,
      amountBySize: amountBySize,
      complementaryItems: itens
    }
    setSaveBtnIsDisabled(true);
    onSaveHandler(complementFields, id);
  }

  return (
    <Card
      title={ <p style={ {
        textAlign: 'center',
        fontStyle: 'oblique',
        fontSize: '1.5em',
        margin: 0,
        color: 'rgba(0,0,0,0.7)'
      } }>{
        !titleOfComplementCategory.length ? 'Insira o nome da categoria do complemento' : titleOfComplementCategory
      }</p> }
      bordered
      type={ 'inner' }
      style={ { marginBottom: '10px' } }
    >
      <Input
        style={ { marginBottom: 10 } }
        placeholder={ 'Nome da categoria' }
        onChange={ onChangeCategoryName }

      />
      <Space direction={ 'vertical' } style={ { width: '100%' } }>
        <Card title={ <p className={ 'responsive-text' }>Quantidade disponivel por tamanho para seleção do cliente</p> }
              style={ { marginBottom: 10 } }>
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
          <div className={ 'header-complements' }>
            <p style={ { width: '60%' } } className={ 'responsive-text' }>Itens complementares a serem
              disponibilizados</p>
            <Button
              style={ { width: '30%' } }
              type={ 'primary' }
              disabled={ addItemBtnIsDisabled }
              onClick={ addItem }
            >
              Adicionar item
            </Button>
          </div>
        }>
          { itens.map((item, index) => (
            <div key={ index } className={ 'centralize-row' }
                 style={ { width: '100%', justifyContent: 'space-evenly' } }>
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
        <Button disabled={ saveBtnIsDisabled } type={ 'primary' } style={ { width: '100%' } } onClick={ saveData }>
          Salvar <IssuesCloseOutlined/>
        </Button>
        { !saveBtnIsDisabled && (
          <p className={ 'warn-text' }>
            (Atenção, é necessário salvar o complemento para o vincular com o produto.)
          </p>
        ) }
      </Space>
    </Card>
  );
}