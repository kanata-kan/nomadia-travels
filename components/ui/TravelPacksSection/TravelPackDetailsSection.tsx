"use client";

import Image from "next/image";
import { useTranslations } from "next-intl"; // ✅ لإدارة الترجمات
import { TravelPack } from "@/types";
import { Button } from "@/components/ui/atoms/Button";
import {
  Wrapper,
  Content,
  HeroSection,
  FeaturesSection,
  DetailsSection,
  CTAWrapper,
} from "./TravelPackDetails.styled";

type Props = { travelPack: TravelPack };

export default function TravelPackDetailsSection({ travelPack }: Props) {
  const t = useTranslations("travelPackDetails"); // ✅ نربط namespace خاص بالترجمات

  return (
    <Wrapper>
      <Content>
        <h1>{travelPack.name}</h1>
        <p>{travelPack.description}</p>

        {/* === Features === */}
        <FeaturesSection>
          <h2>{t("featuresTitle")}</h2>
          <ul>
            {travelPack.features.map((feature, index) => (
              <li key={index}>
                <span className="icon">✔</span> {feature}
              </li>
            ))}
          </ul>
        </FeaturesSection>

        {/* === Duration === */}
        {travelPack.duration && (
          <DetailsSection>
            <h3>{t("durationTitle")}</h3>
            <p>{travelPack.duration}</p>
          </DetailsSection>
        )}

        {/* === Price === */}
        {travelPack.price && (
          <DetailsSection>
            <h3>{t("priceTitle")}</h3>
            <p>{travelPack.price}</p>
          </DetailsSection>
        )}

        {/* === CTA === */}
        <CTAWrapper>
          <Button>{t("ctaButton")}</Button>
        </CTAWrapper>
      </Content>

      {/* === Hero Image === */}
      <HeroSection>
        <Image
          src={travelPack.coverImage}
          alt={travelPack.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </HeroSection>
    </Wrapper>
  );
}
