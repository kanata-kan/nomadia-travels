"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GalleryItem } from "@/types";
import {
  LightboxWrapper,
  LightboxContent,
  ImageArea,
  InfoPanel,
  Controls,
  NavBtn,
  CloseBtn,
} from "./Lightbox.styled";
import { Button } from "../atoms/Button";

type Props = {
  items: GalleryItem[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const item = items[index];

  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  return (
    <LightboxWrapper>
      <LightboxContent>
        {/* Image Area */}
        <ImageArea>
          <Image
            src={item.image}
            alt={item.metadata.alt ?? ""}
            width={1200}
            height={800}
            style={{ objectFit: "contain" }}
            priority
          />
        </ImageArea>

        {/* Info Panel */}
        <InfoPanel>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
          <Link href={item.metadata.path}>
            <Button variant="primary">View Details →</Button>
          </Link>
        </InfoPanel>

        {/* Controls */}
        <Controls>
          <NavBtn onClick={prev}>⟨</NavBtn>
          <NavBtn onClick={next}>⟩</NavBtn>
        </Controls>

        {/* Close */}
        <CloseBtn onClick={onClose}>✕</CloseBtn>
      </LightboxContent>
    </LightboxWrapper>
  );
}
