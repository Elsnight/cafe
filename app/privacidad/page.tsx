import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad | Fausto's Coffee",
  description:
    "Conoce cómo Fausto's Coffee trata los datos compartidos al realizar pedidos de café en Quito.",
  alternates: {
    canonical: "/privacidad/",
  },
};

const sections = [
  {
    title: "Datos que recopilamos",
    paragraphs: [
      "Recopilamos los datos que proporcionas voluntariamente al preparar un pedido: nombre, teléfono, correo electrónico, dirección, referencias de entrega y preferencias de café.",
    ],
  },
  {
    title: "Cómo usamos tus datos",
    paragraphs: [
      "Usamos esta información únicamente para confirmar, preparar y entregar pedidos; responder consultas; y mantener la continuidad del servicio solicitado.",
      "El pedido se completa mediante WhatsApp. El uso de esa plataforma también está sujeto a sus propias condiciones y política de privacidad.",
    ],
  },
  {
    title: "Conservación y protección",
    paragraphs: [
      "Conservamos la información solo durante el tiempo necesario para atender el pedido, cumplir obligaciones aplicables y resolver solicitudes. No vendemos tus datos personales.",
    ],
  },
  {
    title: "Tus derechos",
    paragraphs: [
      "Puedes solicitar acceso, corrección o eliminación de tus datos escribiéndonos por los canales de contacto indicados en esta página.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Política de Privacidad"
      updatedAt="25 de noviembre de 2026"
      sections={sections}
    />
  );
}
