// app/[locale]/contact/ContactList.tsx
import ContactSection from "@/components/ui/ContactSection/ContactSection";
import { getContact } from "@/lib/api";

type Props = { params: Promise<{ locale: string }> };

export default async function ContactList({ params }: Props) {
  const { locale } = await params;
  const contact = await getContact(locale);

  const fixedContact = {
    ...contact,
    form: contact.form
      ? {
          ...contact.form,
          fields: contact.form.fields.map((field: any) => ({
            name: field.name,
            label: field.label,
            type: field.type,
            required: field.required ?? false,
          })),
        }
      : undefined,
  };

  return <ContactSection data={fixedContact} />;
}
