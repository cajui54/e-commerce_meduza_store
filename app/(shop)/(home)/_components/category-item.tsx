import React from 'react';
import { Category } from '@prisma/client';
import { Badge } from '@/components/ui/badge';
import { CATEGORY_ICON } from '@/app/constants/category-icon';
import Link from 'next/link';

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant={'outline'}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3 lg:flex-col lg:rounded-full lg:border-none"
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-semibold">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
