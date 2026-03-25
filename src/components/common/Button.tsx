// src/components/common/Button.tsx
import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  fullWidth?: boolean;
}

const variants = {
  primary: 'bg-black text-white hover:bg-gray-800 border border-black',
  outline: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
  ghost:   'bg-transparent text-black border-b border-black hover:opacity-60',
  blue:    'bg-blue-500 text-white hover:bg-blue-600 border border-blue-500',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-8 py-3.5 text-xs',
  lg: 'px-10 py-4 text-sm',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base = `inline-flex items-center justify-center font-semibold
                tracking-widest uppercase transition-colors duration-200
                ${variants[variant]} ${sizes[size]}
                ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
