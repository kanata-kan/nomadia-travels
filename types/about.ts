import { Metadata, ContentBlock } from "./common";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface AboutPage {
  id: string;
  heading: string;
  content: ContentBlock[];
  team: TeamMember[];
  metadata: Metadata;
}
