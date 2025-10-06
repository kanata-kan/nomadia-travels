"use client";

import styled from "styled-components";
import { ReactNode } from "react";

/* --------------------------------------------
   🧩 Props Interface
-------------------------------------------- */
interface GridProps {
  children: ReactNode;
  columns?: number; // عدد الأعمدة الثابتة (optional)
  gap?: keyof typeof import("@/styles/tokens/spacing").spacing; // مثلاً sm, md, lg
  align?: "start" | "center" | "end"; // المحاذاة العمودية
  justify?: "start" | "center" | "end" | "between"; // المحاذاة الأفقية
  responsive?: boolean; // هل تتجاوب تلقائيًا
  className?: string;
}

/* --------------------------------------------
   🧱 Styled Component
-------------------------------------------- */
const StyledGrid = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["columns", "gap", "align", "justify", "responsive"].includes(
      prop as string,
    ),
})<GridProps>`
  display: grid;
  width: 100%;
  box-sizing: border-box;

  /* 🧠 Dynamic Gap (from tokens) */
  gap: ${({ gap, theme }) => theme.spacing[gap || "md"]};

  /* 🧩 Grid Columns Logic */
  grid-template-columns: ${({ columns, responsive }) =>
    responsive
      ? `repeat(auto-fit, minmax(280px, 1fr))`
      : columns
        ? `repeat(${columns}, 1fr)`
        : `repeat(auto-fit, minmax(280px, 1fr))`};

  /* ⚙️ Alignment Options */
  align-items: ${({ align }) => align || "start"};
  justify-content: ${({ justify }) => {
    switch (justify) {
      case "center":
        return "center";
      case "end":
        return "end";
      case "between":
        return "space-between";
      default:
        return "start";
    }
  }};

  /* 📱 Responsive Enhancements */
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ responsive }) =>
      responsive ? `repeat(auto-fit, minmax(220px, 1fr))` : `repeat(2, 1fr)`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

/* --------------------------------------------
   ⚙️ React Component
-------------------------------------------- */
export default function Grid({
  children,
  columns,
  gap = "md",
  align = "start",
  justify = "start",
  responsive = true,
  className,
}: GridProps) {
  return (
    <StyledGrid
      columns={columns}
      gap={gap}
      align={align}
      justify={justify}
      responsive={responsive}
      className={className}
    >
      {children}
    </StyledGrid>
  );
}
