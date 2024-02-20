'use client'
import './style.css'
import { Button, Image } from 'antd';
import { InputNumberPlusMinus } from '@/app/components/input-number-plus-minus/inputNumberPlusMinus';
import { useEffect, useState } from 'react';
import '@/app/utils/utils.css'
import { SizeRadioButtons } from '@/app/catalog/components/product/size-radio-buttons/size-radio-buttons';
import { PriceDto, ProductDetailDto } from '@/app/catalog/types/product-detail-dto';
import productApi from '@/app/api/product/productApi';
import { CustomizationSteps } from '@/app/catalog/components/product/steps/customization-steps';

const urlimage = 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/25/37eb09c8ff78e8f7b74da63a3a0ba4a33e0aae03.jpg'

export function ProductDetails({ productId, onCancelHandler }: {
  productId: string,
  onCancelHandler: Function
}) {
  const [count, setCount] = useState(1);
  const [currentSize, setCurrentSize] = useState<PriceDto | null>(null);
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

  const onChangeSizeHandler = (currentSize: PriceDto) => {
    console.log(currentSize)
    setCurrentSize(currentSize);
  }

  return (
    <div className={ 'card scrollbar' } id={ 'container' }>
      { detailedProduct != null && (
        <div className={ 'details' }>
          <Image src={ urlimage } alt={ 'img' } className={ 'img' }/>
          <h3>{ detailedProduct.name }</h3>
          <p className={ 'description' }>{ detailedProduct.description }</p>
          <div className={ 'centralize-column' } style={ { width: '90%' } }>
            <SizeRadioButtons prices={ detailedProduct.prices } onChangeSizeHandler={ onChangeSizeHandler }/>
            <div className={ 'content centralize-column' }>
              { detailedProduct && (
                <CustomizationSteps sizeSelected={ currentSize?.sizeDescription as string }/>
              )}
            </div>
          </div>
          <div className={ 'order' }>
            <div className={ 'centralize-column order-content' }>
              <h3>Valor R$ { currentSize?.price as number }</h3>
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