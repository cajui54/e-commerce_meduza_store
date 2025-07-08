'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SIDEBAR_ICON } from './sidebar-icons';

export interface SidebarItemProps {
  text: string;
  path: string;
  icon: keyof typeof SIDEBAR_ICON;
}
const SidebarItem = ({ text, path, icon }: SidebarItemProps) => {
  const pathname = usePathname();

  console.log(pathname);
  const isAtive = (_path: string) => pathname === path;
  return (
    <Button
      variant={'outline'}
      asChild
      className={`${isAtive(path) && '!bg-pink-400'} w-full justify-start`}
      onClick={() => console.log('xxx')}
    >
      <Link href={path}>
        {SIDEBAR_ICON[icon]}
        {text}
      </Link>
    </Button>
  );
};

export default SidebarItem;
