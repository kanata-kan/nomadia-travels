"use client";

import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import styled from "styled-components";
import { Service } from "@/types/Service";
import ServiceCard from "../molecules/ServiceCard";

const ServicesGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

type Props = { services: Service[] };

export default function ServicesSectionClient({ services }: Props) {
  return (
    <SectionWrapper $variant="default" $bg="surface">
      <Container>
        <h2 style={{ textAlign: "center" }}>Our Services</h2>
        <p style={{ textAlign: "center" }}>
          We provide transportation, tours, and more.
        </p>
        <ServicesGrid>
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </ServicesGrid>
      </Container>
    </SectionWrapper>
  );
}
