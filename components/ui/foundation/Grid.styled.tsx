// components/ui/foundation/Grid.styled.tsx
"use client";

import styled from "styled-components";

interface GridProps {
  $min?: string; // min size for auto-fit
  $gap?: keyof (typeof import("@/styles/theme").lightTheme)["spacing"];
  $align?: "start" | "center" | "end" | "stretch";
}

export const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${({ theme, $gap = "lg" }) => theme.spacing[$gap]};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ $min = "220px" }) => $min}, 1fr)
  );
  align-items: ${({ $align = "start" }) => $align};
`;
