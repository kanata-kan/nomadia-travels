// components/ui/Hero.tsx
"use client";

import React from "react";
import {
  HeroContainer,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  HeroCTA,
} from "./Hero.styled";
import { Hero } from "@/types";

export default function HeroSection({
  title,
  subtitle,
  heroImage,
  ctaText,
  ctaLink,
  align = "center",
  overlay = "auto",
}: Hero) {
  const isExternal = ctaLink.startsWith("http");

  return (
    <HeroContainer $bgImage={heroImage} $overlay={overlay}>
      <HeroInner $align={align}>
        <HeroTitle>{title}</HeroTitle>
        <HeroSubtitle>{subtitle}</HeroSubtitle>

        <HeroCTA
          href={ctaLink}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {ctaText}
        </HeroCTA>
      </HeroInner>
    </HeroContainer>
  );
}
