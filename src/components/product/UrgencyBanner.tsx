// src/components/product/UrgencyBanner.tsx
'use client';
import CountdownTimer from '@/components/common/CountdownTimer';

export default function UrgencyBanner() {
  return (
    <div className="flex items-center gap-3 border border-red-200 bg-red-50 px-4 py-2.5">
      <span className="text-xs text-red-500 font-medium whitespace-nowrap">
        Hurry up! Sale ends In:
      </span>
      <CountdownTimer durationSeconds={5 * 60 + 59} variant="compact" />
    </div>
  );
}
