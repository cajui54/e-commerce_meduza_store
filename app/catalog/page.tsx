import { Badge } from '@/components/ui/badge';
import { prismaClient } from '@/lib/prisma';
import { ShapesIcon } from 'lucide-react';
import React from 'react';
import CategoryItem from './_components/category-item';

const CatelogPage = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="p-5">
      <Badge
        variant={'outline'}
        className="gap-1 border-2 border-gray-400 px-3 py-[0.375rem] text-base uppercase"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="mt-8 grid grid-cols-2 gap-8">
        {categories.length > 0 &&
          categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default CatelogPage;
