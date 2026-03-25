// src/components/shop/Pagination.tsx
'use client';

interface PaginationProps {
  current:  number;
  total:    number;
  onChange: (page: number) => void;
}

export default function Pagination({ current, total, onChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-1.5 mt-10">
      <button
        onClick={() => onChange(Math.max(1, current - 1))}
        disabled={current === 1}
        className="w-7 h-7 text-xs border border-gray-300 hover:border-black
                   disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ‹
      </button>

      {Array.from({ length: total }, (_, i) => i + 1).map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-7 h-7 text-xs border transition-colors
            ${current === p
              ? 'bg-black text-white border-black'
              : 'border-gray-300 hover:border-black text-gray-600'}`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onChange(Math.min(total, current + 1))}
        disabled={current === total}
        className="w-7 h-7 text-xs border border-gray-300 hover:border-black
                   disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        ›
      </button>
    </div>
  );
}
