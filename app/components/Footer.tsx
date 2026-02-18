"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Productos", href: "#productos" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61993 14.1902 8.22768 13.4229 8.09402 12.5922C7.96035 11.7615 8.09202 10.9099 8.47028 10.1584C8.84854 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/593996436622",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.472 14.382C17.231 14.21 15.243 13.174 14.895 13.041C14.547 12.908 14.288 12.841 14.029 13.013C13.77 13.185 12.816 13.857 12.557 14.029C12.298 14.201 12.039 14.268 11.78 14.096C11.521 13.924 10.249 13.445 8.737 12.072C7.5 10.96 6.736 9.654 6.477 9.395C6.218 9.136 6.06 8.964 6.218 8.792C6.376 8.62 6.534 8.315 6.692 8.01C6.85 7.705 6.909 7.468 7.067 7.296C7.225 7.124 7.326 7.057 7.484 6.885C7.642 6.713 7.701 6.58 7.859 6.408C8.017 6.236 8.076 6.1 8.234 5.928C8.392 5.756 8.451 5.62 8.609 5.448C8.767 5.276 8.826 5.14 8.984 5.025C9.142 4.91 9.3 4.732 9.458 4.56C9.616 4.388 9.675 4.252 9.833 4.08C9.991 3.908 10.05 3.772 10.208 3.6C10.366 3.428 10.425 3.292 10.583 3.12C10.741 2.948 10.8 2.812 11.017 2.726C11.234 2.64 11.451 2.51 11.668 2.51C11.885 2.51 12.102 2.51 12.26 2.682C12.418 2.854 12.635 3.198 12.793 3.542C12.951 3.886 13.11 4.23 13.268 4.431C13.426 4.632 13.585 4.833 13.743 5.005C13.901 5.177 14.06 5.349 14.218 5.521C14.376 5.693 14.535 5.865 14.376 6.037C14.218 6.209 14.06 6.381 13.901 6.553C13.743 6.725 13.585 6.897 13.426 7.069C13.268 7.241 13.11 7.413 13.268 7.585C13.426 7.757 13.585 7.929 13.743 8.101C13.901 8.273 14.06 8.445 14.218 8.617C14.376 8.789 14.535 8.961 14.376 9.133C14.218 9.305 14.06 9.477 13.901 9.649C13.743 9.821 13.585 9.993 13.268 10.336C12.951 10.68 12.476 11.202 11.959 11.59C11.442 11.978 10.966 12.232 10.708 12.404C10.45 12.576 10.191 12.643 9.933 12.643C9.675 12.643 9.416 12.576 9.158 12.404C8.9 12.232 8.641 12.06 8.383 11.888C8.125 11.716 7.866 11.544 7.608 11.372C7.35 11.2 7.091 11.028 6.833 10.856C6.575 10.684 6.316 10.512 6.058 10.34C5.8 10.168 5.541 10.036 5.283 9.864C5.025 9.692 4.766 9.52 4.508 9.348C4.25 9.176 3.991 9.004 3.733 8.832C3.475 8.66 3.216 8.488 2.958 8.316C2.7 8.144 2.441 7.972 2.183 7.8C1.925 7.628 1.666 7.456 1.408 7.284C1.15 7.112 0.891 6.94 0.633 6.768C0.375 6.596 0.116 6.424 -0.142 6.252"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(5, 5)"
          />
        </svg>
      ),
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-coffee-dark text-beige-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
        >
          {/* Logo y Descripción */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gold"
              >
                <path
                  d="M16 4C12 4 9 7 9 11C9 12.5 9.5 13.8 10.3 14.8C10.1 15.2 10 15.6 10 16C10 18.2 11.8 20 14 20H18C20.2 20 22 18.2 22 16C22 15.6 21.9 15.2 21.7 14.8C22.5 13.8 23 12.5 23 11C23 7 20 4 16 4Z"
                  fill="currentColor"
                />
                <path
                  d="M14 22H18C19.1 22 20 22.9 20 24V26C20 27.1 19.1 28 18 28H14C12.9 28 12 27.1 12 26V24C12 22.9 12.9 22 14 22Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-serif text-xl font-bold text-white">
                Fausto&apos;s Coffee
              </span>
            </div>
            <p className="text-sm text-beige-warm/80 leading-relaxed mb-6">
              Café artesanal de origen selecto, tostado con dedicación y pasión.
              Cada grano cuenta una historia única.
            </p>
            {/* Redes Sociales */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-coffee-medium/50 hover:bg-gold hover:text-coffee-dark transition-all duration-300 text-beige-warm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces de Navegación */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-sm text-beige-warm/80 hover:text-gold transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path
                    d="M2.5 6.66667L10 11.6667L17.5 6.66667M3.33333 15H16.6667C17.5871 15 18.3333 14.2538 18.3333 13.3333V6.66667C18.3333 5.74619 17.5871 5 16.6667 5H3.33333C2.41286 5 1.66667 5.74619 1.66667 6.66667V13.3333C1.66667 14.2538 2.41286 15 3.33333 15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.a
                  href="mailto:contacto@faustoscoffee.com"
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-beige-warm/80 hover:text-gold transition-colors duration-300"
                >
                  contacto@faustoscoffee.com
                </motion.a>
              </motion.li>
              <motion.li
                className="flex items-start space-x-3"
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path
                    d="M17.5 14.1667V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V3.33333C2.5 2.41286 3.24619 1.66667 4.16667 1.66667H6.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 2.5H17.5V6.66667M13.3333 2.5L17.5 6.66667M13.3333 2.5L10.8333 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.33333 10.8333L10.8333 13.3333L17.5 6.66667"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.a
                  href="https://wa.me/593996436622"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-beige-warm/80 hover:text-gold transition-colors duration-300"
                >
                  +593 99 643 6622
                </motion.a>
              </motion.li>
              <li className="flex items-start space-x-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gold mt-0.5 flex-shrink-0"
                >
                  <path
                    d="M10 10.8333C11.3807 10.8333 12.5 9.71405 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71405 8.61929 10.8333 10 10.8333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 18.3333C13.3333 15 16.6667 12.0152 16.6667 8.33333C16.6667 4.65152 13.6818 1.66667 10 1.66667C6.31818 1.66667 3.33333 4.65152 3.33333 8.33333C3.33333 12.0152 6.66667 15 10 18.3333Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm text-beige-warm/80">
                  Ecuador, Quito
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Horarios */}
          <motion.div variants={fadeInUp}>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Horarios
            </h3>
            <ul className="space-y-3 text-sm text-beige-warm/80">
              <li className="flex justify-between">
                <span>Lun - Vie:</span>
                <span className="text-gold">8:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span className="text-gold">9:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-gold">Cerrado</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Línea divisoria y Copyright */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 pt-8 border-t border-coffee-medium/30"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-beige-warm/60 text-center md:text-left">
              © {currentYear} Fausto&apos;s Coffee. Todos los derechos
              reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-beige-warm/60">
              <a
                href="#"
                className="hover:text-gold transition-colors duration-300"
              >
                Política de Privacidad
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors duration-300"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
