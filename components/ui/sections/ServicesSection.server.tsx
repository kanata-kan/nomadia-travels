// components/ui/sections/ServicesSection.server.tsx
import { getServices } from "@/lib/api";
import ServicesSectionClient from "./ServicesSection.client";

export default async function ServicesSectionServer() {
  const services = await getServices({ cache: "force-cache" });
  return <ServicesSectionClient services={services} />;
}
