'use client';
import { ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Badge } from './badge';
import { CartContext } from '@/app/providers/cart';

const Cart = () => {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Badge
        variant={'outline'}
        className="gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.length > 0 &&
        products.map((product) => <p key={product.id}>{product.name}</p>)}
    </div>
  );
};

export default Cart;
