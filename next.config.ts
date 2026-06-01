import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  
  // Optimize for Vercel serverless environment
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },

  // Performance & SEO Optimizations
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  
  // Image optimization for Core Web Vitals
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Headers for better SEO and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/public/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, must-revalidate",
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Remove trailing slashes for consistency
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
    ];
  },

  // Rewrites for better URL structure
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
