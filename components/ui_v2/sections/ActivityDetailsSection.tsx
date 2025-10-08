"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  FaArrowLeft,
  FaHiking,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaMoneyBill,
} from "react-icons/fa";

import { Activity } from "@/types";
import Typography from "../foundation/Typography";
import Container from "../foundation/Container";
import Grid from "../foundation/Grid";
import Button from "../foundation/Button";

import {
  Wrapper,
  ImageWrapper,
  InfoSection,
  DetailsList,
  CTASection,
  BackLink,
} from "../styled/ActivityDetailsSection.styled";

interface Props {
  activity: Activity;
  locale: string;
}

export default function ActivityDetailsSection({ activity, locale }: Props) {
  const t = useTranslations("activityDetails");

  return (
    <Wrapper>
      <Container>
        <Grid columns={2} gap="xl" responsive>
          {/* 🖼️ Image Column */}
          <ImageWrapper>
            <Image
              src={activity.coverImage}
              alt={activity.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </ImageWrapper>

          {/* 📄 Info Column */}
          <InfoSection>
            <Typography as="h1" variant="h1" color="primary">
              {activity.name}
            </Typography>

            <Typography as="p" variant="body" className="mb-strong">
              {activity.price}
            </Typography>

            {/* 🧠 Description */}
            <Typography
              as="h2"
              variant="h3"
              color="accent"
              className="mb-strong"
            >
              {t("aboutTitle")}
            </Typography>
            <Typography as="p" variant="body">
              {activity.description}
            </Typography>

            {/* 🧭 Details List */}
            <DetailsList>
              <li>
                <FaClock /> {t("duration")}: {activity.duration}
              </li>
              <li>
                <FaMapMarkerAlt /> {t("location")}: {activity.location}
              </li>
              <li>
                <FaUsers /> {t("groupSize")}: {activity.groupSize}
              </li>
              <li>
                <FaMoneyBill /> {t("price")}: {activity.price}
              </li>
            </DetailsList>

            {/* 🟠 CTA */}
            <CTASection>
              <Button variant="primary" fullWidth>
                <FaHiking style={{ marginRight: "8px" }} />
                {t("bookNow")}
              </Button>
            </CTASection>

            {/* 🔙 Back Link */}
            <BackLink>
              <Link href={`/${locale}/activities`}>
                <FaArrowLeft /> {t("backToActivities")}
              </Link>
            </BackLink>
          </InfoSection>
        </Grid>
      </Container>
    </Wrapper>
  );
}
