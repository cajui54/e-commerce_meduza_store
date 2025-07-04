import { Card } from '@/components/ui/card';
import { Prisma } from '@prisma/client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { format } from 'date-fns';

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: true;
    };
  }>;
}
const OrderItems = ({ order }: OrderItemProps) => {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              Pedidos com {order.orderProducts.length}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <span className="text-primary">{order.status}</span>
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
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItems;
