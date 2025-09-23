"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBus } from "react-icons/fa"; // تقدر تبدلها بـ FaHiking ولا FaPlaneArrival...
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
          alt={car.metadata.alt}
          width={400}
          height={250}
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>

      <Title>{car.name}</Title>
      <Description>{car.description}</Description>
      <Price>{car.price}</Price>

      <Specs>
        <SpecItem>{car.seats} seats</SpecItem>
        <SpecItem>{car.transmission}</SpecItem>
        <SpecItem>{car.fuel}</SpecItem>
      </Specs>

      <ActionWrapper>
        <Link href={`/cars/${car.id}`} passHref>
          <Button variant="primary">
            <FaBus style={{ marginRight: "8px" }} />
            View Details
          </Button>
        </Link>
      </ActionWrapper>
    </Card>
  );
}
