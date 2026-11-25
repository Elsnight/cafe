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
          <h2>Envíos de café a domicilio en Quito</h2>
          <p>
            Entregamos en 24-48 h en el norte, centro y sur de Quito, además de
            Cumbayá, Tumbaco, Los Chillos y Calderón. El carrito calcula promociones,
            envío y descuento antes de preparar el mensaje de WhatsApp.
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
