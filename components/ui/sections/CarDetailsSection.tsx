// components/ui/sections/CarDetailsSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/Button";
import { FaArrowLeft, FaCarSide } from "react-icons/fa";
import CarGallery from "@/components/ui/molecules/CarGallery";
import CarSpecs from "@/components/ui/molecules/CarSpecs";
import {
  Main,
  HeroSection,
  DescriptionSection,
  CTASection,
  BackLink,
} from "@/app/cars/[id]/styledComponents";

import { Car } from "@/types";

type Props = { car: Car };

export default function CarDetailsSection({ car }: Props) {
  return (
    <Main>
      <h1>{car.name}</h1>
      <p>
        {car.price} {car.currency} / {car.unit}
      </p>
      {/* Hero */}
      <HeroSection>
        <Image
          src={car.coverImage}
          alt={car.metadata.alt || "Car image"}
          fill
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />
      </HeroSection>

      {/* Gallery */}
      {car.images && car.images.length > 1 && (
        <CarGallery images={car.images} carName={car.name} />
      )}

      {/* Specs */}
      <CarSpecs
        specs={{
          seats: car.seats,
          transmission: car.transmission,
          drive: car.drive,
          luggage: car.luggage,
          fuel: car.fuel,
        }}
      />

      {/* Description */}
      <DescriptionSection>
        <h2>About this car</h2>
        <p>{car.description}</p>
      </DescriptionSection>

      {/* CTA */}
      <CTASection>
        <Button variant="primary">
          <FaCarSide style={{ marginRight: "8px" }} /> Book this Car
        </Button>
      </CTASection>

      {/* Back link */}
      <BackLink>
        <Link href="/cars">
          <FaArrowLeft /> Back to Cars
        </Link>
      </BackLink>
    </Main>
  );
}
