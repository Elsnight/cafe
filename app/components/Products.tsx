"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PRICING_CONFIG } from "@/lib/pricing/pricing.config";
import { formatMoney } from "@/lib/pricing/money";
import { calculateSavings } from "@/lib/pricing/pricing";
import { useCart } from "@/app/providers/CartProvider";
import type { PackSize } from "@/lib/pricing/types";

export default function Products() {
  const { items, addItem } = useCart();

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const base = PRICING_CONFIG.basePrices;
  const image = "/Bolsa_cafe.png";

  const packCards: Array<{
    size: PackSize;
    title: string;
    description: string;
    highlight?: "bestValue";
  }> = [
    { size: 100, title: "Bolsa 100g", description: "Ideal para casa y para probar nuevas notas." },
    { size: 400, title: "Bolsa 400g", description: "Perfecta para oficina o para la semana." },
    { size: 500, title: "Bolsa 500g", description: "Buen balance entre precio y cantidad." },
    { size: 1000, title: "Bolsa 1kg", description: "Mejor ahorro por gramo.", highlight: "bestValue" },
  ];

  const duoOriginal = safeNumber(2 * base[500]);
  const duoPromo = PRICING_CONFIG.promos.duo500.bundlePrice;
  const duoSavings = calculateSavings(duoOriginal, duoPromo);

  const tastingOriginal = safeNumber(3 * base[100]);
  const tastingPromo = PRICING_CONFIG.promos.tasting100.bundlePrice;
  const tastingSavings = calculateSavings(tastingOriginal, tastingPromo);

  const getLabelStyles = (type: "featured" | "new" | "sale" | null) => {
    switch (type) {
      case "featured":
        return "bg-gold text-coffee-dark";
      case "new":
        return "bg-olive-dark text-white";
      case "sale":
        return "bg-red-500 text-white";
      default:
        return "";
    }
  };

  function safeNumber(n: number): number {
    return Number.isFinite(n) ? n : 0;
  }

  function cartQtyForSize(size: PackSize): number {
    return items.reduce((acc, it) => (it.size === size ? acc + (Number.isFinite(it.qty) ? it.qty : 0) : acc), 0);
  }

  return (
    <section
      id="productos"
      className="py-16 sm:py-20 md:py-24 lg:py-32 bg-beige-warm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-sans font-medium mb-3 sm:mb-4">
            NUESTROS PRODUCTOS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-coffee-dark leading-tight">
            Lo Que Ofrecemos
          </h2>
        </motion.div>

        {/* Cuadrícula de productos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {packCards.map((pack) => {
            const qtyInCart = cartQtyForSize(pack.size);
            const isBestValue = pack.highlight === "bestValue";

            return (
            <motion.div
              key={pack.size}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ y: -4 }}
              className={[
                "bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border group",
                isBestValue ? "border-gold/60 ring-1 ring-gold/30" : "border-beige-medium",
              ].join(" ")}
            >
              {/* Imagen del producto */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0, 0, 0.58, 1] as const }}
                  className="w-full h-full"
                >
                  <Image
                    src={image}
                    alt={pack.title}
                    fill
                    className="object-contain bg-beige-cream p-3"
                    quality={90}
                  />
                </motion.div>
                {/* Etiqueta */}
                {isBestValue && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] as const }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getLabelStyles(
                      "featured"
                    )}`}
                  >
                    Mejor valor
                  </motion.div>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5 sm:p-6">
                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 text-coffee-dark">
                  {pack.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm sm:text-base text-coffee-medium mb-5 sm:mb-6 leading-relaxed line-clamp-3">
                  {pack.description}
                </p>

                {/* Precio y botón */}
                <div className="pt-4 border-t border-beige-medium space-y-3">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <span className="block text-2xl sm:text-3xl font-serif font-bold text-gold-dark">
                        {formatMoney(base[pack.size])}
                      </span>
                      {qtyInCart > 0 && (
                        <span className="block text-xs sm:text-sm text-coffee-light mt-1">
                          En carrito: <span className="font-semibold text-coffee-medium">{qtyInCart}</span>
                        </span>
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-coffee-light">{pack.size}g</span>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <motion.button
                      type="button"
                      onClick={() => addItem({ size: pack.size, qty: 1 })}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={[
                        "w-full sm:w-auto text-center px-5 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2",
                        isBestValue
                          ? "bg-gold text-coffee-dark hover:bg-gold-light active:bg-gold-dark focus-visible:outline-gold-light"
                          : "bg-olive-dark text-white hover:bg-olive-medium active:bg-olive-light focus-visible:outline-olive-light",
                      ].join(" ")}
                    >
                      Agregar
                    </motion.button>
                    <motion.a
                      href="#pedido"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto text-center px-5 py-2.5 bg-white border border-beige-medium text-coffee-dark rounded-lg hover:bg-beige-warm active:bg-beige-cream transition-all duration-200 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                    >
                      Ir a pedido
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}

          {/* Promos */}
          {[
            {
              key: "promo-duo-500",
              title: "Dúo 500g",
              text: `Llévate 1 kilo en dos bolsas por solo ${formatMoney(duoPromo)} (ahorras ${formatMoney(
                duoSavings
              )})`,
              original: duoOriginal,
              promo: duoPromo,
              onAdd: () => addItem({ size: 500, qty: 2 }),
              badge: "Promo",
            },
            {
              key: "promo-tasting-100",
              title: "Pack degustación 3×100g",
              text: `Prueba 3 moliendas por solo ${formatMoney(tastingPromo)} (ahorras ${formatMoney(
                tastingSavings
              )})`,
              original: tastingOriginal,
              promo: tastingPromo,
              onAdd: () => addItem({ size: 100, qty: 3 }),
              badge: "Promo",
            },
          ].map((promo) => (
            <motion.div
              key={promo.key}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ y: -4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-beige-medium group sm:col-span-2 lg:col-span-2"
            >
              <div className="relative w-full h-48 sm:h-52 md:h-56 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0, 0, 0.58, 1] as const }}
                  className="w-full h-full"
                >
                  <Image
                    src={image}
                    alt={promo.title}
                    fill
                    className="object-contain bg-beige-cream p-3"
                    quality={90}
                  />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] as const }}
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getLabelStyles(
                    "sale"
                  )}`}
                >
                  {promo.badge}
                </motion.div>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 text-coffee-dark">
                  {promo.title}
                </h3>

                <p className="text-sm sm:text-base text-coffee-medium mb-5 sm:mb-6 leading-relaxed">
                  {promo.text}
                </p>

                <div className="pt-4 border-t border-beige-medium space-y-3">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div className="flex items-end gap-3">
                      <span className="text-base sm:text-lg text-coffee-light line-through">
                        {formatMoney(promo.original)}
                      </span>
                      <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-dark">
                        {formatMoney(promo.promo)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                    <motion.button
                      type="button"
                      onClick={promo.onAdd}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto text-center px-5 py-2.5 bg-gold text-coffee-dark rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-200 text-sm font-medium hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                    >
                      Añadir promo
                    </motion.button>
                    <motion.a
                      href="#pedido"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto text-center px-5 py-2.5 bg-white border border-beige-medium text-coffee-dark rounded-lg hover:bg-beige-warm active:bg-beige-cream transition-all duration-200 text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                    >
                      Ir a pedido
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
