// next.config.js
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true, // SSR مفعلة ← كتحل FOUC
    },
  },
};

export default nextConfig;

