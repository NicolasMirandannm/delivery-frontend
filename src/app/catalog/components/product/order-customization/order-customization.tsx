import { Radio } from 'antd';
import { useState } from 'react';
import './style.css';
import '@/app/utils/utils.css'
import { CustomizationSteps } from '@/app/catalog/components/product/steps/customization-steps';
import { PriceDto } from '@/app/catalog/types/product-detail-dto';

export function OrderCustomization({ prices, onChangeSizeHandler }: { prices: Array<PriceDto> , onChangeSizeHandler: Function }) {
  const [size, setSize] = useState(prices?.[0].sizeDescription as string);

  const changeSize = (size: string) => {
    setSize(size);
    const price = prices.find(price => price.sizeDescription === size)?.price;
    onChangeSizeHandler(price);
  }

  return (
    <>
      <Radio.Group onChange={ (e) => changeSize(e.target.value) } value={ size }>
        {prices != null && prices.map((price, index) =>
          <Radio.Button key={index} value={ price.sizeDescription }>
            { price.sizeDescription }
          </Radio.Button>
        )}
      </Radio.Group>
      <div className={ 'content centralize-column' }>
        <CustomizationSteps sizeSelected={ size }/>
      </div>
    </>
  );
}
