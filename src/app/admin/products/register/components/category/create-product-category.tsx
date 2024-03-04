'use client';
import './create-product-category.css';
import { Button, Input, InputRef } from 'antd';
import { CheckOutlined, PlusOutlined, RedoOutlined, UndoOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import productCategoryApi from '@/app/api/product-category/product-category.api';

export function CreateProductCategory({ onCreateCategoruHandler }: { onCreateCategoruHandler: Function }) {
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
    productCategoryApi
      .createCategory(refCategory.current?.input?.value as string)
      .then(() => {
        alert('Categoria criada com sucesso!');
        onCreateCategoruHandler();
      })
      .catch((err) => {
        alert('Erro ao criar categoria: ');
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
        setAddCategory(false);
        if (refCategory.current?.input?.value) {
          refCategory.current.input.value = '';
        }
      })
  }

  return (
    <div>
      {addCategory && (
        <div className={ 'input-wrapper' }>
          <Input placeholder={ 'Nome da categoria...' } onInput={onInputCategory} ref={ refCategory } style={ { width: '69%' } }/>
          <Button disabled={disableSaveBtn} type={ 'primary' } onClick={ saveCategory } style={ { width: '30%' } }>
            {!isLoading ? (<div>Salvar <CheckOutlined/></div>) : (<div>Salvando... <RedoOutlined spin/></div>)}
          </Button>
        </div>
      ) }
      { !addCategory ? (
        <Button type="dashed" onClick={ () => setAddCategory(true) } block icon={ <PlusOutlined/> }>
          Criar nova categoria
        </Button>
      ) : (
        <Button type="dashed" danger onClick={ () => setAddCategory(false) } block icon={ <UndoOutlined /> }>
          Cancelar
        </Button>
      )}
    </div>
  )
}