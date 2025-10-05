"use client";

import { useTranslations } from "next-intl";

export default function TermsSection() {
  const t = useTranslations("terms");

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{t("title")}</h1>
      <p>
        {t("lastUpdated")} {new Date().toLocaleDateString()}
      </p>

      <section>
        <h2>{t("section1.title")}</h2>
        <p>{t("section1.text")}</p>
      </section>

      <section>
        <h2>{t("section2.title")}</h2>
        <p>{t("section2.text")}</p>
      </section>

      <section>
        <h2>{t("section3.title")}</h2>
        <p>{t("section3.text")}</p>
      </section>
    </main>
  );
}
