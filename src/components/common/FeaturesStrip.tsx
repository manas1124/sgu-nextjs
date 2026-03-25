// src/components/common/FeaturesStrip.tsx
import { FEATURES } from '@/constants';

export default function FeaturesStrip() {
  return (
    <div className="border-y border-gray-200 py-7 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i}
                 className={`flex items-center gap-4 px-4
                   ${i < FEATURES.length - 1 ? 'border-r border-gray-100' : ''}`}>
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <div>
                <p className="text-sm font-semibold leading-tight">{f.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
