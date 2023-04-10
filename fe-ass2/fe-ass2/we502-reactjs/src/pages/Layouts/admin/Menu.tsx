import React, { useState } from 'react';
import {
  HomeFilled,
  ProjectOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
  href?: string,
): MenuItem {
  const itemProps: MenuItem = {
    key,
    icon,
    children,
    type,
  };
  
  if (href) {
    itemProps.label = (
      <a href={href}>
        <span>{label}</span>
      </a>
    );
  } 
  else {
    itemProps.label = (
      <>
        <span>{label}</span>
      </>
    );
  }
  return itemProps;
}

const items: MenuItem[] = [
  getItem('Home', '1', <HomeFilled/>, undefined, undefined, '/admin'),
  getItem('Products', '2', <ProjectOutlined />), 
    getItem('All Products', '2.1', null, undefined, undefined, '/admin/products'),
    getItem('Add Product', '2.2', null, undefined, undefined, '/admin/products/add'),
    getItem('All Categories', '2.3', null, undefined, undefined, '/admin/categories'),
    getItem('Add Categories', '2.4', null, undefined, undefined, '/admin/categories/add'),
  
];
const MenuAdmin = () => {
  // const [theme, setTheme] = useState<MenuTheme>('light');
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div style={{ width: '256px' }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default MenuAdmin;