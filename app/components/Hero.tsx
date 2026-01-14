"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Efecto parallax para la imagen de fondo
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Imagen de fondo con efecto parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070"
          alt="Campos de café"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Superposición oscura (marrón café profundo) */}
        <div className="absolute inset-0 bg-coffee-dark/75" />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 px-4">
            {/* Subtítulo */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm md:text-base lg:text-lg uppercase tracking-wider text-gray-300 font-sans font-medium"
            >
              BIENVENIDO A FAUSTO&apos;S COFFEE
            </motion.p>

            {/* Título con decoración de granos */}
            <motion.div
              variants={fadeIn}
              className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8"
            >
              {/* Grano decorativo izquierdo */}
              <motion.div
                variants={scaleIn}
                className="hidden md:block flex-shrink-0"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <path
                    d="M24 6C18 6 14 10 14 16C14 19 15.5 21.5 17.3 23.3C17.1 24.2 17 25.1 17 26C17 29.3 19.7 32 23 32H25C28.3 32 31 29.3 31 26C31 25.1 30.9 24.2 30.7 23.3C32.5 21.5 34 19 34 16C34 10 30 6 24 6Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M23 33H25C26.1 33 27 33.9 27 35V37C27 38.1 26.1 39 25 39H23C21.9 39 21 38.1 21 37V35C21 33.9 21.9 33 23 33Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>

              {/* Título principal */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-bold text-white leading-[1.1] sm:leading-tight"
              >
                Café Artesanal de Origen Selecto
              </motion.h1>

              {/* Grano decorativo derecho */}
              <motion.div
                variants={scaleIn}
                className="hidden md:block flex-shrink-0"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold md:w-10 md:h-10 lg:w-12 lg:h-12"
                >
                  <path
                    d="M24 6C18 6 14 10 14 16C14 19 15.5 21.5 17.3 23.3C17.1 24.2 17 25.1 17 26C17 29.3 19.7 32 23 32H25C28.3 32 31 29.3 31 26C31 25.1 30.9 24.2 30.7 23.3C32.5 21.5 34 19 34 16C34 10 30 6 24 6Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M23 33H25C26.1 33 27 33.9 27 35V37C27 38.1 26.1 39 25 39H23C21.9 39 21 38.1 21 37V35C21 33.9 21.9 33 23 33Z"
                    fill="currentColor"
                    opacity="0.6"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Botón CTA */}
            <motion.div
              variants={fadeInUp}
              className="pt-2 sm:pt-4 md:pt-6"
            >
              <motion.a
                href="#productos"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 lg:py-6 bg-gold text-coffee-dark font-serif font-semibold text-base sm:text-lg md:text-xl lg:text-2xl rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light"
              >
                Descubrir Más
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Indicador de scroll (opcional) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-3 bg-white/70 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
