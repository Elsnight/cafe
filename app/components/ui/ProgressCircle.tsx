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
  const radius = (size - strokeWidth) / 2;
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
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="transform -rotate-90"
        >
          {/* Círculo de fondo */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-beige-medium opacity-30"
          />
          {/* Círculo de progreso */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
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
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-serif font-bold text-coffee-dark"
            style={{ fontSize: size * 0.2 }}
          >
            {Math.round(animatedPercentage)}%
          </span>
        </div>
      </div>
      {/* Etiqueta */}
      <p
        className="mt-3 text-center font-sans text-sm text-coffee-medium max-w-[140px]"
        style={{ fontSize: size * 0.12 }}
      >
        {label}
      </p>
    </div>
  );
}
