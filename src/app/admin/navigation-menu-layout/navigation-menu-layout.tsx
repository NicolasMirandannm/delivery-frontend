'use client';
import './style.css';
import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, MenuProps } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { usePathname, useRouter } from 'next/navigation';
import { AdminRouteKeys, adminRoutesMap } from '@/app/admin/navigation-menu-layout/routes-config/routes-map';
const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
function getItem(key: React.Key, label: React.ReactNode, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
  return { key, icon, children, label };
}

const items: MenuItem[] = [
  getItem(AdminRouteKeys.HOME, adminRoutesMap.get(AdminRouteKeys.HOME)?.label,<PieChartOutlined />),
  getItem(AdminRouteKeys.PRODUCTS, adminRoutesMap.get(AdminRouteKeys.PRODUCTS)?.label,<DesktopOutlined />)
];

let collapsedContext: boolean = false;

export function NavigationMenuLayout({ children, keyPage }: { children?: React.ReactNode, keyPage: AdminRouteKeys }) {
  const nextRouter = useRouter();
  const [collapsed, setCollapsed] = useState(collapsedContext);
  const currentPathname = usePathname();
  const paths = currentPathname.split('/').filter(Boolean);

  const changeRoute = (key: string) => {
    const path = adminRoutesMap.get(key)?.path;
    if (path)
      nextRouter.push(path)
  };

  const onCollapse = (value: boolean) => {
    collapsedContext = value;
    setCollapsed(value);
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => onCollapse(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={[keyPage]} mode="inline" items={items} onSelect={(item) =>  changeRoute(item.key) } />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={
            paths.map((path) => ({ title: path }))
          } />
          { children }
        </Content>
      </Layout>
    </Layout>
  );
}