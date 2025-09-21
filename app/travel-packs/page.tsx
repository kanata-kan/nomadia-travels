// app/travel-packs/page.tsx
export const revalidate = 43200; // 12h ISR

import { getTravelPacks } from "@/lib/api";

export default async function TravelPacksPage() {
  const packs = await getTravelPacks(); // بلا options

  return (
    <ul>
      {packs.map((p: any) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}
