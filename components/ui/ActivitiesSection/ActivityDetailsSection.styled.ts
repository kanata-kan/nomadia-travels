"use client";

import styled from "styled-components";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ContentCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ImageCol = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 500px;
  }
`;

export const Header = styled.div`
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
  }
`;

export const DetailsSection = styled.section`
  h2 {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1rem;
  }
`;

export const DetailsList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 0.6rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const CTASection = styled.div`
  button {
    width: 100%;
    max-width: 280px;

    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      width: auto;
    }
  }
`;

export const BackLink = styled.div`
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;
