// src/components/cart/MiniCartItem.tsx
'use client';
import Image from 'next/image';
import { CartItem } from '@/types';
import { formatPrice } from '@/lib/format';
import QuantityControl from './QuantityControl';

interface MiniCartItemProps {
  item: CartItem;
  onUpdateQty: (id: string, qty: number) => void;
}

export default function MiniCartItem({ item, onUpdateQty }: MiniCartItemProps) {
  return (
    <div className="flex gap-4 pb-5 border-b border-gray-100 last:border-0">
      {/* Image with quantity badge */}
      <div className="relative w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden">
        <Image
          src={item.image} alt={item.name}
          fill className="object-cover" sizes="80px"
        />
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500
                         text-white text-[10px] font-bold rounded-full
                         flex items-center justify-center leading-none">
          {item.quantity}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold leading-tight mb-0.5 truncate">
          {item.name}
        </p>
        {item.color && (
          <p className="text-xs text-gray-500 mb-2">Color : {item.color}</p>
        )}
        <p className="text-sm font-bold mb-3">
          {formatPrice(item.price * item.quantity)}
        </p>
        <QuantityControl
          quantity={item.quantity}
          onDecrease={() => onUpdateQty(item.id, item.quantity - 1)}
          onIncrease={() => onUpdateQty(item.id, item.quantity + 1)}
        />
      </div>
    </div>
  );
}
