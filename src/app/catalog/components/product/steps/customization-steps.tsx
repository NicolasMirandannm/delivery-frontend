'use client';
import React, { useEffect, useState } from 'react';
import { Button, message, Popover, Steps, StepsProps, theme } from 'antd';
import './style.css'
import {
  ComplementsSelect
} from '@/app/catalog/components/product/complements-select/complements-select';
import {
  ComplementCategoryOnOrder,
  ComplementOrderItem,
  ComplementSize
} from '@/app/models/complement/complement-category-on-order';
import { ComplementCategoryOnOrderFactory } from '@/app/catalog/factories/complement-category-on-order.factory';
import { ProductDetailDto } from '@/app/catalog/types/product-detail-dto';

export function CustomizationSteps({ sizeSelected, detailedProduct }: { sizeSelected: string, detailedProduct: ProductDetailDto }) {
  const [current, setCurrent] = useState(0);
  const [changedSize, setChangedSize] = useState(false);
  const [complementCategories, setComplementCategories] = useState<ComplementCategoryOnOrder[]>(
    ComplementCategoryOnOrderFactory.createManyBy(detailedProduct)
  );

  useEffect(() => {
    complementCategories.forEach(category => {
      category.changeSize(sizeSelected);
      setCurrent(0);
    });
    setChangedSize(!changedSize);
  }, [sizeSelected]);

  const currentCategory = complementCategories?.[current];
  const items = complementCategories.map((category) => ({ key: category.name, title: category.name }));


  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleCurrentCategory = (category: ComplementCategoryOnOrder) => {
    const categoryIndex = complementCategories.findIndex(item => item.name == category.name);
    complementCategories[categoryIndex] = category;
  };

  return (
    <>
      <div className={ 'steps-container' }>
        <Steps size={ 'small' } className={ 'steps' } current={ current } items={ items }/>
      </div>
      <div className={ 'content' }>
        <ComplementsSelect
          complementCategory={ currentCategory }
          changedSize={ changedSize }
          handleComplementCategory={ handleCurrentCategory }
        />
      </div>
      <div>
        { current > 0 && (
          <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
            Voltar
          </Button>
        ) }
        { current === complementCategories.length - 1 && (
          <Button style={ { width: 200 } } type="primary" onClick={ () => {
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