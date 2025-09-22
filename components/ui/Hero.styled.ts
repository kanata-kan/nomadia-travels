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
    background: ${({ $overlay, theme }) =>
      $overlay === "dark"
        ? "rgba(0,0,0,0.45)"
        : $overlay === "light"
          ? "rgba(255,255,255,0.25)"
          : theme.colors.background === "#FFFFFF"
            ? "rgba(0,0,0,0.35)" // auto في light
            : "rgba(255,255,255,0.15)"}; // auto في dark
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
`;

// Subtitle
export const HeroSubtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: ${({ theme }) => theme.colors.heroText};
  max-width: 700px;
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
