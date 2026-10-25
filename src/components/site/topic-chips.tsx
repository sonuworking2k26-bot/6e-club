import { Link } from "@tanstack/react-router";

const TOPICS = [
  { label: "Login", to: "/6e-club-login" as const },
  { label: "Register", to: "/6e-club-register" as const },
  { label: "APK", to: "/" as const, hash: "apk" },
  { label: "Game", to: "/" as const, hash: "game" },
  { label: "Customer Service", to: "/6e-club-customer-service" as const },
  { label: "Deposit", to: "/6e-club-deposit" as const },
  { label: "Withdrawal", to: "/6e-club-withdrawal" as const },
  { label: "Invitation", to: "/6e-club-invitation" as const },
  { label: "VIP", to: "/6e-club-vip" as const },
  { label: "Safety", to: "/responsible-play" as const },
  { label: "FAQ", to: "/faq" as const },
];

export function TopicChips() {
  return (
    <section className="border-y border-border bg-card/50 py-6" aria-labelledby="topics-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="topics-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Popular topics
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2.5">
          {TOPICS.map((topic) => (
            <li key={`${topic.to}-${"hash" in topic ? topic.hash : topic.label}`}>
              <Link
                to={topic.to}
                hash={"hash" in topic ? topic.hash : undefined}
                className="inline-block rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-semibold text-foreground transition-colors hover:border-gold/50 hover:bg-accent"
              >
                {topic.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
