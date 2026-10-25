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

export const Route = createFileRoute("/responsible-play")({
  component: ResponsiblePlayPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Responsible Play — Limits & Helplines",
      description:
        "Responsible play tips for 6E Club style games: time and money limits, streak myths, warning signs, and India helplines including Tele-MANAS 14416.",
      path: "/responsible-play",
      ogImage: OG_IMAGES.responsiblePlay,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Responsible play", path: "/responsible-play" },
      ],
    }),
});

function ResponsiblePlayPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Responsible play", path: "/responsible-play" },
        ]}
        kicker="18+ · Play safe"
        title="Responsible play for 6E Club sessions"
        intro="Even short sessions can steal time and money. Use limits before you start, ignore streak myths, and get help early if play stops feeling light."
        bannerSrc="/images/homepage/6e-club-fishing-games-banner.webp"
      />

      <Section
        id="habits"
        title="Simple habits that help"
        intro="Decide the rules before the first round — not during a hot streak."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Set an end time first">
            Choose how many minutes you will play before you open the app or site. When the timer
            ends, stop — even if the last result felt unfinished.
          </InfoCard>
          <InfoCard title="Set a money limit">
            If deposits are involved, decide a hard maximum for the day or week. Do not top up to
            “win back” a loss.
          </InfoCard>
          <InfoCard title="Streaks are normal chance">
            Five results in a row do not owe you a “correction”. That belief fuels chasing and
            larger bets than you planned.
          </InfoCard>
          <InfoCard title="Adults only">
            Keep phones locked. These guides are for people 18 and over. Do not let children use
            money or gaming accounts.
          </InfoCard>
        </div>
      </Section>

      <Section
        id="money"
        title="When money is involved"
        intro="Practice coins and real deposits are different. Treat wallet balance as money you can afford to lose."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            If a product asks for deposits, UPI transfers or crypto, you are no longer in free
            practice territory. Read the{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-deposit">
              deposit guide
            </Link>{" "}
            and{" "}
            <Link
              className="text-gold underline-offset-2 hover:underline"
              to="/6e-club-withdrawal"
            >
              withdrawal guide
            </Link>{" "}
            before sending funds, and verify the host yourself.
          </p>
          <p>
            A successful deposit does not guarantee winnings. Tip channels, “sure shot” predictions
            and paid gift codes cannot reliably beat fair chance outcomes.
          </p>
        </div>
        <div className="mt-6">
          <Callout tone="caution" title="Never chase losses">
            Doubling the stake after a loss usually accelerates damage. Pause, step away, and
            return only within your pre-set limit — or not at all.
          </Callout>
        </div>
      </Section>

      <Section
        id="warning-signs"
        title="Warning signs to take seriously"
        intro="If several of these feel familiar, take a break and talk to someone you trust."
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Hiding play time or spend from family",
            "Borrowing money or skipping bills to deposit",
            "Feeling restless or angry when you cannot play",
            "Returning immediately after a big loss to “fix it”",
            "Ignoring work, sleep or relationships for sessions",
            "Believing the next round is “due” after a streak",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="help" title="Where to get help in India">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Tele-MANAS — 14416">
            Free, confidential mental-health support. Call if play, stress or mood are becoming
            hard to manage.
          </InfoCard>
          <InfoCard title="Cyber fraud — 1930">
            If you sent money to a fake app, tip seller or lookalike site, report quickly on 1930
            and the National Cyber Crime Reporting Portal, and alert your bank.
          </InfoCard>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          This guide hub cannot provide therapy, account recovery or dispute resolution for
          third-party platforms. See{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/contact">
            Contact
          </Link>{" "}
          for editorial vs emergency channels.
        </p>
      </Section>

      <Section id="next" title="Related pages">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-game" as const,
              label: "Game Guide",
              desc: "How format and rooms are usually described.",
            },
            {
              to: "/6e-club-apk" as const,
              label: "APK Guide",
              desc: "Safer access and sideload red flags.",
            },
            {
              to: "/faq" as const,
              label: "FAQ",
              desc: "Short answers on login, APK and safety.",
            },
            {
              to: "/about" as const,
              label: "About",
              desc: "What this independent hub publishes.",
            },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
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
