import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['example.com', 'another-domain.com'], // Add your allowed image domains here
  },
};

export default nextConfig;
