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
  { id: "find", label: "Where to Find Your Invitation Code" },
  { id: "invite", label: "How to Invite Friends" },
  { id: "commission", label: "Referral Commission Explained" },
  { id: "daily", label: "Does Commission Pay Every Day?" },
  { id: "link-issues", label: "Invitation Link Not Working" },
  { id: "compare", label: "Code vs Link vs QR Code" },
  { id: "faqs", label: "Invitation FAQ" },
  { id: "next", label: "What to Read Next" },
] as const;

const STEPS = [
  {
    n: 1,
    title: "Copy your invitation link",
    body: "Open the Invite page and select Copy invitation link. This copies the invitation URL for your account. Send it directly to a friend through a messaging app.",
  },
  {
    n: 2,
    title: "Share your invitation QR code",
    body: "If you prefer a QR code, use Download QR Code. Your friend can scan it to open the invitation link, provided the code is valid and the link works.",
  },
  {
    n: 3,
    title: "Share through messaging and social apps",
    body: "The page may include sharing options for WhatsApp, Telegram, Facebook and X. Choose the option you normally use, then share your invitation.",
  },
  {
    n: 4,
    title: "Check the invitation requirements",
    body: "Displayed rules may say invited users should register and play for commission to apply. Read the current terms on your account before assuming registration alone qualifies for a reward.",
  },
] as const;

const FAQS = [
  {
    q: "How do I get my 6E Club invitation code?",
    a: "Log in to your account and open the Invite section. Your invitation code, invitation link, and QR code are displayed there when the feature is available.",
  },
  {
    q: "How can I share my 6E Club referral link?",
    a: "Copy the invitation link from the Invite page and send it through WhatsApp, Telegram, Facebook, X, or another supported sharing method.",
  },
  {
    q: "What is the 6E Club invitation bonus?",
    a: "The invitation page promotes a commission-based referral system. Check the current invitation rules to understand how commission is calculated and whether additional conditions apply.",
  },
  {
    q: "What does 6E Club's 85% commission mean?",
    a: "The page advertises commission of up to 85%. “Up to” means a maximum advertised rate, not a guaranteed rate or fixed earnings. Check the platform’s applicable terms for the actual calculation.",
  },
  {
    q: "Why is my 6E Club referral commission missing?",
    a: "Possible reasons include qualifying conditions not met, a delay in the account record, or activity not eligible under current rules. Review available records and contact customer service if the status remains unclear.",
  },
  {
    q: "Can I use the same 6E Club invitation link more than once?",
    a: "The page provides an invitation link for sharing. For any limits on its use or eligibility requirements, refer to the current invitation rules shown on the platform.",
  },
  {
    q: "Is 6E Club referral commission guaranteed?",
    a: "No fixed commission amount should be assumed from the promotional display alone. The advertised rate and daily-credit statement are subject to the platform’s applicable terms and qualifying conditions.",
  },
] as const;

export const Route = createFileRoute("/6e-club-invitation")({
  component: InvitationPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Invitation Code: How to Invite Friends and Earn Commission",
      description:
        "How to find your 6E Club invitation code, copy the referral link, share the QR code, and understand up-to-85% commission claims without treating them as guaranteed income.",
      path: "/6e-club-invitation",
      ogImage: OG_IMAGES.invitation,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Invitation", path: "/6e-club-invitation" },
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

function InvitationPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Invitation", path: "/6e-club-invitation" },
        ]}
        kicker="Guide · 2026"
        title="6E Club Invitation Code: How to Invite Friends and Earn Commission"
        intro="The Invite page shows a personal invitation link, QR code, invitation code and commission information. Learn where to find them, how to share, and how the advertised commission is described."
        bannerSrc="/images/heroes/6e-club-invitation-hero.webp"
        bannerAlt="6E Club invitation page with link, QR code and commission details"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold">Open Invite in your account</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in, open Invite, then copy your link or QR code using the steps below.
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
        id="find"
        title="Where to Find Your 6E Club Invitation Code"
        intro="Log in, then open Invite from the account or platform menus. The page shows the details used for sharing."
      >
        <div className="mb-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
            <img
              src="/images/screens/6e-club-invitation-screen.webp"
              alt="6E Club invitation screen with code, link and QR options"
              width={750}
              height={1500}
              className="mx-auto max-h-[28rem] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Invitation code</strong> — the code
                associated with your invitation.
              </li>
              <li>
                <strong className="text-foreground">Invitation link</strong> — a personal URL
                you can copy and share.
              </li>
              <li>
                <strong className="text-foreground">QR code</strong> — a scannable code for
                sharing your invitation.
              </li>
              <li>
                <strong className="text-foreground">Download QR Code</strong> — save the QR for
                later sharing.
              </li>
              <li>
                <strong className="text-foreground">Copy invitation link</strong> — shortcut to
                copy the referral URL.
              </li>
            </ul>
            <Callout tone="caution" title="Share carefully">
              You can share invitation details with people you intend to invite. Never share
              your login password or OTP.
            </Callout>
          </div>
        </div>
      </Section>

      <Section
        id="invite"
        title="How to Invite Friends on 6E Club"
        intro="Share your link, let friends register and play, then check the commission information shown for your account."
      >
        <ol className="space-y-5">
          {STEPS.map((step) => (
            <li key={step.n} id={`invite-step-${step.n}`} className="scroll-mt-28">
              <article className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm font-bold text-gold">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.body}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="commission"
        title="6E Club Referral Commission Explained"
        intro="The Invite page may advertise commission of up to 85% and describe it as permanent and added daily. Treat these as promotional statements, not guarantees."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Actual commission may depend on platform rules, qualifying activity, account
            conditions and other terms. Do not calculate expected earnings from the advertised
            maximum rate alone.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            "How the commission rate is calculated",
            "Which activity qualifies for commission",
            "Whether rates differ by account or activity",
            "When commission is credited",
            "Minimum balance or withdrawal conditions",
            "What happens if an invited account does not qualify",
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
        <div className="mt-6">
          <Callout tone="caution" title="Not guaranteed income">
            Applicable terms and account records matter more than a promotional headline.
            Colour prediction can involve financial losses — do not treat referral commission as
            guaranteed earnings.
          </Callout>
        </div>
      </Section>

      <Section id="daily" title="Does 6E Club Pay Commission Every Day?">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            The invitation screen may state that commission is added daily. That does not
            establish a fixed payout amount or guarantee that every account is credited every
            day.
          </p>
          <p>
            If commission does not appear, check referral or commission records in your account.
            Confirm whether the invited user completed required activity. If the status is still
            unclear, use customer service through verified support options.
          </p>
        </div>
      </Section>

      <Section
        id="link-issues"
        title="6E Club Invitation Link Not Working"
        intro="If the link does not open correctly, try these checks before creating a new share message."
      >
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li>Copy the link again from the Invite page rather than using an old message.</li>
          <li>Open the copied link in your mobile browser.</li>
          <li>Check whether the website loads normally before attempting registration.</li>
          <li>If sharing a QR code, download a fresh copy and scan it again.</li>
          <li>If the problem continues, contact platform support with the error details.</li>
        </ol>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Avoid changing the invitation URL manually. A modified link may no longer point to the
          correct invitation page.
        </p>
      </Section>

      <Section
        id="compare"
        title="Invitation Code vs Invitation Link vs QR Code"
        intro="These options serve related but different purposes."
      >
        <div className="overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[28rem] text-left text-sm">
            <thead className="bg-secondary/60 text-foreground">
              <tr>
                <th className="px-4 py-3 font-display font-semibold">Option</th>
                <th className="px-4 py-3 font-display font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">Invitation code</td>
                <td className="px-4 py-3">Identifies the code displayed on the account</td>
              </tr>
              <tr className="border-t border-border bg-card/40">
                <td className="px-4 py-3 font-medium text-foreground">Invitation link</td>
                <td className="px-4 py-3">Provides a URL to share with another user</td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">Invitation QR code</td>
                <td className="px-4 py-3">Opens the invitation URL by scanning the code</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Use the option most convenient for the person you invite. If a registration form asks
          for an invitation code separately, follow that form rather than assuming the link fills
          it automatically.
        </p>
      </Section>

      <Section id="faqs" title="6E Club Invitation FAQ">
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card px-4 sm:px-5"
        >
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`inv-faq-${index}`}>
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
              to: "/6e-club-register" as const,
              label: "Register Guide",
              desc: "How new accounts are created.",
            },
            {
              to: "/6e-club-customer-service" as const,
              label: "Customer Service Guide",
              desc: "Help if commission status is unclear.",
            },
            {
              to: "/6e-club-vip" as const,
              label: "VIP Dashboard Guide",
              desc: "Levels, EXP, rewards and rebate rate.",
            },
            {
              to: "/responsible-play" as const,
              label: "Responsible Play",
              desc: "Limits and risk reminders.",
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
            The 6E Club invitation feature brings the referral link, invitation code, QR code,
            sharing options and commission information together on one page. Before inviting
            others, review the current rules and understand how commission eligibility works.
          </p>
          <p className="mt-4">
            This is an independent informational guide and does not establish official
            affiliation with 6E Club. Colour prediction and related gaming can involve financial
            losses — do not treat referral commission as guaranteed income.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
