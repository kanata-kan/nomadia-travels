// components/ui/sections/GalleryDetails.styled.ts
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const LeftCol = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    line-height: 1.6;
  }
`;

export const RightCol = styled.div`
  flex: 1;
`;

export const CoverImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
`;

export const GalleryGrid = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;

  .thumb {
    position: relative;
    width: 100%;
    height: 140px;
    border-radius: ${({ theme }) => theme.radii.sm};
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.03);
    }
  }
`;
