import { Metadata, ContentBlock } from "./common";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required?: boolean;
}

export interface ContactPage {
  id: string;
  heading: string;
  content: ContentBlock[];
  form?: {
    fields: FormField[];
    submitText: string;
  };
  info: {
    email: string;
    phone: string;
    address: string;
    mapLink: string;
  };
  socials: SocialLink[];
  metadata: Metadata;
}
