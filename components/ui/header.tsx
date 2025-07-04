'use client';
import React from 'react';
import { Card } from './card';
import { Button } from './button';
import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PackageSearchIcon,
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
import Cart from './cart';

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
            <SheetClose asChild>
              <Link href={'/'}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-6"
                >
                  <HomeIcon />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={'/orders'}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-6"
                >
                  <PackageSearchIcon />
                  Meus Pedidos
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={'/deals'}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-6"
                >
                  <PercentIcon />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

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

      <Link href="/">
        <h1 className="text-lg font-semibold">
          <span className="text-primary">Meduza</span> Store
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'outline'}>
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[90%]">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
