import { PRICING_CONFIG, type PricingConfig } from "./pricing.config";
import { safeMoney } from "./money";
import type {
  AppliedPromotion,
  CartItem,
  DeliveryDayType,
  OrderTotals,
  ShippingQuote,
} from "./types";

function normalizeQty(qty: number): number {
  const n = Number.isFinite(qty) ? qty : 0;
  return Math.max(0, Math.floor(n));
}

function sumCartGrams(cartItems: CartItem[]): number {
  return cartItems.reduce((acc, item) => acc + item.size * normalizeQty(item.qty), 0);
}

export function getUnitPricePerGram(size: CartItem["size"], config: PricingConfig = PRICING_CONFIG): number {
  const price = config.basePrices[size];
  return safeMoney(price / size);
}

export function calculateCartTotals(cartItems: CartItem[], config: PricingConfig = PRICING_CONFIG): number {
  const subtotal = cartItems.reduce((acc, item) => {
    const qty = normalizeQty(item.qty);
    return acc + config.basePrices[item.size] * qty;
  }, 0);

  return safeMoney(subtotal);
}

export function calculateSavings(normalTotal: number, finalTotal: number): number {
  return safeMoney(Math.max(0, safeMoney(normalTotal) - safeMoney(finalTotal)));
}

export function applyPromotions(
  cartItems: CartItem[],
  config: PricingConfig = PRICING_CONFIG
): {
  normalSubtotal: number;
  promoSubtotal: number;
  discountTotal: number;
  appliedPromos: AppliedPromotion[];
} {
  const normalSubtotal = calculateCartTotals(cartItems, config);

  const countBySize = cartItems.reduce<Record<number, number>>((acc, item) => {
    const qty = normalizeQty(item.qty);
    acc[item.size] = (acc[item.size] ?? 0) + qty;
    return acc;
  }, {});

  const base500 = config.basePrices[500];
  const base100 = config.basePrices[100];

  const duoCount = Math.floor((countBySize[500] ?? 0) / config.promos.duo500.bundleQty);
  const tastingCount = Math.floor((countBySize[100] ?? 0) / config.promos.tasting100.bundleQty);

  const duoDiscountRaw = duoCount * (config.promos.duo500.bundleQty * base500 - config.promos.duo500.bundlePrice);
  const tastingDiscountRaw =
    tastingCount * (config.promos.tasting100.bundleQty * base100 - config.promos.tasting100.bundlePrice);

  const duoDiscount = safeMoney(Math.max(0, duoDiscountRaw));
  const tastingDiscount = safeMoney(Math.max(0, tastingDiscountRaw));

  const appliedPromos: AppliedPromotion[] = [];
  if (duoCount > 0) {
    appliedPromos.push({
      id: "duo500",
      label: "Dúo 500g",
      bundleCount: duoCount,
      bundleQty: config.promos.duo500.bundleQty,
      bundlePrice: config.promos.duo500.bundlePrice,
      discount: duoDiscount,
    });
  }
  if (tastingCount > 0) {
    appliedPromos.push({
      id: "tasting100",
      label: "Pack degustación 3×100g",
      bundleCount: tastingCount,
      bundleQty: config.promos.tasting100.bundleQty,
      bundlePrice: config.promos.tasting100.bundlePrice,
      discount: tastingDiscount,
    });
  }

  const discountTotal = safeMoney(duoDiscount + tastingDiscount);
  const promoSubtotal = safeMoney(Math.max(0, normalSubtotal - discountTotal));

  return { normalSubtotal, promoSubtotal, discountTotal, appliedPromos };
}

export function calculateShipping(args: {
  subtotal: number;
  deliveryDayType: DeliveryDayType;
  config?: PricingConfig;
}): ShippingQuote {
  const config = args.config ?? PRICING_CONFIG;
  const subtotal = safeMoney(args.subtotal);

  if (subtotal > config.shipping.freeThreshold) {
    return { shipping: 0, shippingRuleApplied: "free" };
  }

  if (args.deliveryDayType === "weekend") {
    return { shipping: safeMoney(config.shipping.weekendPromo), shippingRuleApplied: "weekendPromo" };
  }

  return { shipping: safeMoney(config.shipping.standardWeekday), shippingRuleApplied: "standardWeekday" };
}

export function calculateOrderTotals(args: {
  cartItems: CartItem[];
  deliveryDayType: DeliveryDayType;
  config?: PricingConfig;
}): OrderTotals {
  const config = args.config ?? PRICING_CONFIG;

  const promo = applyPromotions(args.cartItems, config);
  const totalGrams = sumCartGrams(args.cartItems);

  const eligibleWholesale = totalGrams >= config.promos.wholesale.minTotalGrams;
  const wholesaleSubtotal = eligibleWholesale
    ? safeMoney((totalGrams / 1000) * config.promos.wholesale.pricePerKg)
    : promo.promoSubtotal;

  const wholesaleIsBetter = eligibleWholesale && wholesaleSubtotal < promo.promoSubtotal;

  const promoSubtotal = wholesaleIsBetter ? wholesaleSubtotal : promo.promoSubtotal;
  const wholesaleApplied = wholesaleIsBetter;

  const appliedPromos: AppliedPromotion[] = wholesaleIsBetter
    ? [
        {
          id: "wholesale",
          label: "Mayorista (≥5kg)",
          discount: calculateSavings(promo.normalSubtotal, promoSubtotal),
        },
      ]
    : promo.appliedPromos;

  const discountTotal = calculateSavings(promo.normalSubtotal, promoSubtotal);
  const shippingQuote = calculateShipping({ subtotal: promoSubtotal, deliveryDayType: args.deliveryDayType, config });
  const total = safeMoney(promoSubtotal + shippingQuote.shipping);

  return {
    normalSubtotal: promo.normalSubtotal,
    promoSubtotal,
    shipping: shippingQuote.shipping,
    total,
    discountTotal,
    appliedPromos,
    wholesaleApplied,
    shippingRuleApplied: shippingQuote.shippingRuleApplied,
  };
}

