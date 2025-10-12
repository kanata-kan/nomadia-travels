// components/ui_v2/sections/base/DetailsBaseSection.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

import {
  Wrapper,
  InfoSection,
  CTASection,
  BackLink,
  ImageWrapper,
} from "./DetailsBase.styled";
import { Container, Grid, Typography } from "../../foundation";

type Props = {
  imageSrc: string;
  title: string;
  description?: string;
  backHref: string;
  cta?: ReactNode;
  details?: ReactNode;
  locale?: string;
};

export default function DetailsBaseSection({
  imageSrc,
  title,
  description,
  backHref,
  cta,
  details,
  locale,
}: Props) {
  return (
    <Wrapper>
      <Container>
        <Grid columns={2} gap="xl" responsive>
          {/* 🖼️ Image */}
          <div>
            <ImageWrapper>
              <Image
                src={imageSrc}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover", borderRadius: "12px" }}
                priority
              />
            </ImageWrapper>
          </div>

          {/* 📄 Content */}
          <InfoSection>
            <Typography as="h1" variant="h1" color="primary">
              {title}
            </Typography>

            {description && (
              <Typography as="p" variant="body" className="mb-strong">
                {description}
              </Typography>
            )}

            {details}

            {cta && <CTASection>{cta}</CTASection>}

            <BackLink>
              <Link href={locale ? `/${locale}${backHref}` : backHref}>
                <FaArrowLeft /> Back
              </Link>
            </BackLink>
          </InfoSection>
        </Grid>
      </Container>
    </Wrapper>
  );
}
