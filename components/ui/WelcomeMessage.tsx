// components/ui/WelcomeMessage.tsx
"use client";

import { useTranslations } from "next-intl";

export default function WelcomeMessage() {
  const t = useTranslations("home");
  return <h1>{t("welcome")}</h1>;
}
