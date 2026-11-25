import type { Metadata } from "next";
import LegalPage from "../components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Fausto's Coffee",
  description:
    "Condiciones básicas para pedidos, pagos y entregas de Fausto's Coffee en Quito.",
  alternates: {
    canonical: "/terminos/",
  },
};

const sections = [
  {
    title: "Pedidos",
    paragraphs: [
      "La web permite configurar y calcular un pedido. La compra se confirma directamente con Fausto's Coffee mediante WhatsApp, donde se validan disponibilidad, datos de entrega y forma de pago.",
    ],
  },
  {
    title: "Precios y promociones",
    paragraphs: [
      "Los precios mostrados están expresados en dólares de los Estados Unidos e incluyen las promociones indicadas. El costo de entrega se informa antes de preparar el mensaje de WhatsApp.",
    ],
  },
  {
    title: "Tostado y preparación",
    paragraphs: [
      "El café se tuesta bajo pedido. La presentación, molienda y nivel de tueste se preparan según la selección confirmada por el cliente.",
    ],
  },
  {
    title: "Entregas",
    paragraphs: [
      "Las entregas se coordinan en Quito y zonas comunicadas en el sitio. El plazo habitual es de 24 a 48 horas y puede variar por ubicación, disponibilidad o circunstancias operativas.",
    ],
  },
  {
    title: "Cambios y novedades",
    paragraphs: [
      "Si existe un inconveniente con el pedido, contáctanos tan pronto como sea posible para revisar el caso y ofrecer una solución adecuada.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Términos y Condiciones"
      updatedAt="25 de noviembre de 2026"
      sections={sections}
    />
  );
}
