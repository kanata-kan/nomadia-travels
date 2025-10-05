// components/ui/sections/ServicesSection.server.tsx
import { getServices } from "@/lib/api";
import ServicesSectionClient from "./ServicesSection.client";

export default async function ServicesSectionServer({
  locale = "en",
}: {
  locale?: string;
}) {
  const services = await getServices(locale);
  return <ServicesSectionClient services={services} />;
}
