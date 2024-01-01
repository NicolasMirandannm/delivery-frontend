import { ProductDetails } from '@/app/components/product-details/product-details';
import '@/app/utils/utils.css'
import './style.css'

export default function Test() {
  return (
      <div style={ { width: '100vw', height: '100vh' } } className={'centralize-column'}>
        <ProductDetails/>
      </div>
  );
}