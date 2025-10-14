// ==========================================================
// ⚙️ Next.js Configuration — Kanata UI v2 (App Router clean)
// ==========================================================

import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: { displayName: true, ssr: true },
  },
  images: {
    qualities: [60, 75, 90],
    formats: ["image/avif", "image/webp"] as ("image/avif" | "image/webp")[],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

export default withNextIntl(withAnalyzer(nextConfig));
