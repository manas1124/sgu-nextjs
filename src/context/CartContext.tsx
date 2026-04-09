// src/context/CartContext.tsx
'use client';
import { createContext, useContext, useState, useCallback, useEffect, useMemo, ReactNode } from 'react';
import { CartItem } from '@/types';

interface CartContextType {
  items:          CartItem[];
  addItem:        (item: Omit<CartItem, 'quantity'>) => void;
  removeItem:     (id: string) => void;
  updateQty:      (id: string, qty: number) => void;
  clearCart:      () => void;
  totalItems:     number;
  totalPrice:     number;
  isMiniCartOpen: boolean;
  openMiniCart:   () => void;
  closeMiniCart:  () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = 'fasco-cart';

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: '1', name: 'Mini Dress With Ruffled Straps',
    price: 14.9, image: 'https://picsum.photos/seed/cart-dress/200/260',
    color: 'Red', size: 'M', quantity: 1,
  },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

  // Load from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setItems(JSON.parse(saved));
    } catch (err) {
      console.warn('[CartContext] failed to read cart from storage', err);
    }
    setIsHydrated(true);
  }, []);

  // Persist to localStorage after hydration
  useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      console.warn('[CartContext] failed to persist cart to storage', err);
    }
  }, [items, isHydrated]);

  const addItem = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsMiniCartOpen(true);
  }, []);

  const removeItem  = useCallback((id: string) => setItems(p => p.filter(i => i.id !== id)), []);
  const updateQty   = useCallback((id: string, qty: number) => {
    if (qty <= 0) setItems(p => p.filter(i => i.id !== id));
    else setItems(p => p.map(i => i.id === id ? { ...i, quantity: qty } : i));
  }, []);
  const clearCart   = useCallback(() => setItems([]), []);
  const openMiniCart  = useCallback(() => setIsMiniCartOpen(true), []);
  const closeMiniCart = useCallback(() => setIsMiniCartOpen(false), []);

  const totalItems = useMemo(
    () => items.reduce((s, i) => s + i.quantity, 0),
    [items],
  );
  const totalPrice = useMemo(
    () => items.reduce((s, i) => s + i.price * i.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextType>(() => ({
    items, addItem, removeItem, updateQty, clearCart,
    totalItems, totalPrice, isMiniCartOpen, openMiniCart, closeMiniCart,
  }), [
    items, addItem, removeItem, updateQty, clearCart,
    totalItems, totalPrice, isMiniCartOpen, openMiniCart, closeMiniCart,
  ]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
