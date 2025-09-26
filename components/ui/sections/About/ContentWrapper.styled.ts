import styled from "styled-components";

export const TextWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: ${({ theme }) => theme.colors.text.inverse};
  max-width: 800px;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;
