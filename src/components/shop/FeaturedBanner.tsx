// src/components/shop/FeaturedBanner.tsx
// Server Component — Peaky Blinders featured product banner
import Button from '@/components/common/Button';

export default function FeaturedBanner() {
  return (
    <div className="grid grid-cols-2 min-h-72">
      {/* Left — image with floating labels */}
      <div className="relative bg-gray-200 overflow-hidden flex items-end p-8">
        <img
          src="https://picsum.photos/seed/featured-man/600/400"
          alt="Featured"
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
        />
        <div className="relative z-10 flex flex-wrap gap-2">
          {['Suspender', 'Flat Cap', 'Hugo Boss', 'Santoni'].map(tag => (
            <span
              key={tag}
              className="bg-white text-xs font-medium px-2.5 py-1 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right — product info */}
      <div className="bg-gray-100 flex flex-col justify-center px-12 py-10">
        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
          Women Collection
        </p>
        <h2 className="font-serif text-3xl font-bold mb-1 tracking-tight">
          Peaky Blinders
        </h2>
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
          Description
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-5 max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem.
        </p>
        <p className="text-sm text-gray-500 mb-3">
          Size{' '}
          <span className="border border-black px-2 py-0.5 text-black ml-1 text-xs font-semibold">
            M
          </span>
        </p>
        <p className="font-serif text-2xl font-bold mb-5">$100.00</p>
        <Button href="/products/1" size="sm" className="w-28">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
