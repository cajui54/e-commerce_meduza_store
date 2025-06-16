'use client';
import React from 'react';
import { Card } from './card';
import { Button } from './button';
import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import ButtonsAuth from './buttons-auth';
import AvatarUser from './avatar-user';
import Link from 'next/link';

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <AvatarUser />
          <div className="mt-4 flex flex-col gap-2">
            <ButtonsAuth />
            <Button variant="outline" className="w-full justify-start gap-6">
              <HomeIcon />
              Início
            </Button>
            <Button variant="outline" className="w-full justify-start gap-6">
              <PercentIcon />
              Ofertas
            </Button>
            <SheetClose asChild>
              <Link href={'/catalog'}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-6"
                >
                  <ListOrderedIcon />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">Meduza</span> Store
      </h1>

      <Button size={'icon'} variant={'outline'}>
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
