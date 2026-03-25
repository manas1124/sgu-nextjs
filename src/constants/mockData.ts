// src/constants/mockData.ts

import { Product } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1', brand: 'FASCO',
    name: 'Denim Jacket', slug: 'denim-jacket',
    price: 39.00, originalPrice: 59.00, discount: 10,
    image: 'https://picsum.photos/seed/product-main/600/720',
    images: [
      'https://picsum.photos/seed/product-main/600/720',
      'https://picsum.photos/seed/product-2/600/720',
      'https://picsum.photos/seed/product-3/600/720',
      'https://picsum.photos/seed/product-4/600/720',
      'https://picsum.photos/seed/product-5/600/720',
      'https://picsum.photos/seed/product-6/600/720',
    ],
    category: 'women', rating: 3.5, reviewCount: 3, stock: 9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam.',
    sizes: ['M','L','XL','XXL'],
    colors: [
      { label: 'Blue',  hex: '#4a90d9' },
      { label: 'Black', hex: '#1a1a1a' },
      { label: 'Pink',  hex: '#e8a0b4' },
    ],
    specs: {
      'Material':   '100% Cotton Denim',
      'Fit':        'Regular Fit',
      'Closure':    'Button Front',
      'Care':       'Machine Wash Cold',
      'Made in':    'Vietnam',
    },
    isNew: false, isSale: true,
    tags: ['Denim','Jacket','Casual'],
  },
  {
    id: '2', brand: 'Eve Fashion',
    name: 'Rounded Red Hat', slug: 'rounded-red-hat',
    price: 8.00, image: 'https://picsum.photos/seed/hat1/400/500',
    category: 'accessories', rating: 4, reviewCount: 24, stock: 50,
    colors: [{ label:'Black',hex:'#1a1a1a'},{ label:'White',hex:'#fff'}],
    sizes: ['S','M','L'], isNew: false, isSale: false,
  },
  {
    id: '3', brand: 'Eve Fashion',
    name: 'Linen-blend Skirt', slug: 'linen-blend-skirt',
    price: 17.00, image: 'https://picsum.photos/seed/skirt1/400/500',
    category: 'women', rating: 4, reviewCount: 16, stock: 30,
    colors: [{ label:'Gray',hex:'#888'},{ label:'Beige',hex:'#e8c4a0'}],
    sizes: ['XS','S','M','L'], isNew: false, isSale: false,
  },
  {
    id: '4', brand: 'Urban Label',
    name: 'Long-sleeve Coat', slug: 'long-sleeve-coat',
    price: 106.00, image: 'https://picsum.photos/seed/coat1/400/500',
    category: 'women', rating: 5, reviewCount: 8, stock: 12,
    colors: [{ label:'Cream',hex:'#f0ebe3'},{ label:'Olive',hex:'#6b8a6b'}],
    sizes: ['S','M','L','XL'], isNew: true, isSale: false,
  },
  {
    id: '5', brand: 'Denim Co',
    name: 'Boxy Denim Hat', slug: 'boxy-denim-hat',
    price: 15.00, image: 'https://picsum.photos/seed/hat2/400/500',
    category: 'accessories', rating: 4, reviewCount: 11, stock: 45,
    colors: [{ label:'Blue',hex:'#4a90d9'}],
    sizes: ['One Size'], isNew: false, isSale: false,
  },
  {
    id: '6', brand: 'Eve Fashion',
    name: 'Linen Plain Top', slug: 'linen-plain-top',
    price: 25.00, image: 'https://picsum.photos/seed/top1/400/500',
    category: 'women', rating: 4.5, reviewCount: 33, stock: 28,
    colors: [{ label:'Beige',hex:'#e8c4a0'},{ label:'Taupe',hex:'#c9b8a8'},{ label:'Sand',hex:'#d4c5b8'}],
    sizes: ['XS','S','M','L','XL'], isNew: true, isSale: false,
  },
  {
    id: '7', brand: 'Urban Label',
    name: 'Oversized T-shirt', slug: 'oversized-t-shirt',
    price: 11.00, originalPrice: 14.00, discount: 21,
    image: 'https://picsum.photos/seed/tshirt1/400/500',
    category: 'unisex', rating: 4, reviewCount: 42, stock: 60,
    colors: [{ label:'Rose',hex:'#e8a0a0'},{ label:'Lavender',hex:'#c8a0c8'}],
    sizes: ['S','M','L','XL','XXL'], isNew: false, isSale: true,
  },
  {
    id: '8', brand: 'Sunnies',
    name: 'Polarised Sunglasses', slug: 'polarised-sunglasses',
    price: 16.00, originalPrice: 27.00, discount: 41,
    image: 'https://picsum.photos/seed/sun1/400/500',
    category: 'accessories', rating: 4, reviewCount: 19, stock: 35,
    colors: [{ label:'Black',hex:'#1a1a1a'},{ label:'Brown',hex:'#8b7355'}],
    isNew: false, isSale: true,
  },
  {
    id: '9', brand: 'FASCO',
    name: 'Rockstar Jacket', slug: 'rockstar-jacket',
    price: 172.00, image: 'https://picsum.photos/seed/jacket1/400/500',
    category: 'women', rating: 5, reviewCount: 6, stock: 8,
    colors: [{ label:'Beige',hex:'#e8c4a0'},{ label:'Gray',hex:'#b8a898'},{ label:'Sage',hex:'#d4e8c4'}],
    sizes: ['XS','S','M','L'], isNew: true, isSale: false,
  },
];

export const RELATED_PRODUCTS: Product[] = [
  {
    id: 'r1', name: 'Black Off-shoulder Dress', slug: 'black-off-shoulder',
    price: 100.00, originalPrice: 130.00, discount: 30,
    image: 'https://picsum.photos/seed/rel1/400/500',
    category: 'women', rating: 4.5, reviewCount: 28, stock: 15,
  },
  {
    id: 'r2', name: 'Blue Floral Dress', slug: 'blue-floral-dress',
    price: 85.00, image: 'https://picsum.photos/seed/rel2/400/500',
    category: 'women', rating: 4, reviewCount: 14, stock: 22,
  },
  {
    id: 'r3', name: 'White Summer Blouse', slug: 'white-summer-blouse',
    price: 65.00, image: 'https://picsum.photos/seed/rel3/400/500',
    category: 'women', rating: 5, reviewCount: 37, stock: 18,
  },
];

export const HERO_PRODUCTS = [
  { id:'h1', name:'Stripe Dress',   price:'$95.50', tag:'New',  image:'https://picsum.photos/seed/hero1/300/400', side:'left'  },
  { id:'h2', name:'Winter Coat',    price:'$75.00', tag:'Sale', image:'https://picsum.photos/seed/hero2/300/400', side:'left'  },
  { id:'h3', name:'Long Dress',     price:'$95.50', tag:'New',  image:'https://picsum.photos/seed/hero3/300/400', side:'right' },
  { id:'h4', name:'Tull Sweater',   price:'$93.55', tag:'',     image:'https://picsum.photos/seed/hero4/300/400', side:'right' },
];


export const BRANDS = [
  "CHANEL",
  "LOUIS VUITTON",
  "PRADA",
  "Calvin Klein",
  "DENIM"
];