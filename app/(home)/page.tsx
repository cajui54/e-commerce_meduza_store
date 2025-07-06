import Categories from './_components/categories';
import { prismaClient } from '@/lib/prisma';
import ProductList from '../../components/ui/product-list';
import SectionTitle from './_components/section-title';
import PromoBanner from './_components/promo-banner';
import { getSession } from 'next-auth/react';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  });
  return (
    <main className="py-8 lg:ml-7 lg:w-[900px]">
      <PromoBanner
        src={'/banner-home-01.png'}
        alt="até 55% de desconto só esse mês"
      />

      <div className="my-8 px-5">
        <Categories />
      </div>

      <div className="my-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src={'/banner-mouses.png'}
        alt="até 55% de desconto só esse mês em mouses"
      />
      <div className="my-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src={'/banner-fones.png'}
        alt="até 55% de desconto só esse mês em mouses"
      />

      <div className="my-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </main>
  );
}
