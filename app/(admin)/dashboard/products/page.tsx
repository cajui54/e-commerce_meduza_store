import { prismaClient } from '@/lib/prisma';
import React from 'react';

const ProductPage = async () => {
  const products = await prismaClient.product.findMany();

  console.log(products);

  return <div>welcome</div>;
};

export default ProductPage;
