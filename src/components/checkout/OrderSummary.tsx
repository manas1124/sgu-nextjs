// src/components/checkout/OrderSummary.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { CartItem } from '@/types';
import { SHIPPING_COST } from '@/constants';

interface OrderSummaryProps {
  items:      CartItem[];
  totalPrice: number;
}

export default function OrderSummary({ items, totalPrice }: OrderSummaryProps) {
  const [discount, setDiscount] = useState('');

  return (
    <aside className="bg-gray-50 px-8 py-8 flex-shrink-0 w-full md:w-80">
      {/* Items list */}
      <div className="space-y-4 mb-6">
        {items.map(item => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="relative w-14 h-16 bg-white border border-gray-200
                            flex-shrink-0 overflow-hidden">
              <Image
                src={item.image} alt={item.name}
                fill className="object-cover" sizes="56px"
              />
              {/* Quantity badge */}
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500
                               text-white text-[9px] font-bold rounded-full
                               flex items-center justify-center leading-none">
                {item.quantity}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold leading-tight truncate">{item.name}</p>
              {item.color && (
                <p className="text-[11px] text-gray-400 mt-0.5">{item.color}</p>
              )}
            </div>
            <span className="text-xs font-bold flex-shrink-0">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Discount code */}
      <div className="flex gap-2 mb-6">
        <input
          value={discount}
          onChange={e => setDiscount(e.target.value)}
          placeholder="Discount code"
          className="flex-1 border border-gray-200 bg-white px-3 py-2.5 text-sm
                     outline-none focus:border-black transition-colors"
        />
        <button className="px-4 py-2.5 bg-black text-white text-xs font-bold
                           tracking-widest uppercase hover:bg-gray-800 transition-colors">
          Apply
        </button>
      </div>

      {/* Price breakdown */}
      <div className="space-y-2.5 border-t border-gray-200 pt-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">${SHIPPING_COST.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-base pt-3 border-t border-gray-200">
          <span>Total</span>
          <span>${(totalPrice + SHIPPING_COST).toFixed(2)}</span>
        </div>
      </div>
    </aside>
  );
}
