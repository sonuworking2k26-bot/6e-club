import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { EXTERNAL_PLAY_URL, OG_IMAGES } from "@/lib/nav";
import {
  Callout,
  PageHero,
  PageLayout,
  Section,
} from "@/components/site/page-layout";

export const Route = createFileRoute("/6e-club-game")({
  component: GamePage,
  head: () =>
    buildSeoHead({
      title: "6E Club Game — How Colour Prediction Rooms Work",
      description:
        "6E Club game guide: round lengths, colour picks, numbers, Big/Small, and why past results do not predict the next digit.",
      path: "/6e-club-game",
      ogImage: OG_IMAGES.game,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Game", path: "/6e-club-game" },
      ],
    }),
});

function GamePage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Game", path: "/6e-club-game" },
        ]}
        kicker="6E Club Game · Guide"
        title="How the 6E Club game works"
        intro="Colour prediction rooms share one idea: a timer, a pick, then a digit from 0–9. This guide explains rooms and picks in plain English — not a promise of winnings."
        bannerSrc="/images/homepage/6e-club-colour-prediction-banner.webp"
        bannerAlt="6E Club colour prediction game banner"
      />

      <Section title="Play or learn first">
        <div className="flex flex-wrap gap-3">
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground"
          >
            Open 6E Club
          </a>
          <Link
            to="/6e-club-register"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-primary/40 px-6 text-sm font-bold text-foreground"
          >
            Register guide
          </Link>
        </div>
      </Section>

      <Section title="Rooms at a glance">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-4 py-3">Room</th>
                <th className="px-4 py-3">Feel</th>
                <th className="px-4 py-3">Beginner tip</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-t border-border">
                <td className="px-4 py-3">30 seconds</td>
                <td className="px-4 py-3">Very fast</td>
                <td className="px-4 py-3">Easy to overplay — set a timer first</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">1 minute</td>
                <td className="px-4 py-3">Steady</td>
                <td className="px-4 py-3">Common middle pace</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">3 minutes</td>
                <td className="px-4 py-3">Calm</td>
                <td className="px-4 py-3">Best place to learn the board</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">5 minutes</td>
                <td className="px-4 py-3">Slow</td>
                <td className="px-4 py-3">Good beside other tasks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        title="Picks: colour, number, Big/Small"
        intro="One drawn digit settles several pick types. Always read the in-game returns table for exact multiples."
      >
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-secondary text-foreground">
              <tr>
                <th className="px-4 py-3">Pick</th>
                <th className="px-4 py-3">Typical idea</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-t border-border">
                <td className="px-4 py-3">Green / Red / Violet</td>
                <td className="px-4 py-3">Digit maps to a colour; violet often covers 0 and 5</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">Exact number</td>
                <td className="px-4 py-3">One digit out of ten</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3">Big / Small</td>
                <td className="px-4 py-3">Usually 5–9 vs 0–4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <Callout title="Charts are history, not prophecy">
            A long streak does not make the opposite colour “due”. Read{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/responsible-play">
              responsible play
            </Link>{" "}
            before long sessions.
          </Callout>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <img
            src="/images/homepage/6e-club-aviator-game-banner.webp"
            alt="Aviator style category related to 6E Club game formats"
            width={1920}
            height={820}
            loading="lazy"
            className="rounded-xl border border-border object-cover"
          />
          <img
            src="/images/homepage/6e-club-slots-carnival-banner.webp"
            alt="Slots style category related to 6E Club game formats"
            width={1920}
            height={820}
            loading="lazy"
            className="rounded-xl border border-border object-cover"
          />
        </div>
      </Section>
    </PageLayout>
  );
}
