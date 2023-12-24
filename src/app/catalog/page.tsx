import { Anchor } from 'antd';
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor";
import './style.css'
import { CatalogList } from '@/app/catalog/components/CatalogList';

export default function Catalog() {
  const anchorLinkProps: AnchorLinkItemProps[] = [
    {
      key: 'part-1',
      href: '#part-1',
      title: 'Part 1'
    },
  ]

  return (
    <div style={ { width: '70%', marginTop: '10%' } }>
      <Anchor
        direction={ "horizontal" }
        items={ anchorLinkProps }
        style={{
          backgroundColor: 'blue',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      />
      <div>
        <CatalogList/>
      </div>
    </div>
  )
}