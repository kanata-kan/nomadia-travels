import styled from "styled-components";
import Image from "next/image";

// Container for the full hero
export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(
    100vh - ${({ theme }) => theme.layout.nav.height.lg}
  ); // subtract navbar height
  margin-top: ${({ theme }) => theme.layout.nav.height.lg};
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Background image
export const HeroImage = styled(Image)`
  z-index: 1;
`;

// Overlay for contrast
export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3)
  ); // dark overlay
  z-index: 2;
`;
