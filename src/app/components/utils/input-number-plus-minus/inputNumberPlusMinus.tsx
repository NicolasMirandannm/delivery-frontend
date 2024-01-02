import './style.css'
import { Button, Input } from 'antd';


export function InputNumberPlusMinus(prop: { handleCounter: Function, initialValue: number }) {
  let count = prop.initialValue
  const plus = () => {
    const value = count + 1;
    count = value;
    prop.handleCounter(value);
  }
  const minus = () => {
    const value = count === 1 ? count : count - 1
    count = value;
    prop.handleCounter(value);
  }

  return (
      <div className={ "number-input" } style={{borderRadius: 4}}>
        <Button className={'button'} onClick={() => minus()}></Button>
        <Input className={ "quantity input" } value={count} type="number"/>
        <Button className={ "plus button" } onClick={() => plus()}></Button>
      </div>
  )
}