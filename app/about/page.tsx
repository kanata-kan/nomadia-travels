// app/about/page.tsx
export const dynamic = "force-static";

import { getAbout } from "@/lib/api";

export default async function AboutPage() {
  const about = await getAbout({ cache: "force-cache" });
  return <h1>{about.heading}</h1>;
}
