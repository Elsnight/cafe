export function safeMoney(amount: number): number {
  const n = Number.isFinite(amount) ? amount : 0;
  const clamped = Math.max(0, n);
  return Math.round(clamped * 100) / 100;
}

export function formatMoney(amount: number): string {
  return `$${safeMoney(amount).toFixed(2)}`;
}

