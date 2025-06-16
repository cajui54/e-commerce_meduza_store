import React from 'react';
import { Category } from '@prisma/client';
import { Badge } from '@/components/ui/badge';
import { CATEGORY_ICON } from '@/app/constants/category-icon';

interface CategoryItemProps {
  category: Category;
}
const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Badge
      variant={'outline'}
      className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3"
    >
      {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
      <span className="text-xs font-semibold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
