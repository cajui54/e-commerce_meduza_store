import { prismaClient } from '@/lib/prisma';
import React from 'react';
import CategoryItem from './category-item';

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-2 lg:mx-auto lg:flex lg:w-fit">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
