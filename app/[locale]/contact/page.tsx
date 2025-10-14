// ==========================================================
// 📄 app/[locale]/contact/page.tsx
// ==========================================================
// 📬 ContactPage — Get in touch with Nomadia Travels
// Uses Smart Metadata Layer + Promise params
// ==========================================================

export const dynamic = "force-dynamic";
export const revalidate = 43200; // 12h ISR

import ContactSection from "@/components/ui_v2/sections/ContactSection/ContactSection";
import { getContact } from "@/lib/api/contact";
import { getStaticPageMetadata } from "@/lib/metadata/smart";

type PageParams = { params: Promise<{ locale: string }> };

// ⚙️ Metadata
export async function generateMetadata({ params }: PageParams) {
  const { locale } = await params;
  return getStaticPageMetadata({
    locale,
    namespace: "contactPage",
    path: "/contact",
    imagePath: "/images/contact/og-contact.webp",
    fallbackTitle: "Contact | Nomadia Travels",
    fallbackDescription:
      "Get in touch with Nomadia Travels for custom tours, car rentals, and unforgettable experiences across Kyrgyzstan.",
  });
}

// 📬 Page
export default async function ContactPage({ params }: PageParams) {
  const { locale } = await params;

  const contact = await getContact(locale);

  // Normalize safety (optional)
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
