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

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () =>
    buildSeoHead({
      title: "Privacy Policy — 6e-club.org",
      description:
        "Privacy policy for the 6E Club guide hub at https://6e-club.org: what we collect, what we do not, cookies, and how to contact us.",
      path: "/privacy-policy",
      ogImage: OG_IMAGES.privacy,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Privacy policy", path: "/privacy-policy" },
      ],
    }),
});

function PrivacyPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Privacy policy", path: "/privacy-policy" },
        ]}
        kicker="Policy"
        reviewed="2026-10-25"
        title="Privacy policy"
        intro="Last updated: 25 October 2026. This policy covers the information site at https://6e-club.org."
      />

      <Section id="scope" title="Who this policy covers">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          This privacy policy applies to the independent guide hub published at{" "}
          <strong className="text-foreground">https://6e-club.org</strong>. It does not cover
          third-party 6E Club apps, wallets, payment providers or lookalike domains you may visit
          after leaving this site.
        </p>
      </Section>

      <Section
        id="collect"
        title="What we collect"
        intro="This site does not offer account login and does not ask for passwords, OTPs or payment details."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Hosting and server logs">
            Standard logs (such as IP address, user agent, pages requested and approximate time)
            may be processed by our host for security, abuse prevention and reliability.
          </InfoCard>
          <InfoCard title="Messages you send us">
            If you email{" "}
            <a
              className="text-gold underline-offset-2 hover:underline"
              href="mailto:hello@6e-club.org"
            >
              hello@6e-club.org
            </a>
            , we receive the address and content you choose to include so we can reply.
          </InfoCard>
          <InfoCard title="What we do not collect here">
            We do not run fake login forms, deposit forms, KYC uploads or wallet top-ups on this
            domain.
          </InfoCard>
          <InfoCard title="Analytics">
            If we add analytics later, we will update this page and use consent or notice where
            required. We do not use advertising pixels on this launch build.
          </InfoCard>
        </div>
      </Section>

      <Section id="cookies" title="Cookies">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Essential cookies or similar storage may be set by the hosting or delivery platform so
          the site can load securely. We do not use this launch build to run third-party ad
          tracking.
        </p>
      </Section>

      <Section id="use" title="How information is used">
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li>Operate and secure the website</li>
          <li>Diagnose errors and abuse</li>
          <li>Respond to editorial or privacy emails you send</li>
          <li>Meet legal obligations if a lawful request requires it</li>
        </ul>
      </Section>

      <Section id="share" title="Sharing">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          We do not sell personal information. Processors such as hosting providers may process
          technical data solely to deliver the site. We may disclose information if required by
          applicable law or to protect the security of users and the service.
        </p>
      </Section>

      <Section id="retention" title="Retention">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Server logs are typically retained for a limited period set by the host for security and
          operations. Email correspondence is kept as long as needed to handle your request and
          maintain a basic record of editorial corrections.
        </p>
      </Section>

      <Section id="children" title="Children">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Guides on this site are intended for adults 18 years and older. We do not knowingly
          collect personal information from children.
        </p>
      </Section>

      <Section id="rights" title="Your choices">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Depending on where you live, you may have rights to ask about, correct or delete
          personal information we hold about you (for example, an email you sent). Contact us using
          the address below. We may need to verify the request before acting on it.
        </p>
      </Section>

      <Section id="contact" title="Privacy contact">
        <Callout title="Questions about this policy">
          Email{" "}
          <a
            className="text-gold underline-offset-2 hover:underline"
            href="mailto:hello@6e-club.org"
          >
            hello@6e-club.org
          </a>
          . For site purpose and independence, see the{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/about">
            About
          </Link>{" "}
          page. For terms of use, see{" "}
          <Link className="text-gold underline-offset-2 hover:underline" to="/terms">
            Terms
          </Link>
          .
        </Callout>
      </Section>
    </PageLayout>
  );
}
