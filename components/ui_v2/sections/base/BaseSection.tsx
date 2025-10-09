"use client";

import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { UniversalCard } from "../../components";
import { Container, Grid, SectionWrapper, Typography } from "../../foundation";
import { mapVariantToSection } from "../../foundation/variantMap";
import ViewAllButton from "../../foundation/ViewAllButton";

/* -------------------------------------------------------------------------- */
/* 🧩 TYPES */
/* -------------------------------------------------------------------------- */
export type DisplayItem = {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  price?: string | number | null;
  specs?: { icon: React.ReactNode; label: string }[];
  ctaLink?: string;
};

type Props = {
  items: DisplayItem[];
  namespace: string;
  ctaBasePath: string;
  variant?: "home" | "page" | "alt" | "dark" | "hero";
  specsEnabled?: boolean;
  showCTA?: boolean; // ✅ Optional: explicitly control the CTA visibility
};

/* -------------------------------------------------------------------------- */
/* 🧱 BASE SECTION COMPONENT (Production-Ready) */
/* -------------------------------------------------------------------------- */
export default function BaseSection({
  items,
  namespace,
  ctaBasePath,
  variant = "home",
  specsEnabled = true,
  showCTA = variant === "home", // 👈 Default behavior (auto for home)
}: Props) {
  const t = useTranslations(namespace);
  const visibleItems = variant === "home" ? items.slice(0, 3) : items;

  return (
    <SectionWrapper $variant={mapVariantToSection(variant)}>
      <Container>
        {/* ------------------------------------------------------------------ */}
        {/* 🧠 Dynamic Title + Subtitle (Localized with next-intl) */}
        {/* ------------------------------------------------------------------ */}
        <Typography as="h2" variant="h2" align="center" className="mb-strong">
          {t("title")}
        </Typography>

        <Typography as="p" variant="body" align="center" className="mb-strong">
          {t.rich("subtitle", {
            strong: (chunks) => (
              <span
                style={{
                  color: "#F97316", // Accent color — consider linking to theme
                  fontWeight: 600,
                }}
              >
                {chunks}
              </span>
            ),
            country: "Kyrgyzstan",
          })}
        </Typography>

        {/* ------------------------------------------------------------------ */}
        {/* 🧩 Universal Card Grid */}
        {/* ------------------------------------------------------------------ */}
        <Grid columns={variant === "home" ? 3 : 4} gap="xl">
          {visibleItems.map((item) => (
            <UniversalCard
              key={item.id}
              image={item.coverImage}
              title={item.name}
              description={item.description}
              specs={specsEnabled ? item.specs : undefined}
              price={item.price}
              ctaLabel={t("viewDetails")}
              ctaLink={`${ctaBasePath}/${item.id}`}
            />
          ))}
        </Grid>

        {/* ------------------------------------------------------------------ */}
        {/* 🟠 Optional “View All” CTA (controlled via showCTA) */}
        {/* ------------------------------------------------------------------ */}
        {showCTA && <ViewAllButton href={ctaBasePath} label={t("viewAll")} />}
      </Container>
    </SectionWrapper>
  );
}
