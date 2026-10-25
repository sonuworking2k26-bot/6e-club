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
  { id: "before", label: "Before Making a Deposit" },
  { id: "steps", label: "How to Deposit on 6E Club" },
  { id: "methods", label: "Available Deposit Methods" },
  { id: "amount", label: "Choosing the Deposit Amount" },
  { id: "instructions", label: "Understanding Recharge Instructions" },
  { id: "history", label: "Checking Deposit History" },
  { id: "not-received", label: "If a Deposit Is Not Received" },
  { id: "problems", label: "Common Deposit Problems" },
  { id: "safety", label: "Payment Safety Tips" },
  { id: "next", label: "What to Read Next" },
  { id: "faqs", label: "FAQs" },
] as const;

const STEPS = [
  {
    n: 1,
    title: "Open the Deposit Page",
    body: "From the Home screen, select Deposit beside the displayed wallet balance. You can also look for Deposit within the Wallet section. Check that the page has loaded correctly before selecting a payment method.",
  },
  {
    n: 2,
    title: "Choose a Payment Method",
    body: "The deposit interface may include UPI, Paytm, PhonePe, UPI QR Pay, USDT, ARPay and Bank Transfer. Select an option available to you and read the instructions for that method — do not assume every method works the same way.",
  },
  {
    n: 3,
    title: "Select or Enter the Amount",
    body: "The form may show suggested amounts (for example ₹100 to ₹30,000) and an amount field with a stated range such as ₹100 to ₹50,000. Check the live limits before proceeding. A highlighted amount is a selection, not a recommendation to spend that sum.",
  },
  {
    n: 4,
    title: "Review the Deposit Order",
    body: "After selecting method and amount, read the next instructions carefully. The platform may display payment details or further steps. Check the amount and payment destination before completing the transfer. Do not reuse old saved details unless they match the current order.",
  },
  {
    n: 5,
    title: "Complete the Payment Carefully",
    body: "Follow the instructions for the selected method. Make sure the amount you send matches the amount requested by the deposit order. Keep the payment confirmation and transaction reference where available.",
  },
  {
    n: 6,
    title: "Check the Deposit Status",
    body: "Return to the platform and check the wallet balance or Deposit History. If the payment has not appeared immediately, check its status before attempting another deposit — sending the same amount again may create a second transaction.",
  },
] as const;

const FAQS = [
  {
    q: "How do I deposit on 6E Club?",
    a: "Open the Deposit page, select an available payment method, choose or enter the amount, review the order details, and follow the displayed payment instructions. Check Deposit History afterward.",
  },
  {
    q: "What is the minimum deposit amount?",
    a: "The deposit form covered by this guide displays a range starting at ₹100. Check the live form before paying because the permitted limits can change.",
  },
  {
    q: "Which deposit methods are available?",
    a: "The interface lists UPI, Paytm, PhonePe, UPI QR Pay, USDT, ARPay and Bank Transfer. Availability and instructions may differ by method.",
  },
  {
    q: "Why has my deposit not appeared in my wallet?",
    a: "Check the payment status, confirm that the amount matches the deposit order, and review Deposit History. If unresolved, use the Deposit Not Receive option in Customer Service.",
  },
  {
    q: "What should I do if the deposit order expires?",
    a: "Check whether you already transferred the money. If you have paid, keep the transaction confirmation and verify the original order status before creating another order or making another payment.",
  },
  {
    q: "Can I send a different amount from the one shown in the order?",
    a: "The displayed instructions warn that the transferred amount must match the created order for successful crediting. Check the current order amount before making a payment.",
  },
  {
    q: "Where can I find deposit records?",
    a: "Open Deposit History on the deposit page and review the available transaction details.",
  },
  {
    q: "Is a successful payment notification enough to confirm that the deposit is credited?",
    a: "Not necessarily. Check the platform wallet or deposit status as well as the payment-provider confirmation. If unresolved, use the verified help option.",
  },
] as const;

export const Route = createFileRoute("/6e-club-deposit")({
  component: DepositPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Deposit Guide: How to Add Money (2026)",
      description:
        "How to deposit on 6E Club: choose UPI, Paytm, PhonePe, QR, Bank Transfer or USDT, match the order amount, follow recharge instructions, and check Deposit History.",
      path: "/6e-club-deposit",
      ogImage: OG_IMAGES.deposit,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Deposit", path: "/6e-club-deposit" },
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

function DepositPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Deposit", path: "/6e-club-deposit" },
        ]}
        kicker="Guide · 2026"
        title="6E Club Deposit Guide: How to Add Money"
        intro="Making a deposit is straightforward when the payment method, amount and order details all match. Check those details before sending money — a mismatch can make the transaction harder to resolve."
        bannerSrc="/images/heroes/6e-club-deposit-hero.webp"
        bannerAlt="6E Club deposit infographic guide"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold">Open Deposit in your account</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in, then use Deposit from Home or Wallet and follow the steps below.
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
        title="Before Making a Deposit"
        intro="Open the Deposit section and review the instructions on the page. Check available methods, the permitted amount range and any conditions attached to the transaction."
      >
        <div className="mb-6 grid gap-4 lg:grid-cols-2 lg:items-start">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
            <img
              src="/images/screens/6e-club-deposit-screen.webp"
              alt="6E Club deposit screen with payment methods and amount options"
              width={750}
              height={1500}
              className="mx-auto max-h-[28rem] w-auto object-contain"
              loading="eager"
            />
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              The deposit screen displays several payment options and suggested amounts. Options
              available to you may change — use the current form rather than an old screenshot.
            </p>
            <p>
              Confirm that you are using the intended website and that payment instructions belong
              to the transaction you are about to make. Do not send money to account details
              supplied separately by an unknown person.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="steps"
        title="How to Deposit on 6E Club"
        intro="Follow these steps carefully. Exact labels can vary with the live interface."
      >
        <ol className="space-y-5">
          {STEPS.map((step) => (
            <li key={step.n} id={`deposit-step-${step.n}`} className="scroll-mt-28">
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
        title="Available Deposit Methods"
        intro="Exact requirements depend on the selected method and the instructions displayed at the time of payment."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="UPI">
            Select UPI and follow the current deposit form. Check amount and recipient details
            before confirming. Never share your UPI PIN or banking password.
          </InfoCard>
          <InfoCard title="Paytm and PhonePe">
            Follow the instructions for the method you select. Confirm details match the deposit
            order. A successful payment notification does not automatically mean the wallet is
            credited.
          </InfoCard>
          <InfoCard title="UPI QR Pay">
            You may need to scan a payment QR code. Check recipient information and amount in your
            UPI app before approving. Do not scan a QR code from an unrelated person.
          </InfoCard>
          <InfoCard title="ARPay">
            Select ARPay only if it is available and you understand the on-screen instructions.
            Check the order amount and destination details before proceeding.
          </InfoCard>
          <InfoCard title="Bank Transfer">
            Review beneficiary details for the current order carefully. If details look
            inconsistent or unexpected, pause and verify rather than proceeding.
          </InfoCard>
          <InfoCard title="USDT">
            Verify destination address and network before confirming. Transfers to the wrong
            address or network may be unrecoverable. Never disclose private keys or recovery
            phrases.
          </InfoCard>
        </div>
      </Section>

      <Section
        id="amount"
        title="Choosing the Deposit Amount"
        intro="The form provides preset amounts and a field for entering a value within the displayed range."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Suggested amounts may include ₹100, ₹300, ₹500, ₹1,000, ₹2,000, ₹3,000, ₹5,000,
            ₹10,000 and ₹30,000. The amount field may state a range such as ₹100 to ₹50,000 —
            always check the live page.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Check the minimum and maximum limits currently displayed.</li>
            <li>Confirm the selected amount matches what you intend to pay.</li>
            <li>Make sure you can complete the payment with your chosen method.</li>
            <li>Review promotional offer terms separately from the deposit amount.</li>
          </ul>
          <p>
            Do not deposit more simply to reach a promotional threshold unless you have read and
            understood the terms. A displayed reward does not guarantee a particular benefit.
          </p>
        </div>
      </Section>

      <Section
        id="instructions"
        title="Understanding Recharge Instructions"
        intro="The deposit screen includes Recharge instructions. Read them carefully when a payment is already in progress."
      >
        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
          <img
            src="/images/screens/6e-club-how-to-deposit-screen.webp"
            alt="6E Club recharge instructions on the deposit screen"
            width={750}
            height={1500}
            className="mx-auto max-h-[24rem] w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Amount must match the order">
            The amount sent should match the deposit order. A different amount may not credit
            automatically. Always check the order amount before confirming.
          </InfoCard>
          <InfoCard title="If transfer time expires">
            Instructions may say to fill the form again if time expires. Before creating another
            order, check whether the original payment was already completed or is still pending.
          </InfoCard>
          <InfoCard title="Do not cancel after paying">
            Avoid cancelling a deposit order after money has been transferred. Keep the
            confirmation and check order status. Seek help before making another payment.
          </InfoCard>
        </div>
      </Section>

      <Section id="history" title="Checking Deposit History">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Deposit History lets you review deposit records after a payment. Check amount, date,
          status and any reference details, and compare them with your bank or payment-provider
          confirmation. If history shows no records, do not immediately assume failure — confirm
          the transaction was submitted and whether history has updated.
        </p>
      </Section>

      <Section id="not-received" title="What to Do If a Deposit Is Not Received">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            A payment can look successful in your payment app while the wallet still shows the
            previous balance. Avoid making another payment until you have checked the first
            transaction.
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Check your bank or payment application’s transaction status.</li>
            <li>Confirm that the amount paid matches the deposit order.</li>
            <li>Keep the transaction reference and payment confirmation.</li>
            <li>Open Deposit History and look for the relevant order.</li>
            <li>
              If unresolved, open Customer Service and select{" "}
              <strong className="text-foreground">Deposit Not Receive</strong>.
            </li>
          </ol>
        </div>
        <div className="mt-6">
          <Callout tone="caution" title="Never share payment credentials">
            Do not share your UPI PIN, password, OTP or other security credentials with anyone
            claiming they can credit the payment manually.
          </Callout>
        </div>
      </Section>

      <Section
        id="problems"
        title="Common Deposit Problems"
        intro="Use the status and order details shown by the platform as your starting point."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Payment successful, wallet not updated">
            Compare payment-provider details with the deposit order, then review Deposit History.
            If still wrong, use Deposit Not Receive in the Self Service Center.
          </InfoCard>
          <InfoCard title="Deposit order expired">
            If you have not paid, follow current instructions to create a valid order. If you
            already transferred money, do not automatically pay again — keep the confirmation and
            seek help.
          </InfoCard>
          <InfoCard title="Incorrect amount transferred">
            Compare amounts carefully. Keep the payment reference and explain the difference when
            seeking help. Do not assume another deposit will correct the first transaction.
          </InfoCard>
          <InfoCard title="QR or details look different">
            Stop before approving. Confirm details belong to the current deposit order. Never pay
            an unfamiliar recipient because someone claims the payment is urgent.
          </InfoCard>
        </div>
      </Section>

      <Section id="safety" title="Payment Safety Tips">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Verify the payment method and recipient",
            "Match the amount to the current deposit order",
            "Keep payment confirmations and transaction references",
            "Do not make duplicate payments while one is unresolved",
            "Avoid payment links and QR codes from unknown people",
            "Never share passwords, UPI PINs, OTPs, or crypto recovery info",
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
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Only deposit money you can afford to lose. Game-related services involve financial risk,
          and a successful deposit does not guarantee winnings or a particular return.
        </p>
      </Section>

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-withdrawal" as const,
              label: "Withdrawal Guide",
              desc: "How to withdraw and track a request.",
            },
            {
              to: "/6e-club-customer-service" as const,
              label: "Customer Service Guide",
              desc: "Help with a missing deposit or payment problem.",
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
        <p className="mt-4 text-xs text-muted-foreground">
          An Account overview guide will be linked here when that page is published.
        </p>
      </Section>

      <Section id="faqs" title="FAQs">
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-border bg-card px-4 sm:px-5"
        >
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`dep-faq-${index}`}>
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
            This guide explains the deposit interface and the instructions visible in the
            supplied screen. Payment options, amount limits and transaction requirements may
            change — check the current order before sending money.
          </p>
          <p className="mt-4">
            This is an independent informational guide and does not establish official
            affiliation with 6E Club. Deposits do not guarantee winnings or financial returns.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
