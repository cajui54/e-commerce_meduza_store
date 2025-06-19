import { ProductWithTotalPrice } from '@/app/helpers/product';
import Image from 'next/image';
import React from 'react';
import { Badge } from './badge';
import { ArrowDownIcon } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';
import DiscountBadge from './discount-badge';
interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Link href={`/product/${product.slug}`}>
        <div className="flex flex-col gap-4">
          <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-lg bg-accent">
            <Image
              src={product.imageUrls[0]}
              alt={product.name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[90%]"
              style={{ objectFit: 'contain' }}
            />
            {product.discountPercentage > 0 && (
              <DiscountBadge className="absolute left-3 top-3">
                {product.discountPercentage}
              </DiscountBadge>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <p className="truncate">{product.name}</p>
            <div className="flex items-center gap-2 truncate">
              {product.discountPercentage > 0 ? (
                <>
                  <p className="font-semibold">
                    R$: {product.totalPrice.toFixed(2)}
                  </p>
                  <p className="truncate text-xs line-through opacity-75">
                    R$: {Number(product.basePrice).toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="text-sm font-semibold">
                  R$: {product.basePrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </Suspense>
  );
};

export default ProductItem;
