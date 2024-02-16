import { Radio } from 'antd';
import { useState } from 'react';
import './style.css';
import '@/app/utils/utils.css'
import { CustomizationSteps } from '@/app/catalog/components/product-details/steps/customization-steps';

export function OrderCustomization () {
  const [size, setSize] = useState('pequeno');
  return (
    <>
        <Radio.Group onChange={(e) => setSize(e.target.value)} value={size}>
          <Radio.Button value={'pequeno'}>Pequeno</Radio.Button>
          <Radio.Button value={'medio'}>Médio</Radio.Button>
        </Radio.Group>
      <div className={'content centralize-column'}>
        <CustomizationSteps sizeSelected={size}/>
      </div>
    </>
  );
}