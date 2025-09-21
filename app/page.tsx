// app/tests/home/page.tsx
export const dynamic = "force-dynamic"; // Explicit SSR
import { getHome } from "@/lib/api";

export default async function HomePage() {
  const home = await getHome({ cache: "no-store" }); // دايما fresh

  return (
    <div>
      <h1>🏠 Home — SSR</h1>
      <h2>{home.hero.title}</h2>
      <p>{home.hero.subtitle}</p>
    </div>
  );
}
