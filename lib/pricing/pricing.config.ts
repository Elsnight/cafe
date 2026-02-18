import type { PackSize } from "./types";

export interface PricingConfig {
  basePrices: Record<PackSize, number>;
  promos: {
    duo500: { requiredSize: 500; bundleQty: 2; bundlePrice: number };
    tasting100: { requiredSize: 100; bundleQty: 3; bundlePrice: number };
    wholesale: { minTotalGrams: number; pricePerKg: number };
  };
  shipping: {
    standardWeekday: number;
    weekendPromo: number;
    freeThreshold: number;
  };
}

export const PRICING_CONFIG: PricingConfig = {
  basePrices: {
    100: 2.5,
    400: 6.95,
    500: 7.95,
    1000: 14.5,
  },
  promos: {
    duo500: { requiredSize: 500, bundleQty: 2, bundlePrice: 15.0 },
    tasting100: { requiredSize: 100, bundleQty: 3, bundlePrice: 6.0 },
    wholesale: { minTotalGrams: 5000, pricePerKg: 13.5 },
  },
  shipping: {
    standardWeekday: 2.5,
    weekendPromo: 0.99,
    freeThreshold: 35.0,
  },
};

