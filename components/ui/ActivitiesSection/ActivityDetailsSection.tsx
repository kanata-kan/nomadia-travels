"use client";

import Image from "next/image";
import Link from "next/link";
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
}

export default function ActivityDetailsSection({ activity }: Props) {
  return (
    <Wrapper>
      {/* Left Content */}
      <ContentCol>
        <Header>
          <h1>{activity.name}</h1>
          <p>{activity.price}</p>
        </Header>

        <DetailsSection>
          <h2>About this Activity</h2>
          <p>{activity.description}</p>

          <DetailsList>
            <li>⏳ Duration: {activity.duration}</li>
            <li>📍 Location: {activity.location}</li>
            <li>👥 Group Size: {activity.groupSize}</li>
            <li>💰 Price: {activity.price}</li>
          </DetailsList>
        </DetailsSection>

        <CTASection>
          <Button variant="primary">
            <FaHiking style={{ marginRight: "8px" }} /> Book this Activity
          </Button>
        </CTASection>

        <BackLink>
          <Link href="/activities">
            <FaArrowLeft /> Back to Activities
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
