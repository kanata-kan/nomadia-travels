"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import {
  Section,
  LeftCol,
  RightCol,
  CoverImageWrapper,
  GalleryGrid,
} from "./GalleryDetails.styled";

type GalleryDetailsSectionProps = {
  galleryItem: {
    title: string;
    description: string;
    coverImage: string;
    images?: string[];
  };
  locale: string;
};

const GalleryDetailsSection: React.FC<GalleryDetailsSectionProps> = ({
  galleryItem,
  locale,
}) => {
  const t = useTranslations("galleryDetails");

  return (
    <Section>
      {/* Left content */}
      <LeftCol>
        <h1>{galleryItem.title}</h1>
        <p>{galleryItem.description}</p>

        {/* ✅ صور إضافية */}
        {galleryItem.images && galleryItem.images.length > 0 && (
          <>
            <h2 style={{ marginTop: "1.5rem" }}>{t("moreImages")}</h2>
            <GalleryGrid>
              {galleryItem.images.map((image, index) => (
                <div key={index} className="thumb">
                  <Image
                    src={image}
                    alt={`${galleryItem.title} ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ))}
            </GalleryGrid>
          </>
        )}

        {/* ✅ رابط الرجوع */}
        <div style={{ marginTop: "2rem" }}>
          <Link
            href={`/${locale}/gallery`}
            style={{
              textDecoration: "none",
              fontWeight: "600",
              display: "inline-block",
              marginTop: "1rem",
            }}
          >
            ← {t("backToGallery")}
          </Link>
        </div>
      </LeftCol>

      {/* Right cover image */}
      <RightCol>
        <CoverImageWrapper>
          <Image
            src={galleryItem.coverImage}
            alt={galleryItem.title}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </CoverImageWrapper>
      </RightCol>
    </Section>
  );
};

export default GalleryDetailsSection;
