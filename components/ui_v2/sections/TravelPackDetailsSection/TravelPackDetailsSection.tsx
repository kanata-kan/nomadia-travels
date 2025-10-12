"use client";

import { FaClock, FaTag } from "react-icons/fa";
import { TravelPack } from "@/types";
import { useTranslations } from "next-intl";
import { DetailsBaseSection } from "../base";
import { Button, Typography } from "../../foundation";
import { DetailsCard, FeaturesList } from "./TravelPackDetailsSection.styled";

type Props = { travelPack: TravelPack; locale: string };

export default function TravelPackDetailsSection({
  travelPack,
  locale,
}: Props) {
  const t = useTranslations("travelPackDetails");

  return (
    <DetailsBaseSection
      imageSrc={travelPack.coverImage}
      title={travelPack.name}
      description={travelPack.description}
      backHref="/travel-packs"
      locale={locale}
      cta={<Button variant="primary">{t("ctaButton")}</Button>}
      details={
        <>
          <Typography as="h2" variant="h3" color="accent" className="mb-strong">
            {t("featuresTitle")}
          </Typography>
          <FeaturesList>
            {travelPack.features?.map((feature, i) => (
              <li key={i}>
                <span className="icon">✔</span> {feature}
              </li>
            ))}
          </FeaturesList>

          {travelPack.duration && (
            <DetailsCard>
              <FaClock /> {t("durationTitle")}: {travelPack.duration}
            </DetailsCard>
          )}
          {travelPack.price && (
            <DetailsCard>
              <FaTag /> {t("priceTitle")}: {travelPack.price}
            </DetailsCard>
          )}
        </>
      }
    />
  );
}
