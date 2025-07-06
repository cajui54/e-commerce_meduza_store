'use client';
import { Card } from '@/components/ui/card';
import { OrderStatus, Prisma } from '@prisma/client';
import React, { useMemo } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { format } from 'date-fns';
import OrderProductItem from './order-products-item';
import { Separator } from '@/components/ui/separator';
import { computeProductTotalPrice } from '@/app/helpers/product';

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}
const OrderItems = ({ order }: OrderItemProps) => {
  const checkPayment = (type: OrderStatus) => {
    return type === 'PAYMENT_CONFIRMED' ? 'Pago' : 'Aguardando Pagamento';
  };
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce(
      (acc, orderProduct) =>
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity,
      0,
    );
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product);
      return acc + productWithTotalPrice.totalPrice * product.quantity;
    }, 0);
  }, [order.orderProducts]);
  const totalDiscounts = subtotal - total;
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p>Pedidos com {order.orderProducts.length} produtos(s)</p>
              <p className="text-xs italic opacity-60">
                Feito em {format(order.createdAt, "dd/MM/y 'às' HH:mm")}
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <span className="text-primary">
                    {checkPayment(order.status)}
                  </span>
                </div>

                <div>
                  <p className="font-bold">Data</p>
                  <p className="opacity-60">
                    {format(order.createdAt, 'd/MM/y')}
                  </p>
                </div>

                <div>
                  <p className="font-bold">Pagamento</p>
                  <p className="opacity-60">Cartão</p>
                </div>
              </div>
              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}
              <div className="flex w-full flex-col gap-3 py-3 text-xs">
                <Separator />
                <div className="flex w-full justify-between">
                  <p>Subtotal</p>
                  <p>R$:{subtotal.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex w-full justify-between">
                  <p>Entrega</p>
                  <p>GRÁTIS</p>
                </div>
                <Separator />
                <div className="flex w-full justify-between">
                  <p>Descontos</p>
                  <p>- R$: {totalDiscounts.toFixed(2)}</p>
                </div>
                <Separator />
                <div className="flex w-full justify-between text-sm font-bold">
                  <p>Total</p>
                  <p>R$:{total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItems;
