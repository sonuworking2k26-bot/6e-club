import { createFileRoute } from "@tanstack/react-router";
import { buildSeoHead } from "@/lib/seo";
import { OG_IMAGES } from "@/lib/nav";
import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { HeroFlightPlane } from "@/components/site/hero-flight-plane";
import { TopicChips } from "@/components/site/topic-chips";
import { GameCategories } from "@/components/site/game-categories";
import { AboutSection, GuideCards } from "@/components/site/guides";
import { PaymentMethods } from "@/components/site/payment-methods";
import { FaqSection } from "@/components/site/faq-section";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    buildSeoHead({
      title: "6E Club — Login, Register, Game & APK Help (India)",
      description:
        "Free 6E Club guides for login, register, game rooms and APK questions. Browser tips, lookalike-domain checks and safety habits for India. Adults 18+.",
      path: "/",
      ogImage: OG_IMAGES.home,
    }),
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <HeroFlightPlane />
      <SiteHeader />
      <main id="main">
        <Hero />
        <TopicChips />
        <GameCategories />
        <AboutSection />
        <GuideCards />
        <PaymentMethods />
        <FaqSection />
      </main>
      <SiteFooter />
    </div>
  );
}
