"use client";

import styled from "styled-components";

export const Subtitle = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.heroText};
  max-width: 650px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
  text-align: center;

  /* ✅ تحسين القراءة فوق الصور */
  opacity: 0.95;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 1);
`;
