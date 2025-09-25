"use client";

import styled from "styled-components";
import { Container } from "./Container.styled";

interface FullBleedProps {
  $variant?: "overlayDark" | "overlayLight";
  $bg?: keyof (typeof import("@/styles/theme").lightTheme)["colors"];
}

// Base wrapper: goes full width (100vw) with optional overlay
export const FullBleed = styled.div<FullBleedProps>`
  position: relative;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  box-sizing: border-box;
  background: ${({ theme, $bg }) => ($bg ? theme.colors[$bg] : "transparent")};

  ${({ $variant }) =>
    $variant === "overlayDark" &&
    `
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5); /* Dark overlay */
      pointer-events: none;
    }
  `}

  ${({ $variant }) =>
    $variant === "overlayLight" &&
    `
    &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255,255,255,0.3); /* Light overlay */
      pointer-events: none;
    }
  `}
`;

// Inner container: centers bounded content
export const FullBleedInner = styled(Container)`
  position: relative; /* keeps content above overlay */
  z-index: 1;
`;
