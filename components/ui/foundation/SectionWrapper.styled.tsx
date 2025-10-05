// components/ui/sections/SectionWrapper.styled.ts
"use client";

import styled, { css } from "styled-components";

type Variant = "tight" | "default" | "loose";

interface Props {
  $variant?: Variant;
  $bg?: keyof (typeof import("@/styles/theme").lightTheme)["colors"];
  $bgImage?: string;
  id?: string;
}

const getSpacing = (theme: any, variant: Variant = "default") => {
  const s = theme.layout.section.spacing[variant];
  return css`
    padding-block: ${s.mobile};

    @media (min-width: ${theme.breakpoints.md}) {
      padding-block: ${s.md};
    }

    @media (min-width: ${theme.breakpoints.lg}) {
      padding-block: ${s.lg};
    }
  `;
};

export const SectionWrapper = styled.section<Props>`
  width: 100%;
  box-sizing: border-box;

  ${({ theme, $variant = "default" }) => getSpacing(theme, $variant)}
  background: ${({ theme, $bg }) => ($bg ? theme.colors[$bg] : "transparent")};

  text-align: center;
`;

export const SectionWrapperImage = styled.section<Props>`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  ${({ theme, $variant = "default" }) => getSpacing(theme, $variant)}

  background: ${({ $bgImage }) =>
    $bgImage ? `url(${$bgImage}) center/cover no-repeat` : "transparent"};

  text-align: center;
  color: ${({ theme }) => theme.colors.heroText};

  /* ✅ Overlay layer */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.65) 50%,
      rgba(0, 0, 0, 0.85) 100%
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
