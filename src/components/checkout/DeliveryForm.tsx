// src/components/checkout/DeliveryForm.tsx
'use client';
import Input from '@/components/common/Input';
import SaveInfoCheckbox from './SaveInfoCheckbox';
import { DeliveryData } from '@/types';

interface DeliveryFormProps {
  data:     DeliveryData;
  onChange: (data: DeliveryData) => void;
}

const COUNTRIES = ['Vietnam', 'United States', 'Japan', 'Singapore', 'Australia'];

export default function DeliveryForm({ data, onChange }: DeliveryFormProps) {
  const set = (key: keyof DeliveryData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      onChange({ ...data, [key]: e.target.value });

  return (
    <section>
      <h2 className="font-serif text-2xl font-bold mb-4">Delivery</h2>

      <div className="space-y-3">
        {/* Country */}
        <select
          value={data.country}
          onChange={set('country')}
          required
          className="w-full border border-gray-200 px-4 py-3 text-sm bg-white
                     outline-none focus:border-black transition-colors appearance-none"
        >
          <option value="">Country / Region</option>
          {COUNTRIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            variant="bordered"
            placeholder="First Name"
            value={data.firstName}
            onChange={set('firstName')}
            autoComplete="given-name"
            required
          />
          <Input
            variant="bordered"
            placeholder="Last Name"
            value={data.lastName}
            onChange={set('lastName')}
            autoComplete="family-name"
            required
          />
        </div>

        {/* Address */}
        <Input
          variant="bordered"
          placeholder="Address"
          value={data.address}
          onChange={set('address')}
          autoComplete="street-address"
          required
        />

        {/* City + Postal */}
        <div className="grid grid-cols-2 gap-3">
          <Input
            variant="bordered"
            placeholder="City"
            value={data.city}
            onChange={set('city')}
            autoComplete="address-level2"
            required
          />
          <Input
            variant="bordered"
            placeholder="Postal Code"
            value={data.postal}
            onChange={set('postal')}
            autoComplete="postal-code"
            required
          />
        </div>

        <SaveInfoCheckbox
          checked={data.saveInfo}
          onChange={(checked) => onChange({ ...data, saveInfo: checked })}
        />
      </div>
    </section>
  );
}
