// components/ui/molecules/CarCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { Button } from "../atoms/Button";
import { Car } from "@/types";
import {
  StyledCard,
  ImageWrapper,
  Title,
  Description,
  Price,
  Specs,
  SpecItem,
  ActionWrapper,
  ButtonWrapper,
} from "./CarCard.styled";

type Props = {
  car: Car;
  ctaVisible?: boolean;
  ctaPath?: string;
  ctaLabel?: string;
  imageHref?: string;
};

export default function CarCard({
  car,
  ctaVisible = true,
  ctaPath = `/cars/${car.id}`,
  ctaLabel = "View Details",
  imageHref,
}: Props) {
  const ImageBlock = (
    <ImageWrapper>
      <Image
        src={car.coverImage}
        alt={car.name}
        width={400}
        height={250}
        style={{ objectFit: "cover" }}
        priority={true}
      />
    </ImageWrapper>
  );

  return (
    <StyledCard>
      {imageHref ? (
        <Link href={imageHref} aria-label={`View cars`}>
          {ImageBlock}
        </Link>
      ) : (
        ImageBlock
      )}

      <Title>{car.name}</Title>
      <Description>{car.description}</Description>

      {car.price && (
        <Price>
          {car.price} {car.currency} / {car.unit}
        </Price>
      )}

      <Specs>
        <SpecItem>{car.seats} seats</SpecItem>
        <SpecItem>{car.transmission}</SpecItem>
        <SpecItem>{car.drive}</SpecItem>
        <SpecItem>{car.luggage} luggage</SpecItem>
        <SpecItem>{car.fuel}</SpecItem>
      </Specs>

      {ctaVisible && (
        <ActionWrapper>
          <Link href={ctaPath} passHref aria-label={`View ${car.name} details`}>
            <Button variant="primary">
              <FaCarSide style={{ marginRight: 8 }} />
              {ctaLabel}
            </Button>
          </Link>
        </ActionWrapper>
      )}
    </StyledCard>
  );
}
