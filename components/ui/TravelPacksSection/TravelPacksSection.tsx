"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/foundation/Container.styled";
import { Grid } from "@/components/ui/foundation/Grid.styled";
import { TravelPack } from "@/types";
import { Subtitle, Title } from "@/components/ui/atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/tokens/breakpoints";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import TravelPackCard from "./TravelPackCard";

type Props = {
  packs: TravelPack[];
  context?: "home" | "page";
  locale: string;
};

export default function TravelPacksSection({
  packs,
  context = "home",
  locale,
}: Props) {
  const t = useTranslations("travelPacks");
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);

  let visiblePacks = packs;
  if (context === "home") {
    visiblePacks = packs.slice(0, 1);
    if (isTablet) visiblePacks = packs.slice(0, 2);
    if (isDesktop) visiblePacks = packs.slice(0, 3);
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
            <Subtitle>
              {t.rich("subtitle", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </Subtitle>
          </div>

          {isHome && (
            <Link
              href={`/${locale}/travel-packs`}
              aria-label={t("viewAll")}
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              {t("viewAll")} →
            </Link>
          )}
        </div>

        <Grid $gap="lg" $align="stretch">
          {visiblePacks.map((pack) => (
            <TravelPackCard
              key={pack.id}
              pack={pack}
              imageHref={pack.coverImage}
              ctaVisible={!isHome}
              ctaPath={`/${locale}/travel-packs/${pack.id}`}
              ctaLabel={t("cta")}
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
