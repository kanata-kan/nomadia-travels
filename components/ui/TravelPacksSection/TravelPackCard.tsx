// components/ui/molecules/TravelPackCard.tsx
import styled, { css } from "styled-components";
import { TravelPack } from "@/types";
import { Card } from "@/components/ui/foundation/Card.styled";
import { Button } from "@/components/ui/atoms";
import { darken } from "@/lib/colorUtils"; // Import darken from the shared utility file
import Image from "next/image";

type Props = {
  pack: TravelPack;
  imageHref?: string;
  ctaVisible?: boolean;
  ctaPath?: string;
  ctaLabel?: string;
};

export default function TravelPackCard({
  pack,
  imageHref,
  ctaVisible = true,
  ctaPath,
  ctaLabel = "Learn More",
}: Props) {
  return (
    <StyledCard>
      <ImageWrapper>
        <Image
          src={imageHref || pack.coverImage}
          alt={pack.name}
          width={300} // Replace with appropriate width
          height={200} // Replace with appropriate height
          style={{ objectFit: "cover" }} // Adjust styling as needed
        />
      </ImageWrapper>
      <Content>
        <h3>{pack.name}</h3>
        <p>{pack.description}</p>
        <FeatureList>
          {pack.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeatureList>
        {ctaVisible && ctaPath && (
          <ButtonWrapper>
            <a href={ctaPath} aria-label={ctaLabel}>
              <Button>{ctaLabel}</Button>
            </a>
          </ButtonWrapper>
        )}
      </Content>
    </StyledCard>
  );
}

// ----------------- STYLES -----------------

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  width: 100%;
  height: 250px; /* Increased height for better visibility */
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image covers the entire area */
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.secondary};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  text-align: left;
  width: 100%;

  li {
    font-size: 0.95rem;
    color: ${({ theme }) => theme.colors.text.muted};
    margin: 0.4rem 0;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✔";
      color: ${({ theme }) => theme.colors.accent};
      position: absolute;
      left: 0;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: auto;

  a {
    display: inline-block;
    width: auto;
    padding: 0.5rem 1.5rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-radius: ${({ theme }) => theme.radii.md};
    text-decoration: none;
    font-weight: 600;
    transition:
      background 0.3s ease,
      transform 0.3s ease;

    &:hover {
      background: ${({ theme }) => darken(theme.colors.primary, 0.1)};
      transform: scale(1.05);
    }

    &:active {
      background: ${({ theme }) => darken(theme.colors.primary, 0.2)};
      transform: scale(0.95);
    }
  }
`;
