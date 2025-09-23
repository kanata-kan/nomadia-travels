// components/ui/Hero.tsx
"use client";

import React from "react";

import { Hero } from "@/types";
import {
  HeroContainer,
  HeroInner,
  HeroTitle,
  HeroSubtitle,
  HeroCTA,
} from "../foundation/Hero.styled";

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
