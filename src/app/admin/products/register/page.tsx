'use client';
import './style.css';
import { CreationProductForm } from '@/app/admin/products/register/creation-form/creation-product-form';
import { CreationProductFields } from '@/app/admin/products/register/creation-form/creation-product-types';
import { NavigationMenuLayout } from '@/app/admin/navigation-menu-layout/navigation-menu-layout';
import { AdminRouteKeys } from '@/app/admin/navigation-menu-layout/routes-config/routes-map';

export default function ProductRegister() {
  const onSaveForm = (product: CreationProductFields) => {
    console.log(product);
  }

  return (
    <NavigationMenuLayout keyPage={ AdminRouteKeys.PRODUCTS }>
      <div className={ 'wrapper' }>
        <div className={ 'title' }>CADASTRO DE PRODUTO</div>
        <CreationProductForm onSaveForm={ onSaveForm }/>
      </div>
    </NavigationMenuLayout>
  )
}