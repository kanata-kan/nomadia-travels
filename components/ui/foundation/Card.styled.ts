// components/ui/foundation/Card.styled.ts
import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) =>
    theme.colors.surface}; /* Updated to surface for consistency */
  border: 1px solid ${({ theme }) => theme.colors.accent}; /* Updated to accent for subtle borders */
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
