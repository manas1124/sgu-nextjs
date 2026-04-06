// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Lấy token từ Cookie (giả định tên cookie là 'auth-token')
  const token = request.cookies.get('auth-token')?.value;

  // 2. Lấy đường dẫn mà người dùng đang muốn truy cập
  const { pathname } = request.nextUrl;

  // 3. Danh sách các route cần bảo mật (Yêu cầu đăng nhập mới được vào)
  const protectedRoutes = ['/checkout', '/cart'];

  // Kiểm tra nếu đường dẫn nằm trong danh sách bảo mật và không có token
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      // Chuyển hướng người dùng về trang Sign-in kèm theo tham số callbackUrl 
      // để sau khi đăng nhập xong có thể quay lại đúng trang cũ
      const url = new URL('/sign-in', request.url);
      url.searchParams.set('callbackUrl', pathname);
      return NextResponse.redirect(url);
    }
  }

  // Cho phép yêu cầu tiếp tục nếu thỏa mãn điều kiện
  return NextResponse.next();
}

// 4. Cấu hình Matcher: Chỉ chạy Middleware cho các đường dẫn cụ thể để tối ưu hiệu năng
export const config = {
  matcher: ['/checkout/:path*', '/cart/:path*'],
};