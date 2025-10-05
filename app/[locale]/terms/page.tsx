import { getMetadataStatic } from "@/lib/metadata/static";
import TermsSection from "@/components/ui/TermsSection/TermsSection";

export const metadata = getMetadataStatic({
  title: "Terms of Service | Nomadia Travels",
  description:
    "Read the terms and conditions for using Nomadia Travels services.",
  path: "/terms",
});

export const dynamic = "force-dynamic";

export default function TermsPage() {
  return (
    <main>
      <TermsSection />
    </main>
  );
}
