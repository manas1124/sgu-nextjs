// src/components/product/AddToCartSection.tsx
'use client';
import { useState } from 'react';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';
import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import Button from '@/components/common/Button';

interface AddToCartSectionProps {
  product: Product;
}

export default function AddToCartSection({ product }: AddToCartSectionProps) {
  const { addItem } = useCart();
  const [selectedSize,  setSelectedSize]  = useState(product.sizes?.[0] ?? 'M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [qty, setQty] = useState(1);

  function handleAdd() {
    addItem({
      id:    product.id,
      name:  product.name,
      price: product.price,
      image: product.images?.[0] ?? product.image,
      color: product.colors?.[selectedColor]?.label,
      size:  selectedSize,
    });
  }

  return (
    <div className="space-y-5">
      {/* Size */}
      {product.sizes && product.sizes.length > 0 && (
        <SizeSelector
          sizes={product.sizes}
          selected={selectedSize}
          onChange={setSelectedSize}
        />
      )}

      {/* Color */}
      {product.colors && product.colors.length > 0 && (
        <ColorSelector
          colors={product.colors}
          selected={selectedColor}
          onChange={setSelectedColor}
        />
      )}

      {/* Quantity + Add button */}
      <div className="flex items-center gap-3">
        <div className="flex items-center border border-gray-300">
          <button
            onClick={() => setQty(q => Math.max(1, q - 1))}
            className="w-9 h-11 flex items-center justify-center
                       hover:bg-gray-50 transition-colors text-sm"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-medium">{qty}</span>
          <button
            onClick={() => setQty(q => q + 1)}
            className="w-9 h-11 flex items-center justify-center
                       hover:bg-gray-50 transition-colors text-sm"
          >
            +
          </button>
        </div>
        <Button
          variant="outline"
          size="md"
          onClick={handleAdd}
          className="flex-1 py-3"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
