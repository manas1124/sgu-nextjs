// src/services/productService.ts
//
// Tầng Service — kết nối MockAPI.io
// Chạy hoàn toàn trên Server (Server Component / Route Handler)
// KHÔNG gửi code hoặc API key xuống client
//
// MockAPI endpoint:
//   https://[your-project].mockapi.io/api/v1/products
//
// Schema trên MockAPI.io cần có các trường:
//   id, name, slug, price, originalPrice, image, category,
//   rating, reviewCount, stock, description, isNew, isSale,
//   discount, brand

import { Product } from '@/types';

// ── Endpoint ──────────────────────────────────────────────────
// Thay YOUR_PROJECT_ID bằng project ID thực tế từ MockAPI.io
const BASE_URL = process.env.MOCKAPI_URL ?? 'https://69bdf08117c3d7d97790d9c9.mockapi.io/api/v1';
const ENDPOINT = `${BASE_URL}/products`;

// ── Map raw API response → Product interface ──────────────────
// MockAPI trả về kiểu any, cần map sang type an toàn
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapProduct(raw: any): Product {

  const idNum = parseInt(raw.id) || Math.floor(Math.random() * 10);

  const ALL_SIZES = ['S', 'M', 'L', 'XL', 'XXL'];
  const ALL_COLORS = [
    { label: 'Black', hex: '#000000' },
    { label: 'White', hex: '#ffffff' },
    { label: 'Red', hex: '#ff0000' },
    { label: 'Blue', hex: '#0000ff' },
    { label: 'Beige', hex: '#f5f5dc' },
    { label: 'Green', hex: '#008000' }
  ];

  // Gán cho mỗi sản phẩm 2-3 size và 2 màu khác nhau dựa vào ID
  const mockSizes = ALL_SIZES.slice(idNum % 3, (idNum % 3) + 3); 
  const mockColors = [
    ALL_COLORS[idNum % ALL_COLORS.length],
    ALL_COLORS[(idNum + 1) % ALL_COLORS.length]
  ];

  return {
    id:            String(raw.id),
    name:          raw.name         ?? 'Unnamed Product',
    slug:          raw.slug         ?? String(raw.id),
    price:         Number(raw.price)         || 0,
    originalPrice: raw.originalPrice ? Number(raw.originalPrice) : undefined,
    discount:      raw.discount      ? Number(raw.discount)      : undefined,
    image:         raw.image         ?? 'https://picsum.photos/seed/default/600/800',
    images:        Array.isArray(raw.images) ? raw.images : [
      raw.image,
      'https://picsum.photos/seed/product-2/600/720',
      'https://picsum.photos/seed/product-3/600/720',
      'https://picsum.photos/seed/product-4/600/720',
      'https://picsum.photos/seed/product-5/600/720',
      'https://picsum.photos/seed/product-6/600/720',
    ],
    category:      raw.category      ?? 'Uncategorized',
    rating:        Number(raw.rating)        || 0,
    reviewCount:   Number(raw.reviewCount)   || 0,
    stock:         Number(raw.stock)         || 0,
    description:   raw.description   ?? undefined,
    isNew:         Boolean(raw.isNew),
    isSale:        Boolean(raw.isSale),
    brand:         raw.brand         ?? undefined,
    tags:          Array.isArray(raw.tags) ? raw.tags : undefined,

    sizes: Array.isArray(raw.sizes) ? raw.sizes.map(String) : mockSizes,
    
    colors: Array.isArray(raw.colors)
      ? raw.colors.map((c: any) => ({
          label: c?.label ? String(c.label) : 'Unknown',
          hex:   c?.hex   ? String(c.hex)   : '#000000'
        }))
      : mockColors,

    specs: (raw.specs && typeof raw.specs === 'object' && !Array.isArray(raw.specs))
      ? raw.specs
      : undefined,
  };
}

// ── GET: Tất cả sản phẩm ─────────────────────────────────────
// Dùng ở: Admin trang sản phẩm, trang cửa hàng /shop
// ISR: cache 60 giây — tự động revalidate, không cần rebuild
export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(ENDPOINT, {
    next: { revalidate: 60 },   // ISR — Next.js tự cache + tự refresh
  });

  if (!res.ok) {
    console.error(`[productService] getAllProducts failed: ${res.status}`);
    return [];                  // Trả mảng rỗng thay vì crash trang
  }

  const data = await res.json();

  // MockAPI trả về array, đảm bảo type-safe
  if (!Array.isArray(data)) return [];
  return data.map(mapProduct);
}

// ── GET: Sản phẩm nổi bật (trang chủ) ───────────────────────
// Lọc ra những sản phẩm isNew hoặc isSale, tối đa 8 sản phẩm
// ISR: cache 60 giây
export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getAllProducts();
  const featured = all.filter(p => p.isNew || p.isSale);

  // Nếu không có sản phẩm featured, lấy 8 sản phẩm đầu
  return featured.length > 0 ? featured.slice(0, 8) : all.slice(0, 8);
}

// ── GET: Chi tiết 1 sản phẩm ─────────────────────────────────
// Dùng ở: Trang chi tiết /products/[id]
// ISR: cache 5 phút (dữ liệu chi tiết ít thay đổi hơn)
export async function getProductById(id: string): Promise<Product | null> {
  const res = await fetch(`${ENDPOINT}/${id}`, {
    next: { revalidate: 300 },  // cache 5 phút
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    console.error(`[productService] getProductById(${id}) failed: ${res.status}`);
    return null;
  }

  const raw = await res.json();
  return mapProduct(raw);
}

// ── GET: Static params cho generateStaticParams ───────────────
// Dùng ở: products/[id]/page.tsx — pre-render các trang sản phẩm
// Không cache — cần danh sách ID mới nhất lúc build
export async function getAllProductIds(): Promise<string[]> {
  const res = await fetch(ENDPOINT, { cache: 'no-store' });
  if (!res.ok) return [];
  const data = await res.json();
  if (!Array.isArray(data)) return [];
  return data.map((p: { id: string | number }) => String(p.id));
}