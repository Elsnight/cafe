export interface KeyValueStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function browserLocalStorage(): KeyValueStorage {
  return {
    getItem(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    setItem(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // ignore storage failures (private mode, quota, etc.)
      }
    },
    removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch {
        // ignore storage failures
      }
    },
  };
}

