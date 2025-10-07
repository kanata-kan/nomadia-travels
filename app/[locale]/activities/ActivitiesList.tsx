// app/[locale]/activities/ActivitiesList.tsx
import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import CategorySection from "@/components/ui_v2/sections/CategorySection";
import { getActivities } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function ActivitiesList({ params }: Props) {
  const { locale } = await params;

  const activities = await getActivities(locale);
  return (
    <CategorySection
      items={activities}
      namespace="activities"
      ctaBasePath="/activities"
      variant="page"
    />
  );
}
