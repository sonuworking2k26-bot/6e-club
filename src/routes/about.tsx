import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { OG_IMAGES } from "@/lib/nav";
import {
  Callout,
  InfoCard,
  PageHero,
  PageLayout,
  Section,
} from "@/components/site/page-layout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () =>
    buildSeoHead({
      title: "About 6E Club Guide Hub — 6e-club.org",
      description:
        "About this independent 6E Club information site on https://6e-club.org: purpose, honesty standards, and how we differ from lookalike domains.",
      path: "/about",
      ogImage: OG_IMAGES.about,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ],
    }),
});

function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ]}
        kicker="Publisher"
        reviewed="2026-10-25"
        title="About this 6E Club guide hub"
        intro="We publish original guides so people searching for 6E Club login, register, deposit, withdrawal, game and APK topics get clear, cautious answers — without fake forms or hosted installers."
        bannerSrc="/images/homepage/6e-club-casino-royale-banner.webp"
      />

      <Section
        id="purpose"
        title="Why this site exists"
        intro="Search results for “6E Club” mix guides, lookalike domains, and money-focused apps. This hub aims to be the clearest place to understand the interface topics people actually ask about."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            We keep the brand spelling as{" "}
            <strong className="text-foreground">6E Club</strong> and the site hostname as{" "}
            <strong className="text-foreground">https://6e-club.org</strong>. We do not claim to
            operate every product that uses similar branding online.
          </p>
          <p>
            Guides here are informational. They explain screens, common workflows and safety
            checks. They are not a promise of winnings, licenses, or official support for a
            third-party account.
          </p>
        </div>
      </Section>

      <Section id="publish" title="What we publish">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="How-to guides">
            Step-by-step pages for login, register, deposit, withdrawal, customer service, game
            format and APK / browser access — written from the interface topics users search for.
          </InfoCard>
          <InfoCard title="Safety context">
            Verification habits, responsible-play notes, and India-facing helplines when money or
            mental health support may be needed.
          </InfoCard>
          <InfoCard title="Plain FAQ">
            Short answers that match what this site can honestly provide, with links to deeper
            guides instead of invented product features.
          </InfoCard>
          <InfoCard title="Transparent policies">
            Privacy and terms that describe an information site — not a fake casino operator page
            with made-up licenses.
          </InfoCard>
        </div>
      </Section>

      <Section id="refuse" title="What we refuse">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li>Fake login or register forms that harvest credentials</li>
          <li>Hosting unverified APK files</li>
          <li>Invented licenses, earnings claims, or testimonials</li>
          <li>Pretending every similarly named domain is the same company</li>
          <li>Selling tip packages, gift codes, or “recovery” services</li>
        </ul>
      </Section>

      <Section
        id="independence"
        title="Independent information hub"
        intro="This website is not an official operator portal and does not establish affiliation with every 6E Club or lookalike product."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Interface details, payment methods and limits can change on the live platform. Always
            check the current screens in your own account before sending money or sharing personal
            information.
          </p>
          <Callout title="Editorial contact">
            Corrections and publisher questions:{" "}
            <a
              className="text-gold underline-offset-2 hover:underline"
              href="mailto:hello@6e-club.org"
            >
              hello@6e-club.org
            </a>
            . We cannot reset passwords or credit wallets for third-party apps.
          </Callout>
        </div>
      </Section>

      <Section id="next" title="Explore the guides">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-login" as const,
              label: "Login Guide",
              desc: "Sign-in help and fake-page checks.",
            },
            {
              to: "/6e-club-deposit" as const,
              label: "Deposit Guide",
              desc: "How to add money carefully.",
            },
            {
              to: "/6e-club-withdrawal" as const,
              label: "Withdrawal Guide",
              desc: "Request and track a withdrawal.",
            },
            {
              to: "/responsible-play" as const,
              label: "Responsible Play",
              desc: "Limits, myths and helplines.",
            },
            {
              to: "/faq" as const,
              label: "FAQ",
              desc: "Short answers to common questions.",
            },
            {
              to: "/" as const,
              hash: "contact",
              label: "Contact",
              desc: "Editorial inbox and fraud reporting on the homepage.",
            },
          ].map((item) => (
            <li key={item.to + (item.hash ?? "")}>
              <Link
                to={item.to}
                hash={"hash" in item ? item.hash : undefined}
                className="block h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/40"
              >
                <p className="font-display font-bold">{item.label}</p>
                <p className="mt-1.5 text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </PageLayout>
  );
}
