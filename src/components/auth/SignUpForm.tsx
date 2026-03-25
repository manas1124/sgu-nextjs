// src/components/auth/SignUpForm.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SocialAuthButtons from './SocialAuthButtons';
import AuthDivider from './AuthDivider';

export default function SignUpForm() {
  const [form, setForm] = useState({
    firstName: '', lastName: '',
    email: '',     phone: '',
    password: '',  confirmPassword: '',
  });

  const set = (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // TODO: kết nối auth
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">Create Account</h1>

      <SocialAuthButtons />
      <AuthDivider />

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 mb-5">
          <Input placeholder="First Name"    value={form.firstName}       onChange={set('firstName')}       required />
          <Input placeholder="Last Name"     value={form.lastName}        onChange={set('lastName')}                 />
          <Input type="email"   placeholder="Email Address"  value={form.email}           onChange={set('email')}           required />
          <Input type="tel"     placeholder="Phone Number"   value={form.phone}           onChange={set('phone')}                    />
          <Input type="password" placeholder="Password"      value={form.password}        onChange={set('password')}        required />
          <Input type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={set('confirmPassword')} required />
        </div>

        <Button type="submit" fullWidth size="lg">
          Create Account
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
