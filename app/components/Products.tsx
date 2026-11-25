"use client";

import { useState } from "react";
import { useCart } from "@/app/providers/CartProvider";
import { PRICING_CONFIG } from "@/lib/pricing/pricing.config";
import { formatMoney } from "@/lib/pricing/money";
import { CATALOG_PACKS, PROMOTION_CATALOG } from "@/lib/catalog/catalog.config";
import type { PackSize } from "@/lib/pricing/types";

export default function Products() {
  const { items, addItem } = useCart();
  const [lastAdded, setLastAdded] = useState<string | null>(null);
  const base = PRICING_CONFIG.basePrices;

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
          <h2>Café lojano molido y en grano: elige tu presentación</h2>
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
          {CATALOG_PACKS.map((pack) => {
            const key = `pack-${pack.size}`;
            const count = quantityFor(pack.size);
            return (
              <article key={pack.size}>
                <div className="product-ledger__size">
                  <b>{pack.size === 1000 ? "1 kg" : `${pack.size} g`}</b>
                  <small>{pack.badge}</small>
                </div>
                <p>{pack.detail}</p>
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

        <section className="promo-section" aria-labelledby="promos-title">
          <div className="promo-ledger__heading">
            <h3 id="promos-title">Packs y promociones</h3>
            <p>Órdenes combinadas con el ahorro escrito antes de agregarlas al lote.</p>
          </div>
          <div className="promo-ledger">
            <article>
              <div>
                <h3>{PROMOTION_CATALOG.duo500.title}</h3>
                <p>{PROMOTION_CATALOG.duo500.detail}</p>
              </div>
              <strong>{formatMoney(PROMOTION_CATALOG.duo500.price)}</strong>
              <button
                type="button"
                onClick={() =>
                  add(
                    "duo",
                    PROMOTION_CATALOG.duo500.size,
                    PROMOTION_CATALOG.duo500.quantity
                  )
                }
                className={lastAdded === "duo" ? "is-added" : ""}
              >
                {lastAdded === "duo" ? "Agregado al lote" : "Agregar al lote"}
              </button>
            </article>
            <article>
              <div>
                <h3>{PROMOTION_CATALOG.tasting100.title}</h3>
                <p>{PROMOTION_CATALOG.tasting100.detail}</p>
              </div>
              <strong>{formatMoney(PROMOTION_CATALOG.tasting100.price)}</strong>
              <button
                type="button"
                onClick={() =>
                  add(
                    "tasting",
                    PROMOTION_CATALOG.tasting100.size,
                    PROMOTION_CATALOG.tasting100.quantity
                  )
                }
                className={lastAdded === "tasting" ? "is-added" : ""}
              >
                {lastAdded === "tasting" ? "Agregado al lote" : "Agregar al lote"}
              </button>
            </article>
          </div>
        </section>

        <a className="products-next" href="#pedido">
          Continuar con mi pedido
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
}
