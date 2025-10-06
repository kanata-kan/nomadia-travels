import { SectionWrapper } from "@/components/ui_v2/foundation/SectionWrapper";
import Container from "@/components/ui_v2/foundation/Container";
import Grid from "@/components/ui_v2/foundation/Grid";
import Card from "@/components/ui_v2/foundation/Card";
import Button from "@/components/ui_v2/foundation/Button";

export default function LayoutDemo() {
  return (
    <>
      <SectionWrapper $variant="tight">
        <Container>
          <h2>Tight Section</h2>
          <p>Used for small content blocks or mini subsections.</p>
        </Container>
      </SectionWrapper>

      <SectionWrapper $variant="default">
        <Container>
          <h2>Default Section</h2>
          <Grid columns={3} gap="lg">
            <Card>
              <h3>Card 1</h3>
              <Button>Read More</Button>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <Button>Learn More</Button>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <Button>Explore</Button>
            </Card>
          </Grid>
        </Container>
      </SectionWrapper>

      <SectionWrapper $variant="loose">
        <Container>
          <h2>Loose Section</h2>
          <p>Used for Hero or CTA areas.</p>
        </Container>
      </SectionWrapper>
    </>
  );
}
