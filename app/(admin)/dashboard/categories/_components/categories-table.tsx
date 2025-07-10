import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Category, Prisma } from '@prisma/client';

interface CategoriesTableProps {
  categories: Prisma.CategoryGetPayload<{
    include: {
      products: {
        select: {
          id: true;
        };
      };
    };
  }>[];
}
const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <div className="overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[300px]">Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Porcentagem das vendas</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => {
            return (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.products.length}</TableCell>
                <TableCell>{category.products.length}%</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoriesTable;
