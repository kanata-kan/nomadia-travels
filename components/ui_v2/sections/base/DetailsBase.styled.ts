"use client";
import styled from "styled-components";
import { darken } from "@/lib/colorUtils";

/* 🧱 Global Wrapper */
export const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding-block: ${({ theme }) => theme.layout.section.spacing.default.lg};
`;

/* 🖼️ Image Wrapper */
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${({ theme }) => theme.radii.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme.shadows?.md || "0 6px 20px rgba(0,0,0,0.15)"};
  transition: all 0.35s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => darken(theme.colors.surface, 10)};
    box-shadow: ${({ theme }) =>
      theme.shadows?.md || "0 8px 25px rgba(0,0,0,0.25)"};
    transform: scale(1.02);
  }

  img {
    transition:
      transform 0.35s ease,
      filter 0.35s ease;
  }

  &:hover img {
    transform: scale(1.05);
    filter: brightness(0.9);
  }
`;

/* 📄 Info Section */
export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

/* 🧡 CTA */
export const CTASection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  button {
    font-weight: 600;
  }
`;

/* 🔙 Back Link */
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
