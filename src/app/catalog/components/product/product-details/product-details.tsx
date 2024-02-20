'use client'
import './style.css'
import { Button, Image } from 'antd';
import { InputNumberPlusMinus } from '@/app/components/input-number-plus-minus/inputNumberPlusMinus';
import { useEffect, useState } from 'react';
import '@/app/utils/utils.css'
import { OrderCustomization } from '@/app/catalog/components/product/order-customization/order-customization';
import { ProductDetailDto } from '@/app/catalog/types/product-detail-dto';
import productApi from '@/app/api/product/productApi';

const urlimage = 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/25/37eb09c8ff78e8f7b74da63a3a0ba4a33e0aae03.jpg'

export function ProductDetails({ productId, closeDialog }: {
  productId: string,
  closeDialog: Function
}) {
  let [count, setCount] = useState(1);
  const [detailedProduct, setDetailedProduct] = useState<ProductDetailDto | null>(null);

  useEffect(() => {
    if (productId?.length) {
      productApi.getProductDetailsBy(productId)
        .then((product) => {
          setDetailedProduct(product);
        })
    }
  }, [productId]);

  const handleCounter = (value: number) => {
    setCount(value);
  }

  return (
    <div className={ 'card scrollbar' } id={ 'container' }>
      { detailedProduct != null && (
        <div className={ 'details' }>
          <Image src={ urlimage } alt={ 'img' } className={ 'img' }/>
          <h3>{ detailedProduct.name }</h3>
          <p className={ 'description' }>{ detailedProduct.description }</p>
          <div className={ 'centralize-column' } style={ { width: '90%' } }>
            <OrderCustomization/>
          </div>
          <div className={ 'order' }>
            <div className={ 'centralize-column order-content' }>
              <h3>Valor R$ 10,00</h3>
              <div style={ { height: '60px' } }>
                <InputNumberPlusMinus handleCounter={ handleCounter } initialValue={ count }/>
              </div>
            </div>
            <div className={ 'centralize-column order-content' }>
              <Button className={ 'btn add-to-cart-btn' } onClick={ () => console.log('validar pedido') }>Adicionar ao
                carrinho</Button>
              <Button danger className={ 'btn' } onClick={ () => closeDialog() }>Cancelar</Button>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}