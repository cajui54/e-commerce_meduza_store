import { Product } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

interface ProductItemProps {
  product: Product;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[90%]"
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div>
        <p className="truncate">{product.name}</p>
      </div>
    </div>
  );
};

export default ProductItem;
