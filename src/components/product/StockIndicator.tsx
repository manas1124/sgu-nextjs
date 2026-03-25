// src/components/product/StockIndicator.tsx

interface StockIndicatorProps {
  stock: number;
}

export default function StockIndicator({ stock }: StockIndicatorProps) {
  const label   = stock > 10 ? 'In Stock' : stock > 0 ? `Only ${stock} left!` : 'Out of Stock';
  const percent = Math.min(100, (stock / 20) * 100);

  return (
    <div>
      <p className="text-xs text-gray-600 mb-1.5">
        Only <strong>{stock}</strong> item(s) left in stock!
      </p>
      <div className="w-full h-1 bg-gray-200 rounded-full">
        <div
          className="h-full bg-red-500 rounded-full transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
