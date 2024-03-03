import React, { useState } from 'react';
import { Button, Card } from 'antd';

export function ServingSizesForm() {
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');
  const tabListNoTitle = [
    {
      key: 'article',
      label: 'article',
    },
    {
      key: 'app',
      label: 'app',
    },
    {
      key: 'project',
      label: 'project',
    },
  ];

  const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };


  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
      <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={activeTabKey2}
        tabBarExtraContent={
          <Button type='primary'>Adicionar tamanho</Button>
        }
        onTabChange={onTab2Change}
        tabProps={{
          size: 'middle',
        }}
      >
        {contentListNoTitle[activeTabKey2]}
      </Card>
    </>
  )
}