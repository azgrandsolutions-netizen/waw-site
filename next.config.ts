/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // dacă folosești imagini remote, adaugă domain-urile aici:
  images: { remotePatterns: [] },
  // dacă vei folosi middleware pentru i18n, păstrăm strictDynamic optional:
  experimental: { strictNextHead: true },
};
module.exports = nextConfig;
