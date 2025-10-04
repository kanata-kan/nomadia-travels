// app/cars/ page.tsx
import CarsList from "./CarsList";
import { getMetadataStatic } from "@/lib/metadata/static";

export const metadata = getMetadataStatic({
  title: "All Cars",
  description: "Browse all available cars for your Kyrgyzstan adventure.",
  path: "/cars",
});

export default function CarsPage() {
  return (
    <main>
      <CarsList />
    </main>
  );
}
