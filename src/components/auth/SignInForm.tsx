// src/components/auth/SignInForm.tsx
'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import SocialAuthButtons from './SocialAuthButtons';
import AuthDivider from './AuthDivider';
import { login } from '@/actions/auth';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <Button 
      type="submit" 
      fullWidth 
      size="lg" 
      className="mt-2"
      disabled={pending}
    >
      {pending ? 'Signing in...' : 'Sign In'}
    </Button>
  );
}
export default function SignInForm() {
  const [state, formAction] = useActionState(login, null);

  return (
    <div>
      <h1 className="font-serif text-2xl font-bold mb-7">Sign In To FASCO</h1>

      <SocialAuthButtons />
      <AuthDivider />

      <form action={formAction} className="space-y-5">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue="admin@fasco.com"
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          defaultValue="123456"
          required
        />
        {state?.message && (
          <p className="text-red-500 text-sm text-center font-medium animate-pulse">
            {state.message}
          </p>
        )}
        <SubmitButton />
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
