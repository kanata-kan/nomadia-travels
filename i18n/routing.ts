// i18n/routing.ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
});

// اختياري: نوع مضبوط للّغات
export type Locale = (typeof routing.locales)[number];
