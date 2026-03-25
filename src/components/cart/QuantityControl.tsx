// src/components/cart/QuantityControl.tsx
'use client';

interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  variant?: 'default' | 'bordered';
}

export default function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
  variant = 'default',
}: QuantityControlProps) {
  const btnClass = variant === 'bordered'
    ? 'w-7 h-7 border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-50 transition-colors'
    : 'w-6 h-6 border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-50 transition-colors';

  return (
    <div className={`flex items-center gap-2 ${
      variant === 'bordered' ? 'border border-gray-300 px-1 py-0.5' : ''}`}>
      <button onClick={onDecrease} className={btnClass}>−</button>
      <span className="text-sm font-medium min-w-[24px] text-center">
        {String(quantity).padStart(2, '0')}
      </span>
      <button onClick={onIncrease} className={btnClass}>+</button>
    </div>
  );
}
