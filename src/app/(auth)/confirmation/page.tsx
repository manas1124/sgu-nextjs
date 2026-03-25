// src/app/(auth)/confirmation/page.tsx
import { Metadata } from 'next';
import ConfirmationCodeForm from '@/components/auth/ConfirmationCodeForm';

export const metadata: Metadata = { title: 'Confirmation Code' };

export default function ConfirmationPage() {
  return <ConfirmationCodeForm />;
}
