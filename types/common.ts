export interface Metadata {
  title: string | null;
  description: string | null;
  path: string;
  image: string | null;
  alt: string | null;
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "image" | string;
  text?: string;
  src?: string;
}
