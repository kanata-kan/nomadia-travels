// app/cars/page.tsx
export const revalidate = 60; // ISR كل دقيقة
import { getCars } from "@/lib/api";

export default async function CarsPage() {
  const cars = await getCars({ revalidate: 60 });
  return (
    <ul>
      {cars.map((c: any) => (
        <li key={c.id}>
          {c.name} — {c.price}
        </li>
      ))}
    </ul>
  );
}
