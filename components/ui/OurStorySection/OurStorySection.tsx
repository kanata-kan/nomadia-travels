"use client";

import { useTranslations } from "next-intl";
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
  locale: string;
};

export default function OurStorySection({ ourStory, locale }: Props) {
  const t = useTranslations("ourStory");

  return (
    <SectionWrapperImage
      $variant="loose"
      $bgImage="/images/our-story/our-story-bg.png"
    >
      <Container>
        {/* عنوان الصفحة */}
        <Heading>{t("heading") || ourStory.heading}</Heading>

        {/* الفقرات والمحتوى */}
        {ourStory.content.map((block, i) => {
          if (block.type === "paragraph")
            return <Text key={i}>{block.text}</Text>;
          if (block.type === "heading")
            return (
              <blockquote
                key={i}
                style={{
                  fontStyle: "italic",
                  borderLeft: "3px solid var(--color-primary)",
                  paddingLeft: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                {block.text}
              </blockquote>
            );
          return null;
        })}

        {/* فقرة ختامية مترجمة */}
        <Text style={{ marginTop: "2rem", fontWeight: "600" }}>
          {t("closing")}
        </Text>
      </Container>
    </SectionWrapperImage>
  );
}
