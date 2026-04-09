// src/components/checkout/ContactForm.tsx
'use client';
import Input from '@/components/common/Input';
import Link from 'next/link';

interface ContactFormProps {
  email:    string;
  onChange: (value: string) => void;
}

export default function ContactForm({ email, onChange }: ContactFormProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-2xl font-bold">Contact</h2>
        <p className="text-sm text-gray-500">
          Have an account?{' '}
          <Link href="/sign-in" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>

      <Input
        variant="bordered"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={e => onChange(e.target.value)}
        required
      />
    </section>
  );
}
