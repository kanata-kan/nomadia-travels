"use client";

import styled from "styled-components";

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;
