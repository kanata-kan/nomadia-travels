// components/ui/ActivitiesSection/ActivityCard.tsx
"use client";

import styled from "styled-components";
import { Activity } from "@/types";
import { Card } from "../foundation/Card.styled";
import { Button } from "../atoms";
import Link from "next/link";
import { darken } from "@/lib/colorUtils";
import Image from "next/image";

type Props = {
  activity: Activity;
  imageHref?: string;
  ctaVisible?: boolean;
  ctaPath?: string;
  ctaLabel?: string;
};

export default function ActivityCard({
  activity,
  imageHref,
  ctaVisible = true,
  ctaPath,
  ctaLabel = "Learn More",
}: Props) {
  return (
    <StyledCard>
      {/* صورة النشاط */}
      <ImageWrapper>
        <Image
          src={imageHref || activity.coverImage}
          alt={activity.name}
          width={300} // Replace with appropriate width
          height={200} // Replace with appropriate height
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>

      {/* المحتوى */}
      <Content>
        <Title>{activity.name}</Title>
        <Description>{activity.description}</Description>

        <FeatureList>
          <li>
            <span className="label">⏱ Duration:</span> {activity.duration}
          </li>
          <li>
            <span className="label">📍 Location:</span> {activity.location}
          </li>
          <li>
            <span className="label">👥 Group Size:</span> {activity.groupSize}
          </li>
          <li>
            <span className="label">💲 Price:</span> {activity.price}
          </li>
        </FeatureList>

        {ctaVisible && ctaPath && (
          <ButtonWrapper>
            <Link href={ctaPath} aria-label={ctaLabel}>
              <Button>{ctaLabel}</Button>
            </Link>
          </ButtonWrapper>
        )}
      </Content>
    </StyledCard>
  );
}

/* 🎨 Styles */

const StyledCard = styled(Card)`
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

const ImageWrapper = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${StyledCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.md}
    0;
  color: ${({ theme }) => theme.colors.secondary};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 0.8rem;
  flex-grow: 1;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1rem;
  font-size: 0.95rem;

  li {
    margin-bottom: 0.4rem;
    color: ${({ theme }) => theme.colors.text.secondary};

    .label {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text.primary};
      margin-right: 0.25rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0 ${({ theme }) => theme.spacing.md};
  min-height: 45px;
`;
