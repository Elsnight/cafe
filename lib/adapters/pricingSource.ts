import { PRICING_CONFIG, type PricingConfig } from "../pricing/pricing.config";
import type { PricingSource } from "./contracts";

export const StaticPricingSource: PricingSource<PricingConfig> = {
  getConfig() {
    return PRICING_CONFIG;
  },
};

export async function resolvePricingConfig(
  source: PricingSource<PricingConfig> = StaticPricingSource
): Promise<PricingConfig> {
  return await source.getConfig();
}

