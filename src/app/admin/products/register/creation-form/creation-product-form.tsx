'use client';
import './style.css'
import '@/app/utils/utils.css'
import { Button, Divider, Form, Input } from 'antd';
import { ProductCategory } from '@/app/admin/products/register/components/category/product-category';
import { useState } from 'react';
import {
  FieldServingSizeForm,
  ServingSizes
} from '@/app/admin/products/register/components/serving-size/serving-sizes';
import {
  ComplementPersonalization
} from '@/app/admin/products/register/components/complements/complement-personalization';

type CreationProductFields = {
  name: string;
  description: string;
  productCategoryId: string;
  servingSizes: Array<FieldServingSizeForm>
  hasActiveComplements: boolean;
}

export function CreationProductForm() {
  const [form] = Form.useForm<CreationProductFields>();
  const [activePersonalization, setActivePersonalization] = useState<boolean>(false);
  const [sizesCreated, setSizesCreated] = useState<Array<string>>([]);

  const onSelectCategory = (value: string) => {
    form.setFieldValue('productCategoryId', value);
  }

  const servingSizeFormHandler = (servingSizes: Array<FieldServingSizeForm>) => {
    form.setFieldValue('servingSizes', servingSizes);
    setSizesCreated(servingSizes.map((size) => size.name));
  }

  const enablePersonalization = (value: boolean) => {
    form.setFieldValue('hasActiveComplements', value);
    setActivePersonalization(value);
  }

  return (
    <div className={'form-wrapper'}>
      <Form
        form={form}
        onFinish={(values) => console.log(values)}
        layout={'vertical'}
        initialValues={{
          hasActiveComplements: activePersonalization
        }}
      >
        <Form.Item<CreationProductFields>
          label="Nome do produto"
          name="name"
          rules={[{ required: true, message: 'Nome do produto é um campo obrigatório' }]}
        >
          <Input />
        </Form.Item>

        <div className={'details-category-wrapper'}>
          <Form.Item<CreationProductFields>
            label="Descrição do produto"
            name="description"
            style={{ width: '48%'}}
            rules={[{ required: true, message: 'Produto precisa de uma descrição.' }]}
          >
            <Input.TextArea size={'large'} />
          </Form.Item>

          <Form.Item<CreationProductFields>
            label={"Categoria do produto"}
            name="productCategoryId"
            style={{ width: '48%'}}
            rules={[{ required: true, message: 'Selecione uma categoria para o produto.' }]}
          >
            <ProductCategory onSelectHandler={onSelectCategory} />
          </Form.Item>
        </div>

        <Divider orientation="left" style={{ borderColor: 'rgba(17,17,17,0.5)'}}>Tamanhos do produto</Divider>
        <Form.Item<CreationProductFields>
          name="servingSizes"
          rules={[{ required: true, message: 'Para criar um produto é necessário pelo menos um tamanho.'}]}
        >
          <ServingSizes servingSizeFormHandler={servingSizeFormHandler}/>
        </Form.Item>

        <Divider orientation="left" style={{ borderColor: 'rgba(17,17,17,0.5)'}}>Personalizar produto</Divider>
        <div style={{ marginBottom: 20 }}>
          <Form.Item<CreationProductFields>
            name="hasActiveComplements"
          >
            { !activePersonalization
              ? <Button size={'large'} style={{width: '100%'}} type="primary" onClick={ () => enablePersonalization(true) }>Ativar personalização</Button>
              : <Button size={'large'} style={{width: '100%'}} type="primary" danger onClick={ () => enablePersonalization(false) }>Desativar personalização</Button> }
          </Form.Item>

          { activePersonalization &&
            <ComplementPersonalization sizes={sizesCreated} />
          }
        </div>

        <Form.Item className={'centralize-column'}>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}