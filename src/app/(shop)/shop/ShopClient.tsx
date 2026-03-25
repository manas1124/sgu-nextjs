// src/app/(shop)/shop/page.tsx
// Client Component — filter state, sort state
'use client';
import { useState, useMemo, useEffect } from 'react';
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
import { Product } from '@/types';

interface ShopPageProps {
  products: Product[];
}

const PER_PAGE = 9;

export default function ShopPage({ products = [] }: ShopPageProps) {
  const [filters, setFilters] = useState({
    sizes: [] as string[],
    color: null as string | null,
    price: null as string | null,
  });
  const [sortBy, setSortBy] = useState('Best selling');
  const [view, setView] = useState(3);
  const [page, setPage] = useState(1);

  const availableSizes = useMemo(() => {
    const sizeSet = new Set<string>();
    products.forEach((p) => {
      p.sizes?.forEach((s) => sizeSet.add(s));
    });
    return Array.from(sizeSet);
  }, [products]);

  const availableColors = useMemo(() => {
    // Dùng Set để tự động loại bỏ các mã hex trùng lặp
    const colorSet = new Set<string>();

    products.forEach((p) => {
      p.colors?.forEach((c) => {
        if (c.hex) {
          colorSet.add(c.hex.toLowerCase()); // Thêm .toLowerCase() để đồng nhất dữ liệu
        }
      });
    });

    // Chuyển Set về lại dạng mảng: ['#e8a0a0', '#f5c842', ...]
    return Array.from(colorSet);
  }, [products]);

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    // 1. Lọc theo Sizes
    if (filters.sizes.length > 0) {
      result = result.filter((p) => {
        // Nếu API chưa có trường sizes thì mặc định mảng rỗng để không bị lỗi
        const productSizes = p.sizes || [];
        return filters.sizes.some((size) => productSizes.includes(size));
      });
    }

    // 2. Lọc theo Color
    if (filters.color) {
      result = result.filter((p) => {
        const productColors = p.colors || [];
        return productColors.some(
          (c) => c.label === filters.color || c.hex === filters.color
        );
      });
    }

    // 3. Lọc theo Price (Bóc tách số tự động thông minh hơn)
    if (filters.price) {
      result = result.filter((p) => {
        const currentPrice = p.discount ? p.price - p.discount : p.price;
        const priceString = filters.price || '';

        // Nếu là "100+"
        if (priceString.includes('100+')) {
          return currentPrice > 100;
        }

        // Tự động tìm 2 con số trong chuỗi (ví dụ: "$50 - $100" -> lấy 50 và 100)
        const numbers = priceString.match(/\d+/g);
        if (numbers && numbers.length >= 2) {
          const min = Number(numbers[0]);
          const max = Number(numbers[1]);
          return currentPrice >= min && currentPrice <= max;
        }

        return true; // Nếu format lạ thì giữ nguyên
      });
    }

    // 4. Sắp xếp (Sort)
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => {
        const priceA = a.discount ? a.price - a.discount : a.price;
        const priceB = b.discount ? b.price - b.discount : b.price;
        return priceA - priceB;
      });
    }
    if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => {
        const priceA = a.discount ? a.price - a.discount : a.price;
        const priceB = b.discount ? b.price - b.discount : b.price;
        return priceB - priceA;
      });
    }
    if (sortBy === 'Newest first') {
      result.sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    }

    return result;
  }, [products, filters, sortBy]);

  const totalPages = Math.ceil(filteredAndSorted.length / PER_PAGE);
  const paginated = filteredAndSorted.slice(
    (page - 1) * PER_PAGE,
    page * PER_PAGE
  );

  const gridClass =
    { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }[view] ??
    'grid-cols-3';

  return (
    <>
      <main className="max-w-7xl mx-auto px-6">
        {/* Page header */}
        <div className="text-center py-10">
          <h1 className="font-serif text-3xl font-bold mb-3">Fashion</h1>
          <Breadcrumb
            items={[{ label: 'Home', href: '/' }, { label: 'Fashion' }]}
          />
        </div>

        {/* Content: sidebar + grid */}
        <div className="flex gap-8 pb-20">
          <FilterSidebar
            filters={filters}
            onChange={setFilters}
            availableColors={availableColors}
            availableSizes={availableSizes}
          />

          <div className="flex-1 min-w-0">
            <SortBar
              sortBy={sortBy}
              view={view}
              onSort={(v) => {
                setSortBy(v);
                setPage(1);
              }}
              onView={(v) => setView(v)}
              total={filteredAndSorted.length}
            />

            <div className={`grid ${gridClass} gap-5`}>
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination
              current={page}
              total={totalPages}
              onChange={(p) => {
                setPage(p);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
