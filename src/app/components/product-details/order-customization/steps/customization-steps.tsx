'use client';
import React, { useState } from 'react';
import { Button, message, Popover, Steps, StepsProps, theme } from 'antd';
import './style.css'
import {
  ComplementsSelect
} from '@/app/components/product-details/order-customization/complements-select/complements-select';

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
        <Steps   size={ 'small' } className={'centralize-row steps'} current={ current } items={ items }/>
      </div>
      <div className={ 'content' }>
        <ComplementsSelect></ComplementsSelect>
      </div>
      <div>
        { current > 0 && (
          <Button style={ { margin: '0 8px' } } onClick={ () => prev() }>
            Previous
          </Button>
        ) }
        { current === steps.length - 1 && (
          <Button type="primary" onClick={ () => message.success('Processing complete!') }>
            Done
          </Button>
        ) }
        { current < steps.length - 1 && (
          <Button type="primary" onClick={ () => next() }>
            Next
          </Button>
        ) }
      </div>
    </>
  )
}