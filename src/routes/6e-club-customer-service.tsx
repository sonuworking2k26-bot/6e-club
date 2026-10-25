import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { EXTERNAL_PLAY_URL, OG_IMAGES } from "@/lib/nav";
import {
  Callout,
  InfoCard,
  PageHero,
  PageLayout,
  Section,
  StepList,
} from "@/components/site/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TOC = [
  { id: "find", label: "Where to Find Customer Service" },
  { id: "use", label: "How to Use the Self Service Center" },
  { id: "faq-section", label: "Finding Answers in the FAQ" },
  { id: "deposit", label: "Help With Deposit Problems" },
  { id: "withdrawal", label: "Help With Withdrawal Problems" },
  { id: "login-issues", label: "Login and Account Issues" },
  { id: "payments", label: "Bank, UPI and USDT Help" },
  { id: "games", label: "Game Problems and Other Topics" },
  { id: "prepare", label: "What Information to Keep Ready" },
  { id: "safety", label: "Account Safety When Contacting Support" },
  { id: "next", label: "What to Read Next" },
  { id: "faqs", label: "FAQs" },
] as const;

const FAQS = [
  {
    q: "Where can I find 6E Club Customer Service?",
    a: "Open the Account section, scroll to Service center, and select Customer Service. The Self Service Center provides a list of help topics.",
  },
  {
    q: "How do I report a missing deposit?",
    a: "Check the payment status with your payment provider and review the relevant transaction details. Then open Customer Service and select Deposit Not Receive if it matches your issue.",
  },
  {
    q: "What should I do if my withdrawal has a problem?",
    a: "Review the withdrawal status and the instructions shown in your account. Open the Withdrawal problem topic in the Self Service Center and follow the relevant guidance.",
  },
  {
    q: "Where can I get help changing my login password?",
    a: "Look for Change ID Login Password in the Self Service Center. Follow the instructions provided by the platform and use only a verified login or recovery page.",
  },
  {
    q: "Can I change my bank details through Customer Service?",
    a: "The help menu includes topics for IFSC Modification, Change bank name and rebinding certain payment details. Open the relevant option to check the current requirements before making changes.",
  },
  {
    q: "Where can I find help with USDT?",
    a: "Look for the USDT-related options in the Self Service Center. Read the instructions carefully and double-check the wallet address and network before making a transfer.",
  },
  {
    q: "What should I do if none of the help topics solves my problem?",
    a: "Recheck the instructions and confirm that you selected the right category. If a verified support option is available, use it and provide a concise explanation with relevant reference details. Never share your password or verification codes.",
  },
  {
    q: "Should I share a screenshot with Customer Service?",
    a: "A screenshot may help explain an error or transaction status. Before sharing it, hide passwords, verification codes, full payment credentials and other sensitive information.",
  },
] as const;

export const Route = createFileRoute("/6e-club-customer-service")({
  component: CustomerServicePage,
  head: () =>
    buildSeoHead({
      title: "6E Club Customer Service: Self Service Center Guide (2026)",
      description:
        "How to use the 6E Club Self Service Center for deposits, withdrawals, login password help, bank/UPI/USDT topics, FAQs and safer support habits.",
      path: "/6e-club-customer-service",
      ogImage: OG_IMAGES.customerService,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Customer Service", path: "/6e-club-customer-service" },
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

function CustomerServicePage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Customer Service", path: "/6e-club-customer-service" },
        ]}
        kicker="Guide · 2026"
        reviewed="2026-10-25"
        title="6E Club Customer Service: Self Service Center Guide"
        intro="Need help with a deposit, withdrawal, login problem, or another account issue? The Self Service Center brings several help topics together so you can match instructions to your problem before trying random fixes."
        bannerSrc="/images/heroes/6e-club-service-center-hero.webp"
        bannerAlt="6E Club Self Service Center infographic"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold">Open your account help menu</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Sign in first, then use Account → Customer Service inside the app interface.
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
        title="Where to Find 6E Club Customer Service"
        intro="The Customer Service option is available in the Account section of the app interface."
      >
        <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
          <img
            src="/images/screens/6e-club-service-center-screen.webp"
            alt="6E Club Account screen showing Customer Service in the Service center"
            width={750}
            height={1500}
            className="mx-auto max-h-[32rem] w-auto object-contain"
            loading="eager"
          />
          <p className="border-t border-border bg-card px-4 py-3 text-center text-xs text-muted-foreground">
            Account → Service center → Customer Service
          </p>
        </div>

        <StepList
          steps={[
            {
              title: "Open 6E Club and sign in",
              body: "Use a login page you have verified. If you cannot sign in, seek help only through a channel you can independently verify — never share your password or OTP.",
            },
            {
              title: "Select Account",
              body: "Tap Account from the bottom navigation.",
            },
            {
              title: "Scroll to Service center",
              body: "Find the Service center block on the Account page.",
            },
            {
              title: "Tap Customer Service",
              body: "The Self Service Center opens with a list of help topics.",
            },
          ]}
        />

        <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
          The Account section also contains Settings, Feedback, Announcement, Beginner’s Guide
          and About Us. For a specific issue, start with Customer Service rather than an
          unrelated option.
        </p>
      </Section>

      <Section
        id="use"
        title="How to Use the Self Service Center"
        intro="The Self Service Center organises help by problem type."
      >
        <div className="flex flex-wrap gap-2">
          {[
            "FAQ",
            "Game Problem",
            "Deposit Not Receive",
            "Withdrawal problem",
            "IFSC Modification",
            "Delete / Rebind payment details",
            "Change ID Login Password",
            "Change bank name",
            "USDT topics",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Choose the option that most closely matches your issue. Read the next page carefully
            and follow only the steps that apply.
          </p>
          <p>
            If the first topic does not help, return to the menu and try another relevant
            category. Avoid submitting multiple requests for the same issue before checking
            whether an earlier request was already recorded.
          </p>
        </div>
      </Section>

      <Section
        id="faq-section"
        title="Finding Answers in the FAQ Section"
        intro="The FAQ section is a useful starting point for general questions."
      >
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Look for the question that best describes your problem. Topics may cover
          registration, deposits, missing deposits, withdrawals, login password changes,
          bank-account binding and USDT. Read the full answer before acting. If instructions
          do not match your account, return to the Self Service Center for a more relevant
          topic.
        </p>
      </Section>

      <Section
        id="deposit"
        title="Help With Deposit Problems"
        intro="A deposit issue can mean a payment is still processing, the wallet has not updated, or payment details need checking."
      >
        <Callout title="Use Deposit Not Receive">
          The Self Service Center includes a <strong>Deposit Not Receive</strong> option for
          this type of problem.
        </Callout>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <InfoCard title="Before you report">
            Confirm payment status in your bank / UPI app, match amount and details, review
            deposit history if available, and keep the transaction reference.
          </InfoCard>
          <InfoCard title="Avoid repeat payments">
            Do not submit the same payment repeatedly just because the first amount has not
            appeared. Check its status first.
          </InfoCard>
        </div>
      </Section>

      <Section
        id="withdrawal"
        title="Help With Withdrawal Problems"
        intro="If a withdrawal is delayed or you cannot submit a request, review the withdrawal information in your account first."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Check these first">
            Was the request submitted? What status shows in history? Does the amount match
            requirements? Are payment details correct? Any on-screen conditions?
          </InfoCard>
          <InfoCard title="Safety">
            Keep transaction references. Never pay an unfamiliar person or share credentials
            to supposedly speed up a withdrawal.
          </InfoCard>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Open the <strong className="text-foreground">Withdrawal problem</strong> topic and
          follow the instructions for your specific case.
        </p>
      </Section>

      <Section id="login-issues" title="Login and Account-Related Issues">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Look for <strong className="text-foreground">Change ID Login Password</strong> for
            password-related help. If you cannot sign in, confirm you are using the correct
            details on a verified login page, then use recovery instructions if available.
          </p>
          <p>
            If you lost access to registered contact details, check for an alternative recovery
            process. Do not use another person’s information to bypass verification.
          </p>
        </div>
        <div className="mt-6">
          <Link
            to="/6e-club-login"
            className="inline-flex text-sm font-semibold text-gold underline-offset-2 hover:underline"
          >
            Read the 6E Club Login Guide →
          </Link>
        </div>
      </Section>

      <Section
        id="payments"
        title="Bank Details, UPI and USDT Help"
        intro="Several payment-information topics cover bank details, UPI and USDT addresses."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="IFSC & bank name">
            Use <strong>IFSC Modification</strong> or <strong>Change bank name</strong> when
            those details are the issue. Check carefully before submitting a change.
          </InfoCard>
          <InfoCard title="Delete / rebind">
            Options may include deleting and rebinding a bank account or UPI. Read
            consequences before removing a registered method. Do not delete details to fix an
            unrelated problem.
          </InfoCard>
          <InfoCard title="USDT topics">
            Choose the topic that matches your situation. Crypto transfers can be hard to
            reverse — verify address and network. Never share private keys, recovery phrases,
            passwords or OTPs.
          </InfoCard>
        </div>
      </Section>

      <Section id="games" title="Game Problems and Other Help Topics">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Use <strong className="text-foreground">Game Problem</strong> for gameplay issues.
            Note which game you used, what happened, and when. Keep relevant history references.
          </p>
          <p>
            Feedback, Announcement and Beginner’s Guide may help with general information, while
            Customer Service is the direct start for account or transaction issues. Pick one
            matching category — do not file the same complaint under several unrelated topics.
          </p>
        </div>
      </Section>

      <Section id="prepare" title="What Information to Keep Ready">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Type of problem (login, deposit, withdrawal, game)",
            "Approximate date and time",
            "Transaction reference, where applicable",
            "Status or error message on screen",
            "Screenshot with sensitive details hidden",
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
          <Callout tone="caution" title="Never include in a support request">
            Password, OTP, payment PIN, private key, or wallet recovery phrase.
          </Callout>
        </div>
      </Section>

      <Section id="safety" title="Account Safety When Contacting Support">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Real support does not need your password">
            A person claiming to be customer support should not ask for your password or OTP.
          </InfoCard>
          <InfoCard title="Stay inside verified channels">
            Use Customer Service in the account interface or another destination you have
            independently verified. Avoid unexpected links and remote-access software.
          </InfoCard>
        </div>
      </Section>

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-login" as const,
              label: "6E Club Login Guide",
              desc: "Sign-in and account-access help.",
            },
            {
              to: "/6e-club-register" as const,
              label: "6E Club Register Guide",
              desc: "General registration instructions.",
            },
            {
              to: "/6e-club-deposit" as const,
              label: "6E Club Deposit Guide",
              desc: "How to add money and check deposit status.",
            },
            {
              to: "/6e-club-withdrawal" as const,
              label: "6E Club Withdrawal Guide",
              desc: "How to withdraw and track a request.",
            },
            {
              to: "/6e-club-invitation" as const,
              label: "Invitation Guide",
              desc: "Referral link, QR code and commission claims.",
            },
            {
              to: "/6e-club-vip" as const,
              label: "VIP Dashboard Guide",
              desc: "Levels, EXP, rewards and rebate rate.",
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
            <AccordionItem key={q} value={`cs-faq-${index}`}>
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
            This guide explains how to navigate the visible Customer Service and Self Service
            Center options. Topics and instructions may change — always follow what the
            platform shows today.
          </p>
          <p className="mt-4">
            This article is informational and does not establish official affiliation with 6E
            Club. It does not guarantee a particular response time or the resolution of any
            account or transaction issue.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
