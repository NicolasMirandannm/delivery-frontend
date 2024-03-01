'use client';
import './create-product-category.css';
import { Button, Input, InputRef } from 'antd';
import { CheckOutlined, PlusOutlined, RedoOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';

export function CreateProductCategory() {
  const [addCategory, setAddCategory] = useState(false);
  const [disableSaveBtn, setDisableSaveBtn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const refCategory = useRef<InputRef>(null);

  const onInputCategory = (e: any) => {
    e.preventDefault();
    setDisableSaveBtn(e.target.value === '');
  }
  const saveCategory = () => {
    setIsLoading(true);
    setDisableSaveBtn(true);
    setTimeout(() => {
      setIsLoading(false);
      setAddCategory(false);
      if (refCategory.current?.input?.value) {
        refCategory.current.input.value = '';
      }
    }, 3000);
  }

  return (
    <div>
      {addCategory && (
        <div className={ 'input-wrapper' }>
          <Input placeholder={ 'Nome da categoria...' } onInput={onInputCategory} ref={ refCategory } style={ { width: '84%' } }/>
          <Button disabled={disableSaveBtn} type={ 'primary' } onClick={ saveCategory } style={ { width: '15%' } }>
            {!isLoading ? (<div>Salvar <CheckOutlined/></div>) : (<div>Salvando... <RedoOutlined spin/></div>)}
          </Button>
        </div>
      ) }
      <Button disabled={addCategory} type="dashed" onClick={ () => setAddCategory(true) } block icon={ <PlusOutlined/> }>
        Criar nova categoria
      </Button>
    </div>
  )
}