// app/[locale]/contact/page.tsx
import { getMetadataStatic } from "@/lib/metadata/static";
import contactData from "@/data/content/en/contact.json"; // fallback
import ContactList from "./ContactList";

export const metadata = getMetadataStatic(contactData.metadata);
export const dynamic = "force-dynamic";

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <main>
      <ContactList params={params} />
    </main>
  );
}
