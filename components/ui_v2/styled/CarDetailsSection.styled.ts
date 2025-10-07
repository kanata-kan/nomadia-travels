import styled from "styled-components";

/* 🧱 Wrapper عام */
export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding-block: ${({ theme }) => theme.layout.section.spacing.default.lg};
`;

/* 📸 صورة السيارة */
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
`;

/* 📄 معلومات السيارة */
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

/* ⚙️ المواصفات */
export const SpecsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md} 0;

  div {
    background-color: ${({ theme }) => theme.colors.surface};
    border-radius: ${({ theme }) => theme.radii.md};
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xs};
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.text.muted};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

    span {
      display: block;
      font-size: 1.2rem;
      margin-bottom: 4px;
    }
  }
`;

/* 🧡 زر CTA */
export const CTASection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  button {
    font-weight: 600;
  }
`;

/* 🔙 Back link */
export const BackLink = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};

  a {
    color: ${({ theme }) => theme.colors.text.muted};
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
