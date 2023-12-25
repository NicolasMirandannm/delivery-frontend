import { Anchor, ConfigProvider, Divider } from 'antd';
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import './style.css'
import '../utils/utils.css'
import { CatalogList } from '@/app/catalog/components/CatalogList';
import { Catalog } from '@/app/catalog/types/CatalogTypes';

const catalogoJson: Catalog[] = [
  {
    categoryId: "5002b3b9-69c0-45d2-a47d-d4191b44c226",
    categoryName: "Sorvetes",
    products: [
      {
        id: "30e27477-88ef-4fc7-b996-4ac6b136373a",
        name: "Sorvete de morango",
        description: "descrição do produto",
        price: 15.99,
        sizes: ["P", "M", "G"],
        image: "link da imagem no backend"
      }
    ]
  },
  {
    categoryId: "5002b3b9-69c0-45d2-a47d-d4191b44c226",
    categoryName: "Sorvetes",
    products: [
      {
        id: "30e27477-88ef-4fc7-b996-4ac6b136373a",
        name: "Sorvete de morango",
        description: "descrição do produto",
        price: 15.99,
        sizes: ["P", "M", "G"],
        image: "link da imagem no backend"
      }
    ]
  }
]

export default function Catalog() {
  const anchorLinkProps: AnchorLinkItemProps[] = catalogoJson.map((category, i) => ({
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
        {catalogoJson.map((category, i) => (
          <div key={i} id={`${category.categoryName}-${i}`} className={'centralize-column'}>
            <h1 className={'category-title'}>{category.categoryName}</h1>
            <Divider prefixCls={'divider-title'}/>
            <CatalogList/>
            <Divider />
          </div>
        )) }
      </div>
    </ConfigProvider>
  )
}