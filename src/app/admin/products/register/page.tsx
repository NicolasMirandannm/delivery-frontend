'use client';
import './style.css';
import { CreationProductForm } from '@/app/admin/products/register/creation-form/creation-product-form';
import { CreationProductFields } from '@/app/admin/products/register/creation-form/creation-product-types';

export default function ProductRegister() {
  const onSaveForm = (product: CreationProductFields) => {
    console.log(product);
  }

  return (
    <div className={ 'wrapper' }>
      <div className={ 'title' }>CADASTRO DE PRODUTO</div>
      <CreationProductForm onSaveForm={onSaveForm}/>
    </div>
  )
}