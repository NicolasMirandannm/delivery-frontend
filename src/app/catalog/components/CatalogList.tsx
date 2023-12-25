'use client';
import React from 'react';
import { Avatar, Button, List, Space, Row, Col } from 'antd';
import '../../utils/utils.css'
import { Product } from '@/app/catalog/types/CatalogTypes';

const data = [
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply  prototypes beautifully and efficiently.',
  },
  {
    href: 'https://ant.design',
    title: `ant design part`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'and efficiently.',
  }
];

export function CatalogList(props: { products: Product[] }) {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={ data }
        renderItem={ (item) => (
          <List.Item
            key={ item.title }
            className={ 'centralize-row' }
          >
            <div className={ 'centralize-column' }>
              <Row className={ 'centralize-row' } style={ { width: '100%' } }
                   gutter={ [16, 16] }>
                <Col xs={ 24 } sm={ 24 } md={ 16 }>
                  <List.Item.Meta
                    title={ item.title }
                    description={ item.description }
                  />
                  <div>{ item.content }</div>
                </Col>
                <Col md={ 2 } className={ 'centralize-row' }
                     style={ { textAlign: 'center', alignItems: 'flex-start' } }>
                  <p style={ { fontWeight: 'bolder' } }>A partir de R$10.99</p>
                </Col>
                <Col className={ 'centralize-row' } xs={ 14 } sm={ 14 } md={ 6 }
                     style={ { width: '100%', maxWidth: 300, minWidth: 250, height: 'auto' } }>
                  <img
                    style={ { width: '100%', borderRadius: '3px 3px 3px 3px' } }
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                </Col>
              </Row>
              <Button style={ { width: '100%', marginTop: 10 } }>Pedir</Button>
            </div>
          </List.Item>
        ) }
      />
    </>
  );
}
