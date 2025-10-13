// ==========================================================
// 📄 app/[locale]/activities/page.tsx
// ==========================================================
// 🧗‍♂️ ActivitiesPage — Browse all adventures in Kyrgyzstan
// Uses Promise params pattern + localized SEO metadata
// ==========================================================

import { getMetadataStatic } from "@/lib/metadata/static";
import { BaseSection } from "@/components/ui_v2/sections";
import { getActivities } from "@/lib/api/activities";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

export const revalidate = 43200; // 12h ISR for semi-static data refresh
export const dynamic = "force-dynamic";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
// Loads localized title & description from messages/[locale].json
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations
  const t = await getTranslations({ locale, namespace: "activitiesPage" });

  const title = t("title") || "All Activities | Explore Kyrgyzstan";
  const description =
    t("description") ||
    "Browse all available activities and adventures across Kyrgyzstan — hiking, horse trekking, yurt stays, and more.";

  // 🖼️ OG image (social preview)
  const image = `${SITE.URL}/images/activities/og-activities.webp`;

  // ✅ Return metadata object
  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/activities`,
    image,
  });
}

// --------------------------------------------
// 🧗‍♂️ 2. Activities Page Component
// --------------------------------------------
// Fetches localized activities and displays them in BaseSection
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string }>;
};

export default async function ActivitiesPage({ params }: PageParams) {
  const { locale } = await params;
  const activities = await getActivities(locale);

  return (
    <main>
      <BaseSection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="page"
      />
    </main>
  );
}
