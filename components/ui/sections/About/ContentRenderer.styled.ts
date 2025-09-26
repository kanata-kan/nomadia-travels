"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: ${({ theme }) => theme.layout.container.maxWidth.md};
  margin-inline: auto;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  line-height: 1.7;
`;

export const Quote = styled.blockquote`
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.spacing.md};
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.125rem;
  line-height: 1.8;
`;

export const ImageBlock = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${({ theme }) => theme.radii.lg};
  object-fit: cover;
`;
