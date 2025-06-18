import { prismaClient } from '@/lib/prisma';
import React from 'react';
import ProductImages from './_components/product-images';

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
    <div className="">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
