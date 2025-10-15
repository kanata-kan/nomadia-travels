// ==========================================================
// 📄 app/[locale]/terms/page.tsx
// ==========================================================
export const dynamic = "force-dynamic";
export const revalidate = 43200;

import TermsSection_v2 from "@/components/ui_v2/sections/TermsSection/TermsSection";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;

  return getStaticPageMetadata({
    locale,
    namespace: "terms",
    path: "/terms",
    imagePath: "/images/legal/og-terms.webp",
    fallbackTitle: "Terms of Service | Nomadia Travels",
    fallbackDescription:
      "Read the terms and conditions for using Nomadia Travels services, website, and bookings.",
  });
}

// 🧩 Page Component
export default async function TermsPage({ params }: PageParams) {
  const { locale } = await params;
  return <TermsSection_v2 />;
}
