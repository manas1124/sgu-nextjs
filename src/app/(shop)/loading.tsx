// src/app/(shop)/shop/loading.tsx
export default function ShopLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Render 8 khung xương giả lập 8 thẻ sản phẩm đang tải */}
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="bg-gray-200 w-full aspect-[3/4] rounded-md"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}