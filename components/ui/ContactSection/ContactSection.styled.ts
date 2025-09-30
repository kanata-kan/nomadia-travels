import styled from "styled-components";

export const Section = styled.section`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.surfaceAlt};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
`;

export const ContentBlock = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const InfoSection = styled.div`
  margin-top: 2rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const InfoItem = styled.p`
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.primary};

  a {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 600;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SocialSection = styled.div`
  margin-top: 2rem;

  h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;

  li {
    a {
      color: ${({ theme }) => theme.colors.accent};
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
`;

export const FormSection = styled.div`
  margin-top: 2.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    margin-bottom: 0.3rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input,
  textarea {
    padding: 0.8rem;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.radii.md};
    font-size: 1rem;
    width: 100%;

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.accent};
      box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.accent}33;
    }
  }

  textarea {
    min-height: 100px;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-start;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;
