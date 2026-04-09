// src/components/common/StarRating.tsx

interface StarRatingProps {
  rating: number;   // 0–5, supports any fraction (e.g. 4.5)
  count?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, count, size = 'sm' }: StarRatingProps) {
  const textSize = size === 'md' ? 'text-base' : 'text-xs';

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex ${textSize}`}>
        {Array.from({ length: 5 }, (_, i) => {
          // fillLevel is 0..1 for this particular star
          const fillLevel = Math.max(0, Math.min(1, rating - i));
          return (
            <span key={i} className="relative inline-block leading-none text-gray-200">
              ★
              <span
                className="absolute left-0 top-0 overflow-hidden text-amber-400"
                style={{ width: `${fillLevel * 100}%` }}
                aria-hidden="true"
              >
                ★
              </span>
            </span>
          );
        })}
      </div>
      {count !== undefined && (
        <span className="text-xs text-gray-500">({count})</span>
      )}
    </div>
  );
}
