"use client";

// components/ui/status/status.styles.ts
// =========================================
// Status Styles (styled-components)
// - Fully theme-aware (colors, radii, spacing)
// - Works for both light & dark themes
// - Small, composable primitives for Status pages
// =========================================

import styled, { keyframes, css } from "styled-components";
import { darken } from "polished";

// ---------- Helpers ----------
/** Safe getter with fallback to avoid undefined theme tokens */
const token = <T>(v: T | undefined, fb: T) => v ?? fb;

// ---------- Layout Primitives ----------
/* 
  StatusBox
  - Wrapper for status pages (loading, error, not-found)
  - Centers content with comfortable padding and max width
*/
export const StatusBox = styled.section`
  display: grid;
  gap: ${(props) => token(props.theme?.spacing?.sm, "8px")};
  padding: ${(props) => token(props.theme?.spacing?.lg, "24px")};
  max-width: 720px;
  margin: 0 auto;

  /* Subtle separation when placed on large, plain backgrounds */
  background: transparent;

  @media (max-width: 480px) {
    padding: ${(props) => token(props.theme?.spacing?.md, "16px")};
  }
`;

// ---------- Typography ----------
/*
  StatusTitle / StatusDesc
  - Pull text colors from theme tokens
  - Use responsive sizing via clamp()
*/
export const StatusTitle = styled.h1`
  margin: 0;
  color: ${(p) => token(p.theme?.colors?.text?.primary, "#1E293B")};
  font-size: clamp(20px, 3vw, 28px);
  line-height: 1.2;
`;

export const StatusDesc = styled.p`
  margin: 0;
  color: ${(p) => token(p.theme?.colors?.text?.secondary, "#475569")};
  opacity: 0.95;
`;

// ---------- Actions Row ----------
/*
  ActionsRow
  - Horizontal container for buttons/links under the description
*/
export const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(p) => token(p.theme?.spacing?.sm, "8px")};
  margin-top: ${(p) => token(p.theme?.spacing?.sm, "8px")};
`;

// ---------- Buttons ----------
/*
  StatusBtn
  - Neutral button that adapts to theme colors
  - Use divider for borders; surface for background
*/
export const StatusBtn = styled.button<{ fullWidth?: boolean }>`
  padding: 10px 14px;
  border-radius: ${(p) => token(p.theme?.radii?.lg, "12px")};
  cursor: pointer;

  border: 1px solid ${(p) => token(p.theme?.colors?.divider, "#E2E8F0")};
  background: ${(p) => token(p.theme?.colors?.surface, "#F9FAFB")};
  color: ${(p) => token(p.theme?.colors?.text?.primary, "#1E293B")};

  ${(p) =>
    p.fullWidth &&
    css`
      width: 100%;
    `}

  &:hover {
    background: ${(p) =>
      darken(0.02, token(p.theme?.colors?.surface, "#F9FAFB"))};
  }

  &:active {
    background: ${(p) =>
      darken(0.04, token(p.theme?.colors?.surface, "#F9FAFB"))};
    transform: scale(0.98);
  }
`;

// ---------- Spinner ----------
/*
  Spinner
  - Minimal, theme-aware loading indicator
  - Uses primary color for the animated top border
  - Respects prefers-reduced-motion
*/
const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const SpinnerWrap = styled.div`
  display: grid;
  place-items: center;
  min-height: 40vh;
`;

export const SpinnerDot = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;

  /* Use divider for neutral ring and primary for the animated arc */
  border: 4px solid
    ${(p) => token(p.theme?.colors?.divider, "rgba(0,0,0,0.15)")};
  border-top-color: ${(p) => token(p.theme?.colors?.primary, "#F97316")};

  animation: ${spin} 0.9s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

// ---------- Link-like Action ----------
/*
  LinkLike
  - For NotFound "Go Home" and similar inline actions
*/
export const LinkLike = styled.a`
  text-decoration: underline;
  color: ${(p) => token(p.theme?.colors?.primary, "#F97316")};
  cursor: pointer;

  &:hover {
    color: ${(p) => darken(0.1, token(p.theme?.colors?.primary, "#F97316"))};
  }

  &:active {
    color: ${(p) => darken(0.2, token(p.theme?.colors?.primary, "#F97316"))};
    transform: scale(0.95);
  }
`;

// ---------- Optional Card (if you ever need a contained panel) ----------
/*
  StatusCard
  - Optional: a soft surface panel you can wrap around StatusBox contents
  - Keeps borders/background tied to theme tokens
*/
export const StatusCard = styled.div`
  padding: ${(p) => token(p.theme?.spacing?.lg, "24px")};
  border: 1px solid ${(p) => token(p.theme?.colors?.divider, "#E2E8F0")};
  border-radius: ${(p) => token(p.theme?.radii?.lg, "12px")};
  background: ${(p) => token(p.theme?.colors?.surface, "#F9FAFB")};
`;
