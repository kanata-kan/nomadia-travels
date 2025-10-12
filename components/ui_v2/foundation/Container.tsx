"use client";

import styled from "styled-components";
import { ReactNode } from "react";

/* --------------------------------------------
   🧩 Props Interface
-------------------------------------------- */
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  max?: keyof typeof containerMax;
  fluid?: boolean;
  className?: string;
}

/* --------------------------------------------
   📏 Container Sizes from Tokens
-------------------------------------------- */
const containerMax = {
  md: "720px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1400px",
};

/* --------------------------------------------
   🧱 Styled Component (fixed version)
-------------------------------------------- */
const StyledContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "fluid" && prop !== "max",
})<ContainerProps>`
  width: 100%;
  margin-inline: auto;
  box-sizing: border-box;
  position: relative;

  /* padding responsive */
  padding-inline: ${({ theme }) => theme.layout.container.padding.mobile};

  /* dynamic max-width */
  max-width: ${({ max, fluid }) =>
    fluid ? "100%" : containerMax[max || "xl"]};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.lg};
  }
`;

/* --------------------------------------------
   ⚙️ React Component
-------------------------------------------- */
export default function Container({
  as: Tag = "div",
  children,
  max = "xl",
  fluid = false,
  className,
}: ContainerProps) {
  return (
    <StyledContainer as={Tag} max={max} fluid={fluid} className={className}>
      {children}
    </StyledContainer>
  );
}
