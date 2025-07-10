import BadgeTitleRadius from '@/components/badge-title-radius';
import OrderItems from '@/components/order-items';
import { prismaClient } from '@/lib/prisma';
import { PackageSearch } from 'lucide-react';
import React from 'react';

const OrdersPage = async () => {
  const orders = await prismaClient.order.findMany({
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="flex w-full flex-col gap-10 p-5">
      <BadgeTitleRadius>
        <PackageSearch size={16} />
        Pedidos
      </BadgeTitleRadius>

      <div className="flex w-full items-center justify-between">
        <p className="">
          Pedidos encontradas:
          <span className="font-bold opacity-75"> {orders.length}</span>
        </p>
      </div>

      <div className="scrollbar h-full overflow-auto">
        {orders.map((order) => (
          <OrderItems key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
