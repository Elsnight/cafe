"use client";

import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Products from "./components/Products";
import CTA from "./components/CTA";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

export default function Home() {
  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-beige-cream">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Products Section */}
      <Products />

      {/* CTA Section */}
      <CTA />

      {/* Order Form Section */}
      <OrderForm />

      {/* Envíos/Beneficios Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-olive-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4 px-4">
              Beneficios y Envíos
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                icon: "🚚",
                title: "Envío Gratis",
                description:
                  "En compras superiores a $30. Entrega en 24-48 horas en la ciudad.",
              },
              {
                icon: "☕",
                title: "Fresco y Tostado",
                description:
                  "Tostamos bajo pedido para garantizar la máxima frescura y sabor.",
              },
              {
                icon: "🌱",
                title: "Origen Sostenible",
                description:
                  "Trabajamos directamente con productores locales bajo prácticas sostenibles.",
              },
            ].map((beneficio, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { duration: 0.3 } 
                }}
                whileTap={{ y: -2 }}
                className="text-center p-5 sm:p-6 bg-olive-medium rounded-lg hover:bg-olive-light transition-colors duration-200"
              >
                <motion.div 
                  className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {beneficio.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-2 sm:mb-3">
                  {beneficio.title}
                </h3>
                <p className="text-sm sm:text-base text-beige-warm">{beneficio.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cierre Section */}
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-beige-cream to-beige-warm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-coffee-dark px-4">
              ¿Listo para comenzar tu día con el mejor café?
            </h2>
            <p className="text-base sm:text-lg text-coffee-medium px-4">
              Únete a nuestra comunidad de amantes del café y descubre por qué
              cada taza cuenta una historia única.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.a
                href="#pedido"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gold text-coffee-dark font-semibold rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                Hacer Pedido
              </motion.a>
              <motion.a
                href="#productos"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-coffee-medium text-coffee-dark font-semibold rounded-lg hover:bg-beige-warm active:bg-beige-cream transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coffee-medium"
              >
                Ver Productos
              </motion.a>
            </div>
            <div className="pt-8 sm:pt-12 border-t border-beige-medium px-4">
              <p className="text-coffee-light font-serif italic text-lg sm:text-xl">
                &quot;Origen selecto, tostado con alma&quot;
              </p>
              <p className="text-coffee-medium mt-3 sm:mt-4">Fausto&apos;s Coffee</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
