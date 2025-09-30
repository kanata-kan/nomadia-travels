"use client";

import { Container } from "../foundation/Container.styled";
import { Heading, Text } from "../atoms";
import { OurStoryPage } from "@/types";
import { SectionWrapperImage } from "../foundation/SectionWrapper.styled";

type Block = {
  type: string;
  text: string;
};

type Props = {
  ourStory: OurStoryPage;
};

export default function OurStorySection({ ourStory }: Props) {
  return (
    <SectionWrapperImage
      $variant="loose"
      $bgImage="/images/our-story/our-story-bg.png"
    >
      <Container>
        <Heading>{ourStory.heading}</Heading>
        {ourStory.content.map((block, i) => {
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
