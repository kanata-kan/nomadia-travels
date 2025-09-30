// components/ui/sections/TravelPacksSection.tsx
"use client";

import Link from "next/link";
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
};

export default function TravelPacksSection({ packs, context = "home" }: Props) {
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
            <Title>Explore Travel Packs</Title>
            <Subtitle>
              Discover curated travel experiences for your next adventure.
            </Subtitle>
          </div>

          {isHome && (
            <Link
              href="/travel-packs"
              aria-label="View all travel packs"
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              View all →
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
              ctaPath={`/travel-packs/${pack.id}`}
              ctaLabel="View Details"
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
