"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type LogoProps = {
  /** "light" = para fondos oscuros, "dark" = para fondos claros */
  variant?: "light" | "dark";
  /** No usado - se mantiene por compatibilidad */
  withIllustration?: boolean;
  /** Tamaño: "header" (compacto) | "footer" | "hero" (grande) */
  size?: "header" | "footer" | "hero";
  className?: string;
  href?: string;
};

/** Dimensiones responsivas del logo por tamaño */
const sizeConfig = {
  header: {
    width: 260,
    height: 104,
    // un poco más grande sin exceder la altura del header
    className: "w-40 h-14 sm:w-48 sm:h-16 md:w-60 md:h-20",
  },
  footer: {
    width: 260,
    height: 104,
    className: "w-44 h-16 sm:w-52 sm:h-20",
  },
  hero: {
    width: 380,
    height: 152,
    className: "w-64 h-24 sm:w-72 sm:h-28 md:w-80 md:h-32 lg:w-96 lg:h-36",
  },
};

export default function Logo({
  variant = "dark",
  withIllustration: _withIllustration = false,
  size = "header",
  className = "",
  href = "#home",
}: LogoProps) {
  const config = sizeConfig[size];
  const isLight = variant === "light";
  void _withIllustration;

  // En el header transparente (sobre la foto) el logo original puede perderse
  // porque el texto del PNG es oscuro. Le ponemos un "chip" claro sutil solo ahí.
  const needsHeaderChip = isLight && size === "header";
  const wrapperClassName = needsHeaderChip
    ? "rounded-xl bg-white/90 backdrop-blur-sm px-2 py-1 shadow-sm"
    : "";

  const logoImage = (
    <span className={wrapperClassName}>
      <Image
        src="/Logo.png"
        alt="Fausto's Coffee - Café de altura y corazón lojano"
        width={config.width}
        height={config.height}
        priority
        className={`object-contain object-left ${config.className} ${
          isLight ? "drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" : ""
        } ${className}`}
        sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
      />
    </span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className="relative flex items-center flex-shrink-0 no-underline"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {logoImage}
      </motion.a>
    );
  }

  return (
    <div className="relative flex items-center flex-shrink-0">{logoImage}</div>
  );
}
