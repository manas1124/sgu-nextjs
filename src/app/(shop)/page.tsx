// src/app/(shop)/page.tsx  ← Route "/"
// Server Component + ISR
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from '@/components/common/Newsletter';
import FeaturesStrip from '@/components/common/FeaturesStrip';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/shop/ProductCard';
import { BRANDS, HERO_PRODUCTS } from '@/constants/mockData';
import { getFeaturedProducts } from '@/services/productService';
import { MOCK_PRODUCTS } from '@/constants/mockData';

export const revalidate = 60;
export const metadata: Metadata = { title: 'Home — FASCO' };

export default async function HomePage() {
  const featured = await getFeaturedProducts();
  // const featured = MOCK_PRODUCTS.filter(p => p.isNew || p.isSale).slice(0, 6);

  return (
    <>
      {/* ── HERO 3-column ─────────────────────────────── */}
      <section className="grid grid-cols-[260px_1fr_260px] min-h-[580px]
                          border-b border-gray-100">
        {/* Left cards */}
        <div className="flex flex-col gap-4 p-5 border-r border-gray-100">
          {HERO_PRODUCTS.filter(p => p.side === 'left').map(p => (
            <div key={p.id} className="relative group cursor-pointer">
              {p.tag && (
                <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold
                                  px-2 py-0.5
                  ${p.tag === 'Sale' ? 'bg-red-500 text-white' : 'bg-black text-white'}`}>
                  {p.tag}
                </span>
              )}
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image src={p.image} alt={p.name}
                       fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                       sizes="260px" />
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold">{p.name}</p>
                <p className="text-xs text-gray-500">{p.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center  hero */}
        <div className="bg-black text-white flex flex-col items-center
                        justify-center text-center px-12 py-16 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 border border-white/5 rounded-full pointer-events-none" />
          <div className="absolute -bottom-32 -right-16 w-96 h-96 border border-white/4 rounded-full pointer-events-none" />
          <p className="text-[10px] tracking-[5px] uppercase text-gray-500 mb-5 relative z-10">
            New Collection 2026
          </p>
          <h1 className="font-serif text-[clamp(64px,9vw,108px)] font-black
                         leading-none tracking-tighter text-white relative z-10">
            ULTIMATE
          </h1>
          <span className="font-serif text-[clamp(32px,5vw,54px)] italic font-normal
                           text-gray-500 block mb-5 relative z-10 leading-none mt-1">
            SALE
          </span>
          <p className="text-[10px] tracking-[3px] uppercase text-gray-600 mb-8 relative z-10">
            The Collection
          </p>
          <Link href="/shop"
                className="relative z-10 px-10 py-3.5 bg-white text-black text-xs
                           font-bold tracking-widest uppercase hover:bg-gray-100 transition-colors">
            Shop Now
          </Link>
        </div>

        {/* Right  cards */}
        <div className="flex flex-col gap-4 p-5 border-l border-gray-100">
          {HERO_PRODUCTS.filter(p => p.side === 'right').map(p => (
            <div key={p.id} className="relative group cursor-pointer">
              {p.tag && (
                <span className="absolute top-2 left-2 z-10 text-[10px] font-bold
                                  px-2 py-0.5 bg-black text-white">
                  {p.tag}
                </span>
              )}
              <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
                <Image src={p.image} alt={p.name}
                       fill className="object-cover group-hover:scale-105 transition-transform duration-500"
                       sizes="260px" />
              </div>
              <div className="pt-2">
                <p className="text-xs font-semibold">{p.name}</p>
                <p className="text-xs text-gray-500">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Brand strip ───────────────────────────────── */}
      <div className="border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center
                        justify-around flex-wrap gap-4">
          {BRANDS.map(b => (
            <span key={b}
                  className="font-serif text-sm font-bold tracking-widest
                             text-gray-400 hover:text-black transition-colors
                             cursor-pointer uppercase">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* ── New Arrivals ──────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold mb-3">New Arrivals</h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Scelerisque duis ultrices sollicitudin aliquam sem.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {['All Items','Best Sellers','New Arrivals','Accessories'].map((t, i) => (
            <button key={t}
                    className={`px-5 py-2 text-xs font-semibold border transition-colors
                      ${i === 1
                        ? 'bg-black text-white border-black'
                        : 'border-gray-300 hover:border-black text-gray-600'}`}>
              {t}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop"
                className="inline-block px-12 py-3.5 border-2 border-black
                           text-xs font-bold tracking-widest uppercase
                           hover:bg-black hover:text-white transition-all duration-200">
            Buy More
          </Link>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </>
  );
}
