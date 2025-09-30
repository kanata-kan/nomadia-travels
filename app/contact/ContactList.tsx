import ContactSection from "@/components/ui/ContactSection/ContactSection";
import { getContact } from "@/lib/api";

export default async function ContactList() {
  const contact = await getContact({ revalidate: 60 }); // Revalidate every 60 seconds

  const fixedContact = {
    ...contact,
    form: contact.form
      ? {
          ...contact.form,
          fields: contact.form.fields.map((field: any) => ({
            name: field.name,
            label: field.label,
            type: field.type,
            required: field.required === undefined ? false : field.required,
          })),
          submitText: contact.form.submitText,
        }
      : undefined,
  };

  return <ContactSection data={fixedContact} />;
}
