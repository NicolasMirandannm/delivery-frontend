import './style.css'
import { Button, Divider } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import { ComplementCategoryOnOrder } from '@/app/models/complement/complement-category-on-order';


export function ComplementsSelect({ complementCategory, handleComplementCategory, changedSize }: { complementCategory: ComplementCategoryOnOrder, handleComplementCategory: Function, changedSize: boolean }) {
  const [amountAvailable, setAmountAvailable] = useState(complementCategory.getAmountAvailable());
  const [items, setItems] = useState(complementCategory.items);

  useEffect(() => {
    setAmountAvailable(complementCategory.getAmountAvailable());
    setItems(complementCategory.items);
  }, [complementCategory, changedSize])

  const add = (indexItem: number) => {
    complementCategory.addItem(indexItem)
    setItems(items);
    setAmountAvailable(complementCategory.getAmountAvailable());
    handleComplementCategory(complementCategory);
  };

  const remove = (indexItem: number) => {
    complementCategory.removeItem(indexItem)
    setItems(items);
    setAmountAvailable(complementCategory.getAmountAvailable());
    handleComplementCategory(complementCategory);
  };

  return (
    <div className={ 'centralize-column' }>
      <div className={ 'title-content' }>
        <p className={ 'title' }>{ complementCategory.name }</p>
        <Divider type={ 'vertical' } className={ 'vertical-divider' }/>
        <p className={ 'amount' }>Qtd disponível: { amountAvailable } </p>
      </div>
      <Divider className={ 'divider' }/>
      { items.map((item, key: number) => (
        <div key={ key } className={ 'complement-content' }>
          <p className={ 'complement-title' }>{ item.getName() }</p>
          { item.getAmountSelected() > 0
            ? (<p className={ 'complement-amount centralize-row' }>{ item.getAmountSelected() }x</p>)
            : (<p className={ 'complement-amount centralize-row' }></p>) }
          <div className={ 'actions centralize-row' }>
            <Button
              style={ { marginRight: 5 } }
              type={ 'primary' }
              disabled={ item.getAmountSelected() === 0 }
              danger
              icon={ <MinusOutlined/> }
              onClick={ () => remove(key) }
            />
            <Button
              type={ 'primary' }
              disabled={ amountAvailable === 0 }
              icon={ <PlusOutlined/> }
              onClick={ () => add(key) }
            />
          </div>
        </div>
      )) }
    </div>
  )
}