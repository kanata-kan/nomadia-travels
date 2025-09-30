// components/ui/Hero.styled.ts
"use client";

import Link from "next/link";
import styled from "styled-components";

// Types for overlay + alignment
type OverlayType = "dark" | "light" | "auto";
type AlignType = "center" | "left" | "right";

// Hero wrapper (with background + overlay)
export const HeroContainer = styled.section<{
  $bgImage: string;
  $overlay?: OverlayType;
}>`
  position: relative;
  display: grid;
  place-items: center;
  text-align: center;
  min-height: 90vh;
  color: ${({ theme }) => theme.colors.text.inverse};
  background: ${({ $bgImage }) => `url(${$bgImage}) center/cover no-repeat`};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ $overlay }) =>
      $overlay === "dark"
        ? "linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2))"
        : $overlay === "light"
          ? "linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.1))"
          : "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15))"};
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

// Inner grid (alignment)
export const HeroInner = styled.div<{ $align?: AlignType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $align }) =>
    $align === "left"
      ? "flex-start"
      : $align === "right"
        ? "flex-end"
        : "center"};
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

// Title
export const HeroTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heroText};
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6); // وضوح أقوى فوق الصور
  margin: 0;
`;

// Subtitle
export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.colors.heroText};
  max-width: 700px;
  line-height: 1.6;
  margin: 0 auto;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.5); // خفيف، يخلي النص يبان واضح
`;

// CTA Internal CTA (Next.js Link)
export const HeroCTA = styled(Link)<{ $external?: boolean }>`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radii.md};
  font-weight: 600;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
`;
