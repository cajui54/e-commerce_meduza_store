import { computeProductTotalPrice } from '@/app/helpers/product';
import { Prisma } from '@prisma/client';
import Image from 'next/image';
import React from 'react';

interface OrderProductItemProps {
  orderProduct: Prisma.OrderProductGetPayload<{
    include: {
      product: true;
    };
  }>;
}
const OrderProductItem = ({ orderProduct }: OrderProductItemProps) => {
  const productTotalPrice = computeProductTotalPrice(orderProduct.product);
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={orderProduct.product.imageUrls[0]}
          width={0}
          height={0}
          sizes="100vw"
          className="obje h-auto max-h-[80%] w-auto max-w-[80%]"
          alt={orderProduct.product.name}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <div className="flex w-fit rounded-md bg-accent px-3 py-1">
          <p>
            Vendido e entregue por{' '}
            <span className="font-bold">Os Correios</span>
          </p>
        </div>
        <p>{orderProduct.product.name}</p>

        <div className="flex items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">
              R$: {productTotalPrice.toFixed(2)}
            </p>
            {computeProductTotalPrice(orderProduct.product) > 0 && (
              <p className="text-xs line-through opacity-60">
                R$: {Number(orderProduct.basePrice).toFixed(2)}
              </p>
            )}
          </div>
          <p className="text-xs opacity-60">Qntd: {orderProduct.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
