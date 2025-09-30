// Footer.styled.ts
import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 2.5rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
`;

export const BrandCol = styled.div`
  .logo {
    margin-bottom: 0.6rem;
  }

  .brand-title {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin-top: 0.3rem;
  }

  .brand-sub {
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
`;

export const LinksCol = styled.div`
  h4 {
    margin-bottom: 0.6rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1rem;
  }

  a {
    display: block;
    margin: 0.4rem 0;
    color: ${({ theme }) => theme.colors.text.muted};
    font-size: 0.9rem;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.surfaceAlt};
    transition: background 0.3s;

    &:hover {
      background: ${({ theme }) => theme.colors.surface};
    }
  }
`;

export const Newsletter = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.divider};
    font-size: 0.9rem;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
      outline: none;
    }
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryHover};
    }
  }

  .note {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
  }
`;

export const BottomRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: 0.85rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.4rem;
    align-items: center;
  }
`;
