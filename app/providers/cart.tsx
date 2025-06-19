'use client';
import React, { createContext, ReactNode, useState } from 'react';
import { ProductWithTotalPrice } from '../helpers/product';

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}
interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductCart: (product: CartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductCart = (product: CartProduct) => {
    const productIsreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        }),
      );
      return;
    }
    setProducts((prev) => [...prev, product]);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProductCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
