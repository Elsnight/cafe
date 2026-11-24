export default function Footer() {
  return (
    <footer className="ledger-footer" id="contacto">
      <div className="ledger-shell ledger-footer__grid">
        <div>
          <a className="ledger-wordmark ledger-wordmark--footer" href="#home">
            <span>Fausto&apos;s</span>
            <small>coffee · Quito</small>
          </a>
          <p>Café Typica tostado después de tu pedido.</p>
        </div>
        <div>
          <span>Contacto</span>
          <a href="https://wa.me/593996436622">+593 99 643 6622</a>
          <a href="mailto:contacto@faustoscoffee.com">contacto@faustoscoffee.com</a>
        </div>
        <div>
          <span>Horario</span>
          <p>Lun–Vie · 8:00–18:00</p>
          <p>Sábado · 9:00–16:00</p>
        </div>
      </div>
      <div className="ledger-shell ledger-footer__bottom">
        <span>© {new Date().getFullYear()} Fausto&apos;s Coffee</span>
        <span>Quito, Ecuador</span>
      </div>
    </footer>
  );
}
