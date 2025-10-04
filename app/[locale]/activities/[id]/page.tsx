// app/activities/[id]/page.tsx
import { notFound } from "next/navigation";
import { getActivityById } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import ActivityDetailsSection from "@/components/ui/ActivitiesSection/ActivityDetailsSection";

type Props = { params: Promise<{ id: string }> };

export default async function ActivityDetailsPage({ params }: Props) {
  const { id } = await params;

  const activity = await getActivityById(id);
  if (!activity) return notFound();

  return <ActivityDetailsSection activity={activity} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const activity = await getActivityById(id);
  if (!activity) return {};

  return getMetadataDynamic({
    name: activity.name,
    description: activity.description,
    image: activity.coverImage,
    path: `/activities/${id}`,
  });
}
