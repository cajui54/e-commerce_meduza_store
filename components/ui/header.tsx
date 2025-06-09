import React from 'react';
import { Card } from './card';
import { Button } from './button';
import {
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
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
          <div className="mt-2 flex flex-col gap-2">
            <Button variant="outline" className="w-full justify-start gap-6">
              <LogInIcon />
              Fazer Login
            </Button>

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
