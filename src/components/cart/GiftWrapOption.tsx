// src/components/cart/GiftWrapOption.tsx
'use client';
import { GIFT_WRAP_PRICE } from '@/constants';
import { formatPrice } from '@/lib/format';

interface GiftWrapOptionProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function GiftWrapOption({ checked, onChange }: GiftWrapOptionProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer py-3 border-b border-gray-100">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 border-2 border-gray-400 cursor-pointer accent-black"
      />
      <span className="text-sm text-gray-600">
        For{' '}
        <strong className="text-black">{formatPrice(GIFT_WRAP_PRICE)}</strong>
        {' '}Please Wrap The Product
      </span>
    </label>
  );
}
