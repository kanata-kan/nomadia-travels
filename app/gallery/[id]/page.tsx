// app/gallery/[id]/page.tsx
import { getGallery } from "@/lib/api";
import { getMetadataDynamic } from "@/lib/metadata/dynamic";
import { Metadata } from "next";
import Image from "next/image";
import { SectionWrapper } from "@/components/ui/sections/SectionWrapper.styled";
import { Container } from "@/components/ui/foundation/Container.styled";
import { Title, Subtitle } from "@/components/ui/atoms";
import { Button } from "@/components/ui/atoms/Button";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>; // 👈 important
};

// ✅ Dynamic Metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params; // 👈 await params
  const items = await getGallery();
  const item = items.find((g) => g.id === id);

  if (!item) {
    return {
      title: "Gallery Item Not Found | Explore Kyrgyzstan",
      description: "The requested gallery item could not be found.",
    };
  }

  return getMetadataDynamic({
    name: item.title,
    description: item.metadata.description ?? "",
    image: item.metadata.image ?? "",
    path: `/gallery/${item.id}`,
  });
}

// ✅ Static Paths
export async function generateStaticParams() {
  const items = await getGallery();
  return items.map((it) => ({ id: it.id }));
}

// ✅ Page UI
export default async function GalleryDetailPage({ params }: PageProps) {
  const { id } = await params; // 👈 await params
  const items = await getGallery();
  const item = items.find((g) => g.id === id);

  if (!item) {
    return (
      <SectionWrapper $variant="default" $bg="background">
        <Container>
          <Title>Item Not Found</Title>
          <Subtitle>The requested gallery item does not exist.</Subtitle>
          <Link href="/gallery">
            <Button variant="primary">← Back to Gallery</Button>
          </Link>
        </Container>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper $variant="loose" $bg="background">
      <Container>
        <Title>{item.title}</Title>
        <Subtitle>{item.caption}</Subtitle>

        <div style={{ margin: "2rem 0" }}>
          <Image
            src={item.image}
            alt={item.metadata.alt ?? item.title}
            width={1200}
            height={700}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "12px",
              objectFit: "cover",
            }}
            priority
          />
        </div>

        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.1rem",
            lineHeight: "1.6",
          }}
        >
          {item.metadata.description}
        </p>

        <Link href="/gallery">
          <Button variant="primary">← Back to Gallery</Button>
        </Link>
      </Container>
    </SectionWrapper>
  );
}
