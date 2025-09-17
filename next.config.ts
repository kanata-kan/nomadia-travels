// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true, // يسهل debug فالـDevTools
      ssr: true, // يحل مشاكل FOUC (flash of unstyled content)
    },
  },
};

export default nextConfig;
