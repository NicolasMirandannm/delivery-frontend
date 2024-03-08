'use client';
import React, { useEffect, useState } from 'react';
import './serving-size-form.css';
import { Button, Input, InputNumber } from 'antd';
import getBRLValueFormated from '@/app/utils/get-brl-value-formated';
import { FieldServingSizeForm } from '@/app/admin/products/register/components/serving-size/serving-sizes';

export function ServingSizeForm({ servingSizeProps, onSaveSizeHandler }: { servingSizeProps: FieldServingSizeForm, onSaveSizeHandler: Function }) {
  const [name, setName] = useState(servingSizeProps.name);
  const [description, setDescription] = useState(servingSizeProps.description);
  const [price, setPrice] = useState(servingSizeProps.price);

  useEffect(() => {
    setName(servingSizeProps.name);
    setDescription(servingSizeProps.description);
    setPrice(servingSizeProps.price);
  }, [servingSizeProps]);

  const onSaveSize = () => {
    const servingSize: FieldServingSizeForm = { name, description, price };
    onSaveSizeHandler(servingSize);
  }

  const saveBtnIsDisabled =  (name === servingSizeProps.name || !name?.length)
      && (description === servingSizeProps.description || !description?.length)
      && price === servingSizeProps.price;

  return (
    <div className={'container-form'}>
      <div className={ 'name-price' }>
        <label className={ 'label' } style={{width: '65%'}}>
          Nome
          <Input onChange={ (e) => setName(e.target.value) } value={name}/>
        </label>

        <label className={ 'label' } style={{width: '30%'}}>
          Preço
          <InputNumber
            style={{width: '100%'}}
            min={ 1 }
            defaultValue={ 1 }
            onChange={ (value) => setPrice(value ?? 1.00) }
            prefix={ 'R$' }
            precision={ 2 }
            decimalSeparator={ ',' }
            value={ price }
          />
        </label>
      </div>

      <label className={ 'label' }>
        Descrição
        <Input.TextArea placeholder="2 Litros, tamanho unico..." onChange={ (e) => setDescription(e.target.value) } value={description}/>
      </label>

      <Button
        type='primary'
        block
        style={{marginTop: '10px'}}
        onClick={() => onSaveSize()}
        disabled={saveBtnIsDisabled}
      >
        Salvar
      </Button>
    </div>
  );
}