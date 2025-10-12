// app/[locale]/activities/[id]/page.tsx
import { notFound } from "next/navigation";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { ActivityDetailsSection } from "@/components/ui_v2/sections/ActivityDetailsSection";
import { getActivityById } from "@/lib/api/activities";

type PageParams = {
  params: Promise<{ locale: string; id: string }>;
};

export default async function ActivityDetailsPage({ params }: PageParams) {
  const { locale, id } = await params;

  const activity = await getActivityById(id, locale);
  if (!activity) return notFound();

  return <ActivityDetailsSection activity={activity} locale={locale} />;
}

// 🧠 Dynamic Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale, id } = await params;

  const activity = await getActivityById(id, locale);
  if (!activity) return {};

  return getMetadataDynamic({
    name: activity.name,
    description: activity.description,
    image: activity.coverImage,
    path: `/${locale}/activities/${id}`,
  });
}
