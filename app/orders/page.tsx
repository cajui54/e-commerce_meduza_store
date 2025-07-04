import { Badge } from '@/components/ui/badge';
import { authOptions } from '@/lib/auth';
import { prismaClient } from '@/lib/prisma';
import { PackageSearchIcon } from 'lucide-react';
import { getServerSession } from 'next-auth';
import React from 'react';
import OrderItems from './_components/order-items';

const OrderPage = async () => {
  const user = await getServerSession(authOptions);

  if (!user) return <p>Access Denied</p>;

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: true,
    },
  });

  return (
    <div className="p-5">
      <Badge
        variant={'outline'}
        className="gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.length > 0 &&
          orders.map((order) => <OrderItems key={order.id} order={order} />)}
      </div>
    </div>
  );
};

export default OrderPage;
