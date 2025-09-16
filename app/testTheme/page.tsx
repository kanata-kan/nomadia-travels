"use client";

import ThemeToggleButton from "@/components/ThemeToggleButton";
import styled from "styled-components";

// زر Styled للتجريب
const StyledBox = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.md};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  h1 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  button {
    background: ${({ theme }) => theme.colors.accent};
    border: none;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    border-radius: ${({ theme }) => theme.radii.sm};
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export default function TestThemePage() {
  return (
    <div style={{ padding: "2rem" }}>
      <ThemeToggleButton />

      <StyledBox>
        <h1>Test Theme Page</h1>
        <p>جربنا هنا الألوان والمسافات والراديوس من الـ theme.</p>
        <button>Click Me</button>
      </StyledBox>
    </div>
  );
}
