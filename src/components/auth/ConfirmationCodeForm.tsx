// src/components/auth/ConfirmationCodeForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export default function ConfirmationCodeForm() {
  const router  = useRouter();
  const [code, setCode] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push('/new-password');
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">
        Enter The Confirmation Code
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          placeholder="Confirmation Code"
          value={code}
          onChange={e => setCode(e.target.value)}
          required
        />

        <Button type="submit" fullWidth size="lg">
          Recover Account
        </Button>
      </form>

      <p className="text-sm text-center mt-5 text-gray-500">
        Didn&apos;t receive Confirmation Code?{' '}
        <button
          type="button"
          className="text-blue-600 hover:underline font-medium"
        >
          Resend Now
        </button>
      </p>
    </div>
  );
}
