const notes = [
  {
    label: "Variedad actual",
    value: "Typica",
    detail: "Disponible en grano o molido.",
  },
  {
    label: "Tueste",
    value: "Medio / Oscuro",
    detail: "Se define con cada pedido.",
  },
  {
    label: "Origen",
    value: "Productores locales",
    detail: "Relaciones directas y prácticas sostenibles.",
  },
];

export default function Gallery() {
  return (
    <section className="ledger-specs" aria-labelledby="specs-title">
      <div className="ledger-shell">
        <div className="spec-sheet">
          <div>
            <h2 id="specs-title">Café artesanal ecuatoriano cultivado en Loja</h2>
            <p>
              Origen lojano, variedad Typica y tostado definido con cada pedido. Sin
              porcentajes decorativos: estas son las decisiones reales de cada lote.
            </p>
          </div>
          <dl>
            {notes.map((note) => (
              <div key={note.label}>
                <dt>{note.label}</dt>
                <dd>{note.value}</dd>
                <small>{note.detail}</small>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
