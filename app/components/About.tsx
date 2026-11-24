const stages = [
  {
    title: "Entra tu pedido",
    body: "Eliges tamaño, presentación y tueste. Esa selección define tu lote; no parte de inventario viejo.",
    status: "RECIBIDO",
  },
  {
    title: "Fausto lo tuesta",
    body: "El café Typica se tuesta después de confirmar el pedido para cuidar su frescura.",
    status: "EN TOSTADO",
  },
  {
    title: "Sale hacia Quito",
    body: "Preparamos la entrega con el precio y el plazo visibles antes de abrir WhatsApp.",
    status: "LISTO",
  },
];

export default function About() {
  return (
    <section id="proceso" className="ledger-process">
      <div className="ledger-shell">
        <div className="ledger-section-heading">
          <h2>Tu café no espera en una funda.</h2>
          <p>
            El pedido es la señal de inicio. Así convertimos una elección sencilla en
            un lote fresco, tostado para ti y listo para tu ritual en casa.
          </p>
        </div>

        <div className="process-register">
          {stages.map((stage, index) => (
            <article
              key={stage.title}
            >
              <span className="process-register__index">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </div>
              <strong>{stage.status}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
