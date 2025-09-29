// app/activities/page.tsx

import { getMetadataStatic } from "@/lib/metadata/static";
import ActivitiesList from "./ActivitiesList";

export const metadata = getMetadataStatic({
  title: "All Activities",
  description: "Browse all available activities for your Kyrgyzstan adventure.",
  path: "/activities",
});

export default function ActivitiesPage() {
  return (
    <main>
      <ActivitiesList />
    </main>
  );
}
