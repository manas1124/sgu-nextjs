// src/components/auth/NewPasswordForm.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

export default function NewPasswordForm() {
  const router = useRouter();
  const [newPwd,     setNewPwd]     = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (newPwd !== confirmPwd) {
      alert('Passwords do not match');
      return;
    }
    router.push('/sign-in');
  }

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">
        Enter Your New Password
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          type="password"
          placeholder="New Password"
          value={newPwd}
          onChange={e => setNewPwd(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Confirmation Password"
          value={confirmPwd}
          onChange={e => setConfirmPwd(e.target.value)}
          required
        />

        <Button type="submit" fullWidth size="lg" variant="blue" className="mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
}
