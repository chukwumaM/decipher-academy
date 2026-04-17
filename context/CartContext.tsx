'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { CartItem, Product } from '@/lib/types';

type CartContextType = {
  items: CartItem[];
  addItem: (product: Product, size?: string) => void;
  updateQty: (id: string, qty: number, size?: string) => void;
  removeItem: (id: string, size?: string) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wendy-cart');
    if (stored) setItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem('wendy-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, size?: string) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p._id === product._id && p.selectedSize === size);
      if (idx >= 0) {
        const next = [...prev];
        next[idx].qty += 1;
        return next;
      }
      return [...prev, { ...product, qty: 1, selectedSize: size }];
    });
  };

  const updateQty = (id: string, qty: number, size?: string) => {
    setItems((prev) => prev.map((i) => (i._id === id && i.selectedSize === size ? { ...i, qty: Math.max(1, qty) } : i)));
  };

  const removeItem = (id: string, size?: string) => {
    setItems((prev) => prev.filter((i) => !(i._id === id && i.selectedSize === size)));
  };

  const clear = () => setItems([]);
  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);

  return (
    <CartContext.Provider value={{ items, addItem, updateQty, removeItem, total, clear }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
