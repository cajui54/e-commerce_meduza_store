import { prismaClient } from '@/lib/prisma';
import React from 'react';
import { ProductWithTotalPriceAndCategory } from '../products/_components/products-table';
import { computeProductTotalPrice } from '@/app/helpers/product';
import BadgeTitleRadius from '@/components/badge-title-radius';
import { ListOrderedIcon, PlusIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoriesPage = async () => {
  const categories = await prismaClient.category.findMany({
    include: {
      products: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <div className="flex w-full flex-col gap-10 p-5">
      <BadgeTitleRadius>
        <ListOrderedIcon size={16} />
        Categorias
      </BadgeTitleRadius>

      <div className="flex w-full items-center justify-between">
        <p className="">
          Categorias encontradas:
          <span className="font-bold opacity-75"> {categories.length}</span>
        </p>
        <Button className="flex gap-2">
          <PlusIcon />
          Adicionar Produto
        </Button>
      </div>
    </div>
  );
};

export default CategoriesPage;
