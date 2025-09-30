// components/ui/sections/ActivitiesSection.tsx
"use client";

import Link from "next/link";
import { Container } from "../foundation/Container.styled";
import { Grid } from "../foundation/Grid.styled";
import { Activity } from "@/types";
import { Subtitle, Title } from "../atoms";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/styles/tokens/breakpoints";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  context?: "home" | "page";
};

export default function ActivitiesSection({
  activities,
  context = "home",
}: Props) {
  const isDesktop = useMediaQuery(`(min-width: ${breakpoints.lg})`);
  const isTablet = useMediaQuery(`(min-width: ${breakpoints.md})`);

  let visibleActivities = activities;
  if (context === "home") {
    visibleActivities = activities.slice(0, 1);
    if (isTablet) visibleActivities = activities.slice(0, 2);
    if (isDesktop) visibleActivities = activities.slice(0, 3);
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
            <Title>Available Activities</Title>
            <Subtitle>
              Choose from our curated activities for your
              <strong> Kyrgyzstan </strong> adventure.
            </Subtitle>
          </div>

          {isHome && (
            <Link
              href="/activities"
              aria-label="View all activities"
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              View all →
            </Link>
          )}
        </div>

        <Grid $gap="lg" $align="stretch">
          {visibleActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              imageHref={activity.coverImage}
              ctaVisible={!isHome}
              ctaPath={`/activities/${activity.id}`}
              ctaLabel="View Details"
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
