// File: components/ui/gallery/GalleryGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid, Tile, Caption, Title, Sub, Overlay } from "./GalleryGrid.styled";
import { GalleryItem } from "@/types";
import Lightbox from "./Lightbox";

type Props = {
  items: GalleryItem[];
  min?: string;
  gap?: keyof (typeof import("@/styles/theme").lightTheme)["spacing"];
};

export default function GalleryGrid({
  items,
  min = "260px",
  gap = "lg",
}: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleOpen = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      <Grid $min={min} $gap={gap}>
        {items.map((it, i) => (
          <Tile key={it.id} onClick={() => handleOpen(i)}>
            <Image
              src={it.image}
              alt={it.metadata.alt ?? ""}
              width={400}
              height={300}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              loading="lazy"
            />
            <Caption>
              <Overlay>
                <Title>{it.title}</Title>
                <Sub>{it.caption}</Sub>
              </Overlay>
            </Caption>
          </Tile>
        ))}
      </Grid>

      {open && (
        <Lightbox
          items={items}
          startIndex={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
