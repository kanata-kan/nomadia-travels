import { getCars } from "@/lib/api";
import Image from "next/image";

type CarDetailsPageProps = {
  params: Promise<{ id: string }>; // ✅ mark as Promise
};

// ✅ Generate static params for SSG
export async function generateStaticParams() {
  const cars = await getCars();
  return cars.map((car) => ({
    id: car.id,
  }));
}

export default async function CarDetailsPage({ params }: CarDetailsPageProps) {
  // ✅ unwrap params
  const { id } = await params;

  const cars = await getCars();
  const car = cars.find((c) => c.id === id);

  if (!car) return <h1>Car not found</h1>;

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>{car.name}</h1>

      <Image
        src={car.coverImage}
        alt={car.name}
        width={700}
        height={400}
        style={{ objectFit: "cover", borderRadius: "8px" }}
        priority
      />

      <p style={{ marginTop: "1rem" }}>{car.description}</p>
      <p style={{ fontWeight: "600", color: "orange" }}>{car.price}</p>

      <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
        <li>{car.seats} seats</li>
        <li>{car.transmission}</li>
        <li>{car.fuel}</li>
      </ul>
    </main>
  );
}
