import { CATEGORY_ICON } from '@/app/constants/category-icon';
import { computeProductTotalPrice } from '@/app/helpers/product';
import { Badge } from '@/components/ui/badge';
import ProductItem from '@/components/ui/product-item';
import { prismaClient } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import React from 'react';
interface CategoryPageProps {
  params: {
    slug: string;
  };
}
const CategoryPage = async ({ params }: CategoryPageProps) => {
  const category = await prismaClient.category.findFirst({
    where: { slug: params.slug },
    include: {
      products: true,
    },
  });
  if (!category) return notFound();
  return (
    <div className="space-y-8 p-5">
      <Badge
        variant={'outline'}
        className="gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category?.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 lg:w-[550px] lg:grid-cols-3">
        {category?.products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
