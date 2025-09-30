"use client";

import { ContactPage } from "@/types/contact";
import {
  Section,
  Title,
  ContentBlock,
  InfoSection,
  InfoItem,
  SocialSection,
  SocialList,
  FormSection,
  FormField,
  SubmitButton,
} from "./ContactSection.styled";

interface Props {
  data: ContactPage;
}

export default function ContactSection({ data }: Props) {
  return (
    <Section>
      {/* Title */}
      <Title>{data.heading}</Title>

      {/* Content */}
      {data.content.map((block, i) => (
        <ContentBlock key={i}>{block.text}</ContentBlock>
      ))}

      {/* Contact Info */}
      <InfoSection>
        <h2>📌 Contact Information</h2>
        <InfoItem>
          📧 <a href={`mailto:${data.info.email}`}>{data.info.email}</a>
        </InfoItem>
        <InfoItem>
          📞 <a href={`tel:${data.info.phone}`}>{data.info.phone}</a>
        </InfoItem>
        <InfoItem>🏠 {data.info.address}</InfoItem>
        <InfoItem>
          🌍{" "}
          <a href={data.info.mapLink} target="_blank" rel="noopener noreferrer">
            View on Map
          </a>
        </InfoItem>
      </InfoSection>

      {/* Socials */}
      <SocialSection>
        <h2>🌐 Follow Us</h2>
        <SocialList>
          {data.socials.map((social, i) => (
            <li key={i}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.platform}
              </a>
            </li>
          ))}
        </SocialList>
      </SocialSection>

      {/* Contact Form */}
      {data.form && (
        <FormSection>
          <h2>💬 Send us a Message</h2>
          <form>
            {data.form.fields.map((field, i) => (
              <FormField key={i}>
                <label>
                  {field.label}
                  {field.type === "textarea" ? (
                    <textarea name={field.name} required={field.required} />
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      required={field.required}
                    />
                  )}
                </label>
              </FormField>
            ))}
            <SubmitButton type="submit">{data.form.submitText}</SubmitButton>
          </form>
        </FormSection>
      )}
    </Section>
  );
}
