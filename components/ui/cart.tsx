'use client';
import { ShoppingBasket, ShoppingCartIcon } from 'lucide-react';
import React, { useContext } from 'react';
import { Badge } from './badge';
import { CartContext } from '@/app/providers/cart';
import CartItem from './cart-item';
import { computeProductTotalPrice } from '@/app/helpers/product';
import { Button } from './button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { createCheckout } from '@/app/_actions/checkout';
import { SheetTitle } from './sheet';
import { loadStripe } from '@stripe/stripe-js';
import { createOrder } from '@/app/_actions/order';
import { useSession } from 'next-auth/react';

const Cart = () => {
  const { data } = useSession();
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) return;

    const order = await createOrder(products, (data?.user as any).id);
    const checkout = await createCheckout(products, order.id);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };
  return (
    <div className="flex h-full flex-col">
      <SheetTitle>
        <Badge
          variant={'outline'}
          className="w-[150px] gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
        >
          <ShoppingCartIcon size={16} />
          Carrinho
        </Badge>
      </SheetTitle>

      <div className="mt-8 flex h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="flex">
          <div className="flex flex-col gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={{
                    ...product,
                    totalPrice: computeProductTotalPrice(product),
                  }}
                />
              ))
            ) : (
              <div className="flex h-[300px] flex-col items-center justify-center">
                <ShoppingBasket className="scale-[5] text-gray-500" />
                <p className="mt-16 text-center text-xs font-semibold">
                  Carrinho vazio. vamos fazer compras?
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between p-2 text-xs">
              <p>Subtotal</p>
              <p>R$: {subTotal.toFixed(2)}</p>
            </div>
            <Separator />

            <div className="flex items-center justify-between p-2 text-xs">
              <p>Entrega</p>
              <p>Grátis</p>
            </div>
            <Separator />

            <div className="flex items-center justify-between p-2 text-xs">
              <p>Descontos</p>
              <p className=""> -R$ {totalDiscount.toFixed(2)}</p>
            </div>
            <Separator />

            <div className="flex items-center justify-between p-2 text-xs">
              <p>Total</p>
              <p className="">R$ {total.toFixed(2)}</p>
            </div>
            <Separator />
          </div>
          <Button
            className="mt-7 w-full uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Finalizar Compra
          </Button>
        </>
      )}
    </div>
  );
};

export default Cart;
