import { Radio } from 'antd';
import { useState } from 'react';

export function OrderCustomization () {
  const [size, setSize] = useState('pequeno');
  return (
    <>
      <Radio.Group onChange={(e) => setSize(e.target.value)} value={size}>
        <Radio.Button value={'pequeno'}>Pequeno</Radio.Button>
        <Radio.Button value={'medio'}>Médio</Radio.Button>
        <Radio.Button value={'grande'}>Grande</Radio.Button>
      </Radio.Group>
      <div>{size}</div>
    </>
  );
}