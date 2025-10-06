"use client";

import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Swatch = styled.div<{ bg: string; color: string }>`
  background: ${({ bg }) => bg};
  color: ${({ color }) => color};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 120px;
  font-size: 0.9rem;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

export default function ColorPreviewGrid() {
  const colors = [
    {
      name: "Primary",
      bg: "var(--color-primary)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Secondary",
      bg: "var(--color-secondary)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Accent",
      bg: "var(--color-accent)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Background",
      bg: "var(--color-background)",
      color: "var(--color-text-primary)",
    },
    {
      name: "Surface",
      bg: "var(--color-surface)",
      color: "var(--color-text-primary)",
    },
    {
      name: "Surface Alt",
      bg: "var(--color-surface-alt)",
      color: "var(--color-text-primary)",
    },
    {
      name: "Text Primary",
      bg: "var(--color-text-primary)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Text Secondary",
      bg: "var(--color-text-secondary)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Text Muted",
      bg: "var(--color-text-muted)",
      color: "var(--color-text-inverse)",
    },
    {
      name: "Divider",
      bg: "var(--color-divider)",
      color: "var(--color-text-primary)",
    },
  ];

  return (
    <Grid>
      {colors.map((c) => (
        <Swatch key={c.name} bg={c.bg} color={c.color}>
          <strong>{c.name}</strong>
          <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>{c.bg}</span>
        </Swatch>
      ))}
    </Grid>
  );
}
