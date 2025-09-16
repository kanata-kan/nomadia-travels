"use client";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export function Button({ children }: { children: React.ReactNode }) {
  return <StyledButton>{children}</StyledButton>;
}
