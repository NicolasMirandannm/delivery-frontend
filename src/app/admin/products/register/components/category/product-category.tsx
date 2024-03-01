import './product-category.css';
import { Button, Select, SelectProps } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { CreateProductCategory } from '@/app/admin/products/register/components/category/create-product-category';

export function ProductCategory() {
  const options: SelectProps['options'] = [];
  const handleChange = (value: string[]) => {
    alert(`selected ${value}`);
  }

  return (
    <div className="product-category">
      <h2>Category</h2>
      <Select
        mode="tags"
        style={{ width: '100%', marginBottom: 10 }}
        placeholder="Selecione a categoria do produto..."
        notFoundContent={'Nenhuma categoria encontrada.'}
        onChange={handleChange}
        options={options}
      />
      <CreateProductCategory />
    </div>
  );
}