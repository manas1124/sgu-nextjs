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
  return {
    id:            String(raw.id),
    name:          raw.name         ?? 'Unnamed Product',
    slug:          raw.slug         ?? String(raw.id),
    price:         Number(raw.price)         || 0,
    originalPrice: raw.originalPrice ? Number(raw.originalPrice) : undefined,
    discount:      raw.discount      ? Number(raw.discount)      : undefined,
    image:         raw.image         ?? 'https://picsum.photos/seed/default/600/800',
    images:        Array.isArray(raw.images) ? raw.images : undefined,
    category:      raw.category      ?? 'Uncategorized',
    rating:        Number(raw.rating)        || 0,
    reviewCount:   Number(raw.reviewCount)   || 0,
    stock:         Number(raw.stock)         || 0,
    description:   raw.description   ?? undefined,
    isNew:         Boolean(raw.isNew),
    isSale:        Boolean(raw.isSale),
    brand:         raw.brand         ?? undefined,
    tags:          Array.isArray(raw.tags) ? raw.tags : undefined,
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

// ── POST: Thêm sản phẩm mới (Admin) ─────────────────────────
// Dùng ở: admin/products/new — Server Action hoặc Route Handler
// Không cache — mutation cần fresh response
export async function createProduct(
  data: Omit<Product, 'id'>
): Promise<Product | null> {
  const res = await fetch(ENDPOINT, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
    cache:   'no-store',
  });

  if (!res.ok) {
    console.error(`[productService] createProduct failed: ${res.status}`);
    return null;
  }

  const raw = await res.json();
  return mapProduct(raw);
}

// ── PUT: Cập nhật sản phẩm (Admin) ──────────────────────────
// Dùng ở: admin/products/[id]/edit
export async function updateProduct(
  id: string,
  data: Partial<Omit<Product, 'id'>>
): Promise<Product | null> {
  const res = await fetch(`${ENDPOINT}/${id}`, {
    method:  'PUT',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
    cache:   'no-store',
  });

  if (!res.ok) {
    console.error(`[productService] updateProduct(${id}) failed: ${res.status}`);
    return null;
  }

  const raw = await res.json();
  return mapProduct(raw);
}

// ── DELETE: Xóa sản phẩm (Admin) ────────────────────────────
// Dùng ở: Admin product table — DeleteButton component
export async function deleteProduct(id: string): Promise<boolean> {
  const res = await fetch(`${ENDPOINT}/${id}`, {
    method: 'DELETE',
    cache:  'no-store',
  });

  if (!res.ok) {
    console.error(`[productService] deleteProduct(${id}) failed: ${res.status}`);
    return false;
  }

  return true;
}
