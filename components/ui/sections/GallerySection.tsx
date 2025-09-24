"use client";

import { SectionWrapper } from "./SectionWrapper.styled";
import { Container } from "../foundation/Container.styled";
import { Title, Subtitle } from "../atoms";
import GalleryGrid from "../gallery/GalleryGrid";
import { GalleryItem } from "@/types";

type Props = {
  items: GalleryItem[];
};

export default function GallerySection({ items }: Props) {
  return (
    <SectionWrapper $variant="loose" $bg="surfaceAlt">
      <Container>
        <Title>Travel Gallery</Title>
        <Subtitle>
          A curated collection showcasing Kyrgyzstan’s beauty — from{" "}
          <strong>lakes</strong> and <strong>mountains</strong> to{" "}
          <strong>nomadic traditions</strong>.
        </Subtitle>

        <GalleryGrid items={items} min="260px" gap="lg" />
      </Container>
    </SectionWrapper>
  );
}
