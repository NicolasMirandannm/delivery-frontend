import { Button, message } from 'antd';
import { ComplementForm } from '@/app/admin/products/register/components/complements/form/complement-form';
import { useState } from 'react';
import { ComplementFields } from '@/app/admin/products/register/components/complements/form/complement-form-types';
import { UnityOfMeasureEnum } from '@/app/comum/enums/unity-of-measure-enum';

export function ComplementPersonalization({ sizes, complementCategoriesFormHandler }: {sizes: Array<string>, complementCategoriesFormHandler: Function}) {
  const defaultComplementCategory: ComplementFields = {
    categoryName: '',
    amountBySize: sizes.map((size) => ({ sizeDescription: size, amountAvailableToCustumer: 1 })),
    complementaryItems: [{ name: '', measureType: UnityOfMeasureEnum.gramas, amountOfMeasure: 1 }]
  }
  const [complementCategories, setComplementCategories] = useState<ComplementFields[]>([defaultComplementCategory]);

  const onSaveHandler = (complementFields: ComplementFields, index: number) => {
    complementCategories[index] = complementFields;
    setComplementCategories([...complementCategories]);
  }

  const addComplementCategory = () => {
    setComplementCategories([...complementCategories, defaultComplementCategory]);
    complementCategoriesFormHandler(complementCategories);
  }

  return (
    <>
      {complementCategories.map((complement, index) => (
        <div key={index}>
          <ComplementForm
            id={index}
            sizes={sizes}
            value={complement}
            onSaveHandler={(complementFields: ComplementFields) => onSaveHandler(complementFields, index)}
          />
        </div>
      )) }
      <Button
        type={'dashed'}
        style={{width: '100%'}}
        onClick={addComplementCategory}
        disabled={!complementCategories[complementCategories.length - 1].categoryName?.length}
      >
        Adicionar categoria de complemento
      </Button>
    </>
  );
}


