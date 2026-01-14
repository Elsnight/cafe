"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre Nosotros", href: "#sobre-nosotros" },
    { label: "Productos", href: "#productos" },
    { label: "Blog", href: "#blog" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0, 0, 0.58, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Icono de grano de café estilizado */}
            <div className="relative">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-coffee-dark" : "text-gold"
                }`}
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
            </div>
            <span
              className={`font-serif text-lg sm:text-xl md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-coffee-dark" : "text-white"
              }`}
            >
              Fausto&apos;s Coffee
            </span>
          </motion.a>

          {/* Menú de navegación desktop */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                  isScrolled
                    ? "text-coffee-dark hover:text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* Iconos de acción (búsqueda y carrito) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Icono de búsqueda */}
            <motion.button
              aria-label="Buscar"
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? "text-coffee-dark hover:bg-beige-warm"
                  : "text-white/90 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L14.65 14.65"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>

            {/* Icono de carrito */}
            <motion.button
              aria-label="Carrito de compras"
              className={`p-2 rounded-lg transition-colors duration-300 relative ${
                isScrolled
                  ? "text-coffee-dark hover:bg-beige-warm"
                  : "text-white/90 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 2H4L4.4 4M6 13H15L18 6H4.4M6 13L4.4 4M6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13M15 13V11C15 10.4477 14.5523 10 14 10H8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Badge de cantidad (opcional) */}
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-coffee-dark text-xs font-bold rounded-full flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>

          {/* Botón de menú móvil */}
          <motion.button
            aria-label="Menú"
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-coffee-dark"
                : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Menú móvil */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <motion.div 
            className="py-4 space-y-2"
            initial="hidden"
            animate={isMobileMenuOpen ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-colors duration-300 ${
                  isScrolled
                    ? "text-coffee-dark hover:bg-beige-warm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.div 
              className="flex items-center space-x-4 pt-2 px-4"
              initial="hidden"
              animate={isMobileMenuOpen ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              <motion.button
                aria-label="Buscar"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled
                    ? "text-coffee-dark hover:bg-beige-warm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 19L14.65 14.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.button>
              <motion.button
                aria-label="Carrito de compras"
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-lg transition-colors duration-300 relative ${
                  isScrolled
                    ? "text-coffee-dark hover:bg-beige-warm"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2H4L4.4 4M6 13H15L18 6H4.4M6 13L4.4 4M6 13C5.44772 13 5 13.4477 5 14C5 14.5523 5.44772 15 6 15H15C15.5523 15 16 14.5523 16 14C16 13.4477 15.5523 13 15 13M15 13V11C15 10.4477 14.5523 10 14 10H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <motion.span 
                  className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-coffee-dark text-xs font-bold rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  0
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  );
}
