'use client'
import './style.css'
import { Button, Image, InputNumber } from 'antd';
import { InputNumberPlusMinus } from '@/app/components/utils/input-number-plus-minus/inputNumberPlusMinus';
import { useState } from 'react';

const urlimage = 'https://cdn6.campograndenews.com.br/uploads/noticias/2022/10/25/37eb09c8ff78e8f7b74da63a3a0ba4a33e0aae03.jpg'
export function ProductDetails() {
  let [count, setCount] = useState(1);

  const handleCounter = (value: number) => {
    setCount(value);
  }

  return (
    <div className={'card'}>
      <div className={'details'}></div>
      <div className={ 'product-order' }>
        <img src={ urlimage } alt={ 'img' } className={ 'img' }/>
        <h3>Nome do lanche</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nonummy auctor massa. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna,
          auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
        <h3>Valor R$ 10,00</h3>

        <InputNumberPlusMinus handleCounter={handleCounter} initialValue={count}></InputNumberPlusMinus>

        <Button onClick={() => console.log(count)}>teste</Button>

        <Button>Adicionar ao carrinho</Button>
        <Button>Cancelar</Button>
      </div>
    </div>
  );
}