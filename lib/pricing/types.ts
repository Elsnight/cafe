export type PackSize = 100 | 400 | 500 | 1000;

export type DeliveryDayType = "weekday" | "weekend";

export type Presentation = "Molido" | "Grano";

export type Roast = "Medio" | "Oscuro";

export type Variety = "Typica";

export type PromotionId = "duo500" | "tasting100" | "wholesale";

export interface CartItem {
  id: string;
  size: PackSize;
  qty: number;
  presentation?: Presentation;
  roast?: Roast;
  variety?: Variety;
}

export interface AppliedPromotion {
  id: PromotionId;
  label: string;
  bundleCount?: number;
  bundleQty?: number;
  bundlePrice?: number;
  discount: number;
}

export interface ShippingQuote {
  shipping: number;
  shippingRuleApplied: "free" | "weekendPromo" | "standardWeekday";
}

export interface OrderTotals {
  normalSubtotal: number;
  promoSubtotal: number;
  shipping: number;
  total: number;
  discountTotal: number;
  appliedPromos: AppliedPromotion[];
  wholesaleApplied: boolean;
  shippingRuleApplied: ShippingQuote["shippingRuleApplied"];
}
