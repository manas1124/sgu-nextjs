// src/components/common/Input.tsx
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'underline' | 'bordered';
  label?: string;
}

const variants = {
  underline: 'border-b border-gray-300 bg-transparent px-0 py-2 focus:border-black',
  bordered:  'border border-gray-200 px-4 py-3 focus:border-black',
};

export default function Input({
  variant = 'underline',
  label,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-xs text-gray-500 font-medium">{label}</label>
      )}
      <input
        className={`w-full text-sm outline-none placeholder-gray-400
                    transition-colors duration-200
                    ${variants[variant]} ${className}`}
        {...props}
      />
    </div>
  );
}
