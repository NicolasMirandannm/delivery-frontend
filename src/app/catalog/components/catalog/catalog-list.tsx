'use client';
import React from 'react';
import { Button, List } from 'antd';
import '../../../utils/utils.css'
import { Product } from '@/app/catalog/types/catalog-types';
import { CatalogItem } from '@/app/catalog/components/catalog/catalog-item';


export function CatalogList({ products }: { products: Product[] }) {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        style={{width: '100%'}}
        dataSource={ products }
        renderItem={ (item) => (
          <List.Item
            key={ item.id }
            className={ 'centralize-row' }
          >
            <div className={ 'centralize-column' } >
              <CatalogItem item={ item } />
              <Button style={ { width: '100%', marginTop: 10 } }>Pedir</Button>
            </div>
          </List.Item>
        ) }
      />
    </>
  );
  //todo add the selectedProductDialog component with react hooks
}
