export const dynamic = "force-static";

import { getContact } from "@/lib/api";

export default async function ContactPage() {
  const contact = await getContact({ cache: "force-cache" });

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{contact.heading}</h1>

      {/* Content paragraphs */}
      {contact.content.map((block, i) => (
        <p key={i}>{block.text}</p>
      ))}

      {/* Contact info */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Contact Information</h2>
        <p>
          Email:{" "}
          <a href={`mailto:${contact.info.email}`}>{contact.info.email}</a>
        </p>
        <p>
          Phone: <a href={`tel:${contact.info.phone}`}>{contact.info.phone}</a>
        </p>
        <p>Address: {contact.info.address}</p>
        <p>
          <a
            href={contact.info.mapLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Map
          </a>
        </p>
      </section>

      {/* Social links */}
      <section style={{ marginTop: "2rem" }}>
        <h2>Follow Us</h2>
        <ul>
          {contact.socials.map((social, i) => (
            <li key={i}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.platform}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Form (اختياري) */}
      {contact.form && (
        <section style={{ marginTop: "2rem" }}>
          <h2>Send us a Message</h2>
          <form>
            {contact.form.fields.map((field, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label>
                  {field.label}:
                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      required={field.required}
                    ></textarea>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                    />
                  )}
                </label>
              </div>
            ))}
            <button type="submit">{contact.form.submitText}</button>
          </form>
        </section>
      )}
    </main>
  );
}
