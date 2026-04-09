// src/app/(shop)/cart/page.tsx
// Client Component — cần  useCart
'use client';
import { useCart } from '@/context/CartContext';
import Breadcrumb from '@/components/common/Breadcrumb';
import CartItemRow from '@/components/cart/CartItemRow';
import CartSummary from '@/components/cart/CartSummary';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

export default function CartPage() {
  const { items, removeItem, updateQty, totalPrice } = useCart();

  return (
    <>
      <main className="max-w-5xl mx-auto px-6 py-12">

        {/* Page header */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl font-bold mb-3">Shopping Cart</h1>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Your Shopping Cart' },
          ]} />
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-6">Your cart is empty</p>
            <Button href="/shop" variant="primary" size="md">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            {/* Table header */}
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 pb-3
                            border-b border-gray-200">
              {['Product', 'Price', 'Quantity', 'Total'].map((h, i) => (
                <span key={h}
                      className={`text-sm font-semibold text-gray-700
                        ${i === 3 ? 'text-right' : ''}`}>
                  {h}
                </span>
              ))}
            </div>

            {/* Cart items — using CartItemRow component */}
            <div>
              {items.map(item => (
                <CartItemRow
                  key={item.id}
                  item={item}
                  onRemove={removeItem}
                  onUpdateQty={updateQty}
                />
              ))}
            </div>

            {/* Summary — using CartSummary component */}
            <CartSummary totalPrice={totalPrice} />
          </>
        )}
      </main>

      <Newsletter />
      <Footer />
    </>
  );
}
