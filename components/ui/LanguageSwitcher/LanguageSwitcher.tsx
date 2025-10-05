"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { LangButton, Wrapper } from "./LanguageSwitcher.styled";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLang = (lang: "en" | "fr") => {
    router.replace(pathname, { locale: lang });
  };

  return (
    <Wrapper>
      <LangButton $active={locale === "en"} onClick={() => switchLang("en")}>
        EN
      </LangButton>
      <LangButton $active={locale === "fr"} onClick={() => switchLang("fr")}>
        FR
      </LangButton>
    </Wrapper>
  );
}
