export const dynamic = "force-static";

import { getOurStory } from "@/lib/api";

export default async function OurStoryPage() {
  const story = await getOurStory({ cache: "force-cache" });

  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>{story.heading}</h1>

      {story.content.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p
              key={index}
              style={{ marginBottom: "1.5rem", lineHeight: "1.7" }}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "heading") {
          return (
            <blockquote
              key={index}
              style={{
                fontSize: "1.25rem",
                fontStyle: "italic",
                margin: "2rem 0",
                paddingLeft: "1rem",
                borderLeft: "4px solid #ccc",
              }}
            >
              {block.text}
            </blockquote>
          );
        }
      })}
    </main>
  );
}
