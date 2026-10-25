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
  { id: "before", label: "Before You Sign In" },
  { id: "steps", label: "Login, Step by Step" },
  { id: "devices", label: "Mobile or Desktop" },
  { id: "check-link", label: "How to Check a Login Link" },
  { id: "fails", label: "When the Login Fails" },
  { id: "forgot", label: "Forgot Your Password?" },
  { id: "new-device", label: "Signing In on a New Device" },
  { id: "saving", label: "Saving Login Details Safely" },
  { id: "protect", label: "Protecting Your Account" },
  { id: "next", label: "What to Read Next" },
  { id: "faqs", label: "FAQs" },
] as const;

const STEPS = [
  {
    n: 1,
    title: "Open the Login Website",
    body: "Open a website address that you have independently verified. Check the domain before entering any account details. If the page redirects to an unfamiliar website or displays an unexpected download prompt, stop and verify the destination before continuing.",
  },
  {
    n: 2,
    title: "Find the Sign-In Option",
    body: "Look for the login or sign-in option on the website. Its wording and position may vary depending on the current interface. Use the option provided by the verified website rather than an unconfirmed login link shared by another person.",
  },
  {
    n: 3,
    title: "Enter Your Account Identifier",
    body: "Read the form instructions and enter the identifier associated with your account. This could be a phone number, username, email address, or another option if the actual form supports it. Check for typing errors and follow any formatting instructions on the page.",
  },
  {
    n: 4,
    title: "Enter Your Password or Available Authentication",
    body: "If the form requests a password, enter the password associated with your account. If another authentication method is offered, follow the instructions shown by the verified service. Never share your password or a one-time verification code with someone claiming to help you log in.",
  },
  {
    n: 5,
    title: "Submit the Login Form",
    body: "Use the sign-in control displayed on the page and wait for the website to respond. Avoid clicking repeatedly while the request is processing. If an error appears, read its wording before trying again.",
  },
  {
    n: 6,
    title: "Confirm That You Are Signed In",
    body: "Wait for a clear indication that the sign-in was successful. If the page returns to the login form or displays an error, do not assume you have accessed your account. Follow any verified recovery or support instructions shown by the website.",
  },
] as const;

const FAIL_CASES = [
  {
    title: "“Incorrect details” or similar error",
    body: "Check that you entered the identifier associated with your account and look for typing mistakes or extra spaces. If the password is still rejected, use verified account recovery if available. Avoid repeatedly guessing passwords.",
  },
  {
    title: "The login page will not load",
    body: "Check your internet connection and confirm that the website address is correct. Try refreshing after a short wait or using an updated browser. Stop if the page repeatedly redirects or shows unexpected security warnings.",
  },
  {
    title: "A verification code does not arrive",
    body: "First check whether the actual login process requests a code. Confirm contact information, wait for the stated delivery period, and use resend only on the verified page. Never disclose a received code to another person.",
  },
  {
    title: "The page keeps returning to login",
    body: "An interrupted request, browser-session issue, or temporary service problem may prevent sign-in. Check for an error, refresh, or try another updated browser. Clearing cookies may sign you out of other sites — consider that first.",
  },
  {
    title: "You see an unexpected redirect",
    body: "Do not enter credentials into an unfamiliar destination. Return to the website you intended to visit and verify the link. If you entered a password on a suspicious page, change it through the genuine service.",
  },
] as const;

const FAQS = [
  {
    q: "What is my 6E Club login ID?",
    a: "Your login identifier depends on the account and the options supported by the current login form. Check the instructions on the verified page rather than assuming that a phone number, username, or email address is always required.",
  },
  {
    q: "Can I log in with an email address?",
    a: "Only if the current login form supports email-based sign-in. Review the available fields and instructions before attempting to log in.",
  },
  {
    q: "Does one login work on the app and website?",
    a: "Do not assume that browser and application access share the same account or features without confirmation from the platform. Check the service’s current instructions.",
  },
  {
    q: "Why can I not log in to my account?",
    a: "Possible causes include incorrect credentials, connection problems, browser issues, or a temporary service interruption. Read the displayed error and address the specific issue before trying again.",
  },
  {
    q: "What should I do if I forget my password?",
    a: "Look for the verified account-recovery option on the login page, if available. Follow its instructions and never share recovery codes or passwords with another person.",
  },
  {
    q: "Can I log in using a mobile browser?",
    a: "That depends on the current website and its supported interface. Use an updated browser and verify the website address before entering your credentials.",
  },
  {
    q: "What if I cannot access my registered phone number or email?",
    a: "Check whether the service provides an alternative recovery method. If it does not, consult a verified support channel. Do not use another person’s contact information to bypass account recovery.",
  },
  {
    q: "How can I tell if a login page is genuine?",
    a: "Check the complete domain, avoid unexpected redirects, and review the site’s available privacy and contact information. HTTPS alone does not establish that a website is legitimate.",
  },
] as const;

export const Route = createFileRoute("/6e-club-login")({
  component: LoginPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Login: Sign In Guide & Login Help (2026)",
      description:
        "Learn how to access your 6E Club account, troubleshoot login errors, recover access, and protect your login details on mobile or browser.",
      path: "/6e-club-login",
      ogImage: OG_IMAGES.login,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Login", path: "/6e-club-login" },
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

function LoginPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Login", path: "/6e-club-login" },
        ]}
        kicker="Guide · 2026"
        title="6E Club Login: Sign In on Mobile or Browser"
        intro="Trying to get back into your account? This guide explains how to approach sign-in, what to check when the login page does not work, and how to handle common account-access problems — on a phone or computer."
        bannerSrc="/images/heroes/6e-club-login-hero.webp"
        bannerAlt="6E Club login infographic guide"
        bannerVariant="portrait"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold text-foreground">Ready to sign in?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Open the live login page in a new tab, then follow the steps on this guide.
            </p>
          </div>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25"
          >
            Open 6E Club Login
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
        title="Before You Sign In"
        intro="Before opening a login form, make sure you are visiting the website you intended to use."
      >
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Check the full domain in your browser’s address bar, especially if you arrived
            through an advertisement, social media post, or message.
          </p>
          <p>
            You will need the credentials associated with your existing account. The identifier
            accepted by the login page may vary — check whether the form requests a phone
            number, username, email address, or another supported detail. Do not assume one
            format is mandatory without checking the current instructions.
          </p>
        </div>
        <div className="mt-6">
          <Callout title="New here?">
            If you have not created an account yet, visit the{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-register">
              6E Club Register Guide
            </Link>{" "}
            first.
          </Callout>
        </div>
      </Section>

      <Section
        id="steps"
        title="6E Club Login, Step by Step"
        intro="Follow these steps to approach sign-in safely. Confirm exact field names and authentication options on the current login page."
      >
        <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
          <img
            src="/images/screens/6e-club-login-screen.webp"
            alt="6E Club login screen on mobile"
            width={750}
            height={1500}
            className="mx-auto max-h-[32rem] w-auto object-contain"
            fetchPriority="high"
          />
          <p className="border-t border-border bg-card px-4 py-3 text-center text-xs text-muted-foreground">
            Example login screen layout — always match the fields shown on the live page.
          </p>
        </div>

        <ol className="space-y-5">
          {STEPS.map((step) => (
            <li key={step.n} id={`login-step-${step.n}`} className="scroll-mt-28">
              <article className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex gap-4">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-display text-sm font-bold text-gold"
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold sm:text-xl">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.body}
                    </p>
                    {step.n === 1 ? (
                      <a
                        href={EXTERNAL_PLAY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-gold px-5 text-sm font-bold text-gold-foreground"
                      >
                        Open login page
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="devices"
        title="Logging In on Mobile or Desktop"
        intro="The login experience may look different on a phone, tablet, or computer. The precautions stay the same: use a trustworthy source, check the domain, and enter credentials only on the intended page."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard title="Mobile browser">
            Open the verified website in an updated browser. If the form does not display
            properly, refresh or check your connection. Avoid downloading an unfamiliar app
            just because browser sign-in is slow.
          </InfoCard>
          <InfoCard title="Desktop browser">
            Confirm the website address before entering credentials. On a shared computer,
            avoid saving passwords. Sign out when finished and close the browser session.
          </InfoCard>
          <InfoCard title="Using an application">
            Verify the app source before installing. Check the publisher and permissions. Do
            not assume an app is required for login unless the platform confirms it. See the{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-apk">
              APK guide
            </Link>
            .
          </InfoCard>
        </div>
      </Section>

      <Section id="check-link" title="How to Check a Login Link">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Check the complete domain name before signing in.",
            "Watch for unexpected redirects to unrelated sites.",
            "Review privacy and contact details if you are unsure.",
            "HTTPS helps protect traffic — it does not prove legitimacy alone.",
            "Avoid entering passwords from unexpected chat or ad links.",
            "When unsure, type a verified address and find Login yourself.",
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
          <Callout tone="caution" title="Copycat pages exist">
            A login page can look familiar without belonging to the website you intended. If a
            link arrives unexpectedly, verify where it leads before entering your password.
          </Callout>
        </div>
      </Section>

      <Section
        id="fails"
        title="When the Login Fails"
        intro="Login problems can have several causes. Start with the message shown on the page rather than assuming a specific cause."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {FAIL_CASES.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="forgot" title="Forgot Your Password?">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Look for a password-recovery or account-recovery option on the verified login page,
            if available. Follow the instructions provided by the service — methods vary, so do
            not assume OTP, email link, or phone verification is always supported.
          </p>
          <p>
            Choose a strong, unique password when setting a replacement. Be cautious of
            third-party pages or people who claim they can recover your account if you provide
            your password, verification codes, payment information, or remote access.
          </p>
          <p>
            If the login page does not show a recovery option, consult the service’s verified
            help information rather than guessing a recovery URL.
          </p>
        </div>
      </Section>

      <Section id="new-device" title="Signing In on a New Device">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            When using a new phone, tablet, or computer, check the website address before
            entering your credentials. The service may have additional security checks.
          </p>
          <p>
            If a verification step appears, follow the instructions on the verified page. Never
            share a verification code. On a device you do not own, avoid saving credentials and
            sign out when finished.
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-[#0a0612] lg:max-w-sm">
          <img
            src="/images/screens/6e-club-login-screen.webp"
            alt="Signing in to 6E Club on a phone"
            width={750}
            height={1500}
            loading="lazy"
            className="mx-auto max-h-[24rem] w-auto object-contain"
          />
        </div>
      </Section>

      <Section id="saving" title="Saving Login Details Safely">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="On your own device">
            Consider a reputable password manager and protect the device with a screen lock. Do
            not save credentials on a computer used by other people.
          </InfoCard>
          <InfoCard title="On a shared device">
            Sign out after your session and avoid options that save your password. Closing a
            browser window alone does not always sign you out of a website.
          </InfoCard>
        </div>
      </Section>

      <Section id="protect" title="Protecting Your Account">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Use a unique password">
            Use a strong password you do not reuse elsewhere. A password manager can help.
          </InfoCard>
          <InfoCard title="Keep verification codes private">
            Never share OTPs or recovery codes. Enter them only into the service you intended.
          </InfoCard>
          <InfoCard title="Avoid unverified applications">
            Download apps only from sources you can verify. Be cautious of unknown APKs and
            pop-ups asking you to disable security protections.
          </InfoCard>
          <InfoCard title="Verified support only">
            If you cannot regain access, use a support channel you have independently verified.
            Never give your password or OTP to someone claiming to be support.
          </InfoCard>
        </div>
      </Section>

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            {
              to: "/6e-club-register" as const,
              label: "6E Club Register Guide",
              desc: "For people who have not created an account yet.",
            },
            {
              to: "/6e-club-apk" as const,
              label: "6E Club APK Guide",
              desc: "Checking application sources and download safety.",
            },
            {
              to: "/6e-club-game" as const,
              label: "6E Club Games Guide",
              desc: "Overview of rooms, colours and Big/Small.",
            },
            {
              to: "/6e-club-customer-service" as const,
              label: "Customer Service Guide",
              desc: "Self Service Center for deposits, withdrawals and password help.",
            },
            {
              to: "/responsible-play" as const,
              label: "Account Safety / Responsible Play",
              desc: "Tips for protecting account information.",
            },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-gold/40"
              >
                <p className="font-display font-bold text-foreground">{item.label}</p>
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
            <AccordionItem key={q} value={`login-faq-${index}`}>
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
            This article is an independent informational guide. It does not establish that this
            website is officially affiliated with 6E Club. Login options, account features, and
            recovery procedures may change. Verify current instructions through a trustworthy
            source before entering credentials or sharing personal information.
          </p>
          <p className="mt-4">
            The troubleshooting suggestions are general guidance. Confirm any platform-specific
            steps against the actual login page.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-8 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25"
          >
            Login to 6E Club
          </a>
        </div>
      </Section>
    </PageLayout>
  );
}
