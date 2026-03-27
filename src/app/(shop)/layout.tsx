// src/app/(shop)/layout.tsx
// Layout chung cho tất cả trang  shop
// Server Component — Navbar + MiniCart được inject ở đây

import Navbar from '@/components/layout/Navbar';

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
