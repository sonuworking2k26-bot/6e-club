import type { ArticleBlock } from "@/data/blog";

/** Renders one article's structured blocks with the site's content styling. */
export function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={index}
                className="pt-4 font-display text-xl font-bold tracking-tight sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "p":
            return (
              <p key={index} className="leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={index}
                className="list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <div
                key={index}
                className={`rounded-xl border p-5 text-sm leading-relaxed ${
                  block.tone === "caution"
                    ? "border-destructive/40 bg-destructive/10 text-muted-foreground"
                    : "border-gold/25 bg-gold/5 text-muted-foreground"
                }`}
              >
                {block.text}
              </div>
            );
        }
      })}
    </div>
  );
}
