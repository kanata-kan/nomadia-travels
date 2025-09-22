"use client";

import styled, { css } from "styled-components";

type Variant = "tight" | "default" | "loose";

interface Props {
  $variant?: Variant;
  $bg?: keyof (typeof import("@/styles/theme").lightTheme)["colors"];
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
`;
