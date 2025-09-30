"use client";

import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.heroText};
  text-align: center;

  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
`;
