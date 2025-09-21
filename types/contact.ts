import { Metadata, ContentBlock } from "./common";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ContactPage {
  id: string;
  heading: string;
  content: ContentBlock[];
  info: {
    email: string;
    phone: string;
    address: string;
    mapLink: string;
  };
  socials: SocialLink[];
  metadata: Metadata;
}
