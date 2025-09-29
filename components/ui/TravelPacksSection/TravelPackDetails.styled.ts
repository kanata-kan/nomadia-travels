// components/ui/molecules/TravelPackDetails.styled.ts
import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  padding: 3rem 2rem;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1.1rem;
  }
`;

export const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
`;

export const FeaturesSection = styled.section`
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    align-items: center;
    margin-bottom: 0.75rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: 1rem;
  }

  .icon {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

export const DetailsSection = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  padding: 1rem;
  border-radius: ${({ theme }) => theme.radii.md};

  h3 {
    margin: 0 0 0.25rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const CTAWrapper = styled.div`
  margin-top: 1rem;
`;
