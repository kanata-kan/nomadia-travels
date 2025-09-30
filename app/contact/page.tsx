export const dynamic = "force-static";

import ContactList from "./ContactList";
import { getMetadataStatic } from "@/lib/metadata/static";
import contactData from "@/data/content/contact.json";

export const metadata = getMetadataStatic(contactData.metadata);

export default function ContactPage() {
  return (
    <main>
      <ContactList />
    </main>
  );
}
