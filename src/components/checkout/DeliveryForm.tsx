// src/components/checkout/DeliveryForm.tsx
'use client';
import Input from '@/components/common/Input';

interface DeliveryData {
  country:    string;
  firstName:  string;
  lastName:   string;
  address:    string;
  city:       string;
  postal:     string;
  saveInfo:   boolean;
}

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

        {/* Save checkbox */}
        <label className="flex items-center gap-2.5 cursor-pointer mt-1">
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
