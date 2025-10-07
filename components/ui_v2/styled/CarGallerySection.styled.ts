import styled from "styled-components";

export const GalleryWrapper = styled.section`
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const ImageBox = styled.div`
  position: relative;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 16 / 9;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  img {
    object-fit: cover;
  }
`;
