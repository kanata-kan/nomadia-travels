"use client";

import { Container } from "../foundation/Container.styled";
import { Heading, Text } from "../atoms";
import { AboutPage } from "@/types";
import { SectionWrapperImage } from "../sections/SectionWrapper.styled";

type Block = {
  type: string;
  text: string;
};

type Props = {
  about: AboutPage;
};

export default function AboutSection({ about }: Props) {
  return (
    <SectionWrapperImage
      $variant="loose"
      $bgImage="/images/about/heroAbout.png"
    >
      <Container>
        <Heading>{about.heading}</Heading>
        {about.content.map((block, i) => {
          if (block.type === "paragraph")
            return <Text key={i}>{block.text}</Text>;
          if (block.type === "heading")
            return <blockquote key={i}>{block.text}</blockquote>;
          return null;
        })}
      </Container>
    </SectionWrapperImage>
  );
}
