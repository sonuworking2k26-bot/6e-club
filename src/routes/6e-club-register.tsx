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
  { id: "before", label: "Before You Register" },
  { id: "steps", label: "Register, Step by Step" },
  { id: "info-needed", label: "What Information Do You Need?" },
  { id: "devices", label: "Mobile or Desktop" },
  { id: "trust", label: "Trustworthy Registration Page" },
  { id: "fails", label: "When Registration Fails" },
  { id: "existing", label: "Already Have an Account" },
  { id: "safe", label: "Keeping Your Account Safe" },
  { id: "next", label: "What to Read Next" },
  { id: "faqs", label: "FAQs" },
] as const;

/** One unique image per step — no repeated screenshots. */
const STEPS = [
  {
    n: 1,
    title: "Open the Registration Website",
    body: "Open the website address you have independently verified. Check the domain carefully before entering personal information, especially if you arrived through an advertisement, social media post, or message. If the address redirects to an unfamiliar domain or displays unexpected download prompts, stop and verify the destination first. Then look for the Register / Sign up option on that page — use the control on the verified site, not an unconfirmed link from a chat group.",
    image: "/images/guides/6e-club-register-step-1.webp",
  },
  {
    n: 2,
    title: "Find Register and Read the Form",
    body: "Find the registration option and review every field before typing. Check which details are required and whether the page explains formatting or verification. Do not assume that a particular mobile number format, email address, referral code, or identity document is mandatory unless the actual form confirms it.",
    image: "/images/guides/6e-club-register-step-2.webp",
  },
  {
    n: 3,
    title: "Enter Details and Complete Verification",
    body: "Fill in only the required fields with information that belongs to you. Check for typing errors. If a field shows an error, read the message and fix that field instead of submitting repeatedly. If the page offers email, phone, or OTP verification, follow its on-screen instructions. Never share a verification code with anyone claiming they can register for you.",
    image: "/images/guides/6e-club-register-step-3-verify.webp",
  },
  {
    n: 4,
    title: "Review, Submit, and Wait for Confirmation",
    body: "Review everything you entered, read the terms, then submit once using the button on the page. Wait for the response — do not click repeatedly. If an error appears, note the message. A refreshed page alone does not always mean success; look for a clear confirmation before you assume the account was created.",
    image: "/images/guides/6e-club-register-step-4-complete.webp",
  },
  {
    n: 5,
    title: "Sign In After Registration",
    body: "When registration succeeds, you may be taken to login or asked to sign in next time. Use the same username and password on the verified login page. Already registered? Open the login guide instead of creating another account.",
    image: "/images/guides/6e-club-login-step-5.webp",
  },
] as const;

const FAIL_CASES = [
  {
    title: "The registration page will not open",
    body: "Check the website address and your internet connection. Try again after a short wait or use an updated browser. If the page repeatedly redirects or shows unexpected security warnings, stop and verify the source.",
  },
  {
    title: "The verification code does not arrive",
    body: "Confirm whether the process actually requested a code. Check that your contact information is correct, wait for the delivery period shown on the page, and never share any received code with another person.",
  },
  {
    title: "Invalid information error",
    body: "Read the exact error message and check the field it identifies. Look for spelling mistakes, extra spaces, or formatting instructions beside the field.",
  },
  {
    title: "Submission fails",
    body: "Check for an error message or interrupted connection. Wait for the response before trying again — repeated clicks can create duplicate attempts if the first request already succeeded.",
  },
  {
    title: "Website says an account already exists",
    body: "You may have registered earlier. Use the verified login or recovery option instead of creating a duplicate with someone else’s details.",
  },
  {
    title: "Redirected to an unexpected page",
    body: "Do not enter your password or OTP into an unfamiliar destination. Return to the verified website. If you already entered sensitive information on a suspicious page, change that password.",
  },
] as const;

const FAQS = [
  {
    q: "How do I register on 6E Club?",
    a: "Start by verifying the website address, finding the registration option, and reading the form instructions. Enter only the required information, complete any verification steps offered by the platform, and wait for confirmation.",
  },
  {
    q: "What information is required to register?",
    a: "The required information depends on the current registration form. Check its mandatory fields and instructions instead of assuming that a specific phone number, email address, referral code, or identity document is required.",
  },
  {
    q: "Do I need an OTP to register?",
    a: "That depends on the actual registration process. Complete OTP verification only if the verified page requests it. Never share a received code with another person.",
  },
  {
    q: "Why is my registration failing?",
    a: "Possible causes include incorrect form entries, connection problems, browser issues, or a temporary service interruption. Read the error message and address the specific issue before submitting again.",
  },
  {
    q: "Can I register using a mobile phone?",
    a: "That depends on the current website and its supported interface. Open the verified source in an updated mobile browser and follow the instructions shown on the page.",
  },
  {
    q: "What should I do if I already have an account?",
    a: "Use the verified login or account-recovery process rather than creating a duplicate account. Follow the platform’s instructions if you cannot access your existing account.",
  },
  {
    q: "How can I tell whether a registration link is genuine?",
    a: "Check the complete domain name, watch for unexpected redirects, and review the site’s available terms and privacy information. HTTPS alone does not prove that a website is legitimate.",
  },
  {
    q: "Is 6E Club registration free?",
    a: "Check the current registration page and applicable terms for any disclosed charges or conditions. Do not assume that registration is free or paid without verified information.",
  },
] as const;

export const Route = createFileRoute("/6e-club-register")({
  component: RegisterPage,
  head: () =>
    buildSeoHead({
      title: "6E Club Register: Step-by-Step Account Creation Guide (2026)",
      description:
        "Create a 6E Club account step by step. Check the registration page, enter required details safely, fix common sign-up errors, and protect your new account.",
      path: "/6e-club-register",
      ogImage: OG_IMAGES.register,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Register", path: "/6e-club-register" },
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

function RegisterPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Register", path: "/6e-club-register" },
        ]}
        kicker="Guide · 2026"
        title="6E Club Register: Step-by-Step Account Creation Guide"
        intro="Creating a new account should not be complicated, but it helps to know what to check before you start. This guide walks through registration, common sign-up problems, and important checks before sharing your information."
        bannerSrc="/images/heroes/6e-club-register-hero.webp"
        bannerAlt="6E Club registration infographic guide"
        bannerVariant="portrait"
      />

      {/* CTA strip */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-primary/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-display text-lg font-bold text-foreground">Ready to create an account?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Open the live register page in a new tab, then follow the steps on this guide.
            </p>
          </div>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25"
          >
            Open 6E Club Register
          </a>
        </div>
      </div>

      {/* TOC */}
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
        title="Before You Register"
        intro="Before opening a registration form, check that you are using the website you intended to visit."
      >
        <div className="prose-site space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            Similar-looking domains, copied page designs, and links shared through unfamiliar
            messages can make it difficult to identify the correct source.
          </p>
          <p>
            Read the available terms and privacy information before submitting personal details.
            Check what information the form requests, which fields are mandatory, and whether
            any conditions apply to creating an account.
          </p>
          <p>
            You should also have access to the contact details you choose to provide, if the
            form requests them. If the website asks for a verification code, enter it only into
            the expected registration flow. Never share passwords or one-time codes with another
            person.
          </p>
        </div>
        <div className="mt-6">
          <Callout title="Already have an account?">
            Visit the{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/6e-club-login">
              6E Club login guide
            </Link>{" "}
            instead of creating another account unnecessarily.
          </Callout>
        </div>
      </Section>

      <Section
        id="steps"
        title="6E Club Register, Step by Step"
        intro="The following steps explain the general registration workflow. Always check the exact form and requirements on the current, verified website."
      >
        <ol className="space-y-8">
          {STEPS.map((step) => (
            <li key={step.n} id={`step-${step.n}`} className="scroll-mt-28">
              <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_0_0_1px_transparent] transition hover:border-gold/30">
                <div className="relative border-b border-border bg-[#0a0612]">
                  <img
                    src={step.image}
                    alt={`Step ${step.n}: ${step.title}`}
                    width={1600}
                    height={900}
                    loading={step.n <= 2 ? "eager" : "lazy"}
                    className="aspect-[16/9] w-full object-contain object-center"
                  />
                  <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-gold/40 bg-background/90 px-3 py-1 font-display text-xs font-bold text-gold backdrop-blur-sm">
                    Step {step.n} of 5
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {step.body}
                  </p>
                  {step.n === 1 ? (
                    <a
                      href={EXTERNAL_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex h-11 items-center justify-center rounded-xl bg-gold px-5 text-sm font-bold text-gold-foreground"
                    >
                      Open register page
                    </a>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        id="info-needed"
        title="What Information Do You Need?"
        intro="There is no single set of registration fields that applies to every online service. The actual form determines what is required."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Required fields">
            Identify which fields the form marks as mandatory before you submit.
          </InfoCard>
          <InfoCard title="Contact information">
            Make sure any requested email address or phone number is accurate and yours.
          </InfoCard>
          <InfoCard title="Password requirements">
            Follow the displayed rules and choose a unique password you have not used elsewhere.
          </InfoCard>
          <InfoCard title="Verification & terms">
            Complete verification only when offered, and read the terms you are accepting.
          </InfoCard>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          Avoid sharing extra personal information simply because an unofficial guide or another
          user suggests it.
        </p>
      </Section>

      <Section
        id="devices"
        title="Registration on Mobile or Desktop"
        intro="The registration experience may look different on a phone, tablet, or computer."
      >
        <div className="grid gap-5 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            <p>
              A mobile page may arrange fields vertically, while a desktop page may use a wider
              layout. Regardless of the device, check the website address before entering
              information and read the form’s instructions carefully.
            </p>
            <p>
              If the page does not display correctly, try an updated browser or check your
              connection. Avoid installing an APK just to complete registration unless you have
              independently verified that the application is genuine and necessary. Do not
              disable your device’s security protections to access a registration page.
            </p>
            <Link
              to="/6e-club-apk"
              className="inline-flex text-sm font-semibold text-gold underline-offset-2 hover:underline"
            >
              Read the APK safety guide →
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0612]">
            <img
              src="/images/screens/6e-club-registration-screen.webp"
              alt="6E Club registration on a mobile screen"
              width={750}
              height={1500}
              loading="lazy"
              className="mx-auto max-h-[28rem] w-auto object-contain"
            />
          </div>
        </div>
      </Section>

      <Section id="trust" title="Finding a Trustworthy Registration Page">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Check the complete domain name in the address bar.",
            "Be cautious of unexpected redirects to unrelated domains.",
            "Review privacy policy, terms, and contact information.",
            "Avoid downloads offered through suspicious pop-ups.",
            "Do not trust a page solely because colours or logos look familiar.",
            "HTTPS helps protect traffic, but does not prove legitimacy alone.",
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
          <Callout tone="caution" title="If you cannot verify the source">
            Do not submit your information. Return later with a bookmark you created yourself.
          </Callout>
        </div>
      </Section>

      <Section
        id="fails"
        title="When Registration Fails"
        intro="A failed registration does not always mean your details are incorrect. The issue could relate to the form, browser, connection, or a temporary service problem."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {FAIL_CASES.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              {item.body}
            </InfoCard>
          ))}
        </div>
      </Section>

      <Section id="existing" title="What to Do If You Already Have an Account">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            If you have previously registered, use the platform’s verified login or
            account-recovery process instead of starting from scratch.
          </p>
          <p>
            If you cannot remember your password, look for the recovery instructions provided by
            the actual service. Do not rely on third-party pages that request your password or
            verification codes.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/6e-club-login"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-primary/40 px-5 text-sm font-bold text-foreground"
          >
            Login guide
          </Link>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-gold px-5 text-sm font-bold text-gold-foreground"
          >
            Open Login / Register
          </a>
        </div>
      </Section>

      <Section id="safe" title="Keeping Your New Account Safe">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Use a unique password">
            Use a strong password you have not reused elsewhere. A password manager helps store
            unique credentials.
          </InfoCard>
          <InfoCard title="Protect verification codes">
            Never share OTPs, recovery codes, or passwords. Only enter a code into the service
            you intended to access.
          </InfoCard>
          <InfoCard title="Be careful with applications">
            Verify any APK source before downloading. Review permissions and skip files from
            pop-ups or unsolicited messages.
          </InfoCard>
          <InfoCard title="Verified support only">
            Be cautious of anyone requesting passwords, OTPs, payment details, or remote access
            to your device.
          </InfoCard>
        </div>
      </Section>

      <Section id="next" title="What to Read Next">
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            { to: "/6e-club-login" as const, label: "6E Club Login Guide", desc: "Sign-in help if you already have an account." },
            { to: "/6e-club-invitation" as const, label: "Invitation Guide", desc: "Invite friends, link, QR and commission." },
            { to: "/6e-club-deposit" as const, label: "Deposit Guide", desc: "How to add money after registering." },
            { to: "/6e-club-customer-service" as const, label: "Customer Service Guide", desc: "Self Service Center help topics." },
            { to: "/responsible-play" as const, label: "Account Safety / Responsible Play", desc: "Passwords, limits and safer habits." },
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
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-4 sm:px-5">
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`reg-faq-${index}`}>
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
            website is officially affiliated with 6E Club. Platform procedures, website
            addresses, and requirements may change, so verify current information before
            submitting personal details, downloading software, or making a payment.
          </p>
          <p className="mt-4">
            The instructions describe a general online registration workflow. Any
            platform-specific requirements should be confirmed against the actual registration
            page.
          </p>
        </div>
        <div className="mt-8 text-center">
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-8 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25"
          >
            Register on 6E Club
          </a>
        </div>
      </Section>
    </PageLayout>
  );
}
