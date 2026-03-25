// src/components/common/StarRating.tsx

interface StarRatingProps {
  rating: number;   // 1–5, supports .5
  count?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, count, size = 'sm' }: StarRatingProps) {
  const textSize = size === 'md' ? 'text-base' : 'text-xs';

  return (
    <div className="flex items-center gap-1.5">
      <div className={`flex ${textSize}`}>
        {Array.from({ length: 5 }, (_, i) => {
          const full  = i < Math.floor(rating);
          const half  = !full && i < rating;
          return (
            <span
              key={i}
              className={full || half ? 'text-amber-400' : 'text-gray-200'}
            >
              {half ? '★' : '★'}
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
