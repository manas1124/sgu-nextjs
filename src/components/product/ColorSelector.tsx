// src/components/product/ColorSelector.tsx
'use client';
import { ProductColor } from '@/types';

interface ColorSelectorProps {
  colors:   ProductColor[];
  selected: number;
  onChange: (index: number) => void;
}

export default function ColorSelector({ colors, selected, onChange }: ColorSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold mb-2">
        Color: <span className="font-normal text-gray-600">{colors[selected]?.label}</span>
      </p>
      <div className="flex gap-2">
        {colors.map((c, i) => (
          <button
            key={i}
            onClick={() => onChange(i)}
            style={{ background: c.hex }}
            title={c.label}
            className={`w-6 h-6 rounded-full border-2 transition-all
              ${selected === i
                ? 'border-black scale-110'
                : 'border-transparent hover:border-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
