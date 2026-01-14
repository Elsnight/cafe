"use client";

import { motion } from "framer-motion";

export default function Features() {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const }, // easeOut bezier curve
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
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4L18 10H24L19 14L21 20L16 16L11 20L13 14L8 10H14L16 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="currentColor"
          />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      ),
      title: "Tecnología de Tostado",
      description:
        "Utilizamos tecnología de última generación para tostar cada grano con precisión, garantizando el sabor perfecto en cada taza.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6C12 6 9 9 9 13C9 14.5 9.5 15.8 10.3 16.8C10.1 17.2 10 17.6 10 18C10 20.2 11.8 22 14 22H18C20.2 22 22 20.2 22 18C22 17.6 21.9 17.2 21.7 16.8C22.5 15.8 23 14.5 23 13C23 9 20 6 16 6Z"
            fill="currentColor"
          />
          <path
            d="M14 24H18C19.1 24 20 24.9 20 26V28C20 29.1 19.1 30 18 30H14C12.9 30 12 29.1 12 28V26C12 24.9 12.9 24 14 24Z"
            fill="currentColor"
          />
        </svg>
      ),
      title: "Alimentos Saludables",
      description:
        "Nuestro café es 100% natural, sin aditivos ni conservantes. Cada grano es seleccionado cuidadosamente para tu bienestar.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4C12 4 8 8 8 12C8 16 12 20 16 20C20 20 24 16 24 12C24 8 20 4 16 4Z"
            fill="currentColor"
          />
          <path
            d="M16 20L20 28H12L16 20Z"
            fill="currentColor"
          />
          <circle cx="16" cy="12" r="2" fill="white" />
        </svg>
      ),
      title: "Sistemas Sostenibles",
      description:
        "Comprometidos con el medio ambiente, trabajamos con prácticas sostenibles que respetan la tierra y benefician a las comunidades cafetaleras.",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      {/* Patrón sutil de líneas en gris muy claro */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(229, 229, 229, 0.3) 10px,
            rgba(229, 229, 229, 0.3) 20px
          )`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-beige-medium"
            >
              {/* Icono circular */}
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-beige-warm flex items-center justify-center text-gold">
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
              </motion.div>

              {/* Título */}
              <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-4 text-olive-dark text-center">
                {feature.title}
              </h3>

              {/* Descripción */}
              <p className="text-base sm:text-lg text-coffee-medium text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
