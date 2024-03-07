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
import { ComplementFields } from '@/app/admin/products/register/components/complements/form/complement-form-types';

type CreationProductFields = {
  name: string;
  description: string;
  productCategoryId: string;
  servingSizes: Array<FieldServingSizeForm>
  hasActiveComplements: boolean;
  complements: Array<ComplementFields>;
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

  const complementCategoriesFormHandler = (complementCategories: Array<ComplementFields>) => {
    form.setFieldValue('complements', complementCategories);
  }

  return (
    <div className={ 'form-wrapper' }>
      <Form
        form={ form }
        onFinish={ (values) => console.log(values) }
        layout={ 'vertical' }
        initialValues={ {
          hasActiveComplements: activePersonalization
        } }
      >
        <Form.Item<CreationProductFields>
          label="Nome do produto"
          name="name"
          rules={ [{ required: true, message: 'Nome do produto é um campo obrigatório' }] }
        >
          <Input/>
        </Form.Item>

        <div className={ 'details-category-wrapper' }>
          <Form.Item<CreationProductFields>
            label="Descrição do produto"
            name="description"
            style={ { width: '48%' } }
            rules={ [{ required: true, message: 'Produto precisa de uma descrição.' }] }
          >
            <Input.TextArea size={ 'large' }/>
          </Form.Item>

          <Form.Item<CreationProductFields>
            label={ "Categoria do produto" }
            name="productCategoryId"
            style={ { width: '48%' } }
            rules={ [{ required: true, message: 'Selecione uma categoria para o produto.' }] }
          >
            <ProductCategory onSelectHandler={ onSelectCategory }/>
          </Form.Item>
        </div>

        <Divider orientation="left" style={ { borderColor: 'rgba(17,17,17,0.5)' } }>Tamanhos do produto</Divider>
        <Form.Item<CreationProductFields>
          name="servingSizes"
          rules={ [{ required: true, message: 'Para criar um produto é necessário pelo menos um tamanho.' }] }
        >
          <ServingSizes servingSizeFormHandler={ servingSizeFormHandler }/>
        </Form.Item>

        <Divider orientation="left" style={ { borderColor: 'rgba(17,17,17,0.5)' } }>Personalizar produto</Divider>
        <div style={ { marginBottom: 20 } }>
          <Form.Item<CreationProductFields>
            name="hasActiveComplements"
          >
            { !activePersonalization
              ? <Button disabled={ !sizesCreated.length } size={ 'large' } style={ { width: '100%' } } type="primary"
                        onClick={ () => enablePersonalization(true) }>Ativar personalização</Button>
              : <Button size={ 'large' } style={ { width: '100%' } } type="primary" danger
                        onClick={ () => enablePersonalization(false) }>Desativar personalização</Button> }
          </Form.Item>

          { activePersonalization &&
            <Form.Item<CreationProductFields>
              name="complements"
              rules={ [
                {
                  validator: (rule, value: Array<ComplementFields>) => {
                    if (activePersonalization && !value?.length) {
                      return Promise.reject('Com a personalização do produto ativa, é necessário pelo menos uma categoria de complemento preenchida!')
                    }
                    return Promise.resolve();
                  }
                }
              ] }
            >
              <ComplementPersonalization sizes={ sizesCreated }
                                         complementCategoriesFormHandler={ complementCategoriesFormHandler }/>
            </Form.Item>
          }


        </div>

        <Form.Item className={ 'centralize-column' }>
          <Button type="primary" htmlType="submit">
            Salvar
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}