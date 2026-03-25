// src/constants/index.ts

export const SITE_NAME = 'FASCO';

export const NAV_LINKS = [
  { label: 'Home',     href: '/' },
  { label: 'Shop',     href: '/shop' },
  { label: 'Products', href: '/products/1' },
];

export const FOOTER_LINKS = [
  {
    title: 'Company',
    links: [
      { label: 'Home',           href: '/' },
      { label: 'About Us',       href: '#' },
      { label: 'Delivery',       href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Shopping',
    links: [
      { label: "Women's Clothing", href: '/shop' },
      { label: "Men's Clothing",   href: '/shop' },
      { label: 'Accessories',      href: '/shop' },
      { label: 'New Arrivals',     href: '/shop' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Customer Service', href: '#' },
      { label: 'Shipping',         href: '#' },
      { label: 'Tracking',         href: '#' },
      { label: 'Returns',          href: '#' },
    ],
  },
];

export const FEATURES = [
  { icon: '🏅', title: 'High Quality',        desc: 'Crafted from top materials' },
  { icon: '🛡️', title: 'Warranty Protection', desc: 'Over 2 years' },
  { icon: '🚚', title: 'Free Shipping',        desc: 'Order over $150' },
  { icon: '📞', title: '24/7 Support',         desc: 'Dedicated support' },
];

export const BRANDS = ['CHANEL', 'LOUIS VUITTON', 'PRADA', 'Calvin Klein', 'DENIM'];

export const FILTER_SIZES   = ['S', 'M', 'L', 'XL'];
export const FILTER_COLORS  = ['#e8a0a0','#f5c842','#6bbf6b','#4a90d9','#1a1a1a','#c8a0c8','#e8c4a0','#a0c4e8','#8b4513','#9b59b6'];
export const FILTER_PRICES  = ['$0–$50', '$50–$100', '$100–$150', '$150–$200'];
export const FILTER_BRANDS  = ['Minimog', 'Wokiee Bruce', 'Gerator', 'Abby'];
export const FILTER_COLLECTIONS = ['All products', 'Best sellers', 'New arrivals', 'Accessories'];
export const FILTER_TAGS    = ['Fashion','Hats','Sandal','Jab','Bags','Beanie','Denime','Vagebond','Necklaces'];
export const SORT_OPTIONS   = ['Best selling', 'Price: Low to High', 'Price: High to Low', 'Newest first'];

export const FREE_SHIPPING_THRESHOLD = 150;
export const GIFT_WRAP_PRICE = 10;
export const SHIPPING_COST = 40;
