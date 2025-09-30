import styled from "styled-components";

export const Main = styled.main`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const RightCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;

  @media (min-width: 768px) {
    height: 400px;
  }

  @media (min-width: 1200px) {
    height: 500px;
  }
`;

export const DescriptionSection = styled.section`
  h2 {
    margin-bottom: 0.8rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    line-height: 1.6;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

export const CTASection = styled.section`
  button {
    width: 100%;
    max-width: 280px;
  }
`;

export const BackLink = styled.div`
  margin-top: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: bold;
  }
`;
