import test from "node:test";
import assert from "node:assert/strict";

import { PRICING_CONFIG } from "./pricing.config";
import { applyPromotions, calculateOrderTotals, calculateShipping } from "./pricing";
import type { CartItem } from "./types";

function item(size: CartItem["size"], qty: number, id = `${size}|${qty}`): CartItem {
  return { id, size, qty };
}

test("catálogo: usa los precios vigentes por presentación", () => {
  assert.deepEqual(PRICING_CONFIG.basePrices, {
    100: 2.5,
    400: 6.95,
    500: 8.5,
    1000: 15.5,
  });
});

test("promo: 2×500g aplica precio fijo $15.00", () => {
  const cartItems = [item(500, 2)];
  const promo = applyPromotions(cartItems, PRICING_CONFIG);

  assert.equal(promo.normalSubtotal, 17.0);
  assert.equal(promo.promoSubtotal, 15.0);
  assert.equal(promo.discountTotal, 2.0);
  assert.equal(promo.appliedPromos.length, 1);
  assert.equal(promo.appliedPromos[0]?.id, "duo500");
});

test("promo: pack degustación 3×100g (mezclable) aplica $6.50", () => {
  const cartItems = [item(100, 1, "100|a"), item(100, 2, "100|b")];
  const promo = applyPromotions(cartItems, PRICING_CONFIG);

  assert.equal(promo.normalSubtotal, 7.5);
  assert.equal(promo.promoSubtotal, 6.5);
  assert.equal(promo.discountTotal, 1.0);
  assert.equal(promo.appliedPromos.length, 1);
  assert.equal(promo.appliedPromos[0]?.id, "tasting100");
});

test("mayorista: ≥5kg aplica $12.00/kg si es mejor precio (no stackea)", () => {
  const cartItems = [item(1000, 6)];
  const totals = calculateOrderTotals({ cartItems, deliveryDayType: "weekday", config: PRICING_CONFIG });

  assert.equal(totals.normalSubtotal, 93.0);
  assert.equal(totals.promoSubtotal, 72.0);
  assert.equal(totals.wholesaleApplied, true);
  assert.equal(totals.appliedPromos.length, 1);
  assert.equal(totals.appliedPromos[0]?.id, "wholesale");
  assert.equal(totals.discountTotal, 21.0);
});

test("envío: entre semana vs fin de semana vs gratis (> $35.00)", () => {
  assert.deepEqual(calculateShipping({ subtotal: 10, deliveryDayType: "weekday", config: PRICING_CONFIG }), {
    shipping: 2.5,
    shippingRuleApplied: "standardWeekday",
  });

  assert.deepEqual(calculateShipping({ subtotal: 10, deliveryDayType: "weekend", config: PRICING_CONFIG }), {
    shipping: 0.99,
    shippingRuleApplied: "weekendPromo",
  });

  assert.deepEqual(calculateShipping({ subtotal: 35.01, deliveryDayType: "weekday", config: PRICING_CONFIG }), {
    shipping: 0,
    shippingRuleApplied: "free",
  });
});

test("recalcula ahorro si cambian precios base en config", () => {
  const config2 = {
    ...PRICING_CONFIG,
    basePrices: { ...PRICING_CONFIG.basePrices, 500: 8.95 },
  };

  const promo = applyPromotions([item(500, 2)], config2);
  assert.equal(promo.normalSubtotal, 17.9);
  assert.equal(promo.promoSubtotal, 15.0);
  assert.equal(promo.discountTotal, 2.9);
});
