// src/components/cart/CartSummary.tsx
'use client';
import Link from 'next/link';
import Button from '@/components/common/Button';
import GiftWrapOption from './GiftWrapOption';
import { GIFT_WRAP_PRICE } from '@/constants';
import { formatPrice } from '@/lib/format';
import { useState } from 'react';

interface CartSummaryProps {
  totalPrice: number;
}

export default function CartSummary({ totalPrice }: CartSummaryProps) {
  const [giftWrap, setGiftWrap] = useState(false);
  const subtotal = totalPrice + (giftWrap ? GIFT_WRAP_PRICE : 0);

  return (
    <div className="mt-8 ml-auto w-full max-w-sm">
      <GiftWrapOption checked={giftWrap} onChange={setGiftWrap} />

      <div className="flex justify-between items-center py-4 border-b border-gray-100">
        <span className="font-semibold text-sm uppercase tracking-widest">Subtotal</span>
        <span className="font-bold text-base">{formatPrice(subtotal)}</span>
      </div>

      <div className="mt-4 space-y-3">
        <Button href="/checkout" fullWidth size="lg">
          Checkout
        </Button>
        <Link
          href="/shop"
          className="block w-full text-center text-sm font-semibold underline
                     underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
