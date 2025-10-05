import { notFound } from "next/navigation";
import { getActivityById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import ActivityDetailsSection from "@/components/ui/ActivitiesSection/ActivityDetailsSection";

type Props = { params: Promise<{ locale: string; id: string }> };

export default async function ActivityDetailsPage({ params }: Props) {
  const { locale, id } = await params;

  const activity = await getActivityById(id, locale);
  if (!activity) return notFound();

  return <ActivityDetailsSection activity={activity} locale={locale} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
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
