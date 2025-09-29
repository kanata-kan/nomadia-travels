// components/ui/sections/GallerySection.tsx
"use client";

import { Container } from "../foundation/Container.styled";
import { Title, Subtitle } from "../atoms";
import { GalleryItem } from "@/types";
import { SectionWrapper } from "../foundation/SectionWrapper.styled";
import GalleryGrid from "./GalleryGrid";

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
