'use client';
import './style.css'
import { Button, Form, Input } from 'antd';
import { ProductCategory } from '@/app/admin/products/register/components/category/product-category';
import { useState } from 'react';

type CreationProductFields = {
  name: string;
  description: string;
  category: string;
}

export function CreationProductForm() {
  const [productCategory, setProductCategory] = useState<string>('');
  const [form] = Form.useForm<CreationProductFields>();

  const onSelectCategory = (value: string) => {
    setProductCategory(value);
    form.setFieldValue('category', value);
  }

  return (
    <div className={'form-wrapper'}>
      <Form
        form={form}
        onFinish={(values) => console.log(values)}
        layout={'vertical'}
      >
        <Form.Item<CreationProductFields>
          label="Nome do produto"
          name="name"
          rules={[{ required: true, message: 'Nome do produto é um campo obrigatório' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<CreationProductFields>
          label="Descrição do produto"
          name="description"
          rules={[{ required: true, message: 'Produto precisa de uma descrição.' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item<CreationProductFields>
          label={"Categoria do produto"}
          name="category"
          rules={[{ required: true, message: 'Selecione uma categoria para o produto.' }]}
        >
          <ProductCategory onSelectHandler={onSelectCategory} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}