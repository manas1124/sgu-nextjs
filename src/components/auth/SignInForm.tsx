// src/components/auth/SignInForm.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SocialAuthButtons from './SocialAuthButtons';
import AuthDivider from './AuthDivider';

export default function SignInForm() {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: kết nối auth
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">Sign In To FASCO</h1>

      <SocialAuthButtons />
      <AuthDivider />

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <Button type="submit" fullWidth size="lg" className="mt-2">
          Sign In
        </Button>
      </form>

      <div className="mt-3 space-y-2.5">
        <Button
          href="/sign-up"
          fullWidth
          variant="outline"
          size="lg"
          className="text-blue-600 border-gray-300 hover:text-white"
        >
          Register Now
        </Button>

        <div className="text-right">
          <Link
            href="/forget-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forget Password?
          </Link>
        </div>
      </div>
    </div>
  );
}
