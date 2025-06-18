import { prismaClient } from '@/lib/prisma';
import React from 'react';
import ProductImages from './_components/product-images';
import ProductInfo from './_components/product-info';
import { computeProductTotalPrice } from '@/app/helpers/product';

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
  });

  if (!product) return null;
  return (
    <div className="flex flex-col gap-4">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
