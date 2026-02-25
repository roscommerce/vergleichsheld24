/** @type {import('next').NextConfig} */
const nextConfig = {
  // Verhindert Static Generation Timeout bei vielen Seiten
  staticPageGenerationTimeout: 180,

  // Netlify braucht kein standalone output
  // output: 'standalone', // NICHT aktivieren für Netlify

  experimental: {
    // Erhöht Worker-Stabilität beim Build
    workerThreads: false,
    cpus: 1,
  },

  images: {
    remotePatterns: [],
    unoptimized: true,
  },
};

module.exports = nextConfig;
