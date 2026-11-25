export default function CTA() {
  return (
    <section id="sobre-nosotros" className="ledger-founder">
      <div className="ledger-shell ledger-founder__grid">
        <div className="founder-mark" aria-hidden="true">
          <span>F</span>
          <small>Tostador</small>
        </div>
        <blockquote>
          “El café no es solo una bebida. Es un ritual y un momento de conexión.”
          <footer>
            <strong>Fausto</strong>
            <span>Fundador y tostador</span>
          </footer>
        </blockquote>
        <div className="founder-note">
          <h2>Pide hoy tu café lojano recién tostado</h2>
          <p>
            Fausto acompaña el proceso desde la selección hasta el tostado. Tu pedido
            conserva esa relación directa: eliges en la web y confirmas con el negocio
            por WhatsApp.
          </p>
          <a href="#pedido">Preparar mi lote</a>
        </div>
      </div>
    </section>
  );
}
