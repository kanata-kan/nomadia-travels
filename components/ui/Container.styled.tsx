"use client";

// components/ui/Container.styled.tsx
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: ${({ theme }) => theme.layout.container.padding.mobile};
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.md};
    max-width: ${({ theme }) => theme.layout.container.maxWidth.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-inline: ${({ theme }) => theme.layout.container.padding.lg};
    max-width: ${({ theme }) => theme.layout.container.maxWidth.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    max-width: ${({ theme }) => theme.layout.container.maxWidth.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints["2xl"]}) {
    max-width: ${({ theme }) => theme.layout.container.maxWidth["2xl"]};
  }
`;
