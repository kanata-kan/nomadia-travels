// app/travel-packs/page.tsx
export const revalidate = 43200; // 12h ISR

import { getMetadataStatic } from "@/lib/metadata/static";
import TravelPacksList from "./TravelPacksList";

export const metadata = getMetadataStatic({
  title: "All Travel Packs",
  description: "Explore our curated travel packs for your next adventure.",
  path: "/travel-packs",
});

export default async function TravelPacksPage() {
  return (
    <main>
      <TravelPacksList />
    </main>
  );
}
