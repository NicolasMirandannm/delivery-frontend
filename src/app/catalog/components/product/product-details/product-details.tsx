'use client'
import './style.css'
import { Button, Image } from 'antd';
import { InputNumberPlusMinus } from '@/app/components/input-number-plus-minus/inputNumberPlusMinus';
import { useEffect, useState } from 'react';
import '@/app/utils/utils.css'
import { OrderCustomization } from '@/app/catalog/components/product/order-customization/order-customization';
import { PriceDto, ProductDetailDto } from '@/app/catalog/types/product-detail-dto';
import productApi from '@/app/api/product/productApi';

const urlimage = 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/25/37eb09c8ff78e8f7b74da63a3a0ba4a33e0aae03.jpg'

export function ProductDetails({ productId, onCancelHandler }: {
  productId: string,
  onCancelHandler: Function
}) {
  const [count, setCount] = useState(1);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);
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

  const onChangeSizeHandler = (currentPrice: number) => {
    setCurrentPrice(currentPrice);
  }

  return (
    <div className={ 'card scrollbar' } id={ 'container' }>
      { detailedProduct != null && (
        <div className={ 'details' }>
          <Image src={ urlimage } alt={ 'img' } className={ 'img' }/>
          <h3>{ detailedProduct.name }</h3>
          <p className={ 'description' }>{ detailedProduct.description }</p>
          <div className={ 'centralize-column' } style={ { width: '90%' } }>
            <OrderCustomization prices={ detailedProduct.prices } onChangeSizeHandler={ onChangeSizeHandler }/>
          </div>
          <div className={ 'order' }>
            <div className={ 'centralize-column order-content' }>
              <h3>Valor R$ { currentPrice }</h3>
              <div style={ { height: '60px' } }>
                <InputNumberPlusMinus handleCounter={ handleCounter } initialValue={ count }/>
              </div>
            </div>
            <div className={ 'centralize-column order-content' }>
              <Button className={ 'btn add-to-cart-btn' }>
                Adicionar ao carrinho
              </Button>
              <Button danger className={ 'btn' } onClick={ () => onCancelHandler() }>Cancelar</Button>
            </div>
          </div>
        </div>
      ) }
    </div>
  );
}