import { COFFEE_CLUB_PLANS } from "@/lib/catalog/catalog.config";
import { formatMoney } from "@/lib/pricing/money";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function CoffeeClub() {
  return (
    <section id="club" className="ledger-club">
      <div className="ledger-shell">
        <div className="ledger-club__heading">
          <h2>Café recién tostado en tu puerta cada mes, sin preocuparte por volver a pedir.</h2>
          <p>
            Elige el ritmo que corresponde a tu consumo. Confirmamos por WhatsApp la
            presentación, el tueste y los datos de entrega.
          </p>
        </div>

        <div className="club-register">
          {COFFEE_CLUB_PLANS.map((plan, index) => {
            const message = `Hola, quiero suscribirme al ${plan.name} de Fausto's Coffee por ${formatMoney(plan.monthlyPrice)} al mes. ¿Me ayudan a confirmar presentación, tueste y entrega?`;

            return (
              <article key={plan.name}>
                <div className="club-register__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="club-register__content">
                  <h3>{plan.name}</h3>
                  <strong>{plan.delivery}</strong>
                  <p>{plan.detail}</p>
                </div>
                <div className="club-register__price">
                  <strong>{formatMoney(plan.monthlyPrice)}</strong>
                  <span>/ mes</span>
                </div>
                <a href={buildWhatsAppUrl(message)} target="_blank" rel="noreferrer">
                  Suscribirme por WhatsApp
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
