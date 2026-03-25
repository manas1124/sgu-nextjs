// src/app/(auth)/sign-in/page.tsx
import { Metadata } from 'next';
import SignInForm from '@/components/auth/SignInForm';

export const metadata: Metadata = { title: 'Sign In' };

export default function SignInPage() {
  return <SignInForm />;
}
