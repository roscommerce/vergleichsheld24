/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 180,

  experimental: {
    workerThreads: false,
    cpus: 1,
  },

  images: {
    remotePatterns: [],
    unoptimized: true,
  },

  // Compress responses
  compress: true,

  // Security + performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
