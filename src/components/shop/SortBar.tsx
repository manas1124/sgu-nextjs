// src/components/shop/SortBar.tsx
'use client';
import { SORT_OPTIONS } from '@/constants';

interface SortBarProps {
  sortBy:    string;
  view:      number;
  onSort:    (value: string) => void;
  onView:    (value: number) => void;
  total:     number;
}

export default function SortBar({ sortBy, view, onSort, onView, total }: SortBarProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <select
          value={sortBy}
          onChange={e => onSort(e.target.value)}
          className="text-sm border-b border-gray-300 bg-transparent py-1 pr-6
                     outline-none cursor-pointer"
        >
          {SORT_OPTIONS.map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <span className="text-xs text-gray-400">({total} items)</span>
      </div>

      {/* View switcher — 2 / 3 / 4 columns */}
      <div className="flex items-center gap-1.5">
        {[2, 3, 4].map(v => (
          <button
            key={v}
            onClick={() => onView(v)}
            className={`w-7 h-7 text-xs font-medium border transition-colors
              ${view === v
                ? 'bg-black text-white border-black'
                : 'border-gray-300 hover:border-black text-gray-600'}`}
          >
            {v}
          </button>
        ))}
      </div>
    </div>
  );
}
