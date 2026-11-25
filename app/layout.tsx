import type { Metadata } from "next";
import { Azeret_Mono, Barlow_Condensed, Public_Sans } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.faustoscoffee.com";
const seoTitle = "Café Lojano de Altura Molido y en Grano | Quito | Fausto's";
const seoDescription =
  "Café lojano de altura tostado bajo pedido, molido o en grano. Café artesanal ecuatoriano desde $2.50 con envíos en Quito en 24-48 h. Pide por WhatsApp.";

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
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "/",
    siteName: "Fausto's Coffee",
    title: seoTitle,
    description: seoDescription,
    images: [
      {
        url: "/Bolsa_cafe_dos.png",
        alt: "Bolsa de café lojano de altura Fausto's Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/Bolsa_cafe_dos.png"],
  },
};

const storeStructuredData = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Fausto's Coffee",
  description:
    "Café lojano artesanal tostado bajo pedido, molido y en grano, con envíos en Quito.",
  url: `${siteUrl}/`,
  telephone: "+593996436622",
  email: "contacto@faustoscoffee.com",
  image: `${siteUrl}/logo.png`,
  priceRange: "$2.50 - $15.50",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },
  areaServed: [
    "Quito",
    "Cumbayá",
    "Tumbaco",
    "Valle de los Chillos",
    "Calderón",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeStructuredData) }}
        />
      </head>
      <body
        className={`${barlowCondensed.variable} ${publicSans.variable} ${azeretMono.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
