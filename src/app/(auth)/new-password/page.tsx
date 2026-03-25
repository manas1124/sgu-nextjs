// src/app/(auth)/new-password/page.tsx
import { Metadata } from 'next';
import NewPasswordForm from '@/components/auth/NewPasswordForm';

export const metadata: Metadata = { title: 'New Password' };

export default function NewPasswordPage() {
  return <NewPasswordForm />;
}
