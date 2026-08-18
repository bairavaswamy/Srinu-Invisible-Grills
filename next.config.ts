import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Required for static export (next export)
    domains: ["srinuinvisiblegrills.com"], // Optional: add external domains if needed
  },
  output: "export", // Enables static export mode
};

export default nextConfig;
