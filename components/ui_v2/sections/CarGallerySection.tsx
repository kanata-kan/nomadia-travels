"use client";

import Image from "next/image";
import {
  GalleryWrapper,
  Grid,
  ImageBox,
} from "../styled/CarGallerySection.styled";
import Typography from "../foundation/Typography";
import { useTranslations } from "next-intl";

type Props = {
  carName: string;
  images?: string[];
};

export default function CarGallerySection({ carName, images }: Props) {
  const t = useTranslations("carGallery");

  const fallbackImages = [
    "/images/cars-gallery/elantra-1.jpg",
    "/images/cars-gallery/elantra-2.jpg",
    "/images/cars-gallery/elantra-3.jpg",
    "/images/cars-gallery/elantra-4.jpg",
  ];

  const displayImages = images && images.length > 0 ? images : fallbackImages;

  return (
    <GalleryWrapper>
      <Typography as="h2" variant="h3" color="primary" className="mb-strong">
        {t("title", { name: carName })}
      </Typography>

      <Grid>
        {displayImages.map((src, i) => (
          <ImageBox key={i}>
            <Image
              src={src}
              alt={`${carName} photo ${i + 1}`}
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </ImageBox>
        ))}
      </Grid>
    </GalleryWrapper>
  );
}
