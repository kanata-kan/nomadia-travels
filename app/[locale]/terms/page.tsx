import { getMetadataStatic } from "@/lib/metadata/static";
import TermsSection_v2 from "@/components/ui_v2/sections/TermsSection/TermsSection";

export const metadata = getMetadataStatic({
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using Nomadia Travels services.",
  path: "/terms",
  image: "/images/og-terms.png",
});

export const dynamic = "force-dynamic";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <main>
      <TermsSection_v2 />
    </main>
  );
}
