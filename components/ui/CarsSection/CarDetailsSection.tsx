"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/Button";
import { FaArrowLeft, FaCarSide } from "react-icons/fa";

import { Car } from "@/types";
import CarSpecs from "./CarSpecs";
import CarGallery from "./CarGallery";
import {
  Main,
  Layout,
  LeftCol,
  RightCol,
  HeroImageWrapper,
  DescriptionSection,
  CTASection,
  BackLink,
} from "@/app/[locale]/cars/[id]/styledComponents";

type Props = { car: Car };

export default function CarDetailsSection({ car }: Props) {
  return (
    <Main>
      <Layout>
        {/* Left Content */}
        <LeftCol>
          <h1>{car.name}</h1>
          <p>
            {car.price} {car.currency} / {car.unit}
          </p>

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
        </LeftCol>

        {/* Right Image */}
        <RightCol>
          <HeroImageWrapper>
            <Image
              src={car.coverImage}
              alt={car.metadata.alt || "Car image"}
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
              priority
            />
          </HeroImageWrapper>

          {/* Gallery */}
          {car.images && car.images.length > 1 && (
            <CarGallery images={car.images} carName={car.name} />
          )}
        </RightCol>
      </Layout>
    </Main>
  );
}
