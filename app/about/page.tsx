import { getMetadataStatic } from "@/lib/metadata/static";
export const metadata = getMetadataStatic({
  title: "About Us",
  description: "Learn more about Nomadia Travels...",
  path: "/about",
  image: "/og-about.png", // ✅ page-specific OG image
});

export default function AboutPage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>About Us</h1>
      <p>
        Learn more about Nomadia Travels and our mission to explore Kyrgyzstan.
      </p>
    </main>
  );
}
