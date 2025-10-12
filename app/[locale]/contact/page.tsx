// app/[locale]/contact/page.tsx
import { getMetadataStatic } from "@/lib/metadata/static";
import ContactSection from "@/components/ui_v2/sections/ContactSection/ContactSection";
import contactData from "@/data/content/en/contact.json"; // fallback data
import { getContact } from "@/lib/api/contact";

export const metadata = getMetadataStatic(contactData.metadata);
export const dynamic = "force-dynamic";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  // ✅ Await params (required in Next 15)
  const { locale } = await params;

  // Fetch contact data
  const contact = await getContact(locale);

  // Normalize form fields
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
