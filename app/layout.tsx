import type { Metadata } from "next";
import { Azeret_Mono, Barlow_Condensed, Public_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const publicSans = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const azeretMono = Azeret_Mono({
  variable: "--font-ledger",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fausto's Coffee | Café tostado a pedido en Quito",
  description:
    "Elige café Typica en grano o molido, tostado medio u oscuro, y prepara tu pedido para entrega en Quito.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${barlowCondensed.variable} ${publicSans.variable} ${azeretMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
