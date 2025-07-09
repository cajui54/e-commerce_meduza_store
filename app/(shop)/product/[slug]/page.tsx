import { prismaClient } from '@/lib/prisma';
import React from 'react';
import ProductImages from './_components/product-images';
import ProductInfo from './_components/product-info';
import { computeProductTotalPrice } from '@/app/helpers/product';
import ProductList from '@/components/ui/product-list';
import SectionTitle from '../../(home)/_components/section-title';

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
    <div className="mt-6 flex w-[900px] flex-col gap-4 pb-8 pl-8">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo
        product={{ ...product, totalPrice: computeProductTotalPrice(product) }}
      />

      <div className="lg: space-y-3">
        <SectionTitle>Produtos Recomendados: </SectionTitle>
        <ProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
