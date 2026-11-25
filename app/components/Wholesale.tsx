import { B2B_CATALOG } from "@/lib/catalog/catalog.config";
import { formatMoney } from "@/lib/pricing/money";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const wholesaleMessage =
  "Hola, quiero cotizar un pedido mayorista de café para una cafetería, restaurante o tienda gourmet. ¿Me comparten precios por volumen y condiciones de entrega?";

export default function Wholesale() {
  return (
    <section id="mayoristas" className="ledger-wholesale">
      <div className="ledger-shell wholesale-sheet">
        <div className="wholesale-sheet__title">
          <h2>¿Tienes una cafetería, restaurante o tienda gourmet?</h2>
          <p>
            Proveemos café arábigo artesanal en grano o molido con precios especiales
            por volumen.
          </p>
        </div>

        <dl className="wholesale-sheet__terms">
          <div>
            <dt>Cafeterías · Granel</dt>
            <dd>
              Desde {formatMoney(B2B_CATALOG.cafePriceFrom)} –{" "}
              {formatMoney(B2B_CATALOG.cafePriceTo)} / kg
            </dd>
            <small>Pedido mínimo {B2B_CATALOG.cafeMinimumKg} kg</small>
          </div>
          <div>
            <dt>Tiendas y Reventa · Empacado con válvula</dt>
            <dd>Precios distribuidores</dd>
            <small>Desde {B2B_CATALOG.resaleMinimumUnits} unidades</small>
          </div>
        </dl>

        <a
          className="wholesale-sheet__action"
          href={buildWhatsAppUrl(wholesaleMessage)}
          target="_blank"
          rel="noreferrer"
        >
          Cotizar por WhatsApp
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
