"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartItem, PackSize, Presentation, Roast, Variety } from "@/lib/pricing/types";
import { createLocalStorageCartStorage } from "@/lib/adapters/cartStorage";

const STORAGE_KEY = "faustos_cart_v1";

type AddItemInput = {
  size: PackSize;
  qty?: number;
  presentation?: Presentation;
  roast?: Roast;
  variety?: Variety;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (input: AddItemInput) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function normalizeQty(qty: number): number {
  const n = Number.isFinite(qty) ? qty : 0;
  return Math.max(0, Math.min(99, Math.floor(n)));
}

function createCartItemId(input: AddItemInput): string {
  const parts = [
    String(input.size),
    input.presentation ?? "",
    input.roast ?? "",
    input.variety ?? "",
  ];
  return parts.join("|");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const cartStorage = useMemo(() => createLocalStorageCartStorage(STORAGE_KEY), []);

  useEffect(() => {
    setItems(cartStorage.read());
  }, [cartStorage]);

  useEffect(() => {
    cartStorage.write(items);
  }, [items, cartStorage]);

  const addItem = useCallback((input: AddItemInput) => {
    const qtyToAdd = normalizeQty(input.qty ?? 1);
    if (qtyToAdd <= 0) return;

    const id = createCartItemId(input);
    setItems((prev) => {
      const existing = prev.find((x) => x.id === id);
      if (!existing) {
        return [
          ...prev,
          {
            id,
            size: input.size,
            qty: qtyToAdd,
            presentation: input.presentation,
            roast: input.roast,
            variety: input.variety,
          },
        ];
      }

      return prev.map((x) => (x.id === id ? { ...x, qty: normalizeQty(x.qty + qtyToAdd) } : x));
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((x) => x.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const nextQty = normalizeQty(qty);
    setItems((prev) => {
      if (nextQty <= 0) return prev.filter((x) => x.id !== id);
      return prev.map((x) => (x.id === id ? { ...x, qty: nextQty } : x));
    });
  }, []);

  const clear = useCallback(() => {
    cartStorage.clear();
    setItems([]);
  }, [cartStorage]);

  const value = useMemo<CartContextValue>(() => ({ items, addItem, removeItem, setQty, clear }), [
    items,
    addItem,
    removeItem,
    setQty,
    clear,
  ]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
}

