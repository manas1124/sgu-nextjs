// src/components/product/ProductImageGallery.tsx
'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images:  string[];
  name:    string;
  isNew?:  boolean;
  isSale?: boolean;
  discount?: number;
}

export default function ProductImageGallery({
  images, name, isNew, isSale, discount,
}: ProductImageGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-3">
      {/* Thumbnails column */}
      <div className="flex flex-col gap-2 w-16 flex-shrink-0">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative aspect-square overflow-hidden border-2 transition-colors
              ${active === i ? 'border-black' : 'border-transparent hover:border-gray-300'}`}
          >
            <Image src={img} alt={`${name} ${i + 1}`} fill loading="lazy"
                   className="object-cover" sizes="64px" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-[3/4] bg-gray-50 overflow-hidden">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 500px"
          priority
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {isNew && (
            <span className="bg-black text-white text-[10px] font-bold px-2 py-0.5">
              NEW
            </span>
          )}
          {isSale && discount && (
            <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5">
              SAVE {discount}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
