import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  // Optimize for Vercel serverless environment
  experimental: {
    // Enable incremental static regeneration
    isrMemoryCacheSize: 52 * 1024 * 1024,
  },
  // Ensures proper handling of database connections in serverless
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
