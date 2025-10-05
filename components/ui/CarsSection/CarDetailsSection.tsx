"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/atoms/Button";
import { FaArrowLeft, FaCarSide } from "react-icons/fa";
import { useTranslations } from "next-intl"; // ⬅️ جديد

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
  const t = useTranslations("carDetails"); // ⬅️ scope

  return (
    <Main>
      <Layout>
        <LeftCol>
          <h1>{car.name}</h1>
          <p>
            {car.price} {car.currency} / {car.unit}
          </p>

          <CarSpecs
            specs={{
              seats: car.seats,
              transmission: car.transmission,
              drive: car.drive,
              luggage: car.luggage,
              fuel: car.fuel,
            }}
          />

          <DescriptionSection>
            <h2>{t("about")}</h2> {/* ⬅️ ترجمة */}
            <p>{car.description}</p>
          </DescriptionSection>

          <CTASection>
            <Button variant="primary">
              <FaCarSide style={{ marginRight: "8px" }} /> {t("book")}
            </Button>
          </CTASection>

          <BackLink>
            <Link href="/cars">
              <FaArrowLeft /> {t("back")}
            </Link>
          </BackLink>
        </LeftCol>

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

          {car.images && car.images.length > 1 && (
            <CarGallery images={car.images} carName={car.name} />
          )}
        </RightCol>
      </Layout>
    </Main>
  );
}
