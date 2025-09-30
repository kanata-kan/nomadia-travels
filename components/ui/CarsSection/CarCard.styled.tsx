"use client";
import styled from "styled-components";
import { Card } from "../foundation/Card.styled";
import { darken } from "@/lib/colorUtils";

export const StyledCard = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 2rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 600px;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px ${({ theme }) => darken("rgba(0, 0, 0, 0.1)", 0.1)};
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 6px 15px ${({ theme }) => darken("rgba(0, 0, 0, 0.1)", 0.2)};
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 ${({ theme }) => theme.spacing.md};
  min-height: 45px;
  flex-grow: 1;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing.md};
`;

export const Specs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  margin: ${({ theme }) => theme.spacing.md};
  list-style: none;
  padding: 0;
`;

export const SpecItem = styled.li`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.divider};
`;

export const ActionWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.md};
  margin-top: auto;
  display: flex;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
`;
