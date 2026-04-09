// src/components/checkout/SaveInfoCheckbox.tsx
'use client';

interface SaveInfoCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function SaveInfoCheckbox({ checked, onChange }: SaveInfoCheckboxProps) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer mt-1">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 border-2 border-gray-300 accent-black cursor-pointer"
      />
      <span className="text-sm text-gray-600">Save This Info For Future</span>
    </label>
  );
}
