// src/components/cart/CartItemRow.tsx
'use client';
import Image from 'next/image';
import { CartItem } from '@/types';
import QuantityControl from './QuantityControl';

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, qty: number) => void;
}

export default function CartItemRow({ item, onRemove, onUpdateQty }: CartItemRowProps) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 items-center py-6
                    border-b border-gray-100">
      {/* Product info */}
      <div className="flex items-start gap-4">
        <div className="relative w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden">
          <Image
            src={item.image} alt={item.name}
            fill className="object-cover" sizes="80px"
          />
        </div>
        <div>
          <p className="font-semibold text-sm leading-tight mb-1">{item.name}</p>
          {item.color && (
            <p className="text-xs text-gray-500 mb-2">Color : {item.color}</p>
          )}
          {item.size && (
            <p className="text-xs text-gray-500 mb-2">Size : {item.size}</p>
          )}
          <button
            onClick={() => onRemove(item.id)}
            className="text-xs text-gray-400 underline underline-offset-2
                       hover:text-black transition-colors"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Unit price */}
      <span className="text-sm font-medium">${item.price.toFixed(2)}</span>

      {/* Quantity */}
      <QuantityControl
        quantity={item.quantity}
        onDecrease={() => onUpdateQty(item.id, item.quantity - 1)}
        onIncrease={() => onUpdateQty(item.id, item.quantity + 1)}
        variant="bordered"
      />

      {/* Total */}
      <span className="text-sm font-semibold text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  );
}
