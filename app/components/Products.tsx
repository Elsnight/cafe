"use client";

import { useState } from "react";
import { useCart } from "@/app/providers/CartProvider";
import { PRICING_CONFIG } from "@/lib/pricing/pricing.config";
import { formatMoney } from "@/lib/pricing/money";
import { calculateSavings } from "@/lib/pricing/pricing";
import type { PackSize } from "@/lib/pricing/types";

const packs: Array<{ size: PackSize; use: string }> = [
  { size: 100, use: "Para probar una nueva nota" },
  { size: 400, use: "Para la semana en casa" },
  { size: 500, use: "Balance entre cantidad y precio" },
  { size: 1000, use: "El mejor precio por gramo" },
];

export default function Products() {
  const { items, addItem } = useCart();
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const base = PRICING_CONFIG.basePrices;
  const duoPrice = PRICING_CONFIG.promos.duo500.bundlePrice;
  const tastingPrice = PRICING_CONFIG.promos.tasting100.bundlePrice;
  const duoSavings = calculateSavings(2 * base[500], duoPrice);
  const tastingSavings = calculateSavings(3 * base[100], tastingPrice);

  const quantityFor = (size: PackSize) =>
    items.reduce((total, item) => total + (item.size === size ? item.qty : 0), 0);

  const add = (key: string, size: PackSize, qty = 1) => {
    addItem({ size, qty });
    setLastAdded(key);
    window.setTimeout(() => setLastAdded(null), 1500);
  };

  return (
    <section id="productos" className="ledger-products">
      <div className="ledger-shell">
        <div className="ledger-section-heading ledger-section-heading--inverse">
          <h2>Elige cuánto entra al lote.</h2>
          <p>
            Los precios y promociones se calculan con la misma configuración que llegará
            en tu resumen final.
          </p>
        </div>

        <div className="product-ledger">
          <div className="product-ledger__head" aria-hidden="true">
            <span>Presentación</span>
            <span>Uso recomendado</span>
            <span>Precio</span>
            <span>Acción</span>
          </div>
          {packs.map((pack) => {
            const key = `pack-${pack.size}`;
            const count = quantityFor(pack.size);
            return (
              <article key={pack.size}>
                <div className="product-ledger__size">
                  <b>{pack.size === 1000 ? "1 kg" : `${pack.size} g`}</b>
                  {pack.size === 1000 && <small>MEJOR VALOR</small>}
                </div>
                <p>{pack.use}</p>
                <strong>{formatMoney(base[pack.size])}</strong>
                <button
                  type="button"
                  onClick={() => add(key, pack.size)}
                  className={lastAdded === key ? "is-added" : ""}
                >
                  {lastAdded === key ? "Agregado" : "Agregar"}
                  {count > 0 && <span>{count}</span>}
                </button>
              </article>
            );
          })}
        </div>

        <div className="promo-ledger">
          <article>
            <div>
              <span>PROMO DE LOTE</span>
              <h3>Dúo 500 g</h3>
              <p>Dos bolsas de 500 g. Ahorras {formatMoney(duoSavings)}.</p>
            </div>
            <strong>{formatMoney(duoPrice)}</strong>
            <button
              type="button"
              onClick={() => add("duo", 500, 2)}
              className={lastAdded === "duo" ? "is-added" : ""}
            >
              {lastAdded === "duo" ? "Agregado" : "Añadir dúo"}
            </button>
          </article>
          <article>
            <div>
              <span>PROMO DE PRUEBA</span>
              <h3>Degustación 3×100 g</h3>
              <p>Tres bolsas de 100 g. Ahorras {formatMoney(tastingSavings)}.</p>
            </div>
            <strong>{formatMoney(tastingPrice)}</strong>
            <button
              type="button"
              onClick={() => add("tasting", 100, 3)}
              className={lastAdded === "tasting" ? "is-added" : ""}
            >
              {lastAdded === "tasting" ? "Agregado" : "Añadir pack"}
            </button>
          </article>
        </div>

        <a className="products-next" href="#pedido">
          Continuar con mi pedido
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
}
