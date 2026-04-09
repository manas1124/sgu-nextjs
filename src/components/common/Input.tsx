// src/components/common/Input.tsx
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'underline' | 'bordered';
  label?: string;
  error?: string;
}

const variants = {
  underline: 'border-b border-gray-300 bg-transparent px-0 py-2 focus:border-black',
  bordered:  'border border-gray-200 px-4 py-3 focus:border-black',
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = 'underline', label, error, className = '', ...props },
  ref,
) {
  const errorClass = error ? '!border-red-500 focus:!border-red-500' : '';

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-xs text-gray-500 font-medium">{label}</label>
      )}
      <input
        ref={ref}
        aria-invalid={error ? true : undefined}
        className={`w-full text-sm outline-none placeholder-gray-400
                    transition-colors duration-200
                    ${variants[variant]} ${errorClass} ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-0.5">{error}</span>}
    </div>
  );
});

export default Input;
