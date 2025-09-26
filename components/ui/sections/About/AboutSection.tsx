"use client";

import { Container } from "@/components/ui/foundation/Container.styled";
import { AboutPage } from "@/types";

import { SectionWrapper } from "./AboutSection.styled";
import { HeroContainer, HeroImage, Overlay } from "./Hero.styled";
import { TextWrapper, Title } from "./ContentWrapper.styled";
import ContentRenderer from "./ContentRenderer";

type Props = {
  heading: string;
  content: AboutPage["content"];
  heroImage: string;
};

export default function AboutSection({ heading, content, heroImage }: Props) {
  return (
    <SectionWrapper $variant="loose" $bg="surface">
      {/* ===== Hero Background ===== */}
      <HeroContainer>
        <HeroImage
          src={heroImage}
          alt="About background - Explore Kyrgyzstan"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
        <Overlay />
        <TextWrapper>
          <Title>{heading}</Title>
        </TextWrapper>
      </HeroContainer>

      {/* ===== Content ===== */}
      <Container>
        <ContentRenderer blocks={content} />
      </Container>
    </SectionWrapper>
  );
}
