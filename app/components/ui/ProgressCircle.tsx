"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface ProgressCircleProps {
  percentage: number;
  label: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}

export default function ProgressCircle({
  percentage,
  label,
  size = 120,
  strokeWidth = 8,
  color = "#d4af37", // gold
}: ProgressCircleProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  // Tamaños responsive basados en el tamaño base
  const responsiveSize = size < 120 ? 100 : size < 144 ? 120 : 144;
  const radius = (responsiveSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;

    // Animar el porcentaje cuando el componente entra en vista
    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = percentage / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, percentage);
      setAnimatedPercentage(current);

      if (step >= steps) {
        clearInterval(timer);
        setAnimatedPercentage(percentage);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [percentage, isInView]);
  
  return (
    <div ref={ref} className="flex flex-col items-center w-full">
      <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[144px] md:h-[144px]">
        <svg
          width={responsiveSize}
          height={responsiveSize}
          className="transform -rotate-90 w-full h-full"
          viewBox={`0 0 ${responsiveSize} ${responsiveSize}`}
        >
          {/* Círculo de fondo */}
          <circle
            cx={responsiveSize / 2}
            cy={responsiveSize / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-beige-medium opacity-30"
          />
          {/* Círculo de progreso */}
          <motion.circle
            cx={responsiveSize / 2}
            cy={responsiveSize / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            initial={{ strokeDashoffset: circumference }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="drop-shadow-sm"
          />
        </svg>
        {/* Porcentaje en el centro */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.span
            className="font-serif font-bold text-coffee-dark text-base sm:text-lg md:text-xl"
            key={Math.round(animatedPercentage)}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {Math.round(animatedPercentage)}%
          </motion.span>
        </motion.div>
      </div>
      {/* Etiqueta */}
      <p
        className="mt-2 sm:mt-3 text-center font-sans text-xs sm:text-sm text-coffee-medium max-w-[120px] sm:max-w-[140px]"
      >
        {label}
      </p>
    </div>
  );
}
