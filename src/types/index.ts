// src/types/index.ts

export interface Product {
  id: string;
  brand?: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  description?: string;
  sizes?: string[];
  colors?: ProductColor[];
  specs?: Record<string, string>;
  isNew?: boolean;
  isSale?: boolean;
  tags?: string[];
}

export interface ProductColor {
  label: string;
  hex: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string;
  size?: string;
  quantity: number;
}

export interface DeliveryData {
  country:   string;
  firstName: string;
  lastName:  string;
  address:   string;
  city:      string;
  postal:    string;
  saveInfo:  boolean;
}

export interface PaymentData {
  cardNumber: string;
  expiry:     string;
  cvv:        string;
  cardName:   string;
  saveInfo:   boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
