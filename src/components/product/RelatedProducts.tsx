// src/components/product/RelatedProducts.tsx
// Server Component — "People Also Loved" section
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';
import CountdownTimer from '@/components/common/CountdownTimer';
import Button from '@/components/common/Button';

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <section className="mt-16">
      <div className="flex gap-10 items-start">
        {/* Left info */}
        <div className="w-52 flex-shrink-0">
          <h2 className="font-serif text-2xl font-bold mb-3 leading-tight">
            People Also Loved
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis ultrices sollicitudin.
          </p>
          <Button href="/shop" size="sm" className="mb-6 w-28">
            Buy now
          </Button>

          <p className="text-sm font-bold mb-3">Hurry, Before It&apos;s Too Late!</p>
          <CountdownTimer durationSeconds={2 * 86400 + 6 * 3600 + 5 * 60 + 30} />
        </div>

        {/* Product grid */}
        <div className="flex-1 grid grid-cols-3 gap-4">
          {products.map((p, i) => (
            <Link key={p.id} href={`/products/${p.id}`} className="group">
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image
                  src={p.image} alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="200px"
                />
                {/* First card sale badge */}
                {i === 0 && p.discount && (
                  <div className="absolute bottom-4 left-4 bg-white px-3 py-2 shadow-sm">
                    <p className="text-[10px] text-gray-500">01 · Spring Sale</p>
                    <p className="font-bold text-sm">{p.discount}% OFF</p>
                  </div>
                )}
              </div>
              <p className="text-xs font-semibold mt-2 truncate">{p.name}</p>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                ${p.price.toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
