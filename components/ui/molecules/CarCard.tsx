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

type Props = { car: Car };

export default function CarCard({ car }: Props) {
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
        <Link href={`/cars/${car.id}`} passHref>
          <Button variant="primary">
            <FaCarSide style={{ marginRight: "8px" }} />
            View Details
          </Button>
        </Link>
      </ActionWrapper>
    </Card>
  );
}
