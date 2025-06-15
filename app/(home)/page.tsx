import Image from 'next/image';
import Categories from './_components/categories';
import { prismaClient } from '@/lib/prisma';
import ProductList from './_components/product-list';
import SectionTitle from './_components/section-title';
import PromoBanner from './_components/promo-banner';

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
  return (
    <main>
      <PromoBanner
        src={'/banner-home-01.png'}
        alt="até 55% de desconto só esse mês"
      />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="mt-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner
        src={'/banner-mouses.png'}
        alt="até 55% de desconto só esse mês em mouses"
      />
      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner
        src={'/banner-fones.png'}
        alt="até 55% de desconto só esse mês em mouses"
      />
    </main>
  );
}
