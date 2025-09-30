// app/activities/ActivitiesList.tsx
import ActivitiesSection from "@/components/ui/ActivitiesSection/ActivitiesSection";
import { getActivities } from "@/lib/api";

export default async function ActivitiesList() {
  const activities = await getActivities({ revalidate: 60 }); // Revalidate every 60 seconds
  return <ActivitiesSection activities={activities} context="page" />;
}
