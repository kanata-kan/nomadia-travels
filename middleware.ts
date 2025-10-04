// middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // استثني api/_next/_vercel والفايلات بالنقطة (favicon.ico...)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
