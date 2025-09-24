export const revalidate = 3600;

import { getAbout } from "@/lib/api";

export default async function AboutPage() {
  const about = await getAbout({ revalidate: 3600 });

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{about.heading}</h1>
      {about.content.map((block, i) => {
        if (block.type === "paragraph") return <p key={i}>{block.text}</p>;
        if (block.type === "heading")
          return <blockquote key={i}>{block.text}</blockquote>;
        return null;
      })}
    </main>
  );
}
