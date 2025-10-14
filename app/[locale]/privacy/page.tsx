// ==========================================================
// 📄 app/[locale]/privacy/page.tsx
// ==========================================================
// 🔒 PrivacyPage — Learn how we handle your personal data
// Unified with Smart Metadata Layer + localized SEO
// ==========================================================

export const dynamic = "force-dynamic";
export const revalidate = 43200; // 12h refresh

import PrivacySection_v2 from "@/components/ui_v2/sections/PrivacySection/PrivacySection";
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

  // 🗣️ Load translations from the "privacyPage" namespace
  const t = await getTranslations({ locale, namespace: "privacyPage" });

  const title = t("title") || "Privacy Policy | Nomadia Travels";
  const description =
    t("description") ||
    "Learn how Nomadia Travels collects, uses, and protects your personal information.";

  // 🖼️ OG image
  const image = `${SITE.URL}/images/legal/og-privacy.webp`;

  // ✅ Return localized metadata object
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/privacy`,
    image,
  });
}

// --------------------------------------------
// 🔒 2. Privacy Page Component
// --------------------------------------------
export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <PrivacySection_v2 />
    </main>
  );
}
