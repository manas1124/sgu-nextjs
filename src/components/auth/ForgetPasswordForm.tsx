// src/components/auth/ForgetPasswordForm.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export default function ForgetPasswordForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: '', lastName: '',
    email: '',     phone: '',
  });

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push('/confirmation');
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">Forget Password</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-6">
          <Input placeholder="First Name"    value={form.firstName} onChange={set('firstName')} required />
          <Input placeholder="Last Name"     value={form.lastName}  onChange={set('lastName')}           />
          <Input type="email" placeholder="Email Address" value={form.email} onChange={set('email')} required />
          <Input type="tel"   placeholder="Phone Number"  value={form.phone} onChange={set('phone')}          />
        </div>

        <Button type="submit" fullWidth size="lg">
          Send Confirmation Code
        </Button>
      </form>

      <p className="text-sm text-center mt-5 text-gray-600">
        Already have an account?{' '}
        <Link href="/sign-in" className="text-blue-600 hover:underline font-medium">
          Login
        </Link>
      </p>
    </div>
  );
}
