// ==========================================================
// 📄 app/[locale]/activities/page.tsx
// ==========================================================
// 🧗‍♂️ ActivitiesPage — All adventures in Kyrgyzstan
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const revalidate = 43200; // 12h ISR
export const dynamic = "force-dynamic";

import { BaseSection } from "@/components/ui_v2/sections";
import { getActivities } from "@/lib/api/activities";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "activitiesPage",
    path: "/activities",
    imagePath: "/images/activities/og-activities.webp",
    fallbackTitle: "All Activities | Explore Kyrgyzstan",
    fallbackDescription:
      "Browse all available activities and adventures across Kyrgyzstan — hiking, horse trekking, yurt stays, and more.",
  });
}

// 🧗‍♂️ Page
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
