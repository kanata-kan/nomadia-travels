// components/ui/gallery/GalleryGrid.styled.tsx
"use client";
import styled from "styled-components";

type GridProps = {
  $min: string;
  $gap: keyof typeof import("@/styles/tokens/spacing").spacing;
};

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${(p) => p.$min}, 1fr));
  gap: ${({ theme, $gap }) => theme.spacing[$gap] || theme.spacing.lg};
`;

export const Tile = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radii.lg};
  cursor: pointer;

  img {
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Caption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0));
  color: ${({ theme }) => theme.colors.heroText};
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.heroText};
  margin: 0;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
`;

export const Sub = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.heroText};
  margin: 0;
  opacity: 0.9;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
`;
