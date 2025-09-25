"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCarSide } from "react-icons/fa";
import { Button } from "../atoms/Button";
import { Car } from "@/types";

import {
  Card,
  ImageWrapper,
  Title,
  Description,
  Price,
  Specs,
  SpecItem,
  ActionWrapper,
} from "./CarCard.styled";

type Props = {
  car: Car;
  ctaPath?: string; // 👈 path مخصص
  ctaLabel?: string; // 👈 label مخصص
};

export default function CarCard({
  car,
  ctaPath = `/cars/${car.id}`, // default
  ctaLabel = "View Details", // default
}: Props) {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={car.coverImage}
          alt={car.name}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>

      <Title>{car.name}</Title>
      <Description>{car.description}</Description>

      {/* price اختياري */}
      {car.price && <Price>{car.price}</Price>}

      <Specs>
        <SpecItem>{car.seats} seats</SpecItem>
        <SpecItem>{car.transmission}</SpecItem>
        <SpecItem>{car.drive}</SpecItem>
        <SpecItem>{car.luggage} luggage</SpecItem>
        <SpecItem>{car.fuel}</SpecItem>
      </Specs>

      <ActionWrapper>
        <Link href={ctaPath} passHref>
          <Button variant="primary">
            <FaCarSide style={{ marginRight: "8px" }} />
            {ctaLabel}
          </Button>
        </Link>
      </ActionWrapper>
    </Card>
  );
}
