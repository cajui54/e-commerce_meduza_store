'use client';
import { ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Badge } from './badge';
import { CartContext } from '@/app/providers/cart';
import CartItem from './cart-item';
import { computeProductTotalPrice } from '@/app/helpers/product';
import { Button } from './button';

const Cart = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);
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
        {products.length > 0 ? (
          products.map((product) => (
            <CartItem
              key={product.id}
              product={computeProductTotalPrice(product as any) as any}
            />
          ))
        ) : (
          <p className="mt-8 text-center font-semibold">
            Carrinho vazio. vamos fazer compras?
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between border border-gray-500 p-2 text-xs">
          <p>Subtotal</p>
          <p>R$: {subTotal.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between border border-gray-500 p-2 text-xs">
          <p>Entrega</p>
          <p>Grátis</p>
        </div>

        <div className="flex items-center justify-between border border-gray-500 p-2 text-xs">
          <p>Descontos</p>
          <p className="">R$ {totalDiscount.toFixed(2)}</p>
        </div>

        <div className="flex items-center justify-between border border-gray-500 p-2 text-xs">
          <p>Total</p>
          <p className="">R$ {total.toFixed(2)}</p>
        </div>
      </div>
      <Button className="w-full uppercase">Finalizar Compra</Button>
    </div>
  );
};

export default Cart;
