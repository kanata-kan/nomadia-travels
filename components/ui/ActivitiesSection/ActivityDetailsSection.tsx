"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Activity } from "@/types";
import { Button } from "../atoms/Button";
import { FaArrowLeft, FaHiking } from "react-icons/fa";
import {
  Wrapper,
  ContentCol,
  ImageCol,
  Header,
  DetailsSection,
  DetailsList,
  CTASection,
  BackLink,
} from "./ActivityDetailsSection.styled";

interface Props {
  activity: Activity;
  locale: string;
}

export default function ActivityDetailsSection({ activity, locale }: Props) {
  const t = useTranslations("activityDetails");

  return (
    <Wrapper>
      {/* Left Content */}
      <ContentCol>
        <Header>
          <h1>{activity.name}</h1>
          <p>{activity.price}</p>
        </Header>

        <DetailsSection>
          <h2>{t("aboutTitle")}</h2>
          <p>{activity.description}</p>

          <DetailsList>
            <li>
              ⏳ {t("duration")}: {activity.duration}
            </li>
            <li>
              📍 {t("location")}: {activity.location}
            </li>
            <li>
              👥 {t("groupSize")}: {activity.groupSize}
            </li>
            <li>
              💰 {t("price")}: {activity.price}
            </li>
          </DetailsList>
        </DetailsSection>

        <CTASection>
          <Button variant="primary">
            <FaHiking style={{ marginRight: "8px" }} /> {t("bookNow")}
          </Button>
        </CTASection>

        <BackLink>
          <Link href={`/${locale}/activities`}>
            <FaArrowLeft /> {t("backToActivities")}
          </Link>
        </BackLink>
      </ContentCol>

      {/* Right Image */}
      <ImageCol>
        <Image
          src={activity.coverImage}
          alt={activity.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          style={{ objectFit: "cover", borderRadius: "12px" }}
          priority
        />
      </ImageCol>
    </Wrapper>
  );
}
