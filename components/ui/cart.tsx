'use client';
import { ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Badge } from './badge';
import { CartContext } from '@/app/providers/cart';
import CartItem from './cart-item';
import { computeProductTotalPrice } from '@/app/helpers/product';

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div className="">
      <Badge
        variant={'outline'}
        className="gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="mt-8 flex flex-col gap-5">
        {products.length > 0 &&
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))}
      </div>
    </div>
  );
};

export default Cart;
