import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 250px;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;
export const CarTitle = styled.h1`
  p {
    font-size: 1.2rem;
    color: orangered;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`;

export const DescriptionSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    line-height: 1.6;
    font-size: 0.95rem;

    @media (min-width: 768px) {
      font-size: 1.05rem;
    }
  }
`;

export const CTASection = styled.section`
  margin-bottom: 2rem;
  text-align: center;

  button {
    width: 100%; /* full width فالموبايل */
    max-width: 280px;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export const BackLink = styled.div`
  margin-top: 2rem;
  text-align: center;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: blue;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;
