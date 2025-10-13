// ==========================================================
// 📄 app/[locale]/contact/page.tsx
// ==========================================================
// 📬 ContactPage — Get in touch with Nomadia Travels
// Unified with the same SEO + i18n architecture as other pages
// ==========================================================

export const dynamic = "force-dynamic";
export const revalidate = 43200; // 12h ISR

import { getMetadataStatic } from "@/lib/metadata/static";
import ContactSection from "@/components/ui_v2/sections/ContactSection/ContactSection";
import { getContact } from "@/lib/api/contact";
import { getTranslations } from "next-intl/server";
import { SITE } from "@/config/constants";

// --------------------------------------------
// ⚙️ 1. Generate Metadata (SEO + i18n)
// --------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🗣️ Load translations from "contactPage" namespace
  const t = await getTranslations({ locale, namespace: "contactPage" });

  const title = t("title") || "Contact | Nomadia Travels";
  const description =
    t("description") ||
    "Get in touch with Nomadia Travels for custom tours, car rentals, and unforgettable experiences across Kyrgyzstan.";

  // 🖼️ OG image for contact page
  const image = `${SITE.URL}/images/contact/og-contact.webp`;

  return getMetadataStatic({
    title,
    description,
    path: `/${locale}/contact`,
    image,
  });
}

// --------------------------------------------
// 📬 2. Contact Page Component
// --------------------------------------------
// Fetches localized contact form data and renders ContactSection
// --------------------------------------------
export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // 🧠 Fetch contact data
  const contact = await getContact(locale);

  // 🧩 Normalize form fields (safety check)
  const fixedContact = {
    ...contact,
    form: {
      ...contact.form,
      fields: contact.form.fields.map((field: any) => ({
        name: field.name,
        label: field.label,
        type: field.type,
        required: field.required ?? false,
      })),
    },
  };

  return (
    <main>
      <ContactSection data={fixedContact} />
    </main>
  );
}
