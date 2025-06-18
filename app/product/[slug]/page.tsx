import { prismaClient } from '@/lib/prisma';
import React from 'react';
import ProductImages from './_components/product-images';
import ProductInfo from './_components/product-info';
import { computeProductTotalPrice } from '@/app/helpers/product';
import ProductList from '@/components/ui/product-list';

interface ProductDetailsPageProps {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;
  return (
    <div className="flex flex-col gap-4 pb-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div className="mt-8">
        <h3>Recomendações para você:</h3>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
