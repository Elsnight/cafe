"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const presentaciones = ["Molido", "Grano entero"];
const tipos = ["Caturra", "Typica", "Blend Premium"];
const tuestes = ["Suave", "Medio", "Oscuro"];

export default function OrderForm() {
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  return (
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
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-center mb-3 sm:mb-4 text-coffee-dark px-4"
          >
            Realiza tu Pedido
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-center text-base sm:text-lg text-coffee-medium mb-8 sm:mb-12 px-4"
          >
            Completa el formulario y te contactaremos por WhatsApp para
            confirmar tu pedido
          </motion.p>

          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4 sm:space-y-5 md:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
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
            <motion.div 
              variants={fadeInUp}
              className="card bg-beige-cream"
            >
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                Selecciona tu Café
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Presentación *
                  </label>
                  <motion.select
                    name="presentacion"
                    value={formData.presentacion}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
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
                  </motion.select>
                  {errors.presentacion && (
                    <motion.p 
                      id="presentacion-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.presentacion}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Tipo *
                  </label>
                  <motion.select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
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
                  </motion.select>
                  {errors.tipo && (
                    <motion.p 
                      id="tipo-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.tipo}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div 
                  variants={fadeIn}
                  className="sm:col-span-2 lg:col-span-1"
                >
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Tueste *
                  </label>
                  <motion.select
                    name="tueste"
                    value={formData.tueste}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
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
                  </motion.select>
                  {errors.tueste && (
                    <motion.p 
                      id="tueste-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.tueste}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </motion.div>

            {/* Datos de Contacto */}
            <motion.div 
              variants={fadeInUp}
              className="card bg-beige-cream"
            >
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                Datos de Contacto
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  variants={fadeIn}
                  className="sm:col-span-2"
                >
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Nombre completo *
                  </label>
                  <motion.input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className={`input w-full ${errors.nombre ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                    aria-invalid={errors.nombre ? "true" : "false"}
                    aria-describedby={errors.nombre ? "nombre-error" : undefined}
                  />
                  {errors.nombre && (
                    <motion.p 
                      id="nombre-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.nombre}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Teléfono {!formData.email && "*"}
                  </label>
                  <motion.input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="Ej: 0996436622"
                    whileFocus={{ scale: 1.02 }}
                    className={`input w-full ${errors.telefono ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                    aria-invalid={errors.telefono ? "true" : "false"}
                    aria-describedby={errors.telefono ? "telefono-error" : undefined}
                  />
                  {errors.telefono && (
                    <motion.p 
                      id="telefono-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.telefono}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Email {!formData.telefono && "*"}
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ej: nombre@email.com"
                    whileFocus={{ scale: 1.02 }}
                    className={`input w-full ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <motion.p 
                      id="email-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                  <p className="mt-1 text-xs text-coffee-medium">
                    * Debes ingresar al menos un teléfono o email
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Dirección */}
            <motion.div 
              variants={fadeInUp}
              className="card bg-beige-cream"
            >
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6 text-coffee-dark">
                Dirección de Entrega
              </h3>
              <div className="space-y-4">
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Dirección completa *
                  </label>
                  <motion.input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className={`input w-full ${errors.direccion ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                    aria-invalid={errors.direccion ? "true" : "false"}
                    aria-describedby={errors.direccion ? "direccion-error" : undefined}
                    required
                  />
                  {errors.direccion && (
                    <motion.p 
                      id="direccion-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.direccion}
                    </motion.p>
                  )}
                </motion.div>
                <motion.div variants={fadeIn}>
                  <label className="block text-sm font-medium mb-2 text-coffee-medium">
                    Sector *
                  </label>
                  <motion.input
                    type="text"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    whileFocus={{ scale: 1.02 }}
                    className={`input w-full ${errors.sector ? "border-red-500 focus:border-red-500 focus:ring-red-200" : ""}`}
                    aria-invalid={errors.sector ? "true" : "false"}
                    aria-describedby={errors.sector ? "sector-error" : undefined}
                    required
                  />
                  {errors.sector && (
                    <motion.p 
                      id="sector-error" 
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {errors.sector}
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </motion.div>

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
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
