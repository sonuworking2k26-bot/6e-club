import { Link } from "@tanstack/react-router";
import { FOOTER_GROUPS } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-card/50 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="6E Club homepage">
              <img
                src="/images/brand/6e-club-header-logo.webp"
                alt=""
                width={160}
                height={38}
                className="h-8 w-auto"
              />
              <span className="sr-only">6E Club</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Login, register, deposit, withdrawal and account help for 6E Club — plus
              safety tips for adults 18+.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold">
                {group.heading}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={`${link.to}-${link.hash ?? link.label}`}>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <hr className="divider-gold my-10" />

        <p className="text-xs leading-relaxed text-muted-foreground">
          6E Club is an independent information site. It is not affiliated with, endorsed
          by or operated by any game operator or app, and it never asks for payments or
          personal details. Content is for adults 18 and over. Game coins are a free
          practice balance with no cash value, and game results are always random.
        </p>
        <p className="mt-4 text-xs text-muted-foreground">
          © 2026 6E Club. All content is original.
        </p>
      </div>
    </footer>
  );
}
