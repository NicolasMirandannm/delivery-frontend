import { Col, Image, List, Row } from 'antd';
import React from 'react';
import { Product } from '@/app/catalog/types/catalog-types';
import '../../../utils/utils.css'

export function CatalogItem({ item }: { item: Product }) {
  const startValue = item.servingSizes.sort((a, b) => a.price - b.price)[0].price;
  const sizeDescriptions = item.servingSizes.map(size => size.name);

  return (
    <>
      <Row className={ 'centralize-row' } style={ { width: '100%', justifyContent: 'space-around' } }
           gutter={ [16, 16] }>
        <Col xs={ 16 } sm={ 16 } md={ 11 }>
          <List.Item.Meta
            title={ item.name }
            description={ sizeDescriptions }
          />
          <div>{ item.description }</div>
        </Col>
        <Col md={ 2 } className={ 'centralize-row' }
             style={ { textAlign: 'center', alignItems: 'flex-start' } }>
          <p className={ 'text-nunito' }>A partir de R${ startValue }</p>
        </Col>
        <Col className={ 'centralize-row' } xs={ 12 } sm={ 12 } md={ 6 }
             style={ { width: '100%', maxWidth: 300, minWidth: 250, height: 'auto' } }>
          <Image
            style={ { width: '100%', borderRadius: '3px 3px 3px 3px' } }
            alt={ item.name }
            src={ item.imageURI }
          />
        </Col>
      </Row>
    </>
  );
}