import { ProductWithTotalPrice } from '@/app/helpers/product';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import React from 'react';

interface ProductsTableProps {
  products: ProductWithTotalPrice[];
}
const ProductsTable = ({ products }: ProductsTableProps) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[300px]">Nome</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Preço Base</TableHead>
            <TableHead>Preço com Desconto</TableHead>
            <TableHead>Vendidos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>Categoria</TableCell>
                <TableCell>{product.totalPrice}</TableCell>
                <TableCell>{Number(product.basePrice)}</TableCell>
                <TableCell>500</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTable;
