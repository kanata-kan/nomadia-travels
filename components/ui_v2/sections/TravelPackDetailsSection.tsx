"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { TravelPack } from "@/types";

import Typography from "../foundation/Typography";
import Container from "../foundation/Container";
import Grid from "../foundation/Grid";
import Button from "../foundation/Button";

import { FaArrowLeft, FaClock, FaTag } from "react-icons/fa";

import {
  DetailsCard,
  FeaturesList,
  HeroImageWrapper,
  Wrapper,
  InfoSection,
  CTASection,
  BackLink,
} from "../styled/TravelPackDetailsSection.styled";

type Props = { travelPack: TravelPack };

export default function TravelPackDetailsSection({ travelPack }: Props) {
  const t = useTranslations("travelPackDetails");

  return (
    <Wrapper>
      <Container>
        <Grid columns={2} gap="xl" responsive>
          {/* 🖼️ Hero Image */}
          <div>
            <HeroImageWrapper>
              <Image
                src={travelPack.coverImage}
                alt={travelPack.metadata?.alt || travelPack.name}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                style={{ objectFit: "cover" }}
                priority
              />
            </HeroImageWrapper>
          </div>

          {/* 📄 Information */}
          <InfoSection>
            <Typography as="h1" variant="h1" color="primary">
              {travelPack.name}
            </Typography>

            <Typography as="p" variant="body" className="mb-strong">
              {travelPack.description}
            </Typography>

            {/* 🌿 Features */}
            <Typography
              as="h2"
              variant="h3"
              color="accent"
              className="mb-strong"
            >
              {t("featuresTitle")}
            </Typography>

            <FeaturesList>
              {travelPack.features?.map((feature, index) => (
                <li key={index}>
                  <span className="checkmark">✔</span> {feature}
                </li>
              ))}
            </FeaturesList>

            {/* ⏱️ Duration */}
            {travelPack.duration && (
              <DetailsCard>
                <FaClock />
                <span>
                  <strong>{t("durationTitle")}:</strong> {travelPack.duration}
                </span>
              </DetailsCard>
            )}

            {/* 💰 Price */}
            {travelPack.price && (
              <DetailsCard>
                <FaTag />
                <span>
                  <strong>{t("priceTitle")}:</strong> {travelPack.price}
                </span>
              </DetailsCard>
            )}

            {/* 🟠 CTA */}
            <CTASection>
              <Button variant="primary" fullWidth>
                {t("ctaButton")}
              </Button>
            </CTASection>

            {/* 🔙 Back */}
            <BackLink>
              <Link href="/travel-packs">
                <FaArrowLeft /> {t("back")}
              </Link>
            </BackLink>
          </InfoSection>
        </Grid>
      </Container>
    </Wrapper>
  );
}
