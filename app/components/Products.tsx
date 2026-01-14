"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Products() {
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

  const products = [
    {
      id: 1,
      title: "Café en Grano",
      description:
        "Granos seleccionados de origen único, tostados artesanalmente para preservar sus notas características y aroma intenso.",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070",
      label: "Destacado",
      labelType: "featured" as const,
    },
    {
      id: 2,
      title: "Café Molido",
      description:
        "Café molido fresco, listo para preparar. Disponible en diferentes niveles de molienda según tu método de preparación preferido.",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2035",
      label: "Nuevo",
      labelType: "new" as const,
    },
    {
      id: 3,
      title: "Blends Especiales",
      description:
        "Mezclas exclusivas creadas por nuestro maestro tostador. Combinaciones perfectas de diferentes orígenes para sabores únicos.",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061",
      label: null,
      labelType: null,
    },
    {
      id: 4,
      title: "Accesorios Premium",
      description:
        "Completa tu experiencia cafetera con nuestros accesorios seleccionados: molinillos, prensas francesas y más.",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1517668808823-f8f0e8e3b3f3?q=80&w=2070",
      label: "Oferta",
      labelType: "sale" as const,
    },
  ];

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
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              whileTap={{ y: -4 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-beige-medium group"
            >
              {/* Imagen del producto */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4, ease: [0, 0, 0.58, 1] as const }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                </motion.div>
                {/* Etiqueta */}
                {product.label && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] as const }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${getLabelStyles(
                      product.labelType
                    )}`}
                  >
                    {product.label}
                  </motion.div>
                )}
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-5 sm:p-6">
                {/* Título */}
                <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-3 text-coffee-dark">
                  {product.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm sm:text-base text-coffee-medium mb-5 sm:mb-6 leading-relaxed line-clamp-3">
                  {product.description}
                </p>

                {/* Precio y botón */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-beige-medium">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-dark">
                    {product.price}
                  </span>
                  <motion.a
                    href="#pedido"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto text-center px-5 py-2.5 bg-gold text-coffee-dark rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-200 text-sm font-medium hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                  >
                    Ver Más
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
