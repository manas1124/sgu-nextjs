// src/app/(shop)/products/[id]/page.tsx
// Server Component cho data fetch + metadata
// Client Components cho interactive parts
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductImageGallery from '@/components/product/ProductImageGallery';
import UrgencyBanner from '@/components/product/UrgencyBanner';
import StockIndicator from '@/components/product/StockIndicator';
import AddToCartSection from '@/components/product/AddToCartSection';
import ProductMeta from '@/components/product/ProductMeta';
import StarRating from '@/components/common/StarRating';
import FeaturedBanner from '@/components/shop/FeaturedBanner';
import FeaturesStrip from '@/components/common/FeaturesStrip';
import RelatedProducts from '@/components/product/RelatedProducts';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS, RELATED_PRODUCTS } from '@/constants/mockData';

export async function generateStaticParams() {
  return MOCK_PRODUCTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = MOCK_PRODUCTS.find(p => p.id === params.id);
  if (!product) return { title: 'Not Found' };
  return { title: product.name };
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = MOCK_PRODUCTS.find(p => p.id === params.id) ?? MOCK_PRODUCTS[0];
  if (!product) notFound();

  const images = product.images ?? [product.image];

  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Breadcrumb items={[
            { label: 'Home',     href: '/' },
            { label: 'Products', href: '/shop' },
            { label: product.name },
          ]} />
        </div>

        {/* Main product section */}
        <div className="flex gap-10">
          {/* Gallery */}
          <div className="w-[52%] flex-shrink-0">
            <ProductImageGallery
              images={images}
              name={product.name}
              isNew={product.isNew}
              isSale={product.isSale}
              discount={product.discount}
            />
          </div>

          {/* Info */}
          <div className="flex-1 space-y-4">
            {product.brand && (
              <p className="text-xs text-gray-400 uppercase tracking-widest">
                {product.brand}
              </p>
            )}

            <h1 className="font-serif text-3xl font-bold tracking-tight leading-tight">
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} size="md" />

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-bold text-2xl">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-gray-400 line-through text-base">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5">
                    Save {product.discount}%
                  </span>
                </>
              )}
            </div>

            {/* Viewers */}
            <p className="text-xs text-gray-500 flex items-center gap-1.5">
              <span className="text-blue-400">👁</span>
              24 people are viewing this right now
            </p>

            {/* Urgency */}
            <UrgencyBanner />

            {/* Stock */}
            <StockIndicator stock={product.stock} />

            {/* Size / Color / Qty / Add */}
            <AddToCartSection product={product} />

            {/* Meta links + payment */}
            <ProductMeta />
          </div>
        </div>

        {/* Featured banner */}
        <div className="mt-16">
          <FeaturedBanner />
        </div>

        {/* Related products */}
        <RelatedProducts products={RELATED_PRODUCTS} />
      </main>

      <FeaturesStrip />
      <Newsletter />
      <Footer />
    </>
  );
}
