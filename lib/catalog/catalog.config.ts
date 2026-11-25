import { PRICING_CONFIG } from "@/lib/pricing/pricing.config";
import type { PackSize } from "@/lib/pricing/types";

export type CatalogPack = {
  size: PackSize;
  badge: string;
  detail: string;
};

export const CATALOG_PACKS: CatalogPack[] = [
  {
    size: 100,
    badge: "Prueba o Regalo",
    detail: "Ideal para conocer nuestras notas o llevar de viaje.",
  },
  {
    size: 400,
    badge: "Más Vendido",
    detail: "El tamaño perfecto para tu consumo semanal en casa.",
  },
  {
    size: 500,
    badge: "Favorito",
    detail: "Medio kilo de café recién tostado con molienda a elección.",
  },
  {
    size: 1000,
    badge: "Mejor Ahorro",
    detail: "Máximo rendimiento por gramo para hogares muy cafeteros.",
  },
];

export const PROMOTION_CATALOG = {
  duo500: {
    title: "Dúo 500 g",
    price: PRICING_CONFIG.promos.duo500.bundlePrice,
    size: 500 as const,
    quantity: 2,
    detail:
      "Llévate 2 bolsas de 500 g por solo $15.00 (ahorras $2.00 frente al precio individual de $17.00). Ideal para mantener una bolsa sellada mientras consumes la otra.",
  },
  tasting100: {
    title: "Pack Degustación 3 × 100 g",
    price: PRICING_CONFIG.promos.tasting100.bundlePrice,
    size: 100 as const,
    quantity: 3,
    detail:
      "Prueba nuestras 3 moliendas o niveles de tueste por $6.50 (ahorras $1.00 frente a comprar 3 individuales a $7.50).",
  },
} as const;

export const COFFEE_CLUB_PLANS = [
  {
    name: "Plan Pareja / Oficina",
    monthlyPrice: 12.5,
    detail: "800 gramos al mes. Ahorro de $1.40 frente a la compra individual ($13.90).",
    delivery: "2 bolsas de 400 g / mes",
  },
  {
    name: "Plan Cafetero Clásico",
    monthlyPrice: 14.5,
    detail: "1 kilo al mes en dos empaques frescos. Ahorro de $2.50 frente a compra individual ($17.00).",
    delivery: "2 bolsas de 500 g / mes",
  },
  {
    name: "Plan Kilo Familiar",
    monthlyPrice: 13.5,
    detail: "1000 gramos al mes en un solo paquete. Ahorro de $2.00 frente al precio de $15.50.",
    delivery: "1 bolsa de 1 kg / mes",
  },
] as const;

export const B2B_CATALOG = {
  cafePriceFrom: 11.5,
  cafePriceTo: 12,
  cafeMinimumKg: 5,
  resaleMinimumUnits: 12,
} as const;
