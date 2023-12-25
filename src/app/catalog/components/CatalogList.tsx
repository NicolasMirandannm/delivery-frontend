'use client';
import React from 'react';
import { Avatar, Button, List, Space, Row, Col } from 'antd';
import '../../utils/utils.css'

const data = Array.from({ length: 3 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${ i }`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${ i }`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));

export function CatalogList() {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={ data }
        renderItem={ (item) => (
          <List.Item
            key={ item.title }
            className={'centralize-row'}
          >
            <div className={'centralize-column'}>
              <Row className={'centralize-row'} style={ { width: '100%' } } gutter={ [16, 16] }>
                <Col xs={ 24 } sm={ 24 } md={ 16 }>
                  <List.Item.Meta
                    title={ <a href={ item.href }>{ item.title }</a> }
                    description={ item.description }
                  />
                  <div>{ item.content }</div>
                </Col>
                <Col className={'centralize-row'} xs={ 24 } sm={ 24 } md={ 8 }>
                  <img
                    style={ { width: '100%', maxWidth: 278, height: 'auto' } }
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
