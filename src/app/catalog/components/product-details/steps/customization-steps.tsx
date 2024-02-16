'use client';
import React, { useEffect, useState } from 'react';
import { Button, message, Popover, Steps, StepsProps, theme } from 'antd';
import './style.css'
import {
  ComplementsSelect
} from '@/app/catalog/components/product-details/complements-select/complements-select';
import { ComplementCategory, ComplementOrderItem, ComplementSize } from '@/app/models/complement/complement-category';


const complementOrderItems = [new ComplementOrderItem('morango'), new ComplementOrderItem('banana')]
const complementOrderItems2 = [new ComplementOrderItem('banana')]
const sizes = [ new ComplementSize('pequeno', 5), new ComplementSize('medio', 7)]
const sizes2 = [ new ComplementSize('pequeno', 3), new ComplementSize('medio', 5)]

const complementCategories = [
  new ComplementCategory('categoria 1', sizes, complementOrderItems),
  new ComplementCategory('categoria 2', sizes2, complementOrderItems2)
]
export function CustomizationSteps({ sizeSelected }: {sizeSelected: string}) {
  const [current, setCurrent] = useState(0);
  const [changedSize, setChangedSize] = useState(false);

  useEffect(() => {
    for (let i=0; i < complementCategories.length; i++) {
      complementCategories[i].changeSize(sizeSelected)
      setCurrent(0);
    }
    setChangedSize(!changedSize)
  }, [sizeSelected]);

  const currentCategory= complementCategories?.[current];
  const items = complementCategories.map((category) => ({ key: category.name, title: category.name }));


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleCurrentCategory = (category: ComplementCategory) => {
    const categoryIndex = complementCategories.findIndex(item => item.name == category.name);
    complementCategories[categoryIndex] = category;
  };

  return (
    <>
      <div className={ 'steps-container' }>
        <Steps size={ 'small' } className={'steps'} current={ current } items={ items }/>
      </div>
      <div className={ 'content' }>
        <ComplementsSelect complementCategory={currentCategory} changedSize={changedSize} handleComplementCategory={handleCurrentCategory}></ComplementsSelect>
      </div>
      <div>
        { current > 0 && (
          <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
            Voltar
          </Button>
        ) }
        { current === complementCategories.length - 1 && (
          <Button style={{width: 200}} type="primary" onClick={ () => {
            message.success('Montagem finalizada, o pedido já pode ser prosseguido!')
            console.log(complementCategories)
          } }>
            Finalizar montagem
          </Button>
        ) }
        { current < complementCategories.length - 1 && (
          <Button type="primary" onClick={ () => next() }>
            Próximo
          </Button>
        ) }
      </div>
    </>
  )
}