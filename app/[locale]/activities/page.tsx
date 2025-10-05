// app/[locale]/activities/page.tsx
import { getMetadataStatic } from "@/lib/metadata/static";
import ActivitiesList from "./ActivitiesList";

type Props = {
  params: Promise<{ locale: string }>;
};

export const metadata = getMetadataStatic({
  title: "All Activities",
  description: "Browse all available activities for your Kyrgyzstan adventure.",
  path: "/activities",
});

export default async function ActivitiesPage({ params }: Props) {
  return (
    <main>
      <ActivitiesList params={params} />
    </main>
  );
}
