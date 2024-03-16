import './menu-layout.css';
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, onClick: any, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label, onClick };
}

export function MenuLayout({ children }: { children?: React.ReactNode }) {
  const nextRouter = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const currentPathname = usePathname();

  const routes = currentPathname.split('/').filter(Boolean);
  const changePage = (path: string) => nextRouter.push(path);
  const items: MenuItem[] = [
    getItem('Option 1', '1', () => changePage('/admin/products/register'),<PieChartOutlined />),
    getItem('Option 2', '2', () => console.log('sbc'),<DesktopOutlined />)
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={
            routes.map((route) => ({ title: route }))
          } />
          { children }
        </Content>
      </Layout>
    </Layout>
  );
}