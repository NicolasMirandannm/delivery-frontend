'use client';
import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ServingSizeForm } from '@/app/admin/products/register/components/serving-size/serving-size-form';

type TabOfSizes = {
  key: string;
  label: string;
  servingSizeProps: FieldServingSizeForm;
}

export type FieldServingSizeForm = {
  name: string;
  description: string;
  price: number;
}

export function ServingSizes({ servingSizeFormHandler }: { servingSizeFormHandler: Function }) {
  const [tabOfSizes, setTabOfSizes] = useState<TabOfSizes[]>([{
      key: 'Único',
      label: 'Único',
      servingSizeProps: { name: 'Único', description: '', price: 1.00 }
    }]
  );
  const [currentTab, setCurrentTab] = useState<string>(tabOfSizes[0].key);

  const lastSizeAdded = tabOfSizes[tabOfSizes.length - 1].servingSizeProps;
  const addSizeBtnIsDisabled = !lastSizeAdded.name?.length ||
    lastSizeAdded.price === 0 ||
    lastSizeAdded.price == null ||
    !lastSizeAdded.description?.length;

  const addNewSize = () => {
    const newKey = `Tamanho ${tabOfSizes.length + 1}`;
    setTabOfSizes([...tabOfSizes, {
      key: newKey,
      label: newKey,
      servingSizeProps: { name: newKey, description: '', price: 1.00 }
    }]);
    setCurrentTab(newKey);
  }

  const onTabChange = (key: string) => {
    setCurrentTab(key);
  };

  const getServingSizeProps = (key: string) => {
    return (tabOfSizes.find(size => size.key === currentTab) || tabOfSizes[0]).servingSizeProps;
  }

  const onSaveSizeHandler = (servingSizeProps: FieldServingSizeForm) => {
    const newTabOfSizes = tabOfSizes.map(size => {
      if (size.key === currentTab) {
        return {
          key: servingSizeProps.name,
          label: servingSizeProps.name,
          servingSizeProps
        }
      }
      return size;
    });
    setTabOfSizes(newTabOfSizes);
    setCurrentTab(servingSizeProps.name)
    const servingSizes = newTabOfSizes.map(size => size.servingSizeProps);
    console.log(servingSizes);
    servingSizeFormHandler(servingSizes);
  }

  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabOfSizes}
        activeTabKey={currentTab}
        tabBarExtraContent={
          <Button type='primary' block icon={ <PlusOutlined/> } onClick={addNewSize} disabled={ addSizeBtnIsDisabled }>Adicionar tamanho</Button>
        }
        onTabChange={onTabChange}
        tabProps={{
          size: 'middle',
        }}
      >
        <ServingSizeForm
          servingSizeProps={getServingSizeProps(currentTab)}
          onSaveSizeHandler={onSaveSizeHandler}
        />
      </Card>
    </>
  )
}