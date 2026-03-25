// src/components/product/SizeSelector.tsx
'use client';

interface SizeSelectorProps {
  sizes:    string[];
  selected: string;
  onChange: (size: string) => void;
}

export default function SizeSelector({ sizes, selected, onChange }: SizeSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">
        Size: <span className="font-normal text-gray-600">{selected}</span>
      </p>
      <div className="flex flex-wrap gap-2">
        {sizes.map(s => (
          <button
            key={s}
            onClick={() => onChange(s)}
            className={`px-3.5 py-1.5 text-xs font-semibold border transition-colors
              ${selected === s
                ? 'bg-black text-white border-black'
                : 'border-gray-300 hover:border-black text-gray-700'}`}
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
