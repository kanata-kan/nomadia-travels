import { getMetadataStatic } from "@/lib/metadata/static";
import PrivacySection from "@/components/ui/PrivacySection/PrivacySection";

export const metadata = getMetadataStatic({
  title: "Privacy Policy | Nomadia Travels",
  description:
    "Learn how Nomadia Travels collects, uses, and protects your personal information.",
  path: "/privacy",
});

export const dynamic = "force-dynamic";

export default function PrivacyPage() {
  return (
    <main>
      <PrivacySection />
    </main>
  );
}
