// src/components/checkout/CheckoutForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import ContactForm from './ContactForm';
import DeliveryForm from './DeliveryForm';
import PaymentForm from './PaymentForm';
import Button from '@/components/common/Button';
import { DeliveryData, PaymentData } from '@/types';

const INITIAL_DELIVERY: DeliveryData = {
  country: '', firstName: '', lastName: '',
  address: '', city: '',     postal: '',
  saveInfo: false,
};

const INITIAL_PAYMENT: PaymentData = {
  cardNumber: '', expiry: '',    cvv: '',
  cardName:   '', saveInfo: false,
};

export default function CheckoutForm() {
  const router = useRouter();
  const { clearCart } = useCart();

  const [email, setEmail]       = useState('');
  const [delivery, setDelivery] = useState<DeliveryData>(INITIAL_DELIVERY);
  const [payment, setPayment]   = useState<PaymentData>(INITIAL_PAYMENT);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert('Payment processed! (Demo)');
    clearCart();
    router.push('/');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 px-8 py-8 space-y-8 border-r border-gray-100"
    >
      <ContactForm email={email} onChange={setEmail} />
      <DeliveryForm data={delivery} onChange={setDelivery} />
      <PaymentForm data={payment} onChange={setPayment} />

      <Button type="submit" fullWidth size="lg">
        Pay Now
      </Button>

      <p className="text-xs text-center text-gray-400">
        Copyright © 2022 FASCO. All Rights Reserved.
      </p>
    </form>
  );
}
