// components/ui/sections/ServicesSection.client.tsx
"use client";

import { Container } from "@/components/ui/foundation/Container.styled";
import { Grid } from "@/components/ui/foundation/Grid.styled";
import { Service } from "@/types/Service";
import { Subtitle, Title } from "@/components/ui/atoms";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import ServiceCard from "./ServiceCard";

type Props = { services: Service[] };

export default function ServicesSectionClient({ services }: Props) {
  return (
    <SectionWrapper $variant="default" $bg="surface">
      <Container>
        <Title>Our Services</Title>
        <Subtitle>We provide transportation, tours, and more.</Subtitle>
        <Grid $min="220px" $gap="lg" $align="stretch">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
