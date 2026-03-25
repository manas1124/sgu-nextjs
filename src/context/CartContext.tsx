// src/context/CartContext.tsx
'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
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

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: '1', name: 'Mini Dress With Ruffled Straps',
      price: 14.9, image: 'https://picsum.photos/seed/cart-dress/200/260',
      color: 'Red', size: 'M', quantity: 1,
    },
  ]);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);

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

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart,
      totalItems, totalPrice, isMiniCartOpen, openMiniCart, closeMiniCart,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
