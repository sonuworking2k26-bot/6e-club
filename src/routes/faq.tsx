import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { OG_IMAGES } from "@/lib/nav";
import { PageHero, PageLayout, Section } from "@/components/site/page-layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  q: string;
  a: ReactNode;
  /** Plain text for FAQ schema */
  schemaA: string;
};

type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

const GROUPS: FaqGroup[] = [
  {
    id: "login",
    title: "6E Club Login FAQs",
    items: [
      {
        q: "How do I log in to 6E Club?",
        schemaA:
          "Open the login page you have verified, enter the account details requested by the form, and follow the instructions shown on the page. Wait for confirmation that you have signed in successfully.",
        a: (
          <>
            <p>
              Open the login page you have verified, enter the account details requested by the
              form, and follow the instructions shown on the page. Wait for confirmation that you
              have signed in successfully.
            </p>
            <p className="mt-3">
              For detailed instructions, visit the{" "}
              <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-login">
                6E Club Login Guide
              </Link>
              .
            </p>
          </>
        ),
      },
      {
        q: "Why is my 6E Club login not working?",
        schemaA:
          "Check the account details you entered, confirm that the website address is correct, and read the error message. If the password is not accepted, look for an account-recovery option on the verified login page, if available.",
        a: "Check the account details you entered, confirm that the website address is correct, and read the error message. If the password is not accepted, look for an account-recovery option on the verified login page, if available.",
      },
      {
        q: "How do I recover my 6E Club account?",
        schemaA:
          "Start with the account-recovery instructions provided by the verified login page. If you cannot access the contact details associated with your account, check whether the platform offers another recovery method. Never share your password or verification code with another person.",
        a: (
          <>
            <p>
              Start with the account-recovery instructions provided by the verified login page. If
              you cannot access the contact details associated with your account, check whether
              the platform offers another recovery method.
            </p>
            <p className="mt-3">
              Never share your password or verification code with another person.
            </p>
          </>
        ),
      },
      {
        q: "Can I use 6E Club on a mobile browser?",
        schemaA:
          "The available sign-in options depend on the current website interface. Use an updated browser and check the website address before entering your credentials.",
        a: "The available sign-in options depend on the current website interface. Use an updated browser and check the website address before entering your credentials.",
      },
    ],
  },
  {
    id: "register",
    title: "6E Club Register FAQs",
    items: [
      {
        q: "How do I register on 6E Club?",
        schemaA:
          "Open a registration source you have verified, follow the instructions on the form, and enter only the information it requests. Review the applicable terms before submitting the form.",
        a: (
          <>
            <p>
              Open a registration source you have verified, follow the instructions on the form,
              and enter only the information it requests. Review the applicable terms before
              submitting the form.
            </p>
            <p className="mt-3">
              Read the{" "}
              <Link
                className="text-gold underline-offset-2 hover:underline"
                to="/6e-club-register"
              >
                6E Club Register Guide
              </Link>{" "}
              for general registration instructions.
            </p>
          </>
        ),
      },
      {
        q: "What should I do if 6E Club registration fails?",
        schemaA:
          "Check the form for missing fields, typing mistakes or an error message. Follow the instructions displayed on the page rather than guessing at requirements that have not been confirmed.",
        a: "Check the form for missing fields, typing mistakes or an error message. Follow the instructions displayed on the page rather than guessing at requirements that have not been confirmed.",
      },
      {
        q: "What if the registration page says an account already exists?",
        schemaA:
          "Check whether you previously registered using the details you entered. If the platform offers a login or account-recovery option, follow its verified instructions instead of creating duplicate accounts.",
        a: "Check whether you previously registered using the details you entered. If the platform offers a login or account-recovery option, follow its verified instructions instead of creating duplicate accounts.",
      },
    ],
  },
  {
    id: "deposit",
    title: "6E Club Deposit FAQs",
    items: [
      {
        q: "How do I deposit money on 6E Club?",
        schemaA:
          "Open the Deposit page, select a payment method available in your account, choose or enter the amount, and follow the instructions for that transaction. Review the amount and payment destination before confirming.",
        a: (
          <>
            <p>
              Open the Deposit page, select a payment method available in your account, choose or
              enter the amount, and follow the instructions for that transaction. Review the
              amount and payment destination before confirming.
            </p>
            <p className="mt-3">
              See the{" "}
              <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-deposit">
                6E Club Deposit Guide
              </Link>{" "}
              for the full process.
            </p>
          </>
        ),
      },
      {
        q: "Which 6E Club deposit methods are available?",
        schemaA:
          "The deposit interface covered by this guide lists UPI, Paytm, PhonePe, UPI QR Pay, USDT, ARPay and Bank Transfer. The options available to you may change, so check the live deposit page.",
        a: "The deposit interface covered by this guide lists UPI, Paytm, PhonePe, UPI QR Pay, USDT, ARPay and Bank Transfer. The options available to you may change, so check the live deposit page.",
      },
      {
        q: "Why is my 6E Club deposit not received?",
        schemaA:
          "Check the transaction status in your bank or payment application, confirm that the amount matches the deposit order, and review Deposit History. If the payment still has not been credited, open Customer Service and look for the Deposit Not Receive option.",
        a: (
          <>
            Check the transaction status in your bank or payment application, confirm that the
            amount matches the deposit order, and review Deposit History. If the payment still
            has not been credited, open Customer Service and look for the{" "}
            <strong className="text-foreground">Deposit Not Receive</strong> option.
          </>
        ),
      },
      {
        q: "What should I do if my deposit order expires?",
        schemaA:
          "First check whether you already transferred the money. If the payment was completed, keep the transaction confirmation and check the original order status before making another payment.",
        a: "First check whether you already transferred the money. If the payment was completed, keep the transaction confirmation and check the original order status before making another payment.",
      },
      {
        q: "Why is my deposit amount different from the order amount?",
        schemaA:
          "Compare the amount transferred with the amount requested by the deposit order. Keep the transaction reference and use the relevant help option if the amounts do not match.",
        a: "Compare the amount transferred with the amount requested by the deposit order. Keep the transaction reference and use the relevant help option if the amounts do not match.",
      },
      {
        q: "Where can I check my 6E Club deposit history?",
        schemaA:
          "Open the Deposit page and select Deposit History if the option is available in your current interface. Review the amount, date and status against your payment confirmation.",
        a: "Open the Deposit page and select Deposit History if the option is available in your current interface. Review the amount, date and status against your payment confirmation.",
      },
    ],
  },
  {
    id: "withdrawal",
    title: "6E Club Withdrawal FAQs",
    items: [
      {
        q: "How do I withdraw money from 6E Club?",
        schemaA:
          "Open Withdraw, select an available method, enter the amount, review the displayed requirements and payment details, then submit the request. Check Withdrawal History to review the status.",
        a: (
          <>
            <p>
              Open Withdraw, select an available method, enter the amount, review the displayed
              requirements and payment details, then submit the request. Check Withdrawal History
              to review the status.
            </p>
            <p className="mt-3">
              Read the{" "}
              <Link
                className="text-gold underline-offset-2 hover:underline"
                to="/6e-club-withdrawal"
              >
                6E Club Withdrawal Guide
              </Link>{" "}
              for more detailed instructions.
            </p>
          </>
        ),
      },
      {
        q: "Why is my 6E Club withdrawal not working?",
        schemaA:
          "Check whether the amount meets the limits displayed on the withdrawal page and whether any requirements remain incomplete. Review the selected payment method and registered details before trying again.",
        a: "Check whether the amount meets the limits displayed on the withdrawal page and whether any requirements remain incomplete. Review the selected payment method and registered details before trying again.",
      },
      {
        q: "Why is my withdrawal still pending?",
        schemaA:
          "Open Withdrawal History and check the latest status and any instructions provided. Avoid submitting another request while the original transaction remains unresolved.",
        a: "Open Withdrawal History and check the latest status and any instructions provided. Avoid submitting another request while the original transaction remains unresolved.",
      },
      {
        q: "What should I do if my 6E Club withdrawal failed?",
        schemaA:
          "Read the failure message, check the payment details and amount, and review any requirements shown on the page. If the reason remains unclear, select Withdrawal problem in the Self Service Center.",
        a: (
          <>
            Read the failure message, check the payment details and amount, and review any
            requirements shown on the page. If the reason remains unclear, select{" "}
            <strong className="text-foreground">Withdrawal problem</strong> in the Self Service
            Center.
          </>
        ),
      },
      {
        q: "Can I withdraw my full wallet balance?",
        schemaA:
          "Not necessarily. The balance displayed in the wallet may differ from the amount currently eligible for withdrawal. Check the limits and conditions shown on the withdrawal page.",
        a: "Not necessarily. The balance displayed in the wallet may differ from the amount currently eligible for withdrawal. Check the limits and conditions shown on the withdrawal page.",
      },
      {
        q: "What if a withdrawal is completed but the money has not arrived?",
        schemaA:
          "Check the destination account or payment-provider records and compare the transaction details. If the issue remains unresolved, use a verified support channel and provide the relevant transaction reference.",
        a: "Check the destination account or payment-provider records and compare the transaction details. If the issue remains unresolved, use a verified support channel and provide the relevant transaction reference.",
      },
    ],
  },
  {
    id: "wallet",
    title: "6E Club Wallet and Account FAQs",
    items: [
      {
        q: "Where can I find my 6E Club wallet balance?",
        schemaA:
          "The Home screen displays a wallet balance with Deposit and Withdraw shortcuts. You can also select Wallet in the bottom navigation to review the information available there.",
        a: "The Home screen displays a wallet balance with Deposit and Withdraw shortcuts. You can also select Wallet in the bottom navigation to review the information available there.",
      },
      {
        q: "Why is my 6E Club balance not updating?",
        schemaA:
          "Check the wallet information and the status of any recent transaction. If a deposit or withdrawal is still unresolved, review its history before attempting another transaction.",
        a: "Check the wallet information and the status of any recent transaction. If a deposit or withdrawal is still unresolved, review its history before attempting another transaction.",
      },
      {
        q: "Where can I find 6E Club account settings?",
        schemaA:
          "Open Account in the bottom navigation. The account interface includes options such as Settings, Feedback, Announcement, Customer Service, Beginner's Guide and About Us.",
        a: "Open Account in the bottom navigation. The account interface includes options such as Settings, Feedback, Announcement, Customer Service, Beginner's Guide and About Us.",
      },
      {
        q: "How do I change bank details or UPI information?",
        schemaA:
          "Open Customer Service and look for the relevant Self Service Center topic, such as IFSC Modification, Change bank name or the available bank and UPI rebinding options. Read the current instructions before making changes.",
        a: "Open Customer Service and look for the relevant Self Service Center topic, such as IFSC Modification, Change bank name or the available bank and UPI rebinding options. Read the current instructions before making changes.",
      },
    ],
  },
  {
    id: "support",
    title: "6E Club Customer Service FAQs",
    items: [
      {
        q: "Where can I find 6E Club Customer Service?",
        schemaA:
          "Open Account, scroll to Service center, and select Customer Service. The Self Service Center provides help topics for login, deposits, withdrawals, payment details and other issues.",
        a: (
          <>
            <p>
              Open Account, scroll to Service center, and select Customer Service. The Self
              Service Center provides help topics for login, deposits, withdrawals, payment
              details and other issues.
            </p>
            <p className="mt-3">
              See the{" "}
              <Link
                className="text-gold underline-offset-2 hover:underline"
                to="/6e-club-customer-service"
              >
                6E Club Customer Service Guide
              </Link>{" "}
              for a detailed walkthrough.
            </p>
          </>
        ),
      },
      {
        q: "How do I report a missing deposit to 6E Club Customer Service?",
        schemaA:
          "Keep the transaction reference, amount, date and payment status. Open the Self Service Center and select Deposit Not Receive if it matches your problem. Follow the instructions provided there.",
        a: "Keep the transaction reference, amount, date and payment status. Open the Self Service Center and select Deposit Not Receive if it matches your problem. Follow the instructions provided there.",
      },
      {
        q: "How do I report a withdrawal problem?",
        schemaA:
          "Open Customer Service and select Withdrawal problem. Review the instructions and provide the relevant transaction details through the verified help process.",
        a: "Open Customer Service and select Withdrawal problem. Review the instructions and provide the relevant transaction details through the verified help process.",
      },
      {
        q: "What information should I include when reporting an issue?",
        schemaA:
          "Explain the problem clearly and include relevant details such as the approximate time, transaction reference, amount and displayed status. Share only information needed to investigate the issue. Never provide your password, OTP, payment PIN, private keys or wallet recovery phrase.",
        a: (
          <>
            <p>
              Explain the problem clearly and include relevant details such as the approximate
              time, transaction reference, amount and displayed status. Share only information
              needed to investigate the issue.
            </p>
            <p className="mt-3">
              Never provide your password, OTP, payment PIN, private keys or wallet recovery
              phrase.
            </p>
          </>
        ),
      },
    ],
  },
  {
    id: "games",
    title: "6E Club Games and Promotion FAQs",
    items: [
      {
        q: "Where can I find games on 6E Club?",
        schemaA:
          "The Home screen contains category shortcuts labelled Hot Slots, Lottery, Mini games, Slots, PVC, Casino, Sports and Fishing. Select a category to explore the available content.",
        a: "The Home screen contains category shortcuts labelled Hot Slots, Lottery, Mini games, Slots, PVC, Casino, Sports and Fishing. Select a category to explore the available content.",
      },
      {
        q: "What does RTP mean on the game cards?",
        schemaA:
          "RTP means return to player. It describes a theoretical return over time under specified conditions and does not guarantee the outcome of an individual game or session.",
        a: "RTP means return to player. It describes a theoretical return over time under specified conditions and does not guarantee the outcome of an individual game or session.",
      },
      {
        q: "Are 6E Club promotions or displayed rewards guaranteed?",
        schemaA:
          "Do not assume that a promotional headline guarantees a reward. Read the applicable terms, eligibility requirements and restrictions before participating.",
        a: "Do not assume that a promotional headline guarantees a reward. Read the applicable terms, eligibility requirements and restrictions before participating.",
      },
      {
        q: "Where can I find VIP privileges?",
        schemaA:
          "A VIP privileges card appears on the Home screen. Open it to review the current information and terms displayed by the platform.",
        a: (
          <>
            A VIP privileges card appears on the Home screen. Open it to review the current
            information and terms displayed by the platform. For a walkthrough, see the{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-vip">
              VIP Dashboard Guide
            </Link>
            .
          </>
        ),
      },
    ],
  },
  {
    id: "security",
    title: "6E Club Security FAQs",
    items: [
      {
        q: "Is it safe to use a login link sent through a message?",
        schemaA:
          "Be cautious with unexpected links. Check the full domain and verify the destination before entering account details. HTTPS alone does not prove that a website is legitimate.",
        a: "Be cautious with unexpected links. Check the full domain and verify the destination before entering account details. HTTPS alone does not prove that a website is legitimate.",
      },
      {
        q: "Should I share my OTP with Customer Service?",
        schemaA:
          "No. Never disclose your password, OTP, UPI PIN or account-recovery codes to another person.",
        a: "No. Never disclose your password, OTP, UPI PIN or account-recovery codes to another person.",
      },
      {
        q: "What should I do if I entered my password on a suspicious website?",
        schemaA:
          "If you believe your credentials were exposed, change the password through the genuine service if possible. Change it on other websites too if you reused the same password.",
        a: "If you believe your credentials were exposed, change the password through the genuine service if possible. Change it on other websites too if you reused the same password.",
      },
    ],
  },
];

const SCHEMA_FAQS = GROUPS.flatMap((g) => g.items);

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () =>
    buildSeoHead({
      title: "6E Club FAQ: Login, Register, Deposit & Withdrawal Help (2026)",
      description:
        "6E Club FAQ for login problems, registration, deposit not received, withdrawal issues, wallet balance, account settings and customer service.",
      path: "/faq",
      ogImage: OG_IMAGES.faq,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "FAQ", path: "/faq" },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: SCHEMA_FAQS.map(({ q, schemaA }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: schemaA },
          })),
        },
      ],
    }),
});

function FaqPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ]}
        kicker="FAQ · 2026"
        reviewed="2026-10-25"
        title="6E Club FAQ: Login, Deposit, Withdrawal and Account Help"
        intro="Looking for answers about 6E Club login, registration, deposits or withdrawals? This FAQ brings together common account and payment questions, with links to more detailed guides when you need step-by-step help."
      />

      <Section id="intro" title="How to use this FAQ">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Whether you are trying to fix a 6E Club login problem, check a missing deposit,
          understand a withdrawal status or find the Customer Service section, start with the
          topic below that matches your issue.
        </p>
        <nav aria-label="FAQ topics" className="mt-6">
          <ol className="grid gap-2 sm:grid-cols-2">
            {GROUPS.map((group, i) => (
              <li key={group.id}>
                <a
                  href={`#${group.id}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-gold/40 hover:text-foreground"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15 font-display text-xs font-bold text-gold">
                    {i + 1}
                  </span>
                  {group.title.replace("6E Club ", "").replace(" FAQs", "")}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </Section>

      {GROUPS.map((group) => (
        <Section key={group.id} id={group.id} title={group.title}>
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card px-4 sm:px-5"
          >
            {group.items.map(({ q, a }, index) => (
              <AccordionItem key={q} value={`${group.id}-${index}`}>
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
      ))}

      <Section id="guides" title="More 6E Club Guides">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            { to: "/6e-club-login" as const, label: "6E Club Login Guide" },
            { to: "/6e-club-register" as const, label: "6E Club Register Guide" },
            { to: "/6e-club-deposit" as const, label: "6E Club Deposit Guide" },
            { to: "/6e-club-withdrawal" as const, label: "6E Club Withdrawal Guide" },
            { to: "/6e-club-customer-service" as const, label: "Customer Service Guide" },
            { to: "/6e-club-vip" as const, label: "VIP Dashboard Guide" },
            { to: "/6e-club-invitation" as const, label: "Invitation Guide" },
            { to: "/responsible-play" as const, label: "Responsible Play" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block rounded-2xl border border-border bg-card p-5 font-display font-bold transition-colors hover:border-gold/40"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="disclaimer" title="Important Information">
        <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground sm:p-6">
          <p>
            This FAQ is an independent informational resource and does not establish official
            affiliation with 6E Club. Interface options, payment methods and account requirements
            can change. Always check current instructions and applicable terms before sharing
            personal information or making a financial transaction.
          </p>
        </div>
      </Section>
    </PageLayout>
  );
}
