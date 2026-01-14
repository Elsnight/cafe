"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CTA() {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const }, // easeOut bezier curve
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0, 0, 0.58, 1] as const }, // easeOut bezier curve
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const }, // easeOut bezier curve
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const }, // easeOut bezier curve
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 min-h-[500px] lg:min-h-[600px]"
        >
          {/* Bloque izquierdo (visual) */}
          <motion.div
            variants={slideInLeft}
            className="relative order-2 lg:order-1 overflow-hidden"
          >
            {/* Franja vertical con texto girado */}
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-24 md:w-28 lg:w-32 z-10 bg-gold flex items-center justify-center">
              <motion.div
                variants={fadeIn}
                className="transform -rotate-90 whitespace-nowrap"
              >
                <span className="text-coffee-dark font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wider">
                  2000+ CLIENTES SATISFECHOS
                </span>
              </motion.div>
            </div>

            {/* Imagen de fondo */}
            <motion.div 
              className="relative h-[400px] sm:h-[500px] lg:h-full ml-20 sm:ml-24 md:ml-28 lg:ml-32"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2070"
                alt="Taza de café al atardecer"
                fill
                className="object-cover"
                quality={90}
              />
              {/* Superposición sutil para mejor contraste */}
              <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Bloque derecho (texto) */}
          <motion.div
            variants={slideInRight}
            className="relative order-1 lg:order-2 bg-olive-dark text-white flex items-center justify-center p-8 sm:p-12 md:p-16 lg:p-20"
          >
            <div className="max-w-lg space-y-6 sm:space-y-8">
              {/* Subtítulo */}
              <motion.p
                variants={fadeInUp}
                className="text-sm sm:text-base uppercase tracking-wider text-beige-warm/80 font-medium"
              >
                CONOCE MÁS
              </motion.p>

              {/* Título */}
              <motion.h2
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight"
              >
                Cultivando el Mejor Café
              </motion.h2>

              {/* Párrafo descriptivo */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-beige-warm/90 leading-relaxed"
              >
                En Fausto&apos;s Coffee, cada grano cuenta una historia. Desde
                los campos hasta tu taza, trabajamos con dedicación para
                ofrecerte café de especialidad tostado artesanalmente. Únete a
                nuestra comunidad y descubre el sabor auténtico del café
                ecuatoriano.
              </motion.p>

              {/* Botón CTA */}
              <motion.div variants={fadeInUp}>
                <motion.a
                  href="#pedido"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gold text-coffee-dark font-semibold rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-300 hover:shadow-xl text-base sm:text-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
                >
                  Hacer Pedido
                </motion.a>
              </motion.div>
            </div>

            {/* Elemento decorativo de fondo */}
            <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 opacity-10">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M100 20C100 20 120 40 140 60C160 80 180 100 180 100C180 100 160 120 140 140C120 160 100 180 100 180C100 180 80 160 60 140C40 120 20 100 20 100C20 100 40 80 60 60C80 40 100 20 100 20Z"
                  fill="currentColor"
                  className="text-white"
                />
                <circle cx="100" cy="100" r="30" fill="currentColor" className="text-white" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
