"use client";

import Link from "next/link";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import { Car } from "@/types";
import { Subtitle, Title } from "../atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/tokens/breakpoints";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import CarCard from "./CarCard";
import { useTranslations } from "next-intl";

type Props = {
  cars: Car[];
  context?: "home" | "page";
};

export default function CarsSection({ cars, context = "home" }: Props) {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);
  const t = useTranslations("carsSection"); // 🔑

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
            <Title>{t("title")}</Title>
            <Subtitle>{t("subtitle", { country: "Kyrgyzstan" })}</Subtitle>
          </div>

          {isHome && (
            <Link
              href="/cars"
              aria-label={t("viewAll")}
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              {t("viewAll")}
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
              ctaLabel={t("ctaLabel")}
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
