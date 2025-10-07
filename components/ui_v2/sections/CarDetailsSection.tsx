"use client";

import Image from "next/image";
import Link from "next/link";
import { Car } from "@/types";
import { useTranslations } from "next-intl";

import Typography from "../foundation/Typography";
import Container from "../foundation/Container";
import Grid from "../foundation/Grid";
import Button from "../foundation/Button";
import CarGallerySection from "../sections/CarGallerySection"; // 🆕 معرض الصور

import { FaArrowLeft, FaCarSide } from "react-icons/fa";

import {
  Wrapper,
  ImageWrapper,
  InfoSection,
  SpecsGrid,
  CTASection,
  BackLink,
} from "../styled/CarDetailsSection.styled";

/* --------------------------------------------
   🧩 Component
-------------------------------------------- */
export default function CarDetailsSection({ car }: { car: Car }) {
  const t = useTranslations("carDetails");

  return (
    <Wrapper>
      <Container>
        <Grid columns={2} gap="xl" responsive>
          {/* 🖼️ الصورة الرئيسية + معرض الصور */}
          <div>
            <ImageWrapper>
              <Image
                src={car.coverImage}
                alt={car.metadata?.alt || car.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{
                  objectFit: "cover",
                }}
                priority
              />
            </ImageWrapper>

            {/* 🖼️ <CarGallerySection carName={car.name} images={car.images} /> */}
          </div>

          {/* 📄 المعلومات */}
          <InfoSection>
            <Typography as="h1" variant="h1" color="primary">
              {car.name}
            </Typography>

            <Typography as="p" variant="body" className="mb-strong">
              {car.price} {car.currency} / {car.unit}
            </Typography>

            {/* ⚙️ المواصفات */}
            <SpecsGrid>
              <div>
                <span>🚗</span>
                {car.transmission}
              </div>
              <div>
                <span>🪑</span>
                {car.seats} seats
              </div>
              <div>
                <span>🧳</span>
                {car.luggage}
              </div>
              <div>
                <span>⛽</span>
                {car.fuel}
              </div>
            </SpecsGrid>

            {/* 🧠 الوصف */}
            <Typography
              as="h2"
              variant="h3"
              color="accent"
              className="mb-strong"
            >
              {t("about")}
            </Typography>

            <Typography as="p" variant="body" className="text-clamp-4">
              {car.description}
            </Typography>

            {/* 🟠 زر الحجز */}
            <CTASection>
              <Button variant="primary" fullWidth>
                <FaCarSide style={{ marginRight: "8px" }} />
                {t("book")}
              </Button>
            </CTASection>

            {/* 🔙 رابط العودة */}
            <BackLink>
              <Link href="/cars">
                <FaArrowLeft /> {t("back")}
              </Link>
            </BackLink>
          </InfoSection>
        </Grid>
      </Container>
    </Wrapper>
  );
}
