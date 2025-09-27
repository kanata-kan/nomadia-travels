// components/ui/sections/CarsSection.tsx
"use client";

import Link from "next/link";
import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import CarCard from "../molecules/CarCard";
import { Car } from "@/types";
import { Subtitle, Title } from "../atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/tokens/breakpoints";

type Props = {
  cars: Car[];
  context?: "home" | "page";
};

export default function CarsSection({ cars, context = "home" }: Props) {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);

  let visibleCars = cars;
  if (context === "home") {
    visibleCars = cars.slice(0, 1);
    if (isTablet) visibleCars = cars.slice(0, 2);
    if (isDesktop) visibleCars = cars.slice(0, 3);
  }

  const isHome = context === "home";

  return (
    <SectionWrapper $variant="loose" $bg="background">
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "0.5rem",
          }}
        >
          <div>
            <Title>Available Cars</Title>
            <Subtitle>
              Choose from our fleet of cars for your
              <strong> Kyrgyzstan </strong> adventure.
            </Subtitle>
          </div>

          {isHome && (
            <Link
              href="/cars"
              aria-label="View all cars"
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              View all →
            </Link>
          )}
        </div>

        <Grid $gap="lg" $align="stretch">
          {visibleCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              imageHref={isHome ? "/cars" : undefined}
              ctaVisible={!isHome}
              ctaPath={`/cars/${car.id}`}
              ctaLabel="View Details"
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
