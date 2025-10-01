// app/activities/ActivitiesList.tsx
import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import { getActivities } from "@/lib/api";
export const dynamic = "force-dynamic";

export default async function ActivitiesList() {
  const activities = await getActivities();
  return <ActivitiesSection activities={activities} context="page" />;
}
