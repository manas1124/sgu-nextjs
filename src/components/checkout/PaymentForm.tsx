// src/components/checkout/PaymentForm.tsx
'use client';
import Input from '@/components/common/Input';

interface PaymentData {
  cardNumber: string;
  expiry:     string;
  cvv:        string;
  cardName:   string;
  saveInfo:   boolean;
}

interface PaymentFormProps {
  data:     PaymentData;
  onChange: (data: PaymentData) => void;
}

export default function PaymentForm({ data, onChange }: PaymentFormProps) {
  const set = (key: keyof PaymentData) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      onChange({ ...data, [key]: e.target.value });

  return (
    <section>
      <h2 className="font-serif text-2xl font-bold mb-4">Payment</h2>

      <div className="space-y-3">
        {/* Method selector */}
        <div className="border border-gray-200 px-4 py-3 flex items-center justify-between">
          <span className="text-sm font-medium">Credit Card</span>
          <div className="flex items-center gap-2">
            {/* Card icon */}
            <div className="w-8 h-5 rounded-sm bg-gradient-to-r from-red-500 to-yellow-400" />
            <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* Card fields */}
        <div className="border border-gray-200 p-4 space-y-3">
          {/* Card number with lock icon */}
          <div className="flex items-center border border-gray-200 px-3">
            <input
              value={data.cardNumber}
              onChange={set('cardNumber')}
              placeholder="Card Number"
              className="flex-1 py-3 text-sm outline-none bg-transparent placeholder-gray-400"
            />
            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" viewBox="0 0 24 24"
                 fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Input
              variant="bordered"
              placeholder="Expiration Date"
              value={data.expiry}
              onChange={set('expiry')}
            />
            <Input
              variant="bordered"
              placeholder="Security Code"
              value={data.cvv}
              onChange={set('cvv')}
            />
          </div>

          <Input
            variant="bordered"
            placeholder="Card Holder Name"
            value={data.cardName}
            onChange={set('cardName')}
          />
        </div>

        {/* Save checkbox */}
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={data.saveInfo}
            onChange={e => onChange({ ...data, saveInfo: e.target.checked })}
            className="w-4 h-4 border-2 border-gray-300 accent-black cursor-pointer"
          />
          <span className="text-sm text-gray-600">Save This Info For Future</span>
        </label>
      </div>
    </section>
  );
}
