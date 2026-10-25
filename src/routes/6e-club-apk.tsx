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

export const Route = createFileRoute("/6e-club-apk")({
  component: ApkPage,
  head: () =>
    buildSeoHead({
      title: "6E Club APK Download — Home Screen vs Sideload",
      description:
        "6E Club APK download guide: prefer browser and Add to Home screen, and check risks before installing any sideloaded file.",
      path: "/6e-club-apk",
      ogImage: OG_IMAGES.apk,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "APK", path: "/6e-club-apk" },
      ],
    }),
});

function ApkPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[
          { name: "Home", path: "/" },
          { name: "APK", path: "/6e-club-apk" },
        ]}
        kicker="6E Club APK · Guide"
        title="6E Club APK download — safer options first"
        intro="Most people searching “6E Club APK” want one-tap phone access. Start with the browser and a home-screen shortcut before trusting any file from chat."
        bannerSrc="/images/homepage/6e-club-casino-gaming-banner.webp"
        bannerAlt="6E Club mobile access guide banner"
      />

      <Section title="Open in browser (recommended)">
        <a
          href={EXTERNAL_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground"
        >
          Open 6E Club on phone
        </a>
        <div className="mt-6">
          <Callout tone="caution" title="We do not host APK files">
            This website does not offer a direct APK download. Files shared on Telegram or
            file hosts under the 6E Club name should be treated as untrusted until you
            verify the publisher yourself.
          </Callout>
        </div>
      </Section>

      <Section title="Add to Home screen instead">
        <StepList
          steps={[
            {
              title: "Open 6E Club in Chrome or Safari",
              body: "Use the button above so you start from the intended page.",
            },
            {
              title: "Add to Home screen / Install",
              body: "Android Chrome: menu → Add to Home screen. iPhone Safari: Share → Add to Home Screen.",
            },
            {
              title: "Open from the new icon",
              body: "You get app-like access without enabling “install unknown apps”.",
            },
          ]}
        />
      </Section>

      <Section title="If you still consider an APK">
        <div className="grid gap-4 sm:grid-cols-2">
          <InfoCard title="Permission red flags">
            SMS, call logs, or accessibility takeover for a simple colour game are excessive.
          </InfoCard>
          <InfoCard title="Money unlock inside the APK">
            If the first screen demands UPI recharge to continue, stop and read{" "}
            <Link className="text-gold underline-offset-2 hover:underline" to="/responsible-play">
              responsible play
            </Link>
            .
          </InfoCard>
        </div>
      </Section>
    </PageLayout>
  );
}
