const terms = [
  ["Lun–Vie", "$2.50", "Entrega estándar en 24–48 h"],
  ["Fin de semana", "$0.99", "Tarifa promocional en Quito"],
  ["Pedidos +$35", "$0.00", "Envío sin costo"],
];

export default function Features() {
  return (
    <section id="entregas" className="ledger-delivery">
      <div className="ledger-shell ledger-delivery__grid">
        <div>
          <h2>El total llega claro antes que el café.</h2>
          <p>
            Sin tarifas escondidas. El carrito calcula promociones, envío y descuento
            antes de preparar el mensaje de WhatsApp.
          </p>
          <a href="#pedido">Revisar mi pedido</a>
        </div>
        <div className="delivery-table" role="table" aria-label="Tarifas de entrega">
          {terms.map(([day, price, detail]) => (
            <div role="row" key={day}>
              <span role="cell">{day}</span>
              <strong role="cell">{price}</strong>
              <small role="cell">{detail}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
