// src/app/(shop)/checkout/page.tsx
'use client';
import { useCart } from '@/context/CartContext';
import CheckoutForm from '@/components/checkout/CheckoutForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Page title */}
        <div className="border-b border-gray-100 py-5 text-center">
          <h1 className="font-serif text-2xl font-bold tracking-tight">
            FASCO Demo Checkout
          </h1>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row
                        min-h-[calc(100vh-73px)]">
          <CheckoutForm />
          <OrderSummary items={items} totalPrice={totalPrice} />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}
