// ==========================================================
// 📄 app/[locale]/terms/page.tsx
// ==========================================================
// ⚖️ TermsPage — Understand the rules and responsibilities
// Unified with Smart Metadata Layer + localized SEO metadata
// ==========================================================

export const dynamic = "force-dynamic";
export const revalidate = 43200; // 12h ISR refresh

import TermsSection_v2 from "@/components/ui_v2/sections/TermsSection/TermsSection";
import { getMetadataStatic } from "@/lib/metadata/static";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations from "terms" namespace
  const t = await getTranslations({ locale, namespace: "terms" });

  const title = t("title") || "Terms of Service | Nomadia Travels";
  const description =
    t("description") ||
    "Read the terms and conditions for using Nomadia Travels services, website, and bookings.";

  // 🖼️ OG image (social preview)
  const image = `${SITE.URL}/images/legal/og-terms.webp`;

  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/terms`,
    image,
  });
}

// --------------------------------------------
// ⚖️ 2. Terms Page Component
// --------------------------------------------
// Renders localized legal text using <TermsSection_v2 />
// --------------------------------------------
export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <TermsSection_v2 />
    </main>
  );
}
