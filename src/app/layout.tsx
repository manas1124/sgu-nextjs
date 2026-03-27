// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/context/CartContext';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'FASCO', template: '%s | FASCO' },
  description: 'Fashion Collection 2026',
};

// Khởi tạo font Inter và chỉ định subset latin để giảm dung lượng
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Đảm bảo text luôn hiển thị mượt mà
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-white text-gray-900">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
