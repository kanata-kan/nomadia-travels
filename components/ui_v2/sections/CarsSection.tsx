"use client";

import CarCard from "../components/CarCard";
import { Car } from "@/types";
import { SectionWrapper } from "../foundation/SectionWrapper";
import Typography from "../foundation/Typography";
import Grid from "../foundation/Grid";
import Container from "../foundation/Container";
import { useTranslations } from "next-intl";

type Props = {
  cars: Car[];
  variant?: "home" | "page";
};

export default function CarsSection({ cars, variant = "home" }: Props) {
  const visibleCars = variant === "home" ? cars.slice(0, 3) : cars;
  const t = useTranslations("carsSection");

  return (
    <SectionWrapper $variant="default">
      <Container>
        <Typography as="h2" variant="h2" className="mb-strong">
          {t("title")}
        </Typography>

        <Typography as="p" variant="body" className="mb-strong">
          {t("subtitle", { country: "Kyrgyzstan" })}
        </Typography>

        <Grid columns={3} gap="xl">
          {visibleCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
