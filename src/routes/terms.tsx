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

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    buildSeoHead({
      title: "Terms of Use — 6e-club.org",
      description:
        "Terms of use for the independent 6E Club information website at https://6e-club.org: information-only content, adult audience, and liability limits.",
      path: "/terms",
      ogImage: OG_IMAGES.terms,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Terms", path: "/terms" },
      ],
    }),
});

function TermsPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Terms", path: "/terms" },
        ]}
        kicker="Policy"
        title="Terms of use"
        intro="Last updated: 25 October 2026. By using https://6e-club.org you agree to these terms."
      />

      <Section id="acceptance" title="Acceptance">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          If you do not agree with these terms, do not use this website. Continued use after we
          post updates means you accept the revised terms. The latest version will always be
          available on this page.
        </p>
      </Section>

      <Section
        id="information"
        title="Information only"
        intro="This site publishes educational and informational guides about 6E Club-related topics."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Not a guarantee">
            Content is not a guarantee of outcomes, processing times, licensing status, wallet
            credits or affiliation with every site that uses similar branding.
          </InfoCard>
          <InfoCard title="Not official support">
            We do not reset passwords, credit deposits, process withdrawals or operate third-party
            customer service desks.
          </InfoCard>
          <InfoCard title="Screens can change">
            Interface labels, payment methods and limits may change. Always check the live product
            before acting on a guide.
          </InfoCard>
          <InfoCard title="Independent hub">
            Publishing guides about a brand does not mean we own, license or officially represent
            that brand or every lookalike domain.
          </InfoCard>
        </div>
      </Section>

      <Section id="audience" title="Adult audience">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Guides are intended for adults 18 years and older. Do not use this site to help a minor
          access money-related gaming products.
        </p>
      </Section>

      <Section id="conduct" title="Acceptable use">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li>Do not attempt to disrupt, scrape abusively or overload the site</li>
          <li>Do not misrepresent this site as an official operator login or payment portal</li>
          <li>Do not use content to run phishing pages or credential-harvesting clones</li>
          <li>Do not upload malware or attempt unauthorized access to hosting systems</li>
        </ul>
      </Section>

      <Section id="third-parties" title="Third parties and external links">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <p>
            We are not responsible for losses from third-party apps, APKs, tip channels, payment
            providers or lookalike domains. Verify hosts yourself before sharing credentials or
            money.
          </p>
          <p>
            External links (including play or register URLs) are provided for convenience. Their
            availability, terms and practices are outside our control.
          </p>
          <Callout tone="caution" title="Verify before you pay">
            Never send funds or share OTPs based solely on a screenshot, Telegram tip or urgent
            message from an unverified person.
          </Callout>
        </div>
      </Section>

      <Section id="ip" title="Intellectual property">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Original text, layout and site branding on https://6e-club.org are provided for personal,
          non-commercial reading unless we agree otherwise in writing. Do not copy guides wholesale
          onto competing scam hubs. Third-party trademarks mentioned for identification remain with
          their owners.
        </p>
      </Section>

      <Section id="liability" title="Limitation of liability">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          To the fullest extent permitted by law, we are not liable for indirect, incidental or
          consequential damages arising from use of this information site, including losses from
          deposits, withdrawals, APK installs or decisions made after reading a guide. The site is
          provided “as is” without warranties of uninterrupted availability or error-free content.
        </p>
      </Section>

      <Section id="changes" title="Changes to the site or terms">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          We may update guides, remove pages or revise these terms when needed. Material policy
          changes will be reflected by updating the date at the top of this page.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Questions about these terms:{" "}
          <a
            className="text-gold underline-offset-2 hover:underline"
            href="mailto:hello@6e-club.org"
          >
            hello@6e-club.org
          </a>
          . See also{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/privacy-policy">
            Privacy policy
          </Link>
          ,{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/about">
            About
          </Link>{" "}
          and{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/contact">
            Contact
          </Link>
          .
        </p>
      </Section>
    </PageLayout>
  );
}
