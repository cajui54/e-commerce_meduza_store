'use client';
import React from 'react';
import { Card } from './card';
import { Button } from './button';
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const Header = () => {
  const { status, data } = useSession();
  const handleLoginClick = async () => {
    await signIn();
  };
  const handleLogoutClick = async () => {
    await signOut();
  };
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
          {status === 'authenticated' && data?.user && (
            <div className="my-4 flex items-center gap-4">
              <Avatar>
                <AvatarImage
                  src={data.user.image || 'https://github.com/shadcn.png'}
                />
                <AvatarFallback>{data.user.name}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{data.user.name}</p>
                <p className="text-xs opacity-75">Boas compras</p>
              </div>
            </div>
          )}
          <div className="mt-4 flex flex-col gap-2">
            {status === 'unauthenticated' && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-6"
              >
                <LogInIcon />
                Fazer Login com Google
              </Button>
            )}

            {status === 'authenticated' && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-6"
              >
                <LogOutIcon />
                Fazer Logout
              </Button>
            )}

            <Button variant="outline" className="w-full justify-start gap-6">
              <HomeIcon />
              Início
            </Button>
            <Button variant="outline" className="w-full justify-start gap-6">
              <PercentIcon />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-6">
              <ListOrderedIcon />
              Catalogo
            </Button>
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
