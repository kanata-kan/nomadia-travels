// next.config.ts
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin("./i18n/request.ts"); // ⬅️ مهم

const nextConfig = {
  compiler: {
    styledComponents: { displayName: true, ssr: true },
  },
};

export default withNextIntl(nextConfig);
