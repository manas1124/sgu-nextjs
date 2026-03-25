// src/components/product/ProductMeta.tsx
// Server Component — delivery info + payment badges

export default function ProductMeta() {
  const paymentMethods = ['VISA', 'MC', 'AMEX', 'JCB', 'PAYPAL'];

  return (
    <div className="space-y-3 pt-3 border-t border-gray-100">
      {/* Action links */}
      <div className="flex items-center gap-5 text-xs text-gray-500">
        <button className="hover:text-black flex items-center gap-1.5 transition-colors">
          ⇄ Compare
        </button>
        <button className="hover:text-black flex items-center gap-1.5 transition-colors">
          ? Ask a question
        </button>
        <button className="hover:text-black flex items-center gap-1.5 transition-colors">
          ↗ Share
        </button>
      </div>

      {/* Delivery */}
      <div className="space-y-1 text-xs text-gray-600 pt-1">
        <p>📦 Estimated Delivery: Jul 30 – Aug 03</p>
        <p>🚚 Free Shipping &amp; Returns: On all orders over $75</p>
      </div>

      {/* Payment badges */}
      <div className="flex flex-wrap gap-1.5 items-center pt-1">
        {paymentMethods.map(p => (
          <span
            key={p}
            className="text-[10px] font-bold border border-gray-200
                       px-2 py-0.5 text-gray-500"
          >
            {p}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500">Guarantee safe &amp; secure checkout</p>
    </div>
  );
}
