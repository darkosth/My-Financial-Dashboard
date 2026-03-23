/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  distDir: process.env.E2E_TEST_MODE === "1" ? ".next-e2e" : ".next",
};

export default nextConfig;
