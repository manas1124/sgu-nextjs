// src/components/shop/FilterSidebar.tsx
'use client';
import { useState } from 'react';
import {
  FILTER_SIZES, FILTER_COLORS, FILTER_PRICES,
  FILTER_BRANDS, FILTER_COLLECTIONS, FILTER_TAGS,
} from '@/constants';

interface Filters {
  sizes:  string[];
  color:  string | null;
  price:  string | null;
}

interface FilterSidebarProps {
  filters:   Filters;
  onChange: (filters: Filters) => void;
}

export default function FilterSidebar({ filters, onChange }: FilterSidebarProps) {
  const [brandsOpen, setBrandsOpen]   = useState(true);
  const [collectOpen, setCollectOpen] = useState(true);

  function toggleSize(s: string) {
    const next = filters.sizes.includes(s)
      ? filters.sizes.filter(x => x !== s)
      : [...filters.sizes, s];
    onChange({ ...filters, sizes: next });
  }

  function setColor(c: string) {
    onChange({ ...filters, color: filters.color === c ? null : c });
  }

  function setPrice(p: string) {
    onChange({ ...filters, price: filters.price === p ? null : p });
  }

  return (
    <aside className="w-44 flex-shrink-0 text-sm">
      <h3 className="font-bold mb-5 text-sm">Filters</h3>

      {/* Size */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-700">
          Size
        </p>
        <div className="flex flex-wrap gap-2">
          {FILTER_SIZES.map(s => (
            <button
              key={s}
              onClick={() => toggleSize(s)}
              className={`w-8 h-8 text-xs font-semibold border transition-colors
                ${filters.sizes.includes(s)
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 hover:border-black text-gray-700'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-700">
          Colors
        </p>
        <div className="flex flex-wrap gap-1.5">
          {FILTER_COLORS.map(c => (
            <button
              key={c}
              onClick={() => setColor(c)}
              style={{ background: c }}
              className={`w-5 h-5 rounded-full border-2 transition-all
                ${filters.color === c
                  ? 'border-black scale-110'
                  : 'border-transparent hover:border-gray-400'}`}
              title={c}
            />
          ))}
        </div>
      </div>

      {/* Prices */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-gray-700">
          Prices
        </p>
        <div className="space-y-1.5">
          {FILTER_PRICES.map(p => (
            <button
              key={p}
              onClick={() => setPrice(p)}
              className={`block text-xs transition-colors
                ${filters.price === p
                  ? 'text-black font-semibold'
                  : 'text-gray-500 hover:text-black'}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <button
          onClick={() => setBrandsOpen(o => !o)}
          className="flex items-center justify-between w-full text-xs font-semibold
                     uppercase tracking-widest mb-2 text-gray-700"
        >
          Brands
          <span className="text-gray-400 font-normal">{brandsOpen ? '∧' : '∨'}</span>
        </button>
        {brandsOpen && (
          <div className="space-y-1.5">
            {FILTER_BRANDS.map(b => (
              <button key={b}
                      className="block text-xs text-gray-500 hover:text-black transition-colors">
                {b}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Collections */}
      <div className="mb-6">
        <button
          onClick={() => setCollectOpen(o => !o)}
          className="flex items-center justify-between w-full text-xs font-semibold
                     uppercase tracking-widest mb-2 text-gray-700"
        >
          Collections
          <span className="text-gray-400 font-normal">{collectOpen ? '∧' : '∨'}</span>
        </button>
        {collectOpen && (
          <div className="space-y-1.5">
            {FILTER_COLLECTIONS.map(c => (
              <button key={c}
                      className="block text-xs text-gray-500 hover:text-black transition-colors">
                {c}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Tags */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-2 text-gray-700">
          Tags
        </p>
        <div className="flex flex-wrap gap-x-2 gap-y-1.5">
          {FILTER_TAGS.map(t => (
            <button key={t}
                    className="text-xs text-gray-500 hover:text-black transition-colors">
              {t}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
