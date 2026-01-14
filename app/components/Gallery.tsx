"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Lista de imágenes
  const images = [
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.24 PM (1).jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.25 PM - copia.jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.25 PM.jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.26 PM (1).jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.26 PM (2).jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.02.26 PM.jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.05.02 PM (1).jpeg",
    "/Imagenes/WhatsApp Image 2026-01-14 at 1.05.02 PM.jpeg",
  ];

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

  return (
    <section
      ref={ref}
      id="galeria"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-beige-cream via-white to-beige-warm overflow-hidden"
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(90, 107, 58, 0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-sans font-medium mb-3 sm:mb-4">
            NUESTRA GALERÍA
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-coffee-dark leading-tight">
            Momentos de Café
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-coffee-medium max-w-2xl mx-auto">
            Descubre la pasión y dedicación detrás de cada grano, desde el cultivo hasta tu taza
          </p>
        </motion.div>

        {/* Galería con scroll horizontal en móvil y grid en desktop */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          style={{ opacity, scale }}
          className="relative"
        >
          {/* Grid para desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="relative group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image}
                    alt={`Galería de café ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay en hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-serif text-sm sm:text-base">
                      Café Artesanal
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll horizontal para móvil */}
          <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-4" style={{ width: 'max-content' }}>
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative flex-shrink-0 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] snap-center"
                >
                  <motion.div 
                    className="relative w-full h-full overflow-hidden rounded-xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt={`Galería de café ${index + 1}`}
                      fill
                      className="object-cover"
                      quality={90}
                      sizes="280px"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Indicador de scroll para móvil */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="md:hidden text-center mt-8"
        >
          <p className="text-sm text-coffee-medium flex items-center justify-center gap-2">
            <span>Desliza para ver más</span>
            <motion.svg
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
