import { Badge } from '@/components/ui/badge';
import { authOptions } from '@/lib/auth';
import { prismaClient } from '@/lib/prisma';
import { PackageSearchIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import React from 'react';
import OrderItems from './_components/order-items';
import BadgeTitleRadius from '@/components/badge-title-radius';

const OrderPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) return <p>Access Denied</p>;

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="h-full p-5">
      <BadgeTitleRadius>
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </BadgeTitleRadius>

      <div className="mt-4 flex flex-col gap-5">
        {orders.length > 0 &&
          orders.map((order) => <OrderItems key={order.id} order={order} />)}
      </div>
    </div>
  );
};

export default OrderPage;
