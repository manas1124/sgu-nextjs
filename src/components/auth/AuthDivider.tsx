// src/components/auth/AuthDivider.tsx

export default function AuthDivider() {
  return (
    <div className="flex items-center gap-3 my-6">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-gray-400 tracking-widest font-medium">OR</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
