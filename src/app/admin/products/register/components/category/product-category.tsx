'use client';
import './product-category.css';
import { Select, SelectProps } from 'antd';
import { CreateProductCategory } from '@/app/admin/products/register/components/category/create-product-category';
import productCategoryApi, { ProductCategoryType } from '@/app/api/product-category/product-category.api';
import { useEffect, useState } from 'react';

export function ProductCategory({ onSelectHandler }: { onSelectHandler: Function }) {
  const [options, setOptions] = useState<SelectProps['options']>([]);

  useEffect(() => {
    productCategoryApi.getCategories().then((categories: ProductCategoryType[]) => {
      const categoriesOptions = categories.map((category) => ({ label: category.name, value: category.id }));
      setOptions(categoriesOptions);
    });
    return () => {}
  }, [options]);

  const onCreateCategoryHandler = () => {
    setOptions([])
  }

  const handleChange = (value: string) => {
    onSelectHandler(value);
  }

  return (
    <div className="product-category">
      <Select
        style={{ width: '100%', marginBottom: 10 }}
        placeholder="Selecione a categoria do produto..."
        notFoundContent={'Nenhuma categoria encontrada.'}
        onChange={handleChange}
        options={options}
      />
      <CreateProductCategory onCreateCategoruHandler={onCreateCategoryHandler}/>
    </div>
  );
}