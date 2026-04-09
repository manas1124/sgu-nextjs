// src/components/cart/QuantityControl.tsx
'use client';

interface QuantityControlProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  variant?: 'default' | 'bordered';
  minQuantity?: number;
}

export default function QuantityControl({
  quantity,
  onDecrease,
  onIncrease,
  variant = 'default',
  minQuantity = 1,
}: QuantityControlProps) {
  const sizeClass = variant === 'bordered' ? 'w-7 h-7' : 'w-6 h-6';
  const btnClass = `${sizeClass} border border-gray-300 flex items-center justify-center text-sm hover:bg-gray-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent`;

  const canDecrease = quantity > minQuantity;

  return (
    <div className={`flex items-center gap-2 ${
      variant === 'bordered' ? 'border border-gray-300 px-1 py-0.5' : ''}`}>
      <button
        type="button"
        onClick={onDecrease}
        disabled={!canDecrease}
        aria-label="Decrease quantity"
        className={btnClass}
      >
        −
      </button>
      <span className="text-sm font-medium min-w-[24px] text-center">
        {String(quantity).padStart(2, '0')}
      </span>
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={btnClass}
      >
        +
      </button>
    </div>
  );
}
