// src/app/(auth)/layout.tsx
// Shared split layout: image left + form right
// Server Component

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden
                      shadow-sm flex min-h-[520px]">

        {/* Left — fashion photo */}
        <div className="hidden md:block w-[45%] flex-shrink-0">
          <img
            src="https://picsum.photos/seed/auth-fashion/600/800"
            alt="Fashion"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right — form area */}
        <div className="flex-1 flex flex-col justify-between p-10">
          {/* Logo */}
          <p className="font-serif text-2xl font-black tracking-tighter">FASCO</p>

          {/* Form injected from page */}
          <div className="flex-1 flex flex-col justify-center py-8">
            {children}
          </div>

          {/* Terms */}
          <div className="text-right">
            <a href="#"
               className="text-xs text-gray-400 hover:text-black transition-colors">
              FASCO Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
