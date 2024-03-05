import { Button, Card, Input, message } from 'antd';
import {
  AmountBySizeForm,
  ComplementaryItemForm,
  ComplementFields,
  ComplementForm
} from '@/app/admin/products/register/components/complements/complement-form';
import { useState } from 'react';

//todo refactor to this component to inside of complement-form.tsx

export function ComplementPersonalization({ sizes }: {sizes: Array<string>}) {
  const [messageApi, contextHolder] = message.useMessage();
  const [titleOfComplementCategory, setTitleOfComplementCategory] = useState<string>('Nome do tipo de complemento');
  const [hableSaveOnError, setHableSaveOnError] = useState<boolean>(false);
  const [complementCategories, setComplementCategories] = useState<ComplementFields[]>([

  ]);

  const onSaveHandler = async (amountBySizes: AmountBySizeForm[], complementaryItems: ComplementaryItemForm[], index: number) => {
    const complementFields: ComplementFields = {
      categoryName: titleOfComplementCategory,
      amountBySize: amountBySizes,
      complementaryItems: complementaryItems
    }

    if (!titleOfComplementCategory.length) {
      await messageApi.error('Nome da categoria de complemento é obrigatório');
      setHableSaveOnError(!hableSaveOnError);
      return;
    }

    complementCategories[index] = complementFields;
    setComplementCategories([...complementCategories]);
  }

  return (
    <>
      {contextHolder}
        <Card
          title={<p style={{textAlign: 'center', fontStyle: 'oblique', fontSize: '1.5em', margin: 0 }}>{ titleOfComplementCategory }</p>}
          bordered
          type={'inner'}
          style={{marginBottom: '10px'}}
        >
          <Input
            style={ { marginBottom: 10 } }
            placeholder={ 'Nome da categoria' }
            onChange={(e) => setTitleOfComplementCategory(e.target.value)}

          />
          <ComplementForm sizes={sizes} onSaveHandler={onSaveHandler} hableSaveOnError={hableSaveOnError}/>
        </Card>
      <Button type={'dashed'} style={{width: '100%'}}>Adicionar categoria de complemento</Button>
    </>
  );
}