import type { CartItem } from "../pricing/types";
import type { CartStorage } from "./contracts";
import { browserLocalStorage } from "./keyValueStorage";

function isCartItem(value: unknown): value is CartItem {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<CartItem>;
  return typeof v.id === "string" && typeof v.size === "number" && typeof v.qty === "number";
}

function parseStoredCart(raw: string | null): CartItem[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isCartItem);
  } catch {
    return [];
  }
}

export function createLocalStorageCartStorage(key: string): CartStorage<CartItem> {
  const storage = browserLocalStorage();
  return {
    read() {
      return parseStoredCart(storage.getItem(key));
    },
    write(items) {
      storage.setItem(key, JSON.stringify(items));
    },
    clear() {
      storage.removeItem(key);
    },
  };
}

