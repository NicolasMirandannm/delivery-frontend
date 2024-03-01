'use client';
import './style.css'
import { Button, Form, Input } from 'antd';
import { ProductCategory } from '@/app/admin/products/register/components/category/product-category';

type CreationProductFields = {
  name: string;
  description: string;
}

export function CreationProductForm() {
  const [form] = Form.useForm();

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

        <Form.Item>
          <ProductCategory />
        </Form.Item>
      </Form>
    </div>
  )
}