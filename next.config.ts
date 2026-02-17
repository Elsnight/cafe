import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Exportación estática para GitHub Pages
  output: "export",
  // Deshabilitar trailing slash para URLs limpias
  trailingSlash: true,
  images: {
    // Deshabilitar optimización de imágenes (no soportado en GitHub Pages)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
