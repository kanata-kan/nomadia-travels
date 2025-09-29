"use client";

import React from "react";
import Image from "next/image";
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
};

const GalleryDetailsSection: React.FC<GalleryDetailsSectionProps> = ({
  galleryItem,
}) => {
  return (
    <Section>
      {/* Left content */}
      <LeftCol>
        <h1>{galleryItem.title}</h1>
        <p>{galleryItem.description}</p>

        {galleryItem.images && galleryItem.images.length > 0 && (
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
        )}
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
