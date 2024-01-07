'use client';
import './style.css'
import { Button, Divider } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

export function ComplementsSelect() {
  const [amountAvailable, setAmountAvailable] = useState(5);
  const amountTotal = 5;
  const complementCategory = 'complement category';
  const [complements, setComplements] = useState([
    {
      name: 'morango',
      amountSelected: 0
    },
    {
      name: 'abacaxi',
      amountSelected: 0
    },
    {
      name: 'kiwi',
      amountSelected: 0
    }
  ]);

  const add = (indexItem: number) => {
    if (amountAvailable === 0) return;
    complements[indexItem].amountSelected++;
    setComplements(complements);
    setAmountAvailable(amountAvailable - 1);
  };

  const remove = (indexItem: number) => {
    console.log(amountTotal)
    if (amountAvailable === amountTotal) return;
    complements[indexItem].amountSelected--;
    setComplements(complements);
    setAmountAvailable(amountAvailable + 1);
  };

  return (
    <div className={ 'centralize-column' }>
      <div className={'title-content'}>
        <p className={ 'title' }>{ complementCategory }</p>
        <Divider type={'vertical'} className={'vertical-divider'} />
        <p className={'amount'}>Qtd disponível: { amountAvailable } </p>
      </div>
      <Divider className={ 'divider' }/>
      { complements.map((complement, key: number) => (
        <div key={key} className={ 'complement-content' }>
          <p className={ 'complement-title' }>{complement.name}</p>
          {complement.amountSelected > 0
            ? (<p className={ 'complement-amount centralize-row' }>{ complement.amountSelected }x</p>)
            : (<p className={ 'complement-amount centralize-row' }></p>) }
          <div className={ 'actions centralize-row' }>
            <Button
              style={ { marginRight: 5 } }
              type={ 'primary' }
              disabled={complement.amountSelected === 0}
              danger
              icon={ <MinusOutlined/> }
              onClick={() => remove(key)}
            />
            <Button
              type={ 'primary' }
              disabled={amountAvailable === 0 }
              icon={ <PlusOutlined/> }
              onClick={() => add(key)}
            />
          </div>
        </div>
      )) }
    </div>
  )
}