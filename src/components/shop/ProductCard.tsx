// src/components/shop/ProductCard.tsx
// Server Component — hiển thị thẻ sản phẩm trong lưới
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  showColors?: boolean;
}

export default function ProductCard({ product, showColors = true }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="group cursor-pointer">
      {/* Image */}
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && (
              <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5">
                NEW
              </span>
            )}
            {discount && (
              <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5">
                SAVE {discount}%
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Info */}
      {product.brand && (
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
          {product.brand}
        </p>
      )}
      <Link href={`/products/${product.id}`}>
        <h3 className="text-sm font-semibold mb-1 hover:opacity-60 transition-opacity truncate">
          {product.name}
        </h3>
      </Link>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-1.5">
        <span className="text-amber-400 text-xs">
          {'★'.repeat(Math.max(0, Math.min(5, Math.round(product.rating || 0))))}
          {'☆'.repeat(5 - Math.max(0, Math.min(5, Math.round(product.rating || 0))))}
        </span>
        <span className="text-[11px] text-gray-400">({product.reviewCount})</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-sm font-bold">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <span className="text-xs text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
      </div>

      {/* Color swatches */}
      {showColors && product.colors && (
        <div className="flex gap-1.5">
          {product.colors.map((c, i) => (
            <div
              key={i}
              style={{ background: c.hex }}
              title={c.label}
              className="w-3.5 h-3.5 rounded-full border border-gray-200"
            />
          ))}
        </div>
      )}
    </article>
  );
}
