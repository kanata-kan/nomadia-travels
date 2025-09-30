"use client";
import styled from "styled-components";

export const LightboxWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) =>
    theme.colors.overlay}; /* Replaced rgba with token */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: ${({ theme }) => theme.spacing.lg};
`;

export const LightboxContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 360px; /* Image + Side panel */
  max-width: 1200px;
  width: 100%;
  max-height: 90vh;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr; /* Mobile → stack vertically */
    grid-template-rows: auto auto;
  }
`;

export const ImageArea = styled.div`
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
  }
`;

export const InfoPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface}; /* Updated to surface */
  color: ${({ theme }) => theme.colors.text.primary};

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 1.25rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary}; /* Updated to secondary */
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  pointer-events: none;

  button {
    pointer-events: auto;
  }
`;

export const NavBtn = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const CloseBtn = styled(NavBtn)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.danger};
`;
