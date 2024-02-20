'use client';
import React from 'react';
import { Button, List } from 'antd';
import '../../../utils/utils.css'
import { Product } from '@/app/catalog/types/catalog-types';
import { CatalogItem } from '@/app/catalog/components/catalog/catalog-item';
import { Dialog } from '@/app/components/dialog/dialog';
import { ProductDetails } from '@/app/catalog/components/product/product-details/product-details';


export function CatalogList({ products }: { products: Product[] }) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedProductId, setSelectedProductId] = React.useState('');
  const closeDialog = () => {
    setOpenDialog(false);
  }

  const startOrder = (productId: string) => {
    setSelectedProductId(productId);
    setOpenDialog(true);
  }

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        style={ { width: '100%' } }
        dataSource={ products }
        renderItem={ (item) => (
          <List.Item
            key={ item.id }
            className={ 'centralize-row' }
          >
            <div className={ 'centralize-column' }>
              <CatalogItem item={ item }/>
              <Button style={ { width: '100%', marginTop: 10 } } onClick={ () => startOrder(item.id) }>Pedir</Button>
            </div>
          </List.Item>
        ) }
      />
      <Dialog open={ openDialog }>
        <ProductDetails productId={ selectedProductId } onCancelHandler={ closeDialog } />
      </Dialog>
    </>
  );
}
