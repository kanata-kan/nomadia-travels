export const dynamic = "force-static";

import OurStorySection from "@/components/ui/OurStorySection/OurStorySection";
import { getOurStory } from "@/lib/api";
import { getMetadataStatic } from "@/lib/metadata/static";

export const metadata = getMetadataStatic({
  title: "Our Story",
  description: "Learn about the journey and mission of Nomadia Travels.",
  path: "/our-story",
});

export default async function OurStoryPage() {
  const story = await getOurStory({ cache: "force-cache" });

  return <OurStorySection ourStory={story} />;
}
