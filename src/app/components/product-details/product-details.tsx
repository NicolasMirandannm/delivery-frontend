'use client'
import './style.css'
import { Button } from 'antd';
import { InputNumberPlusMinus } from '@/app/components/utils/input-number-plus-minus/inputNumberPlusMinus';
import { useState } from 'react';
import '@/app/utils/utils.css'
import { OrderCustomization } from '@/app/components/product-details/order-customization/order-customization';

const urlimage = 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/25/37eb09c8ff78e8f7b74da63a3a0ba4a33e0aae03.jpg'
export function ProductDetails() {
  let [count, setCount] = useState(1);

  const handleCounter = (value: number) => {
    setCount(value);
  }

  return (
    <div className={'card scrollbar'} id={'container'}>
      <div className={ 'details' }>
        <img src={ urlimage } alt={ 'img' } className={ 'img' }/>
        <h3>Nome do lanche</h3>
        <p className={ 'description' }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nonummy auctor
          massa. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna,
          auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>

        <div className={ 'centralize-column' } style={{width: '90%'}}>
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
            <Button className={ 'btn' } style={ { color: '#326f8a', borderColor: '#326f8a' } }>Adicionar ao
              carrinho</Button>
            <Button danger className={ 'btn' }>Cancelar</Button>
          </div>
        </div>
      </div>
    </div>
  );
}