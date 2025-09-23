// components/ui/sections/ServicesSection.client.tsx
"use client";

import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import { Service } from "@/types/Service";
import ServiceCard from "../molecules/ServiceCard";

type Props = { services: Service[] };

export default function ServicesSectionClient({ services }: Props) {
  return (
    <SectionWrapper $variant="default" $bg="surface">
      <Container>
        <h2>Our Services</h2>
        <p>We provide transportation, tours, and more.</p>
        <Grid $min="220px" $gap="lg" $align="stretch">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
