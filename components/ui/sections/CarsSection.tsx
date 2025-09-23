// 📂 components/ui/sections/CarsSection.tsx
"use client";

import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import CarCard from "../molecules/CarCard";
import { Car } from "@/types";

type Props = { cars: Car[] };

export default function CarsSection({ cars }: Props) {
  return (
    <SectionWrapper $variant="loose" $bg="background">
      <Container>
        <h2 style={{ textAlign: "center" }}>Available Cars</h2>
        <p style={{ textAlign: "center" }}>
          Choose from our fleet of cars for your Kyrgyzstan adventure.
        </p>
        <Grid $min="280px" $gap="lg" $align="stretch">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
