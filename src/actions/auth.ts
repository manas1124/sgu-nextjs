// src/actions/auth.ts
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email');
  const password = formData.get('password');

  // 1. Kiểm tra tài khoản giả định (Mock Data)
  if (email === 'admin@fasco.com' && password === '123456') {
    
    // 2. Tạo một Token giả
    const mockToken = `token_${Math.random().toString(36).substr(2)}`;

    // 3. Gắn Token vào Cookie của trình duyệt (An toàn, chỉ HttpOnly)
    const cookieStore = await cookies();
    cookieStore.set('auth-token', mockToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    // 4. Chuyển hướng người dùng vào trang mua sắm
    redirect('/shop');
  } else {
    // Trả về lỗi nếu sai tài khoản
    return { success: false, message: 'Email hoặc mật khẩu không chính xác!' };
  }
}