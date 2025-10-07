import Container from "@/components/ui_v2/foundation/Container";
import Typography from "@/components/ui_v2/foundation/Typography";

export default function UITestPage() {
  return (
    <Container>
      <Typography variant="h1">Kanata UI v2 — Typography System</Typography>
      <Typography variant="h2">Secondary Heading Example</Typography>
      <Typography variant="body" color="secondary">
        This is a body text example showing how spacing and color flow from
        theme tokens.
      </Typography>
      <Typography variant="caption" color="muted">
        Muted caption text example.
      </Typography>
    </Container>
  );
}
