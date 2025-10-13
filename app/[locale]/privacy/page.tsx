import { getMetadataStatic } from "@/lib/metadata/static";
import PrivacySection_v2 from "@/components/ui_v2/sections/PrivacySection/PrivacySection";

export const metadata = getMetadataStatic({
  title: "Privacy Policy",
  description:
    "Learn how Nomadia Travels collects, uses, and protects your personal information.",
  path: "/privacy",
  image: "/images/og-privacy.png",
});

export const dynamic = "force-dynamic";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <PrivacySection_v2 />
    </main>
  );
}
