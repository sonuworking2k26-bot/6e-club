import { ShieldCheck, Smartphone, UserCheck } from "lucide-react";
import { EXTERNAL_PLAY_URL } from "@/lib/nav";

const HERO_POINTS = [
  { icon: Smartphone, text: "Browser game — no APK needed" },
  { icon: ShieldCheck, text: "Practice coins, never real money" },
  { icon: UserCheck, text: "For adults 18+ only" },
];

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[min(92svh,52rem)] items-end overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 lg:items-center lg:pb-20"
      aria-labelledby="hero-heading"
    >
      <img
        src="/images/homepage/6e-club-homepage-hero.webp"
        alt=""
        width={1920}
        height={820}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/88 to-background/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-background/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
        <p className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
          Independent guide hub · Free to read · 18+
        </p>

        <h1
          id="hero-heading"
          className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]"
        >
          <span className="text-gradient-violet">6E Club</span> Login, Register,
          APK Download <span className="text-gradient-gold">&amp; Games</span>
        </h1>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          6E Club is a colour prediction game that you can access through your mobile
          browser. This guide covers 6E Club login, new account registration, APK
          download, game rules, and the different options available on the platform. You
          can also learn about deposit methods, withdrawal steps, wallet balance, VIP
          benefits, and account settings.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-primary/40 bg-primary/15 px-6 text-sm font-bold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary/25"
          >
            Login
          </a>
          <a
            href={EXTERNAL_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-gold px-6 text-sm font-bold text-gold-foreground shadow-lg shadow-gold/25 transition-transform hover:-translate-y-0.5"
          >
            Register
          </a>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {HERO_POINTS.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-gold" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
