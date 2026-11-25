import Link from "next/link";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

export default function LegalPage({
  title,
  updatedAt,
  sections,
}: {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <div className="roast-ledger legal-page">
      <header className="legal-header">
        <div className="ledger-shell legal-header__inner">
          <Link className="ledger-wordmark" href="/" aria-label="Fausto's Coffee, inicio">
            <span>Fausto&apos;s</span>
            <small>coffee · Quito</small>
          </Link>
          <Link href="/">Volver al inicio</Link>
        </div>
      </header>

      <main className="legal-main">
        <article className="ledger-shell legal-sheet">
          <header>
            <h1>{title}</h1>
            <p>Última actualización: {updatedAt}</p>
          </header>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section>
            <h2>Contacto</h2>
            <p>
              Para consultas sobre este documento, escribe a{" "}
              <a href="mailto:contacto@faustoscoffee.com">
                contacto@faustoscoffee.com
              </a>{" "}
              o comunícate al{" "}
              <a href="https://wa.me/593996436622">+593 99 643 6622</a>.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
