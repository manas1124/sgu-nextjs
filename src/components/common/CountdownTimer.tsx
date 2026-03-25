// src/components/common/CountdownTimer.tsx
'use client';
import { useCountdown, pad } from '@/hooks/useCountdown';

interface CountdownTimerProps {
  durationSeconds: number;
  variant?: 'default' | 'compact' | 'large';
  label?: string;
}

export default function CountdownTimer({
  durationSeconds,
  variant = 'default',
  label,
}: CountdownTimerProps) {
  const time = useCountdown(durationSeconds);

  if (variant === 'compact') {
    // Dùng trong urgency banner trên product page
    return (
      <div className="flex items-center gap-2">
        {label && <span className="text-xs text-red-500 font-medium">{label}</span>}
        <div className="flex gap-1.5">
          {[pad(time.h), pad(time.m), pad(time.s)].map((v, i) => (
            <span key={i}
                  className="text-xs font-bold text-red-500 bg-red-100 px-1.5 py-0.5">
              {v}
            </span>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'large') {
    // Dùng trong Deals section trên trang chủ
    const units = [
      { value: pad(time.h),     label: 'Hr' },
      { value: pad(time.m),     label: 'Mins' },
      { value: pad(time.s),     label: 'Sec' },
    ];
    return (
      <div className="flex items-end gap-2">
        {units.map((u, i) => (
          <span key={i} className="flex items-end gap-1">
            <div className="text-center">
              <div className="w-12 h-12 border border-gray-300 flex items-center
                              justify-center font-serif text-xl font-bold">
                {u.value}
              </div>
              <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wide">
                {u.label}
              </p>
            </div>
            {i < units.length - 1 && (
              <span className="font-serif text-xl font-bold text-gray-300 mb-2.5">:</span>
            )}
          </span>
        ))}
      </div>
    );
  }

  // default — dùng trong Product page (Deals countdown)
  const units = [
    { value: String(Math.min(2, 9)),  label: 'Days' },
    { value: pad(time.h),             label: 'Hr' },
    { value: pad(time.m),             label: 'Mins' },
    { value: pad(time.s),             label: 'Sec' },
  ];
  return (
    <div className="flex items-end gap-3">
      {units.map((u, i) => (
        <span key={i} className="flex items-end gap-2">
          <div className="text-center">
            <div className="w-10 h-10 border border-gray-300 flex items-center
                            justify-center font-serif font-bold text-sm">
              {u.value}
            </div>
            <p className="text-[9px] text-gray-400 mt-1 uppercase tracking-wide">
              {u.label}
            </p>
          </div>
          {i < units.length - 1 && (
            <span className="font-serif text-lg font-bold text-gray-200 mb-2.5">:</span>
          )}
        </span>
      ))}
    </div>
  );
}
