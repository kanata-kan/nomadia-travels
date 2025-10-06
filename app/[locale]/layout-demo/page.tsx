// app/[locale]/ui-v2/layout-demo/page.tsx
"use client";

import { Container } from "@/components/ui_v2/foundation/Container";
import { SectionWrapper } from "@/components/ui_v2/foundation/SectionWrapper";
import Typography from "@/components/ui_v2/foundation/Typography";

export default function LayoutDemoPage() {
  return (
    <>
      <SectionWrapper variant="tight">
        <Container>
          <Typography variant="h2">Tight Section</Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="default">
        <Container>
          <Typography variant="h2">Default Section</Typography>
        </Container>
      </SectionWrapper>

      <SectionWrapper variant="loose">
        <Container>
          <Typography variant="h2">Loose Section</Typography>
        </Container>
      </SectionWrapper>
    </>
  );
}
