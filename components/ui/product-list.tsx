import { computeProductTotalPrice } from '@/app/helpers/product';
import ProductItem from '@/components/ui/product-item';
import { Product } from '@prisma/client';
import React from 'react';

interface ProductListProps {
  products: Product[];
}
const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-2 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[170px] max-w-[170px]" key={product.id}>
          <ProductItem
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
