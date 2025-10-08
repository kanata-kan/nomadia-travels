// app/[locale]/activities/page.tsx
import { getMetadataStatic } from "@/lib/metadata/static";
import { getActivities } from "@/lib/api";
import CategorySection from "@/components/ui_v2/sections/CategorySection";

export const revalidate = 43200; // 12h ISR

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return getMetadataStatic({
    title: locale === "fr" ? "Toutes les activités" : "All Activities",
    description:
      locale === "fr"
        ? "Découvrez toutes les activités disponibles pour votre aventure au Kirghizistan."
        : "Browse all available activities for your Kyrgyzstan adventure.",
    path: `/${locale}/activities`,
    image: "/og-activities.png",
  });
}

type PageParams = {
  params: Promise<{ locale: string }>;
};

export default async function ActivitiesPage({ params }: PageParams) {
  const { locale } = await params;
  const activities = await getActivities(locale);

  return (
    <main>
      <CategorySection
        items={activities}
        namespace="activities"
        ctaBasePath="/activities"
        variant="page"
      />
    </main>
  );
}
