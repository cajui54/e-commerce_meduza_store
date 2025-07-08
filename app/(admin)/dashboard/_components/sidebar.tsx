'use server';
import Link from 'next/link';
import React from 'react';
import SidebarItem, { SidebarItemProps } from './sidebar-item';

const optionLinks: SidebarItemProps[] = [
  { text: 'Dashboard', path: '/dashboard', icon: 'dashboard' },
  { text: 'Produtos', path: '/dashboard/products', icon: 'products' },
  { text: 'Categorias', path: '/dashboard/categories', icon: 'category' },
  { text: 'Pedidos', path: '/dashboard/orders', icon: 'order' },
];
const Sidebar = () => {
  return (
    <div className="flex h-full min-w-[300px] flex-col items-center gap-8 border-r border-solid border-accent bg-background p-5">
      <Link href="/dashboard">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Meduza</span>Store
        </h1>
      </Link>

      <div className="flex w-full flex-col gap-3">
        {optionLinks.map((item) => (
          <SidebarItem
            key={item.path}
            text={item.text}
            path={item.path}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
