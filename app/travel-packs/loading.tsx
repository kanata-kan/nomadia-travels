// 📂 app/gallery/loading.tsx
import { Container } from "@/components/ui/foundation/Container.styled";
import { SectionWrapper } from "@/components/ui/foundation/SectionWrapper.styled";
import { Skeleton } from "@/components/ui/skeleton/Skeleton";

export default function Loading() {
  return (
    <SectionWrapper $variant="loose" $bg="surfaceAlt">
      <Container>
        {/* Title */}
        <Skeleton w="200px" h="32px" r="6px" />
        {/* Subtitle */}
        <Skeleton w="60%" h="20px" r="6px" />
        <Skeleton w="40%" h="20px" r="6px" />

        {/* Grid placeholders */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "2rem",
          }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} w="100%" h="200px" r="12px" />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
