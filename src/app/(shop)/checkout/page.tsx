// src/app/(shop)/checkout/page.tsx
// Client Component — state cho tất cả form fields
'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import ContactForm from '@/components/checkout/ContactForm';
import DeliveryForm from '@/components/checkout/DeliveryForm';
import PaymentForm from '@/components/checkout/PaymentForm';
import OrderSummary from '@/components/checkout/OrderSummary';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  const [email, setEmail] = useState('');

  const [delivery, setDelivery] = useState({
    country: '', firstName: '', lastName: '',
    address: '', city: '',     postal: '',
    saveInfo: false,
  });

  const [payment, setPayment] = useState({
    cardNumber: '', expiry: '',    cvv: '',
    cardName:   '', saveInfo: false,
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Payment processed! (Demo)');
  }

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

          {/* ── LEFT: Form ─────────────────────────────── */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 px-8 py-8 space-y-8 border-r border-gray-100"
          >
            {/* Contact section — ContactForm component */}
            <ContactForm email={email} onChange={setEmail} />

            {/* Delivery section — DeliveryForm component */}
            <DeliveryForm data={delivery} onChange={setDelivery} />

            {/* Payment section — PaymentForm component */}
            <PaymentForm data={payment} onChange={setPayment} />

            {/* Submit */}
            <Button type="submit" fullWidth size="lg">
              Pay Now
            </Button>

            <p className="text-xs text-center text-gray-400">
              Copyright © 2022 FASCO. All Rights Reserved.
            </p>
          </form>

          {/* ── RIGHT: Order Summary ─────────────────── */}
          {/* OrderSummary component */}
          <OrderSummary items={items} totalPrice={totalPrice} />
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
}
