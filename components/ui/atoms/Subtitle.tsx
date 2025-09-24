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
