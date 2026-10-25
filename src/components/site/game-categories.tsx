import { ArrowUpRight } from "lucide-react";
import { EXTERNAL_PLAY_URL } from "@/lib/nav";

type Category = {
  name: string;
  blurb: string;
  image: string;
  featured?: boolean;
};

const CATEGORIES: Category[] = [
  {
    name: "Colour Prediction",
    blurb: "Digits, colours, Big/Small — the core 6E Club format.",
    image: "/images/homepage/6e-club-colour-prediction-banner.webp",
    featured: true,
  },
  {
    name: "Aviator",
    blurb: "Rising multiplier rounds — cash out before it flies.",
    image: "/images/homepage/6e-club-aviator-game-banner.webp",
  },
  {
    name: "Chicken Road",
    blurb: "Lane-by-lane risk: one wrong step ends the run.",
    image: "/images/homepage/6e-club-chicken-road-banner.webp",
  },
  {
    name: "Slots Carnival",
    blurb: "Reel-style spins and themed symbol rounds.",
    image: "/images/homepage/6e-club-slots-carnival-banner.webp",
  },
  {
    name: "Casino Royale",
    blurb: "Table-style picks and classic casino-style rooms.",
    image: "/images/homepage/6e-club-casino-royale-banner.webp",
  },
  {
    name: "Casino Gaming",
    blurb: "Casino-style categories available on the platform.",
    image: "/images/homepage/6e-club-casino-gaming-banner.webp",
  },
  {
    name: "Fishing Games",
    blurb: "Arcade catch rounds and fishing-style games.",
    image: "/images/homepage/6e-club-fishing-games-banner.webp",
  },
  {
    name: "Sports Betting Style",
    blurb: "Score-themed predictions and sports-style picks.",
    image: "/images/homepage/6e-club-sports-betting-banner.webp",
  },
];

/** Banners are ~1920×820 — keep that ratio so sides (logo text) are not cropped. */
const BANNER_FRAME =
  "aspect-[1920/820] w-full bg-[#0a0612] object-contain object-center";

const tileClass =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function GameCategories() {
  const featured = CATEGORIES.find((c) => c.featured)!;
  const rest = CATEGORIES.filter((c) => !c.featured);

  return (
    <section
      id="categories"
      className="scroll-mt-24 border-b border-border py-14 lg:py-20"
      aria-labelledby="categories-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold">
              Game categories
            </p>
            <h2
              id="categories-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Explore 6E Club style categories
            </h2>
            <p className="mt-3 text-muted-foreground">
              Tap a category to open 6E Club and explore that style of game on the live
              platform.
            </p>
          </div>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-foreground"
          >
            Open 6E Club
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <a
          href={EXTERNAL_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 block overflow-hidden rounded-3xl border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="overflow-hidden bg-[#0a0612]">
            <img
              src={featured.image}
              alt={`${featured.name} — 6E Club category`}
              width={1920}
              height={820}
              className={`${BANNER_FRAME} transition duration-500 group-hover:scale-[1.01]`}
              loading="lazy"
            />
          </div>
          <div className="flex items-start justify-between gap-3 border-t border-border p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                Featured
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-2 max-w-lg text-sm text-muted-foreground sm:text-base">
                {featured.blurb}
              </p>
            </div>
            <ArrowUpRight
              className="mt-1 h-5 w-5 shrink-0 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </a>

        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((cat) => (
            <li key={cat.name}>
              <a
                href={EXTERNAL_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClass}
              >
                <div className="overflow-hidden bg-[#0a0612]">
                  <img
                    src={cat.image}
                    alt={`${cat.name} on 6E Club`}
                    width={1920}
                    height={820}
                    className={`${BANNER_FRAME} transition duration-500 group-hover:scale-[1.02]`}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 items-start justify-between gap-2 border-t border-border p-4 sm:p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold leading-tight">
                      {cat.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-snug text-muted-foreground">
                      {cat.blurb}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-gold opacity-80 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
