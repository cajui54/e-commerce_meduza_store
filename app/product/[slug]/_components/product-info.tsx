'use client';
import { ProductWithTotalPrice } from '@/app/helpers/product';
import { CartContext } from '@/app/providers/cart';
import { Button } from '@/components/ui/button';
import DiscountBadge from '@/components/ui/discount-badge';
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from 'lucide-react';
import React, { useContext } from 'react';

interface ProductInfoProps {
  product: ProductWithTotalPrice;
}
const ProductInfo = ({ product }: ProductInfoProps) => {
  const { addProductCart } = useContext(CartContext);
  const [quantity, setQuantity] = React.useState(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };
  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleAddToCartClick = () => {
    addProductCart({
      ...product,
      quantity,
    });
  };
  return (
    <div className="flex flex-col px-5">
      <p className="text-xs tracking-wider opacity-75">Novo | 100 vendidos</p>
      <h2 className="text-lg">{product.name}</h2>
      <div className="flex items-center gap-2">
        <p className="text-xl font-bold">R$: {product.totalPrice.toFixed(2)}</p>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-xs opacity-75">
          De:{' '}
          <span className="line-through">
            R$ {Number(product.basePrice).toFixed(2)}
          </span>
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          onClick={handleDecreaseQuantity}
          disabled={quantity === 1}
          size={'icon'}
          variant={'outline'}
        >
          <ArrowLeftIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          onClick={handleIncreaseQuantity}
          size={'icon'}
          variant={'outline'}
        >
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h3 className="font-bold">Descrição</h3>
        <p className="text-sm leading-6 tracking-wider opacity-65">
          {product.description}
        </p>
      </div>
      <Button
        onClick={handleAddToCartClick}
        className="mt-8 font-bold uppercase"
      >
        Adicionar ao carrinho
      </Button>

      <div className="my-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <div className="flex flex-col">
            <p className="text-sx">
              Entrega via
              <span className="font-bold"> FSPacket</span>
            </p>

            <p className="text-xs text-purple-900">
              Envio para
              <span className="font-bold"> todo o Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
