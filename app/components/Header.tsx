"use client";

import { useState } from "react";
import { useCart } from "@/app/providers/CartProvider";

const links = [
  { label: "Cómo tostamos", href: "#proceso" },
  { label: "Café y precios", href: "#productos" },
  { label: "Club mensual", href: "#club" },
  { label: "Entregas", href: "#entregas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { items } = useCart();
  const count = items.reduce((total, item) => total + item.qty, 0);

  return (
    <header className="ledger-header">
      <div className="ledger-shell ledger-header__inner">
        <a className="ledger-wordmark" href="#home" aria-label="Fausto's Coffee, inicio">
          <span>Fausto&apos;s</span>
          <small>coffee · Quito</small>
        </a>

        <nav className="ledger-nav" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ledger-header__actions">
          <a className="ledger-cart" href="#pedido">
            <span>Mi lote</span>
            <strong aria-label={`${count} productos en el carrito`}>{String(count).padStart(2, "0")}</strong>
          </a>
          <button
            className="ledger-menu"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-ledger-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-ledger-nav"
        className={`ledger-mobile-nav ${open ? "is-open" : ""}`}
        aria-label="Navegación móvil"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#pedido" onClick={() => setOpen(false)}>
          Preparar pedido
        </a>
      </nav>
    </header>
  );
}
