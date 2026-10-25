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
  { id: "before", label: "Before You Request a Withdrawal" },
  { id: "steps", label: "Withdrawal, Step by Step" },
  { id: "methods", label: "Choosing a Withdrawal Method" },
  { id: "amount", label: "Entering the Withdrawal Amount" },
  { id: "requirements", label: "Understanding Requirements" },
  { id: "history", label: "Checking Withdrawal History" },
  { id: "delays", label: "Why a Withdrawal May Fail or Be Delayed" },
  { id: "payments", label: "Bank Details, UPI and USDT" },
  { id: "not-arrived", label: "If Money Has Not Arrived" },
  { id: "safety", label: "Keeping Withdrawal Details Safe" },
  { id: "next", label: "What to Read Next" },
  { id: "faqs", label: "FAQs" },
] as const;

const STEPS = [
  {
    n: 1,
    title: "Open the Withdraw Page",
    body: "Open the 6E Club interface and select Withdraw. The page typically includes a balance panel, payment-method options, amount fields, and withdrawal instructions. Check that you are on the correct page before entering any payment information.",
  },
  {
    n: 2,
    title: "Select an Available Withdrawal Method",
    body: "The interface may include ARPay, Bank Card, UPI and USDT. Availability can depend on your account. Choose the method you intend to use and read its on-screen instructions — do not assume every method works the same way.",
  },
  {
    n: 3,
    title: "Enter the Withdrawal Amount",
    body: "Enter the amount in the withdrawal field and check the displayed minimum and maximum limits. If an All option fills the field, review that amount before submitting. Your full displayed balance may not all be withdrawable if separate conditions apply.",
  },
  {
    n: 4,
    title: "Review the Payment Details",
    body: "Confirm the selected method and registered details. For bank withdrawals, verify bank information. For USDT, carefully check wallet address and network. If anything looks unfamiliar, stop before continuing.",
  },
  {
    n: 5,
    title: "Read the Withdrawal Requirements",
    body: "The page may show minimum/maximum amounts, turnover, withdrawal frequency, or permitted hours. If a requirement is unmet, understand what is missing before trying again. Do not assume another deposit will automatically unlock a withdrawal.",
  },
  {
    n: 6,
    title: "Submit the Request",
    body: "After reviewing amount, method, and details, use the Withdraw button once. Wait for the response. Avoid repeating submissions while the first request is still processing.",
  },
  {
    n: 7,
    title: "Check Withdrawal History",
    body: "Open Withdrawal History to review status information. Keep any reference number or confirmation. If the status is pending or processing, wait before starting another request. If it failed, read any explanation and follow the relevant help topic.",
  },
] as const;

const FAQS = [
  {
    q: "How do I withdraw money from 6E Club?",
    a: "Open the Withdraw page, choose an available method, enter the amount, review the payment details and requirements, and submit the request. Check Withdrawal History afterward to review its status.",
  },
  {
    q: "What is the minimum withdrawal amount?",
    a: "The minimum can depend on the current platform rules and the selected method. Check the amount range displayed on your withdrawal page before submitting a request.",
  },
  {
    q: "Why is my withdrawal still processing?",
    a: "The status indicates that the request has not yet reached a final state shown by the interface. Check Withdrawal History for updates and follow the platform’s current instructions.",
  },
  {
    q: "What should I do if a withdrawal fails?",
    a: "Read the displayed failure message, check the amount and payment details, and review any stated requirements. If the reason is unclear, use the Withdrawal problem option in the Self Service Center.",
  },
  {
    q: "Can I withdraw using UPI?",
    a: "UPI may appear as an available option. Check whether it is available for your account and follow the current instructions displayed by the platform.",
  },
  {
    q: "Can I withdraw using USDT?",
    a: "If USDT is available, carefully verify the amount, destination address, and network requirements before confirming the transaction.",
  },
  {
    q: "Why can I not withdraw my full wallet balance?",
    a: "The displayed balance may not equal the amount currently eligible for withdrawal. Check amount limits and any conditions shown on the withdrawal page.",
  },
  {
    q: "Where can I check my withdrawal status?",
    a: "Open Withdrawal History and review the status and transaction details available for your request.",
  },
  {
    q: "What if withdrawal is marked completed but money has not arrived?",
    a: "Check the destination account or payment-provider records and compare the transaction details. If unresolved, contact support through a verified channel with the relevant reference information.",
  },
] as const;

export const Route = createFileRoute("/6e-club-withdrawal")({
  component: WithdrawalPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Withdrawal Guide: How to Withdraw and Track a Request (2026)",
      description:
        "How to withdraw from 6E Club: check balance, choose Bank Card, UPI or USDT, enter the amount, read limits, submit a request, and track status in Withdrawal History.",
      path: "/6e-club-withdrawal",
      ogImage: OG_IMAGES.withdrawal,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Withdrawal", path: "/6e-club-withdrawal" },
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

function WithdrawalPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Withdrawal", path: "/6e-club-withdrawal" },
        ]}
        kicker="Guide · 2026"
        reviewed="2026-10-25"
        title="6E Club Withdrawal Guide: How to Withdraw and Track a Request"
        intro="Before submitting a request, check the available balance, choose the correct withdrawal method, and read the requirements on the withdrawal page. A small mistake in amount or payment details can make a request harder to resolve."
        bannerSrc="/images/heroes/6e-club-withdrawal-hero.webp"
        bannerAlt="6E Club withdrawal infographic guide"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold">Open Withdraw in your account</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in, then use Withdraw from Home or Wallet and follow the steps below.
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
        id="before"
        title="Before You Request a Withdrawal"
        intro="Start by opening Withdraw from the Home screen or Wallet. Check the available balance and read the on-screen instructions before choosing a method."
      >
        <div className="mb-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
            <img
              src="/images/screens/6e-club-wallet-screen.webp"
              alt="6E Club wallet screen before opening Withdraw"
              width={750}
              height={1500}
              className="mx-auto max-h-[28rem] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              The screen may show a minimum amount, maximum limit, remaining attempts, turnover
              conditions, or permitted hours. These can change — use the current values in your
              account, not an old screenshot or third-party article.
            </p>
            <p>
              Also confirm that registered bank, UPI, or USDT details match the method you
              intend to use, especially if you recently changed them.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="steps"
        title="6E Club Withdrawal, Step by Step"
        intro="Follow these steps carefully. Exact labels can vary with the live interface."
      >
        <ol className="space-y-5">
          {STEPS.map((step) => (
            <li key={step.n} id={`withdraw-step-${step.n}`} className="scroll-mt-28">
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
        id="methods"
        title="Choosing a Withdrawal Method"
        intro="The right option depends on what is available in your account and whether you can verify destination details."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="ARPay">
            Select ARPay only if it is available and you understand the instructions after
            selection. Check payment details and conditions before submitting.
          </InfoCard>
          <InfoCard title="Bank Card">
            Confirm registered bank information shown by the platform. If details need changing,
            use the account or help option — do not guess into the withdrawal form.
          </InfoCard>
          <InfoCard title="UPI">
            Review registered UPI details before confirming. Never share your UPI PIN or banking
            password with anyone claiming to process a withdrawal.
          </InfoCard>
          <InfoCard title="USDT">
            Verify amount, destination address, and network. Crypto transfers can be hard or
            impossible to reverse. Never send funds to an address from an unverified helper.
          </InfoCard>
        </div>
      </Section>

      <Section id="amount" title="Entering the Withdrawal Amount">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Enter the amount you want, then check the displayed minimum and maximum. If an{" "}
            <strong className="text-foreground">All</strong> option fills the field, review that
            value before submitting.
          </p>
          <p>
            For USDT, the screen may ask for both an account-currency amount and an equivalent
            USDT amount. Follow the platform’s conversion fields rather than estimating yourself.
          </p>
        </div>
      </Section>

      <Section
        id="requirements"
        title="Understanding Withdrawal Requirements"
        intro="Conditions are not necessarily the same for every account or method. Always read the current page."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Minimum and maximum">
            If your amount is outside the displayed range, the form may block submission. Check
            limits before entering values repeatedly.
          </InfoCard>
          <InfoCard title="Turnover requirements">
            If turnover conditions appear, read the explanation and progress shown. A displayed
            balance is not automatically withdrawable.
          </InfoCard>
          <InfoCard title="Remaining withdrawal count">
            The page may show how many requests remain in a period. Read what period the count
            covers and when it resets, if explained.
          </InfoCard>
          <InfoCard title="Withdrawal hours">
            If permitted hours are listed, follow them. Do not rely on an old guide for operating
            hours.
          </InfoCard>
        </div>
      </Section>

      <Section id="history" title="Checking Withdrawal History">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Withdrawal History helps you see whether a request was submitted, is still processing,
          or was marked unsuccessful. Review amount, date, method, and any reference. Keep a
          record of the status so you can compare updates later.
        </p>
      </Section>

      <Section
        id="delays"
        title="Why a Withdrawal May Fail or Be Delayed"
        intro="Start from the status shown by the platform — the amount alone does not explain every problem."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Withdraw button disabled">
            Check whether the amount is complete and meets limits. Review messages beside the
            form before assuming a technical fault.
          </InfoCard>
          <InfoCard title="Still processing">
            The request has not reached a final state. Check history for updates. Avoid a
            duplicate request just because status has not changed immediately.
          </InfoCard>
          <InfoCard title="Marked failed">
            Read the failure message. Check amount, method, and registered details. If unclear,
            use Customer Service → Withdrawal problem with transaction details.
          </InfoCard>
          <InfoCard title="Incorrect payment details">
            Do not submit another request until bank, UPI, or USDT details are corrected via the
            proper account or Self Service option.
          </InfoCard>
        </div>
      </Section>

      <Section id="payments" title="Bank Details, UPI and USDT">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            The Self Service Center includes options for withdrawal bank accounts, UPI details
            and USDT addresses. Read instructions before changing anything. Avoid deleting a
            registered method unless you understand replacement and verification.
          </p>
          <p>
            For USDT, double-check address and network. Never share private keys or wallet
            recovery phrases.
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="/6e-club-customer-service"
            className="inline-flex text-sm font-semibold text-gold underline-offset-2 hover:underline"
          >
            Open Customer Service guide →
          </Link>
        </div>
      </Section>

      <Section id="not-arrived" title="What to Do If Money Has Not Arrived">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            First check current status in Withdrawal History. If processing, follow platform
            information and do not assume failure. If marked completed but funds are missing,
            compare details with your bank or payment-provider records.
          </p>
          <p>
            If still unresolved, open Customer Service → Withdrawal problem and provide
            reference, amount, date, and status message. Keep screenshots with passwords, PINs
            and OTPs hidden.
          </p>
        </div>
        <div className="mt-6">
          <Callout tone="caution" title="Never pay for a “faster withdrawal”">
            Do not pay an unknown person or share account credentials in exchange for a promised
            faster payout.
          </Callout>
        </div>
      </Section>

      <Section id="safety" title="Keeping Withdrawal Details Safe">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Check amount and method before submitting",
            "Verify bank, UPI, or USDT destination details",
            "Read all displayed limits and conditions",
            "Keep transaction references and status records",
            "Use only support channels you have verified",
            "Never share passwords, PINs, OTPs, or crypto recovery info",
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

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-deposit" as const,
              label: "Deposit Guide",
              desc: "How to add money and follow recharge steps.",
            },
            {
              to: "/6e-club-customer-service" as const,
              label: "Customer Service Guide",
              desc: "Find help for transaction problems.",
            },
            {
              to: "/6e-club-login" as const,
              label: "Login Guide",
              desc: "Sign-in and account-access help.",
            },
            {
              to: "/responsible-play" as const,
              label: "Responsible Play",
              desc: "Safer habits with money and time.",
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

      <Section id="faqs" title="FAQs">
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card px-4 sm:px-5"
        >
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`wd-faq-${index}`}>
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

      <Section id="disclaimer" title="Important Information">
        <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
          <p>
            This guide explains the general withdrawal workflow and options visible in the
            interface used to prepare it. Methods, limits, hours and eligibility can change —
            always check current instructions in your account.
          </p>
          <p className="mt-4">
            This is an independent informational guide and does not establish official
            affiliation with 6E Club. It does not guarantee approval, successful payment, or a
            particular processing time. Only request transactions you understand and can afford.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
