// src/components/cart/GiftWrapOption.tsx
'use client';
import { useState } from 'react';
import { GIFT_WRAP_PRICE } from '@/constants';

interface GiftWrapOptionProps {
  onChange?: (checked: boolean) => void;
}

export default function GiftWrapOption({ onChange }: GiftWrapOptionProps) {
  const [checked, setChecked] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChecked(e.target.checked);
    onChange?.(e.target.checked);
  }

  return (
    <label className="flex items-center gap-3 cursor-pointer py-3 border-b border-gray-100">
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="w-4 h-4 border-2 border-gray-400 cursor-pointer accent-black"
      />
      <span className="text-sm text-gray-600">
        For{' '}
        <strong className="text-black">${GIFT_WRAP_PRICE.toFixed(2)}</strong>
        {' '}Please Wrap The Product
      </span>
    </label>
  );
}
