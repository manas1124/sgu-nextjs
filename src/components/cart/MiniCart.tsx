// src/components/cart/MiniCart.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import MiniCartItem from './MiniCartItem';
import GiftWrapOption from './GiftWrapOption';
import Button from '@/components/common/Button';
import { FREE_SHIPPING_THRESHOLD, GIFT_WRAP_PRICE } from '@/constants';
import { formatPrice } from '@/lib/format';

export default function MiniCart() {
  const { items, updateQty, totalPrice, isMiniCartOpen, closeMiniCart } = useCart();

  const [giftWrap, setGiftWrap] = useState(false);
  const subtotal = totalPrice + (giftWrap ? GIFT_WRAP_PRICE : 0);

  const remaining = FREE_SHIPPING_THRESHOLD - totalPrice;

  if (!isMiniCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={closeMiniCart}
        aria-label="Close cart"
      />

      {/* Drawer */}
      <aside className="fixed top-0 right-0 h-full w-full max-w-md bg-white
                        z-50 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5
                        border-b border-gray-100">
          <div>
            <h2 className="font-serif text-2xl font-bold">Shopping Cart</h2>
            {remaining > 0 ? (
              <p className="text-sm text-gray-600 mt-1">
                Buy{' '}
                <strong className="text-black">{formatPrice(remaining)}</strong>
                {' '}More And Get{' '}
                <strong className="text-black">Free Shipping</strong>
              </p>
            ) : (
              <p className="text-sm text-green-600 font-medium mt-1">
                ✓ You qualify for free shipping!
              </p>
            )}
          </div>
          <button
            onClick={closeMiniCart}
            className="text-gray-400 hover:text-black text-2xl leading-none mt-1
                       transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
              <p className="text-gray-400 text-sm">Your cart is empty</p>
              <Button href="/shop" variant="outline" size="sm" onClick={closeMiniCart}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            items.map(item => (
              <MiniCartItem
                key={item.id}
                item={item}
                onUpdateQty={updateQty}
              />
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-gray-100 space-y-3">
            <GiftWrapOption checked={giftWrap} onChange={setGiftWrap} />

            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-semibold uppercase tracking-widest">
                Subtotal
              </span>
              <span className="font-bold text-base">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Button
              href="/checkout"
              fullWidth size="lg"
              onClick={closeMiniCart}
            >
              Checkout
            </Button>

            <Link
              href="/cart"
              onClick={closeMiniCart}
              className="block w-full text-center text-sm font-semibold
                         underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              View Cart
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
