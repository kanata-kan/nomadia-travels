// ==========================================================
// 📄 app/[locale]/activities/[id]/page.tsx
// ==========================================================

import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { ActivityDetailsSection } from "@/components/ui_v2/sections/ActivityDetailsSection";
import { getActivityById } from "@/lib/api/activities";

// --------------------------------------------
// 🧠 Types
// --------------------------------------------
type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

// --------------------------------------------
// 🧩 Page Component
// --------------------------------------------
export default async function ActivityDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;
  const activity = await getActivityById(id, locale);
  if (!activity) return notFound();

  return <ActivityDetailsSection activity={activity} locale={locale} />;
}

// --------------------------------------------
// ⚙️ Dynamic Metadata Builder
// --------------------------------------------
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;
  const activity = await getActivityById(id, locale);
  if (!activity) return {};

  // ✅ Use metadata from JSON if available, else fallback
  return getMetadataDynamic({
    name: activity.metadata?.title || activity.name,
    description: activity.metadata?.description || activity.description,
    image: activity.metadata?.image || activity.coverImage,
    path: `/${locale}${activity.metadata?.path || `/activities/${activity.id}`}`,
    locale,
  });
}
