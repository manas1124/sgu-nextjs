// src/app/(auth)/forget-password/page.tsx
import { Metadata } from 'next';
import ForgetPasswordForm from '@/components/auth/ForgetPasswordForm';

export const metadata: Metadata = { title: 'Forget Password' };

export default function ForgetPasswordPage() {
  return <ForgetPasswordForm />;
}
