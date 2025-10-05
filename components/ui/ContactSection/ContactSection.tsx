"use client";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("contact");

  return (
    <Section>
      <Title>{data.heading}</Title>

      {data.content.map((block, i) => (
        <ContentBlock key={i}>{block.text}</ContentBlock>
      ))}

      <InfoSection>
        <h2>{t("info.title")}</h2>
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
            {t("info.mapLink")}
          </a>
        </InfoItem>
      </InfoSection>

      <SocialSection>
        <h2>{t("socials.title")}</h2>
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

      {data.form && (
        <FormSection>
          <h2>{t("form.title")}</h2>
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
