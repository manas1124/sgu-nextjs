// src/components/layout/NavIcons.tsx
// Client Component — cần useCart
'use client';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function NavIcons() {
  const { totalItems, openMiniCart } = useCart();

  return (
    <div className="flex items-center gap-2 ml-auto">
      {/* Search */}
      <Link href="/shop"
            className="w-9 h-9 flex items-center justify-center hover:opacity-60 transition-opacity"
            title="Search">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
      </Link>

      {/* Account */}
      <Link href="/sign-in"
            className="w-9 h-9 flex items-center justify-center hover:opacity-60 transition-opacity"
            title="Account">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </Link>

      {/* Wishlist */}
      <button className="w-9 h-9 flex items-center justify-center hover:opacity-60 transition-opacity"
              title="Wishlist">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06
                   a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78
                   1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      </button>

      {/* Cart — mở MiniCart */}
      <button onClick={openMiniCart}
              className="w-9 h-9 flex items-center justify-center relative
                         hover:opacity-60 transition-opacity"
              title="Cart">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
        {totalItems > 0 && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500
                           text-white text-[9px] font-bold rounded-full
                           flex items-center justify-center leading-none">
            {totalItems > 9 ? '9+' : totalItems}
          </span>
        )}
      </button>
    </div>
  );
}
