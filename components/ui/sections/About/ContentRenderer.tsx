"use client";

import { ContentBlock } from "@/types/common";
import {
  Wrapper,
  Paragraph,
  Quote,
  ImageBlock,
} from "./ContentRenderer.styled";

type Props = {
  blocks: ContentBlock[];
};

export default function ContentRenderer({ blocks }: Props) {
  if (!blocks || blocks.length === 0) return null;

  return (
    <Wrapper>
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <Paragraph key={i}>{block.text}</Paragraph>;

          case "heading":
            return <Quote key={i}>{block.text}</Quote>;

          case "image":
            return (
              <ImageBlock
                key={i}
                src={block.src || ""}
                alt={block.text || "content image"}
              />
            );

          default:
            return null;
        }
      })}
    </Wrapper>
  );
}
