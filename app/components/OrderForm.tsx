"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Iconos SVG inline
const CoffeeGrindIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>
);

const CoffeeBeanIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="12" rx="6" ry="9" />
    <path d="M12 3c-2 3-2 6 0 9s2 6 0 9" />
  </svg>
);

const FireLightIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22c3.5 0 6-2.5 6-6 0-2-1-4-2-5.5-.5-.75-1-1.5-1-2.5 0-1.5.5-3 1-4-2 1-4 3-4 5.5 0 1-.5 2-1.5 2.5S8 13 8 14c0 1 .5 2 1.5 2.5" />
    <path d="M12 22c-1.5 0-3-1-3-3 0-1.5 1.5-3 3-3s3 1.5 3 3c0 2-1.5 3-3 3z" />
  </svg>
);

const FireMediumIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22c4 0 7-3 7-7 0-2.5-1.5-5-3-7-.75-1-1.5-2-1.5-3.5 0-2 .5-3.5 1.5-4.5-2.5 1.5-5 4-5 7 0 1.5-.5 2.5-2 3.5S6 12.5 6 15c0 4 3 7 6 7z" />
    <path d="M12 22c-2 0-4-1.5-4-4 0-2 2-4 4-4s4 2 4 4c0 2.5-2 4-4 4z" />
  </svg>
);

const FireDarkIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22c5 0 8-3.5 8-8 0-3-2-6-4-8.5-1-1.25-2-2.5-2-4.5 0-1 .25-1.75.5-2.5C11.5 1 9 4 9 7.5c0 2-1 3.5-3 5S3 16 3 18c0 4.5 4 8 9 8z" />
    <path d="M12 22c-2.5 0-5-2-5-5 0-2.5 2.5-5 5-5s5 2.5 5 5c0 3-2.5 5-5 5z" />
    <circle cx="12" cy="17" r="2" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

interface CoffeeOption {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const presentaciones: CoffeeOption[] = [
  { id: "Molido", label: "Molido", description: "Listo para preparar", icon: <CoffeeGrindIcon /> },
  { id: "Grano entero", label: "Grano Entero", description: "Para moler fresco", icon: <CoffeeBeanIcon /> },
];

const tipos: CoffeeOption[] = [
  { id: "Caturra", label: "Caturra", description: "Sabor dulce y afrutado", icon: <CoffeeBeanIcon /> },
  { id: "Typica", label: "Typica", description: "Clásico y balanceado", icon: <CoffeeBeanIcon /> },
  { id: "Blend Premium", label: "Blend Premium", description: "Mezcla exclusiva", icon: <CoffeeBeanIcon /> },
];

const tuestes: CoffeeOption[] = [
  { id: "Suave", label: "Suave", description: "Notas florales y ácidas", icon: <FireLightIcon /> },
  { id: "Medio", label: "Medio", description: "Equilibrio perfecto", icon: <FireMediumIcon /> },
  { id: "Oscuro", label: "Oscuro", description: "Intenso y robusto", icon: <FireDarkIcon /> },
];

const steps = [
  { id: 1, name: "Café", description: "Elige tu café" },
  { id: 2, name: "Contacto", description: "Tus datos" },
  { id: 3, name: "Entrega", description: "Dirección" },
];

export default function OrderForm() {
  const [currentStep, setCurrentStep] = useState(1);
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
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleOptionSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
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

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.presentacion) newErrors.presentacion = "Selecciona una presentación";
      if (!formData.tipo) newErrors.tipo = "Selecciona un tipo de café";
      if (!formData.tueste) newErrors.tueste = "Selecciona un tueste";
    } else if (step === 2) {
      if (!formData.nombre.trim()) newErrors.nombre = "Ingresa tu nombre";
      if (!formData.telefono.trim() && !formData.email.trim()) {
        newErrors.telefono = "Ingresa al menos un método de contacto";
      }
      if (formData.email.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          newErrors.email = "Email no válido";
        }
      }
    } else if (step === 3) {
      if (!formData.direccion.trim()) newErrors.direccion = "Ingresa tu dirección";
      if (!formData.sector.trim()) newErrors.sector = "Ingresa el sector";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.58, 1] as const }
    },
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const OptionCard = ({
    option,
    isSelected,
    onClick,
    hasError
  }: {
    option: CoffeeOption;
    isSelected: boolean;
    onClick: () => void;
    hasError?: boolean;
  }) => (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-4 sm:p-5 rounded-xl border-2 text-left transition-all duration-300
        ${isSelected
          ? 'border-gold bg-gold/10 shadow-lg shadow-gold/20'
          : hasError
            ? 'border-red-300 bg-white hover:border-red-400'
            : 'border-beige-medium bg-white hover:border-coffee-light hover:shadow-md'
        }
      `}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
        >
          <CheckIcon />
        </motion.div>
      )}
      <div className={`mb-3 ${isSelected ? 'text-gold' : 'text-coffee-medium'}`}>
        {option.icon}
      </div>
      <h4 className={`font-semibold text-base sm:text-lg ${isSelected ? 'text-coffee-dark' : 'text-coffee-medium'}`}>
        {option.label}
      </h4>
      <p className="text-sm text-coffee-light mt-1">{option.description}</p>
    </motion.button>
  );

  const InputWithIcon = ({
    icon,
    label,
    name,
    type = "text",
    placeholder,
    value,
    onChange,
    error,
    required
  }: {
    icon: React.ReactNode;
    label: string;
    name: string;
    type?: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    required?: boolean;
  }) => (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-coffee-medium">
        <span className="text-coffee-light">{icon}</span>
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          input w-full pl-4 py-3 rounded-xl transition-all duration-300
          ${error
            ? 'border-red-400 focus:border-red-500 focus:ring-red-200'
            : 'focus:border-gold focus:ring-gold/20'
          }
        `}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-red-500 flex items-center gap-1"
        >
          {error}
        </motion.p>
      )}
    </div>
  );

  return (
    <section
      id="pedido"
      className="py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-beige-cream"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <motion.span
              variants={fadeInUp}
              className="inline-block px-4 py-1.5 bg-gold/10 text-gold-dark text-sm font-medium rounded-full mb-4"
            >
              Pedido Online
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-serif text-coffee-dark mb-4"
            >
              Realiza tu Pedido
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-coffee-medium text-lg max-w-2xl mx-auto"
            >
              Personaliza tu café perfecto y recíbelo en la puerta de tu casa
            </motion.p>
          </div>

          {/* Progress Steps */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 sm:mb-12"
          >
            <div className="flex items-center justify-center">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <motion.div
                      animate={{
                        scale: currentStep === step.id ? 1.1 : 1,
                        backgroundColor: currentStep >= step.id ? '#d4af37' : '#e8ddd4'
                      }}
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                        font-semibold text-sm sm:text-base transition-colors duration-300
                        ${currentStep >= step.id ? 'text-coffee-dark' : 'text-coffee-light'}
                      `}
                    >
                      {currentStep > step.id ? <CheckIcon /> : step.id}
                    </motion.div>
                    <span className={`
                      mt-2 text-xs sm:text-sm font-medium hidden sm:block
                      ${currentStep >= step.id ? 'text-coffee-dark' : 'text-coffee-light'}
                    `}>
                      {step.name}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`
                      w-12 sm:w-20 md:w-32 h-1 mx-2 sm:mx-4 rounded-full transition-colors duration-300
                      ${currentStep > step.id ? 'bg-gold' : 'bg-beige-medium'}
                    `} />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="relative"
          >
            {errors.submit && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center"
              >
                {errors.submit}
              </motion.div>
            )}

            <div className="bg-white rounded-2xl shadow-xl shadow-coffee-dark/5 border border-beige-medium/50 p-6 sm:p-8 md:p-10 overflow-hidden">
              <AnimatePresence mode="wait" custom={currentStep}>
                {/* Step 1: Selección de Café */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-6 text-coffee-dark flex items-center gap-3">
                      <span className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center">
                        <CoffeeBeanIcon />
                      </span>
                      Selecciona tu Café
                    </h3>

                    {/* Presentación */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold mb-3 text-coffee-medium uppercase tracking-wide">
                        Presentación
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        {presentaciones.map((p) => (
                          <OptionCard
                            key={p.id}
                            option={p}
                            isSelected={formData.presentacion === p.id}
                            onClick={() => handleOptionSelect('presentacion', p.id)}
                            hasError={!!errors.presentacion}
                          />
                        ))}
                      </div>
                      {errors.presentacion && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-500"
                        >
                          {errors.presentacion}
                        </motion.p>
                      )}
                    </div>

                    {/* Tipo */}
                    <div className="mb-8">
                      <label className="block text-sm font-semibold mb-3 text-coffee-medium uppercase tracking-wide">
                        Variedad de Café
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {tipos.map((t) => (
                          <OptionCard
                            key={t.id}
                            option={t}
                            isSelected={formData.tipo === t.id}
                            onClick={() => handleOptionSelect('tipo', t.id)}
                            hasError={!!errors.tipo}
                          />
                        ))}
                      </div>
                      {errors.tipo && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-500"
                        >
                          {errors.tipo}
                        </motion.p>
                      )}
                    </div>

                    {/* Tueste */}
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-coffee-medium uppercase tracking-wide">
                        Nivel de Tueste
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {tuestes.map((t) => (
                          <OptionCard
                            key={t.id}
                            option={t}
                            isSelected={formData.tueste === t.id}
                            onClick={() => handleOptionSelect('tueste', t.id)}
                            hasError={!!errors.tueste}
                          />
                        ))}
                      </div>
                      {errors.tueste && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-2 text-sm text-red-500"
                        >
                          {errors.tueste}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Datos de Contacto */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-6 text-coffee-dark flex items-center gap-3">
                      <span className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center text-gold">
                        <UserIcon />
                      </span>
                      Datos de Contacto
                    </h3>

                    <div className="space-y-5">
                      <InputWithIcon
                        icon={<UserIcon />}
                        label="Nombre completo"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        error={errors.nombre}
                        required
                      />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <InputWithIcon
                          icon={<PhoneIcon />}
                          label="Teléfono"
                          name="telefono"
                          type="tel"
                          placeholder="0996436622"
                          value={formData.telefono}
                          onChange={handleChange}
                          error={errors.telefono}
                          required={!formData.email}
                        />

                        <InputWithIcon
                          icon={<EmailIcon />}
                          label="Email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          error={errors.email}
                          required={!formData.telefono}
                        />
                      </div>

                      <p className="text-sm text-coffee-light bg-beige-cream/50 p-3 rounded-lg">
                        Ingresa al menos un teléfono o email para que podamos contactarte
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Dirección */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <h3 className="text-xl sm:text-2xl font-serif font-semibold mb-6 text-coffee-dark flex items-center gap-3">
                      <span className="w-8 h-8 bg-gold/20 rounded-lg flex items-center justify-center text-gold">
                        <LocationIcon />
                      </span>
                      Dirección de Entrega
                    </h3>

                    <div className="space-y-5">
                      <InputWithIcon
                        icon={<LocationIcon />}
                        label="Dirección completa"
                        name="direccion"
                        placeholder="Calle, número, edificio, etc."
                        value={formData.direccion}
                        onChange={handleChange}
                        error={errors.direccion}
                        required
                      />

                      <InputWithIcon
                        icon={<LocationIcon />}
                        label="Sector / Barrio"
                        name="sector"
                        placeholder="Ej: Norte de Quito, La Carolina"
                        value={formData.sector}
                        onChange={handleChange}
                        error={errors.sector}
                        required
                      />

                      {/* Resumen del pedido */}
                      <div className="mt-8 p-5 bg-gradient-to-br from-beige-cream to-beige-warm rounded-xl border border-beige-medium">
                        <h4 className="font-semibold text-coffee-dark mb-3">Resumen de tu pedido</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-coffee-light">Presentación:</span>
                            <span className="font-medium text-coffee-dark">{formData.presentacion}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-coffee-light">Variedad:</span>
                            <span className="font-medium text-coffee-dark">{formData.tipo}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-coffee-light">Tueste:</span>
                            <span className="font-medium text-coffee-dark">{formData.tueste}</span>
                          </div>
                          <div className="border-t border-beige-medium my-2 pt-2">
                            <div className="flex justify-between">
                              <span className="text-coffee-light">Contacto:</span>
                              <span className="font-medium text-coffee-dark">{formData.nombre}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-between">
                {currentStep > 1 && (
                  <motion.button
                    type="button"
                    onClick={prevStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="order-2 sm:order-1 px-6 py-3 border-2 border-coffee-light text-coffee-medium font-semibold rounded-xl hover:bg-beige-cream transition-all duration-300"
                  >
                    Anterior
                  </motion.button>
                )}

                {currentStep < 3 ? (
                  <motion.button
                    type="button"
                    onClick={nextStep}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="order-1 sm:order-2 sm:ml-auto px-8 py-3 bg-gold text-coffee-dark font-semibold rounded-xl hover:bg-gold-light transition-all duration-300 shadow-lg shadow-gold/30"
                  >
                    Continuar
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="order-1 sm:order-2 sm:ml-auto px-8 py-3 bg-[#25D366] text-white font-semibold rounded-xl hover:bg-[#20BD5A] transition-all duration-300 shadow-lg shadow-[#25D366]/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <WhatsAppIcon />
                    {isSubmitting ? "Enviando..." : "Enviar por WhatsApp"}
                  </motion.button>
                )}
              </div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
