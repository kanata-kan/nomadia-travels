export interface Metadata {
  title: string;
  description: string;
  path: string;
  image: string;
  alt: string;
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "image" | string;
  text?: string;
  src?: string;
}
