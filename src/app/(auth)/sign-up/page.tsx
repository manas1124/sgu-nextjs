// src/app/(auth)/sign-up/page.tsx
import { Metadata } from 'next';
import SignUpForm from '@/components/auth/SignUpForm';

export const metadata: Metadata = { title: 'Create Account' };

export default function SignUpPage() {
  return <SignUpForm />;
}
