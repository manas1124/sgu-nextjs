// src/app/(shop)/shop/page.tsx
// Client Component — filter state, sort state
'use client';
import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import FilterSidebar from '@/components/shop/FilterSidebar';
import SortBar from '@/components/shop/SortBar';
import ProductCard from '@/components/shop/ProductCard';
import Pagination from '@/components/shop/Pagination';
import FeaturedBanner from '@/components/shop/FeaturedBanner';
import InstagramGallery from '@/components/shop/InstagramGallery';
import FeaturesStrip from '@/components/common/FeaturesStrip';
import Newsletter from '@/components/common/Newsletter';
import Footer from '@/components/layout/Footer';
import { MOCK_PRODUCTS } from '@/constants/mockData';

const PER_PAGE = 9;

export default function ShopPage() {
  const [filters, setFilters] = useState({ sizes: [] as string[], color: null as string | null, price: null as string | null });
  const [sortBy,  setSortBy]  = useState('Best selling');
  const [view,    setView]    = useState(3);
  const [page,    setPage]    = useState(1);

  // Sort
  const sorted = useMemo(() => {
    const list = [...MOCK_PRODUCTS];
    if (sortBy === 'Price: Low to High')  list.sort((a, b) => a.price - b.price);
    if (sortBy === 'Price: High to Low')  list.sort((a, b) => b.price - a.price);
    if (sortBy === 'Newest first')        list.sort((a) => a.isNew ? -1 : 1);
    return list;
  }, [sortBy]);

  const totalPages = Math.ceil(sorted.length / PER_PAGE);
  const paginated  = sorted.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const gridClass  = {2:'grid-cols-2', 3:'grid-cols-3', 4:'grid-cols-4'}[view] ?? 'grid-cols-3';

  return (
    <>
      <main className="max-w-7xl mx-auto px-6">
        {/* Page header */}
        <div className="text-center py-10">
          <h1 className="font-serif text-3xl font-bold mb-3">Fashion</h1>
          <Breadcrumb items={[{ label:'Home', href:'/' }, { label:'Fashion' }]} />
        </div>

        {/* Content: sidebar + grid */}
        <div className="flex gap-8 pb-20">
          <FilterSidebar filters={filters} onChange={setFilters} />

          <div className="flex-1 min-w-0">
            <SortBar
              sortBy={sortBy} view={view}
              onSort={v => { setSortBy(v); setPage(1); }}
              onView={v => setView(v)}
              total={sorted.length}
            />

            <div className={`grid ${gridClass} gap-5`}>
              {paginated.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination
              current={page}
              total={totalPages}
              onChange={p => { setPage(p); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            />
          </div>
        </div>

        {/* Featured banner */}
        <FeaturedBanner />
      </main>

      <FeaturesStrip />
      <InstagramGallery />
      <Newsletter />
      <Footer />
    </>
  );
}
