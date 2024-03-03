'use client';
import React, { useState } from 'react';
import { Button, Card, Form, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type TabOfSizes = {
  key: string;
  label: string;
}

type FieldServingSizeForm = {
  name: string;
  description: string;
  price: number;
}


export function ServingSizesForm() {
  const [tabOfSizes, setTabOfSizes] = useState<TabOfSizes[]>([{
      key: 'Único',
      label: 'Único',
    }]
  );
  const [currentTab, setCurrentTab] = useState<string>(tabOfSizes[0].key);


  const addNewSize = () => {
    const newKey = `Tamanho ${tabOfSizes.length + 1}`;
    setTabOfSizes([...tabOfSizes, { key: newKey, label: newKey }]);
    setCurrentTab(newKey);
  }

  const onTabChange = (key: string) => {
    setCurrentTab(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabOfSizes}
        activeTabKey={currentTab}
        tabBarExtraContent={
          <Button type='primary' block icon={ <PlusOutlined/> } onClick={addNewSize}>Adicionar tamanho</Button>
        }
        onTabChange={onTabChange}
        tabProps={{
          size: 'middle',
        }}
      >
        <Form
          layout={'vertical'}
          onFinish={(values) => console.log(values)}
        >
          <Form.Item<FieldServingSizeForm>
            label="Nome"
            name="name"
            rules={[{ required: true, message: 'Nome do tamanho é um campo obrigatório' }]}
          >
            <Input size={'small'} />
          </Form.Item>

          <Form.Item<FieldServingSizeForm>
            label="Descrição"
            name="description"
            rules={[{ required: true, message: 'Descrição do tamanho é um campo obrigatório' }]}
          >
            <Input.TextArea size={'small'} />
          </Form.Item>

          <Form.Item<FieldServingSizeForm>
            label="Preço"
            name="price"
            rules={[{ required: true, message: 'Valor do produto nesse tamanho é um campo obrigatório' }]}
          >
            <Input size={'small'} type="number" />
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}