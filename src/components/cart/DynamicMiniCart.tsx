// src/components/cart/DynamicMiniCart.tsx
'use client'; // Bắt buộc phải có để sử dụng ssr: false

import dynamic from 'next/dynamic';

const MiniCartLazy = dynamic(() => import('./MiniCart'), {
  ssr: false, // Tắtrender trên Server
  loading: () => (
    <>
      {/* 1. Nền đen mờ (Overlay) giả lập */}
      <div className="fixed inset-0 bg-black/20 z-40 animate-pulse" />

      {/* 2. Khung trượt (Drawer) giả lập */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl">
        
        {/* Header Skeleton */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-gray-100">
          <div className="w-full">
            <div className="h-8 bg-gray-200 rounded w-40 mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full animate-pulse"></div>
        </div>

        {/* Danh sách sản phẩm Skeleton (Lặp 3 cái) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              {/* Hình ảnh */}
              <div className="w-24 h-32 bg-gray-200 rounded-md animate-pulse shrink-0"></div>
              {/* Chi tiết chữ */}
              <div className="flex-1 py-2 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                <div className="flex justify-between items-center mt-4 pt-2">
                  <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Skeleton (Tổng tiền & Nút Checkout) */}
        <div className="px-6 py-5 border-t border-gray-100 space-y-4">
          <div className="h-12 bg-gray-100 rounded-md animate-pulse"></div>
          <div className="flex justify-between items-center py-2">
            <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
          </div>
          <div className="h-14 bg-gray-300 rounded-md animate-pulse"></div>
        </div>

      </aside>
    </>
  )
});

export default function DynamicMiniCart() {
  return <MiniCartLazy />;
}