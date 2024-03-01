import './style.css';
import { CreationProductForm } from '@/app/admin/products/register/creation-form/creation-product-form';

export default function ProductRegister() {

  return (
    <div className={ 'wrapper' }>
      <div className={ 'title' }>CADASTRO DE PRODUTO</div>
      <CreationProductForm />
    </div>
  )
}