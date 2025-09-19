import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 4rem 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.text.muted};
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const BrandCol = styled.div`
  .logo {
    margin-bottom: 0.5rem;
  }

  .brand-title {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin-top: 0.5rem;
  }

  .brand-sub {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const LinksCol = styled.div`
  h4 {
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  a {
    display: block;
    margin: 0.6rem 0;
    color: ${({ theme }) => theme.colors.text.muted};
    text-decoration: none;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 1rem;

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;

export const Newsletter = styled.form`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    flex: 1;
    padding: 0.8rem;
    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.colors.text.muted};
  }

  button {
    padding: 0.6rem 0.9rem;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text.inverse};
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }

  .feedback {
    margin-top: 0.5rem;
  }

  .note.success {
    color: green;
  }

  .note.error {
    color: #ff6b6b;
  }
`;

export const BottomRow = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.text.muted};

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0.6rem;
    align-items: center;
  }
`;
