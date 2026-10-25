import { Link } from "@tanstack/react-router";
import {
  Crown,
  HeadphonesIcon,
  LogIn,
  Sparkles,
  UserPlus,
  ArrowDownToLine,
  ArrowUpFromLine,
  Share2,
} from "lucide-react";

/** Published guides that have matching phone-screen assets. */
const GUIDES = [
  {
    to: "/6e-club-login" as const,
    icon: LogIn,
    title: "6E Club Login",
    body: "Sign in with the verified login page, fix common login errors, and stay clear of fake credential forms.",
    image: "/images/screens/6e-club-login-screen.webp",
    imageAlt: "6E Club login phone screen",
  },
  {
    to: "/6e-club-register" as const,
    icon: UserPlus,
    title: "6E Club Register",
    body: "Create an account step by step, understand the registration form, and check what details are actually requested.",
    image: "/images/screens/6e-club-registration-screen.webp",
    imageAlt: "6E Club registration phone screen",
  },
  {
    to: "/6e-club-deposit" as const,
    icon: ArrowDownToLine,
    title: "6E Club Deposit",
    body: "Choose a payment method, match the order amount, follow recharge instructions, and check Deposit History.",
    image: "/images/screens/6e-club-deposit-screen.webp",
    imageAlt: "6E Club deposit phone screen",
  },
  {
    to: "/6e-club-withdrawal" as const,
    icon: ArrowUpFromLine,
    title: "6E Club Withdrawal",
    body: "Open Withdraw, pick a method, review limits and payment details, then track the request in Withdrawal History.",
    image: "/images/screens/6e-club-wallet-screen.webp",
    imageAlt: "6E Club wallet phone screen for withdrawals",
  },
  {
    to: "/6e-club-customer-service" as const,
    icon: HeadphonesIcon,
    title: "Customer Service",
    body: "Find the Self Service Center, report deposit or withdrawal problems, and use verified support options only.",
    image: "/images/screens/6e-club-service-center-screen.webp",
    imageAlt: "6E Club customer service phone screen",
  },
  {
    to: "/6e-club-invitation" as const,
    icon: Share2,
    title: "Invitation Code",
    body: "Copy your invite link or QR code, share with friends, and read how commission claims are described on the Invite page.",
    image: "/images/screens/6e-club-invitation-screen.png",
    imageAlt: "6E Club invitation phone screen",
  },
  {
    to: "/6e-club-vip" as const,
    icon: Sparkles,
    title: "VIP Dashboard",
    body: "Check VIP level, EXP progress, level-up and monthly rewards, rebate rate, plus History and Rules.",
    image: "/images/screens/6e-club-vip-dashboard-screen.webp",
    imageAlt: "6E Club VIP dashboard phone screen",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 mx-auto w-full max-w-md lg:order-1">
            <div className="gold-glow absolute inset-0 scale-110" aria-hidden="true" />
            <img
              src="/images/homepage/6e-club-casino-royale-banner.webp"
              alt="6E Club gaming banner — neon gold atmosphere"
              width={1920}
              height={820}
              loading="lazy"
              className="relative w-full rounded-3xl border border-border object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <Crown className="h-4 w-4" aria-hidden="true" /> About the game
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Is <span className="text-gradient-violet">6E Club</span>?
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              6E Club is an online gaming platform featuring colour prediction games and
              other games accessible through its web interface. Users can explore the
              available games, access their accounts, check wallet details, and view
              platform promotions from the main dashboard.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The platform includes options for account registration and login, deposits,
              withdrawals, VIP benefits, and customer support. Available payment methods,
              account requirements, and transaction options may vary depending on the
              account and current platform settings.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              If you&apos;re new to 6E Club, it&apos;s worth understanding the registration
              process, how colour prediction rounds work, and how deposits and withdrawals
              are handled before using the platform. The guides on this website cover these
              topics, along with APK download questions, login problems, account settings,
              and common transaction issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuideCards() {
  return (
    <section id="game" className="py-16 lg:py-24" aria-labelledby="guides-heading">
      <div id="apk" className="scroll-mt-28" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Guides</p>
          <h2
            id="guides-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            6E Club guides with real phone screens
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every published guide below uses the matching interface screen so you can see
            what the page looks like before you open the full walkthrough.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map(({ to, icon: Icon, title, body, image, imageAlt }) => (
            <Link
              key={to + title}
              to={to}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-gold/40"
            >
              <div className="flex min-h-[22rem] items-center justify-center bg-gradient-to-b from-[#1a1228] to-[#0d0818] px-3 py-4 sm:min-h-[24rem]">
                <img
                  src={image}
                  alt={imageAlt}
                  width={375}
                  height={750}
                  loading="eager"
                  decoding="async"
                  className="mx-auto h-[20rem] w-auto max-w-full rounded-xl object-contain shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition duration-300 group-hover:scale-[1.02] sm:h-[22rem]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold group-hover:text-gold">
                  {title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
