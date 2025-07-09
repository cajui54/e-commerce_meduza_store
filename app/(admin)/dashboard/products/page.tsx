import BadgeTitleRadius from '@/components/badge-title-radius';

import { Button } from '@/components/ui/button';
import { prismaClient } from '@/lib/prisma';
import { Package2Icon, PlusIcon } from 'lucide-react';
import React from 'react';
import ProductsTable from './_components/products-table';
import { computeProductTotalPrice } from '@/app/helpers/product';

const ProductPage = async () => {
  const products = await prismaClient.product.findMany();

  const productsWithTotalPrice = products.map((product) =>
    computeProductTotalPrice(product),
  );

  return (
    <div className="flex w-full flex-col gap-10 p-5">
      <BadgeTitleRadius>
        <Package2Icon size={16} />
        Produtos
      </BadgeTitleRadius>

      <div className="flex w-full items-center justify-between">
        <p className="">
          Productos:
          <span className="font-bold opacity-75"> {products.length}</span>
        </p>
        <Button className="flex gap-2">
          <PlusIcon />
          Adicionar Produto
        </Button>
      </div>

      <ProductsTable products={productsWithTotalPrice} />
    </div>
  );
};

export default ProductPage;
