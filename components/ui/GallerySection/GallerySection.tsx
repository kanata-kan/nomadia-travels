"use client";

import { useTranslations } from "next-intl";
import { Container } from "../foundation/Container.styled";
import { Title, Subtitle } from "../atoms";
import { GalleryItem } from "@/types";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import GalleryGrid from "./GalleryGrid";

type Props = {
  items: GalleryItem[];
};

export default function GallerySection({ items }: Props) {
  const t = useTranslations("gallery");

  return (
    <SectionWrapper $variant="loose" $bg="surfaceAlt">
      <Container>
        <Title>{t("title")}</Title>
        <Subtitle>
          {t.rich("subtitle", {
            strong: (chunks) => <strong>{chunks}</strong>,
          })}
        </Subtitle>
        <GalleryGrid items={items} min="260px" gap="lg" />
      </Container>
    </SectionWrapper>
  );
}
