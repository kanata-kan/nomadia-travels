// app/about/page.tsx
// This is the About page of the website.
// app/about/page.tsx
import AboutSection from "@/components/ui/skeleton/AboutSection";
import { getAbout } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

// ✅ Static Metadata
export const metadata = getMetadataStatic({
  title: "Our Story | Explore Kyrgyzstan",
  description:
    "Learn how Explore Kyrgyzstan by Rent & Ride began and why we are passionate about authentic travel.",
  path: "/about",
  image: "/images/about-og.png",
});

export const revalidate = 3600;

export default async function AboutPage() {
  const about = await getAbout({ revalidate: 3600 });

  return <AboutSection about={about} />;
}
