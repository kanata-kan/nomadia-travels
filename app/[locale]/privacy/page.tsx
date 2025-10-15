// ==========================================================
// 📄 app/[locale]/privacy/page.tsx
// ==========================================================
export const dynamic = "force-dynamic";
export const revalidate = 43200;

import PrivacySection_v2 from "@/components/ui_v2/sections/PrivacySection/PrivacySection";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;

  return getStaticPageMetadata({
    locale,
    namespace: "privacyPage",
    path: "/privacy",
    imagePath: "/images/legal/og-privacy.webp",
    fallbackTitle: "Privacy Policy | Nomadia Travels",
    fallbackDescription:
      "Learn how Nomadia Travels collects, uses, and protects your personal information.",
  });
}

// 🧩 Page Component
export default async function PrivacyPage({ params }: PageParams) {
  const { locale } = await params;
  return <PrivacySection_v2 />;
}
