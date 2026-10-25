import type { ReactNode } from "react";
import { AlertTriangle, Info } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./breadcrumbs";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

/**
 * Shared shell for every inner 6E Club page: header, content, footer.
 * The page's own route supplies a PageHero plus its content sections.
 */
export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

interface PageHeroProps {
  crumbs: Crumb[];
  kicker: string;
  title: ReactNode;
  intro: string;
  /** ISO date shown as “Reviewed: YYYY-MM-DD” under the intro. */
  reviewed?: string;
  /** Public path under /images/... */
  bannerSrc?: string;
  bannerAlt?: string;
  /**
   * `wide` = landscape banner strip (default).
   * `portrait` = full infographic hero (900×1350) — no side crop.
   */
  bannerVariant?: "wide" | "portrait";
}

/** Top of an inner page: breadcrumbs, optional banner, kicker, H1, intro. */
export function PageHero({
  crumbs,
  kicker,
  title,
  intro,
  reviewed,
  bannerSrc,
  bannerAlt = "6E Club guide banner",
  bannerVariant = "wide",
}: PageHeroProps) {
  const isPortrait = bannerVariant === "portrait";

  return (
    <section className="relative overflow-hidden pb-12 pt-28 sm:pt-32">
      <div className="orb-glow pointer-events-none absolute -left-32 top-8 h-96 w-96" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6">
        <Breadcrumbs crumbs={crumbs} />

        {bannerSrc ? (
          <div
            className={`relative mt-4 overflow-hidden rounded-2xl border border-border ${
              isPortrait ? "mx-auto max-w-md bg-[#0a0612]" : ""
            }`}
          >
            <img
              src={bannerSrc}
              alt={bannerAlt}
              width={isPortrait ? 900 : 1920}
              height={isPortrait ? 1350 : 820}
              className={
                isPortrait
                  ? "mx-auto h-auto w-full object-contain"
                  : "h-28 w-full object-cover sm:h-40"
              }
              fetchPriority="high"
            />
          </div>
        ) : null}

        <p
          className={`${bannerSrc ? "mt-8" : "mt-6"} inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          {kicker}
        </p>
        <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {intro}
        </p>
        {reviewed ? (
          <p className="mt-3 text-xs text-muted-foreground/80">
            <time dateTime={reviewed}>Reviewed: {reviewed}</time>
          </p>
        ) : null}
      </div>
    </section>
  );
}

interface SectionProps {
  title: string;
  id?: string;
  intro?: string;
  children: ReactNode;
}

/** Standard content section: h2 heading, optional intro, card grid or prose. */
export function Section({ title, id, intro, children }: SectionProps) {
  return (
    <section id={id} className="py-10 sm:py-12" aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 id={id ? `${id}-heading` : undefined} className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{intro}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

/** Bordered card for one sub-topic, styled like the homepage guide cards. */
export function InfoCard({ title, icon, children }: InfoCardProps) {
  return (
    <article className="rounded-2xl border border-border bg-card p-6">
      {icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
          {icon}
        </span>
      )}
      <h3 className={`font-display text-lg font-bold ${icon ? "mt-4" : ""}`}>{title}</h3>
      <div className="mt-2.5 space-y-2.5 text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground [&_ul]:mt-1 [&_ul]:space-y-1.5 [&_ul]:list-disc [&_ul]:pl-4">
        {children}
      </div>
    </article>
  );
}

interface CalloutProps {
  tone?: "gold" | "caution";
  title?: string;
  children: ReactNode;
}

/** Highlighted note. "caution" marks scam/risk warnings. */
export function Callout({ tone = "gold", title, children }: CalloutProps) {
  const isCaution = tone === "caution";
  return (
    <div
      className={`flex gap-3.5 rounded-xl border p-5 ${
        isCaution ? "border-destructive/40 bg-destructive/10" : "border-gold/25 bg-gold/5"
      }`}
    >
      {isCaution ? (
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden="true" />
      ) : (
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
      )}
      <div className="text-sm leading-relaxed text-muted-foreground [&_strong]:text-foreground">
        {title && (
          <p className={`font-display text-sm font-bold ${isCaution ? "text-destructive" : "text-gold"}`}>
            {title}
          </p>
        )}
        <div className={title ? "mt-1.5" : ""}>{children}</div>
      </div>
    </div>
  );
}

/** Clearly-marked placeholder for details the site owner must verify. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-gold/40 bg-card/60 p-5 text-sm leading-relaxed text-muted-foreground">
      <p className="font-display text-xs font-bold uppercase tracking-wider text-gold">
        Placeholder — needs verified details
      </p>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

interface Step {
  title: string;
  body: string;
}

/** Numbered how-to list, matching the homepage quick-start style. */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <ol className="space-y-4">
      {steps.map(({ title, body }, index) => (
        <li key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-bold text-gold"
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div>
            <h3 className="font-display text-base font-bold">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
