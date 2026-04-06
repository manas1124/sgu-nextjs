// src/components/common/Newsletter.tsx
'use client';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Button from './Button';
import { subscribeNewsletter } from '@/actions/newsletter';

function SubmitButton({ isSuccess }: { isSuccess: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button 
      type="submit" 
      fullWidth 
      size="lg" 
      className="mt-2"
      // Disable nút nếu đang gửi API hoặc đã gửi thành công
      disabled={pending || isSuccess}
    >
      {pending ? 'ĐANG XỬ LÝ...' : (isSuccess ? '✓ Subscribed!' : 'Subscribe Now')}
    </Button>
  );
}

export default function Newsletter() {
  const [state, formAction] = useActionState(subscribeNewsletter, null);

  return (
    <section className="relative overflow-hidden bg-gray-50 min-h-[420px] flex items-center">
      {/* Model trái */}
      <div className="absolute left-0 bottom-0 w-56 hidden lg:block pointer-events-none select-none">
        <img src="https://picsum.photos/seed/nl-model-left/224/420"
             alt="" className="w-full h-full object-cover object-top"/>
      </div>
      {/* Model phải */}
      <div className="absolute right-0 bottom-0 w-56 hidden lg:block pointer-events-none select-none">
        <img src="https://picsum.photos/seed/nl-model-right/224/420"
             alt="" className="w-full h-full object-cover object-top"/>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 text-center">
        <h2 className="font-serif text-3xl font-bold mb-3">Subscribe To Our Newsletter</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>

        <form action={formAction} className="flex flex-col gap-3 max-w-sm mx-auto">
          <input
            type="email"
            name="email"
            placeholder="michael@ymail.com"
            required
            className="w-full border-b border-gray-300 bg-transparent py-2 text-sm
                       outline-none placeholder-gray-400 focus:border-black
                       transition-colors text-center"
          />
          <SubmitButton isSuccess={state?.success === true} />
        </form>
      </div>
    </section>
  );
}
