// components/ui_v2/foundation/SectionWrapper.tsx
"use client";
import styled from "styled-components";

export const SectionWrapper = styled.section<{
  $variant?: "tight" | "default" | "loose";
}>`
  padding-block: ${({ theme, $variant = "default" }) =>
    theme.layout.section.spacing[$variant].md};
`;
