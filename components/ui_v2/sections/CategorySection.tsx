// components/ui_v2/sections/CategorySection.tsx
"use client";
import React from "react";
import { SectionWrapper } from "../foundation/SectionWrapper";
import Typography from "../foundation/Typography";
import Grid from "../foundation/Grid";
import Container from "../foundation/Container";
import { useTranslations } from "next-intl";
import UniversalCard from "../components/UniversalCard";
import Link from "next/link";
import Button from "../foundation/Button";
import { Car } from "@/types";

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
  variant?: "home" | "page";
  specsEnabled?: boolean; // ✅ اختياري بدل إجباري
};

export default function CategorySection({
  items,
  namespace,
  variant = "home",
  specsEnabled = true,
  ctaBasePath,
}: Props) {
  const t = useTranslations(namespace);
  const visibleItems = variant === "home" ? items.slice(0, 3) : items;

  return (
    <SectionWrapper $variant="default">
      <Container>
        {/* 🧠 Heading */}
        {variant === "page" && (
          <>
            <Typography as="h2" variant="h2" className="mb-strong">
              {t("title")}
            </Typography>
            <Typography as="p" variant="body" className="mb-strong">
              {t.rich("subtitle", {
                strong: (chunks) => (
                  <span style={{ color: "#ff6f00", fontWeight: "bold" }}>
                    {chunks}
                  </span>
                ),
                country: "Kyrgyzstan",
              })}
            </Typography>
          </>
        )}

        {/* 🧩 Card Grid */}
        <Grid columns={variant === "home" ? 3 : 4} gap="xl">
          {visibleItems.map((item) => (
            <UniversalCard
              key={item.id}
              image={item.coverImage}
              title={item.name}
              description={item.description}
              specs={specsEnabled ? item.specs : undefined}
              price={item.price}
              ctaLabel={variant === "home" ? t("viewDetails") : t("viewAll")}
              ctaLink={`${ctaBasePath}/${item.id}`}
            />
          ))}
        </Grid>

        {/* 🟠 CTA for home */}
        {variant === "home" && (
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <Link href={ctaBasePath || "#"}>
              <Button variant="secondary">{t("viewAll")}</Button>
            </Link>
          </div>
        )}
      </Container>
    </SectionWrapper>
  );
}
