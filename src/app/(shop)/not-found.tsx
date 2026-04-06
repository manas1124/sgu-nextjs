// src/app/(shop)/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h2 className="text-6xl font-bold text-gray-900 mb-4">404</h2>
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">Oops! Không tìm thấy trang</h3>
      <p className="text-gray-500 mb-8 max-w-md">
        Sản phẩm hoặc trang bạn đang tìm kiếm không tồn tại, đã bị xóa hoặc đã được thay đổi đường dẫn.
      </p>
      <Link 
        href="/shop" 
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
      >
        Quay lại Cửa hàng
      </Link>
    </div>
  );
}