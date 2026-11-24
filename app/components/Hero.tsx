"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/app/providers/CartProvider";
import { PRICING_CONFIG } from "@/lib/pricing/pricing.config";
import { formatMoney } from "@/lib/pricing/money";
import type { PackSize, Presentation, Roast } from "@/lib/pricing/types";

const sizes: PackSize[] = [100, 400, 500, 1000];

export default function Hero() {
  const { addItem } = useCart();
  const [size, setSize] = useState<PackSize>(500);
  const [presentation, setPresentation] = useState<Presentation>("Molido");
  const [roast, setRoast] = useState<Roast>("Medio");
  const [added, setAdded] = useState(false);

  const addBatch = () => {
    addItem({ size, qty: 1, presentation, roast, variety: "Typica" });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <section id="home" className="ledger-hero">
      <div className="ledger-shell">
        <div className="batch-sheet">
          <div className="batch-sheet__holes" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, index) => <span key={index} />)}
          </div>

          <div className="batch-claim">
            <motion.h1
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              Tostamos después de <em>tu pedido.</em>
            </motion.h1>
            <p className="batch-claim__copy">
              No sacamos una bolsa vieja de una estantería. Tu selección entra al lote de
              Fausto y se tuesta para ti.
            </p>
            <div className="batch-stamp">Tostado a pedido · Typica</div>
          </div>

          <div className="batch-flow" aria-label="Proceso del pedido">
            <div className="batch-flow__stage is-active">
              <span>Pedido recibido</span>
              <strong>Tu selección</strong>
              <small>Listo para entrar al lote</small>
            </div>
            <div className="batch-flow__stage">
              <span>Tostado para ti</span>
              <strong>Fausto tuesta</strong>
              <small>Después de confirmar</small>
            </div>
            <div className="batch-flow__stage is-green">
              <span>Entrega en Quito</span>
              <strong>24–48 h</strong>
              <small>Según el día elegido</small>
            </div>
          </div>

          <div className="batch-config">
            <fieldset>
              <legend>Elige tu paquete</legend>
              <div className="batch-options batch-options--sizes">
                {sizes.map((packSize) => (
                  <button
                    type="button"
                    key={packSize}
                    className={size === packSize ? "is-selected" : ""}
                    onClick={() => setSize(packSize)}
                    aria-pressed={size === packSize}
                  >
                    <b>{packSize === 1000 ? "1 kg" : `${packSize} g`}</b>
                    <span>{formatMoney(PRICING_CONFIG.basePrices[packSize])}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="batch-config__row">
              <fieldset>
                <legend>Presentación</legend>
                <div className="batch-options">
                  {(["Molido", "Grano"] as Presentation[]).map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={presentation === value ? "is-selected" : ""}
                      onClick={() => setPresentation(value)}
                      aria-pressed={presentation === value}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset>
                <legend>Tueste</legend>
                <div className="batch-options">
                  {(["Medio", "Oscuro"] as Roast[]).map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={roast === value ? "is-selected" : ""}
                      onClick={() => setRoast(value)}
                      aria-pressed={roast === value}
                    >
                      {value}
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="batch-config__action">
              <div>
                <span>Tu lote</span>
                <strong>{size === 1000 ? "1 kg" : `${size} g`} · {presentation} · {roast}</strong>
              </div>
              <button type="button" onClick={addBatch} className={added ? "is-added" : ""}>
                {added ? "Agregado al lote" : "Agregar al lote"}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="batch-sheet__foot">
            <span>Origen sostenible</span>
            <span>Variedad Typica</span>
            <span>Pedido por WhatsApp</span>
          </div>
        </div>
      </div>
    </section>
  );
}
