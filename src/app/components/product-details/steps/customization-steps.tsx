'use client';
import React, { useState } from 'react';
import { Button, message, Popover, Steps, StepsProps, theme } from 'antd';
import './style.css'
import {
  ComplementsSelect
} from '@/app/components/product-details/complements-select/complements-select';

export function CustomizationSteps() {
   const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Third',
      content: 'Third-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <div className={ 'steps-container' }>
        <Steps size={ 'small' } className={'steps'} current={ current } items={ items }/>
      </div>
      <div className={ 'content' }>
        <ComplementsSelect></ComplementsSelect>
      </div>
      <div>
        { current > 0 && (
          <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
            Voltar
          </Button>
        ) }
        { current === steps.length - 1 && (
          <Button style={{width: 200}} type="primary" onClick={ () => message.success('Montagem finalizada, o pedido já pode ser prosseguido!') }>
            Finalizar montagem
          </Button>
        ) }
        { current < steps.length - 1 && (
          <Button type="primary" onClick={ () => next() }>
            Próximo
          </Button>
        ) }
      </div>
    </>
  )
}