// src/app/(shop)/shop/page.tsx
import { getAllProducts } from '@/services/productService';
import ShopClient from './ShopClient'; // Component mình vừa sửa ở trên

export const metadata = {
  title: 'Fashion Shop',
  description: 'Shop the latest fashion trends',
};

export default async function ShopServerPage() {
  // Fetch data trực tiếp trên server
  const products = await getAllProducts();

  // Truyền data xuống Client Component
  return <ShopClient products={products} />;
}