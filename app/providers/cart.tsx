'use client';
import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProduct: (productId: string) => void;
  subTotal: number;
  total: number;
  totalDiscount: number;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProduct: () => {},
  subTotal: 0,
  total: 0,
  totalDiscount: 0,
});
const checkSessionStorage = (): CartProduct[] => {
  if (typeof window !== 'undefined') {
    const _productsStorage: CartProduct[] = JSON.parse(
      sessionStorage.getItem('cart-products') || '[]',
    );
    return _productsStorage;
  }
  return [];
};
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(
    checkSessionStorage(),
  );

  useEffect(() => {
    sessionStorage.setItem('cart-products', JSON.stringify(products));
  }, [products]);

  const subTotal = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + Number(product.basePrice) * product.quantity,
      0,
    );
  }, [products]);

  const total = useMemo(
    () =>
      products.reduce(
        (acc, product) => acc + product.totalPrice * product.quantity,
        0,
      ),
    [products],
  );

  const totalDiscount = subTotal - total;

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
  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }
          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };
  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      }),
    );
  };
  const removeProduct = (productId: string) => {
    setProducts((prev) =>
      prev.filter((cartProduct) => cartProduct.id !== productId),
    );
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProductCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProduct,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        subTotal,
        total,
        totalDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
