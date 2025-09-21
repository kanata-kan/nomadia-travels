// app/contact/page.tsx
export const dynamic = "force-static";

import { getContact } from "@/lib/api";

export default async function ContactPage() {
  const contact = await getContact({ cache: "force-cache" });
  return <h1>{contact.heading}</h1>;
}
