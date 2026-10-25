import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { EXTERNAL_PLAY_URL, OG_IMAGES } from "@/lib/nav";
import {
  Callout,
  InfoCard,
  PageHero,
  PageLayout,
  Section,
} from "@/components/site/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TOC = [
  { id: "what", label: "What Is the VIP Dashboard?" },
  { id: "read", label: "Understanding Your Dashboard" },
  { id: "benefits", label: "VIP Benefits Explained" },
  { id: "tabs", label: "History and Rules Tabs" },
  { id: "exp", label: "Why EXP May Not Update" },
  { id: "faqs", label: "VIP Dashboard FAQ" },
  { id: "next", label: "What to Read Next" },
] as const;

const FAQS = [
  {
    q: "How do I check my 6E Club VIP level?",
    a: "Log in to your account and open the VIP section. The dashboard displays your membership level, EXP, progress information, and listed benefits.",
  },
  {
    q: "What is the highest VIP level in 6E Club?",
    a: "The dashboard shown here identifies VIP10 as the highest level. Check the current VIP Rules section for the applicable progression requirements.",
  },
  {
    q: "How can I upgrade my 6E Club VIP level?",
    a: "The dashboard states that an upgrade depends on reaching the required EXP. Review the Rules tab for qualifying activities and any additional requirements that apply to your account.",
  },
  {
    q: "What is the difference between a level-up reward and a monthly reward?",
    a: "A level-up reward is associated with reaching a VIP milestone, while a monthly reward is associated with the programme’s monthly benefit structure. Eligibility, timing, and claim conditions may differ.",
  },
  {
    q: "What does the VIP rebate rate mean?",
    a: "It is the rate displayed for the rebate benefit in the VIP dashboard. The actual calculation depends on applicable programme terms, so the percentage alone should not be treated as a guaranteed payout.",
  },
  {
    q: "Why is my VIP reward not available to claim?",
    a: "The reward may not yet meet eligibility or claim requirements, or the account may not show it as available. Check the displayed reward status and Rules section before contacting customer service.",
  },
  {
    q: "Do higher VIP levels guarantee higher earnings?",
    a: "No. VIP levels and promotional benefits do not guarantee profits. Gaming activity can result in financial losses, and rewards should not be treated as a reliable source of income.",
  },
] as const;

export const Route = createFileRoute("/6e-club-vip")({
  component: VipPage,
  head: () =>
    buildSeoHead({
      title: "6E Club VIP Dashboard: VIP Levels, EXP, Rewards and Rebate Rate",
      description:
        "How to read the 6E Club VIP dashboard: membership level, EXP progress, level-up and monthly rewards, upgrade multiplier, rebate rate, History and Rules.",
      path: "/6e-club-vip",
      ogImage: OG_IMAGES.vip,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "VIP", path: "/6e-club-vip" },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
      ],
    }),
});

function VipPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "VIP", path: "/6e-club-vip" },
        ]}
        kicker="Guide · 2026"
        title="6E Club VIP Dashboard: VIP Levels, EXP, Rewards and Rebate Rate"
        intro="The VIP dashboard brings your membership level, EXP, progress towards the next level, and listed VIP benefits together. Learn what each section means before claiming a reward."
        bannerSrc="/images/heroes/6e-club-vip-hero.webp"
        bannerAlt="6E Club VIP dashboard with level, EXP and reward categories"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold">Open VIP in your account</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in, open the VIP section, then check your level, EXP and benefit status.
            </p>
          </div>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25"
          >
            Open 6E Club
          </a>
        </div>
      </div>

      <Section id="contents" title="Contents">
        <nav
          aria-label="Article contents"
          className="rounded-2xl border border-border bg-card/80 p-5 sm:p-6"
        >
          <ol className="grid gap-2 sm:grid-cols-2">
            {TOC.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-display text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      <Section
        id="what"
        title="What Is the 6E Club VIP Dashboard?"
        intro="Use this section to check your current VIP status rather than relying on old screenshots or promotional posts."
      >
        <div className="mb-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
            <img
              src="/images/screens/6e-club-vip-dashboard-screen.webp"
              alt="6E Club VIP dashboard showing level, EXP and reward categories"
              width={750}
              height={1500}
              className="mx-auto max-h-[28rem] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              The VIP dashboard is where members can check VIP status and view benefits
              associated with the programme. It shows membership information alongside
              current EXP and a progress indicator for the next level.
            </p>
            <p>
              Four benefit categories typically appear: level-up rewards, monthly rewards,
              upgrade rewards, and rebate rate. History and Rules tabs provide separate places
              to review VIP activity and programme conditions.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="read"
        title="Understanding Your 6E Club VIP Dashboard"
        intro="Know what each block means before treating a displayed amount as credited money."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="1. VIP level and status">
            The VIP card shows the membership tier on your account. The interface may highlight
            VIP10 as the highest level. Always check your own displayed level — another
            member’s dashboard does not establish your status.
          </InfoCard>
          <InfoCard title="2. What is EXP?">
            EXP means experience points and shows progress in the membership system. Your
            current EXP, progress bar and next-level requirement appear together. Qualifying
            activities are defined in the current VIP rules — not every transaction necessarily
            counts.
          </InfoCard>
          <InfoCard title="3. Level upgrade">
            A VIP level can upgrade when required EXP is reached. Rules may also mention tasks
            tied to benefits. Reaching a new level and receiving a reward are not necessarily
            the same — check reward status and claim conditions.
          </InfoCard>
        </div>
        <div className="mt-6 rounded-2xl border border-border bg-card p-5 sm:p-6">
          <h3 className="font-display text-lg font-bold">To understand upgrade progress</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <li>Check your current VIP level.</li>
            <li>Review your current EXP and the next-level requirement.</li>
            <li>Open Rules to read applicable upgrade conditions.</li>
            <li>Check the dashboard again to confirm level or reward status changes.</li>
          </ol>
        </div>
      </Section>

      <Section
        id="benefits"
        title="6E Club VIP Benefits Explained"
        intro="Values and conditions should be checked against the current information in your account."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Level-up rewards">
            Associated with reaching a VIP milestone. Check whether a reward is available,
            pending, or still subject to a requirement. A listed amount is not automatically
            credited to your wallet.
          </InfoCard>
          <InfoCard title="Monthly rewards">
            Benefits tied to the VIP monthly cycle, often described as increasing with level.
            Check eligibility, claim conditions and dates before counting on a monthly reward.
          </InfoCard>
          <InfoCard title="Upgrade reward multiplier">
            A multiplier is not a fixed cash reward. Its effect depends on the platform’s
            calculation and conditions. Do not interpret it as a guaranteed return on money
            spent playing.
          </InfoCard>
          <InfoCard title="VIP rebate rate">
            Displays rebate information for the programme. Check which activity qualifies, the
            calculation base, credit timing and restrictions. A rebate is not a guarantee you
            will recover losses or make a profit.
          </InfoCard>
        </div>
      </Section>

      <Section
        id="tabs"
        title="What Are the History and Rules Tabs?"
        intro="These tabs serve different purposes on the VIP page."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="History">
            Review VIP records made available by the platform. Use it when you need to
            understand a status change or verify whether a benefit appears in account history.
          </InfoCard>
          <InfoCard title="Rules">
            Read programme conditions, including upgrade requirements and access to listed
            benefits. Review rules before assuming a particular amount, rate or reward applies
            to your account.
          </InfoCard>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          When a displayed reward and your account history do not match, check the relevant
          rules first. If the discrepancy remains unexplained, contact customer service with
          details of the affected entry.
        </p>
      </Section>

      <Section id="exp" title="Why Is My 6E Club VIP EXP Not Updating?">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Start by checking the activity and requirements in the current Rules section. Not
            every account action necessarily qualifies for experience points.
          </p>
          <p>
            Also check whether the activity is recorded in History and refresh the dashboard. If
            EXP still looks incorrect, contact customer service with the relevant transaction or
            activity details.
          </p>
        </div>
        <div className="mt-6">
          <Callout tone="caution" title="Do not force EXP with extra deposits">
            Avoid repeating deposits or making additional bets simply to force an EXP update.
            First establish whether the activity qualifies under the programme’s rules.
          </Callout>
        </div>
      </Section>

      <Section id="faqs" title="6E Club VIP Dashboard FAQ">
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card px-4 sm:px-5"
        >
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`vip-faq-${index}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-gold">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-deposit" as const,
              label: "Deposit Guide",
              desc: "How deposits work before VIP activity.",
            },
            {
              to: "/6e-club-invitation" as const,
              label: "Invitation Guide",
              desc: "Referral link, QR and commission claims.",
            },
            {
              to: "/6e-club-customer-service" as const,
              label: "Customer Service Guide",
              desc: "Help if rewards or EXP look wrong.",
            },
            {
              to: "/responsible-play" as const,
              label: "Responsible Play",
              desc: "VIP benefits are not guaranteed income.",
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

      <Section id="disclaimer" title="Final Note">
        <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
          <p>
            The 6E Club VIP dashboard is where to check membership level, EXP progress, listed
            reward categories, rebate information and programme rules. Verify each benefit
            against your own account and read its conditions before relying on a displayed
            amount or rate.
          </p>
          <p className="mt-4">
            This is an independent informational guide and does not establish official
            affiliation with 6E Club. VIP levels do not guarantee profits.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
