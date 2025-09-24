"use client";

import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import CarCard from "../molecules/CarCard";
import { Car } from "@/types";
import { Subtitle, Title } from "../atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/tokens/breakpoints";

type Props = { cars: Car[] };

export default function CarsSection({ cars }: Props) {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);

  let visibleCars = cars.slice(0, 1);
  if (isTablet) visibleCars = cars.slice(0, 2);
  if (isDesktop) visibleCars = cars.slice(0, 3);

  return (
    <SectionWrapper $variant="loose" $bg="background">
      <Container>
        <Title>Available Cars</Title>
        <Subtitle>
          Choose from our fleet of cars for your
          <strong> Kyrgyzstan </strong> adventure.
        </Subtitle>
        <Grid $gap="lg" $align="stretch">
          {visibleCars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              ctaPath="/cars"
              ctaLabel="View All Cars"
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
