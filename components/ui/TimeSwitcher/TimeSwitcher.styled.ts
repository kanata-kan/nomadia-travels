"use client";

import styled from "styled-components";
import { darken } from "@/lib/colorUtils"; // Import darken utility

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) =>
      darken(theme.colors.background, 10)}; /* Darkens the background */
    color: ${({ theme }) => theme.colors.text.inverse};
    transform: scale(1.05); /* Subtle scaling effect */
  }

  &:active {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow */
    transform: scale(0.98); /* Slightly reduces size on click */
  }
`;
