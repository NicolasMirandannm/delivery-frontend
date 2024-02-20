import { Anchor, ConfigProvider, Divider } from 'antd';
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import './style.css'
import '../utils/utils.css'
import { CatalogList } from '@/app/catalog/components/catalog/catalog-list';
import productApi from '@/app/api/product/productApi';


export default async function Catalog() {

  const catalog = await productApi.getCatalog();

  const anchorLinkProps: AnchorLinkItemProps[] = catalog.map((category, i) => ({
    key: `${category.categoryName}-${i}`,
    href: `#${category.categoryName}-${i}`,
    title: `${category.categoryName}`
  }));

  return (
    <ConfigProvider theme={{
      components: {
        Anchor: {
          colorText: '#b6bfe8'
        }
      }
    }}>
      <div style={ { width: '70%', marginTop: '10%'} }>
        <Anchor
          direction={ "horizontal" }
          items={ anchorLinkProps }
          className={'centralize-row anchor'}
        />
        {catalog.map((category, i) => (
          <div key={i} id={`${category.categoryName}-${i}`} className={'centralize-column'} >
            <h1 className={'category-title'}>{category.categoryName}</h1>
            <Divider prefixCls={'divider-title'}/>
            <CatalogList products={category.products}/>
            <Divider />
          </div>
        )) }
      </div>
    </ConfigProvider>
  )
}