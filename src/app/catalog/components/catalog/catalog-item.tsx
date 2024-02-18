import { Col, Image, List, Row } from 'antd';
import React from 'react';
import { Product } from '@/app/catalog/types/catalog-types';

export function CatalogItem({ item }: { item: Product }) {

  return (
    <>
      <Row className={ 'centralize-row' } style={ { width: '100%', justifyContent: 'space-around' } }
           gutter={ [16, 16] }>
        <Col xs={ 16 } sm={ 16 } md={ 11 }>
          <List.Item.Meta
            title={ item.name }
            description={ item.sizes }
          />
          <div>{ item.description }</div>
        </Col>
        <Col md={ 2 } className={ 'centralize-row' }
             style={ { textAlign: 'center', alignItems: 'flex-start' } }>
          <p className={ 'text-nunito' }>A partir de R${ item.price }</p>
        </Col>
        <Col className={ 'centralize-row' } xs={ 12 } sm={ 12 } md={ 6 }
             style={ { width: '100%', maxWidth: 300, minWidth: 250, height: 'auto' } }>
          <Image
            style={ { width: '100%', borderRadius: '3px 3px 3px 3px' } }
            alt={ item.name }
            src={ item.image }
          />
        </Col>
      </Row>
    </>
  );
}