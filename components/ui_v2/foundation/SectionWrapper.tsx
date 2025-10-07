"use client";
import styled from "styled-components";

/* --------------------------------------------
   🔹 Interface Props
-------------------------------------------- */
interface SectionWrapperProps {
  $variant?: "tight" | "default" | "loose";
  $bg?: "background" | "surface";
}

/* --------------------------------------------
   🧱 Section Wrapper
-------------------------------------------- */
export const SectionWrapper = styled.section<SectionWrapperProps>`
  width: 100%;
  background-color: ${({ theme, $bg = "background" }) =>
    theme.colors[$bg] || theme.colors.background};

  padding-block: ${({ theme, $variant = "default" }) =>
    theme.layout.section.spacing[$variant].md};
`;
