import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { OG_IMAGES } from "@/lib/nav";
import { Callout, PageHero, PageLayout, Section } from "@/components/site/page-layout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () =>
    buildSeoHead({
      title: "Contact 6E Club Guide Hub",
      description:
        "How to reach the 6e-club.org guide hub, and where to report cyber fraud in India if a lookalike site took your money.",
      path: "/contact",
      ogImage: OG_IMAGES.contact,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ],
    }),
});

function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
        kicker="Contact"
        title="Contact & reporting"
        intro="This guide hub does not run phone support for game passwords. Use the channels below for editorial notes vs fraud emergencies."
        bannerSrc="/images/screens/6e-club-service-center-screen.webp"
        bannerAlt="Service and help illustration"
      />

      <Section title="Editorial contact">
        <Callout title="Inbox">
          For corrections to guides on this site, email{" "}
          <a className="text-gold underline-offset-2 hover:underline" href="mailto:hello@6e-club.org">
            hello@6e-club.org
          </a>
          . We cannot reset passwords for third-party apps.
        </Callout>
      </Section>

      <Section title="Fraud emergencies (India)">
        <p className="text-sm leading-relaxed text-muted-foreground">
          If you sent money to a fake 6E Club / APK / tip seller: call <strong className="text-foreground">1930</strong>,
          file on the National Cyber Crime Reporting Portal, and notify your bank immediately.
        </p>
      </Section>
    </PageLayout>
  );
}
