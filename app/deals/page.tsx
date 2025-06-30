import ProductItem from '@/components/ui/product-item';
import { prismaClient } from '@/lib/prisma';
import React from 'react';
import { computeProductTotalPrice } from '../helpers/product';
import { PercentIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="flex flex-col gap-5 p-5">
      <Badge
        variant={'outline'}
        className="w-[150px] gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        <PercentIcon size={16} />
        Ofertas
      </Badge>
      <div className="grid grid-cols-2 gap-2">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
