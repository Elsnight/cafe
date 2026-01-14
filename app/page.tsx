"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Products from "./components/Products";
import CTA from "./components/CTA";

const presentaciones = ["Molido", "Grano entero"];
const tipos = ["Caturra", "Typica", "Blend Premium"];
const tuestes = ["Suave", "Medio", "Oscuro"];

export default function Home() {
  const [formData, setFormData] = useState({
    presentacion: "",
    tipo: "",
    tueste: "",
    nombre: "",
    telefono: "",
    email: "",
    direccion: "",
    sector: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): { isValid: boolean; errors: Record<string, string> } => {
    const newErrors: Record<string, string> = {};

    // Validar campos requeridos
    if (!formData.presentacion.trim()) {
      newErrors.presentacion = "Por favor selecciona una presentación";
    }
    if (!formData.tipo.trim()) {
      newErrors.tipo = "Por favor selecciona un tipo de café";
    }
    if (!formData.tueste.trim()) {
      newErrors.tueste = "Por favor selecciona un tueste";
    }
    if (!formData.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre completo";
    }
    if (!formData.direccion.trim()) {
      newErrors.direccion = "Por favor ingresa tu dirección";
    }
    if (!formData.sector.trim()) {
      newErrors.sector = "Por favor ingresa el sector";
    }

    // Validar que al menos uno de teléfono o email esté presente
    if (!formData.telefono.trim() && !formData.email.trim()) {
      newErrors.telefono = "Por favor ingresa al menos un teléfono o email";
      newErrors.email = "Por favor ingresa al menos un teléfono o email";
    }

    // Validar formato de email si está presente
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Por favor ingresa un email válido";
      }
    }

    // Validar formato de teléfono si está presente (mínimo 7 dígitos)
    if (formData.telefono.trim()) {
      const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
      if (!phoneRegex.test(formData.telefono.replace(/\s/g, ""))) {
        newErrors.telefono = "Por favor ingresa un teléfono válido (mínimo 7 dígitos)";
      }
    }

    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors,
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validar formulario
    const validation = validateForm();
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      // Scroll al primer error después de un pequeño delay para que el DOM se actualice
      setTimeout(() => {
        const firstErrorField = Object.keys(validation.errors)[0];
        if (firstErrorField) {
          const element = document.querySelector(`[name="${firstErrorField}"]`);
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
          // Enfocar el elemento si es un input o select
          if (element instanceof HTMLElement) {
            element.focus();
          }
        }
      }, 100);
      return;
    }

    setErrors({});

    try {
      // Formatear mensaje para WhatsApp
      const mensaje = `¡Hola! Me interesa hacer un pedido de café:

📦 Selección:
• Presentación: ${formData.presentacion}
• Tipo: ${formData.tipo}
• Tueste: ${formData.tueste}

👤 Datos de contacto:
• Nombre: ${formData.nombre}
${formData.telefono ? `• Teléfono: ${formData.telefono}` : ""}
${formData.email ? `• Email: ${formData.email}` : ""}

📍 Dirección:
• ${formData.direccion}
• Sector: ${formData.sector}

¡Gracias!`;

      // Codificar mensaje para URL
      const mensajeCodificado = encodeURIComponent(mensaje);
      const whatsappLink = `https://wa.me/593996436622?text=${mensajeCodificado}`;

      // Guardar estado local como respaldo
      localStorage.setItem("pedido_fausto_coffee", JSON.stringify(formData));

      // Redirigir a WhatsApp
      window.open(whatsappLink, "_blank");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setErrors({ submit: "Hubo un error al procesar tu pedido. Por favor intenta nuevamente." });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Selección de Pedido Section */}
      <section
        id="pedido"
        className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-3 sm:mb-4 text-coffee-dark px-4">
              Realiza tu Pedido
            </h2>
            <p className="text-center text-base sm:text-lg text-coffee-medium mb-8 sm:mb-12 px-4">
              Completa el formulario y te contactaremos por WhatsApp para
              confirmar tu pedido
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {errors.submit && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                >
                  {errors.submit}
                </motion.div>
              )}

              {/* Selección de Café */}
              <div className="card bg-beige-cream">
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                  Selecciona tu Café
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Presentación *
                    </label>
                    <select
                      name="presentacion"
                      value={formData.presentacion}
                      onChange={handleChange}
                      className={`select w-full ${errors.presentacion ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.presentacion ? "true" : "false"}
                      aria-describedby={errors.presentacion ? "presentacion-error" : undefined}
                    >
                      <option value="">Selecciona...</option>
                      {presentaciones.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                    {errors.presentacion && (
                      <p id="presentacion-error" className="mt-1 text-sm text-red-600">{errors.presentacion}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Tipo *
                    </label>
                    <select
                      name="tipo"
                      value={formData.tipo}
                      onChange={handleChange}
                      className={`select w-full ${errors.tipo ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.tipo ? "true" : "false"}
                      aria-describedby={errors.tipo ? "tipo-error" : undefined}
                    >
                      <option value="">Selecciona...</option>
                      {tipos.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.tipo && (
                      <p id="tipo-error" className="mt-1 text-sm text-red-600">{errors.tipo}</p>
                    )}
                  </div>
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Tueste *
                    </label>
                    <select
                      name="tueste"
                      value={formData.tueste}
                      onChange={handleChange}
                      className={`select w-full ${errors.tueste ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.tueste ? "true" : "false"}
                      aria-describedby={errors.tueste ? "tueste-error" : undefined}
                    >
                      <option value="">Selecciona...</option>
                      {tuestes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                    {errors.tueste && (
                      <p id="tueste-error" className="mt-1 text-sm text-red-600">{errors.tueste}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Datos de Contacto */}
              <div className="card bg-beige-cream">
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                  Datos de Contacto
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className={`input w-full ${errors.nombre ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.nombre ? "true" : "false"}
                      aria-describedby={errors.nombre ? "nombre-error" : undefined}
                    />
                    {errors.nombre && (
                      <p id="nombre-error" className="mt-1 text-sm text-red-600">{errors.nombre}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Teléfono {!formData.email && "*"}
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Ej: 0996436622"
                      className={`input w-full ${errors.telefono ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.telefono ? "true" : "false"}
                      aria-describedby={errors.telefono ? "telefono-error" : undefined}
                    />
                    {errors.telefono && (
                      <p id="telefono-error" className="mt-1 text-sm text-red-600">{errors.telefono}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Email {!formData.telefono && "*"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Ej: nombre@email.com"
                      className={`input w-full ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.email ? "true" : "false"}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                    <p className="mt-1 text-xs text-coffee-medium">
                      * Debes ingresar al menos un teléfono o email
                    </p>
                  </div>
                </div>
              </div>

              {/* Dirección */}
              <div className="card bg-beige-cream">
                <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                  Dirección de Entrega
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Dirección completa *
                    </label>
                    <input
                      type="text"
                      name="direccion"
                      value={formData.direccion}
                      onChange={handleChange}
                      className={`input w-full ${errors.direccion ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.direccion ? "true" : "false"}
                      aria-describedby={errors.direccion ? "direccion-error" : undefined}
                      required
                    />
                    {errors.direccion && (
                      <p id="direccion-error" className="mt-1 text-sm text-red-600">{errors.direccion}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-coffee-medium">
                      Sector *
                    </label>
                    <input
                      type="text"
                      name="sector"
                      value={formData.sector}
                      onChange={handleChange}
                      className={`input w-full ${errors.sector ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                      aria-invalid={errors.sector ? "true" : "false"}
                      aria-describedby={errors.sector ? "sector-error" : undefined}
                      required
                    />
                    {errors.sector && (
                      <p id="sector-error" className="mt-1 text-sm text-red-600">{errors.sector}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Botón de envío */}
              <motion.button
                type="submit"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                className="w-full sm:w-auto sm:mx-auto block px-8 sm:px-12 py-3 sm:py-4 bg-gold text-coffee-dark font-semibold rounded-lg hover:bg-gold-light active:bg-gold-dark transition-all duration-300 hover:shadow-lg text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-light"
              >
                {isSubmitting ? "Enviando..." : "Enviar Pedido por WhatsApp"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

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
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ y: -2 }}
                className="text-center p-5 sm:p-6 bg-olive-medium rounded-lg hover:bg-olive-light transition-colors duration-200"
              >
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{beneficio.icon}</div>
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
    </div>
  );
}
