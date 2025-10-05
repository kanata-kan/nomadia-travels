// app/[locale]/cars/page.tsx
import CarsList from "./CarsList";
import { getMetadataStatic } from "@/lib/metadata/static";

export const metadata = getMetadataStatic({
  title: "All Cars",
  description: "Browse all available cars for your Kyrgyzstan adventure.",
  path: "/cars",
});

export default async function CarsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <CarsList locale={locale} />
    </main>
  );
}
