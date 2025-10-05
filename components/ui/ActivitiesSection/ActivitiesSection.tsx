"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("activities");

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
            <Title>{t("title")}</Title>
            <Subtitle>
              {t.rich("subtitle", {
                strong: (chunks) => <strong>{chunks}</strong>,
                endStrong: () => null,
              })}
            </Subtitle>
          </div>

          {isHome && (
            <Link
              href="/activities"
              aria-label={t("viewAll")}
              style={{ fontWeight: 600, fontSize: "0.95rem" }}
            >
              {t("viewAll")}
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
              ctaLabel={t("cta")}
            />
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
}
