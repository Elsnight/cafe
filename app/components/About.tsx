"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProgressCircle from "./ui/ProgressCircle";

export default function About() {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const features = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Tostado Artesanal",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Origen Sostenible",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 13L9 17L19 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      text: "Frescura Garantizada",
    },
  ];

  return (
    <section
      id="sobre-nosotros"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Elemento decorativo de fondo - silueta sutil de granos de café */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-coffee-dark"
        >
          <path
            d="M100 20C80 20 65 35 65 55C65 67.5 72.5 78 82.5 84C80.5 88 80 92 80 96C80 108.2 89.8 118 102 118H118C130.2 118 140 108.2 140 96C140 92 139.5 88 137.5 84C147.5 78 155 67.5 155 55C155 35 140 20 120 20C110 20 102 25 97 32C92 25 84 20 74 20C64 20 56 25 51 32C46 25 38 20 28 20C18 20 10 25 5 32C0 25 0 20 0 20Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center"
        >
          {/* Imagen circular a la izquierda */}
          <motion.div
            variants={scaleIn}
            className="flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Imagen circular con borde decorativo */}
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-4 ring-beige-warm ring-offset-8 ring-offset-white">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070"
                  alt="Barista preparando café artesanal"
                  fill
                  className="object-cover"
                  quality={90}
                />
              </div>
              {/* Decoración adicional - anillo exterior */}
              <div className="absolute inset-0 rounded-full border-4 border-gold/20 -z-10 scale-110" />
            </div>
          </motion.div>

          {/* Contenido a la derecha */}
          <motion.div
            variants={fadeInUp}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {/* Subtítulo */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-sans font-medium"
            >
              NUESTRA HISTORIA
            </motion.p>

            {/* Título */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-coffee-dark leading-tight"
            >
              Café Artesanal & Origen Selecto
            </motion.h2>

            {/* Párrafo descriptivo */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-base sm:text-lg text-coffee-medium leading-relaxed"
            >
              <p>
                En Fausto&apos;s Coffee, cada grano cuenta una historia. Desde
                las montañas donde se cultiva hasta tu taza, cuidamos cada
                detalle del proceso para ofrecerte una experiencia única.
              </p>
              <p>
                Nuestro compromiso es con la calidad y la sostenibilidad.
                Trabajamos directamente con productores locales, asegurando
                condiciones justas y un café de la más alta calidad.
              </p>
            </motion.div>

            {/* Lista de características con iconos de check */}
            <motion.ul
              variants={staggerContainer}
              className="space-y-4 sm:space-y-5"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-olive-dark flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <span className="text-base sm:text-lg font-sans text-coffee-dark font-medium">
                    {feature.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Firma estilizada */}
            <motion.div
              variants={fadeInUp}
              className="pt-4 sm:pt-6 border-t border-beige-medium"
            >
              <p className="font-serif italic text-lg sm:text-xl text-coffee-light">
                &quot;El café no es solo una bebida, es un ritual, un momento
                de conexión con uno mismo y con los demás.&quot;
              </p>
              <p className="mt-3 sm:mt-4 font-serif text-base sm:text-lg text-coffee-dark font-semibold">
                Fausto, Fundador & Tostador
              </p>
            </motion.div>

            {/* Gráficos circulares de progreso */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-8 sm:gap-12 pt-6 sm:pt-8"
            >
              <ProgressCircle
                percentage={100}
                label="Café de Especialidad"
                size={144}
                strokeWidth={8}
                color="#5a6b3a"
              />
              <ProgressCircle
                percentage={95}
                label="Satisfacción del Cliente"
                size={144}
                strokeWidth={8}
                color="#5a6b3a"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
