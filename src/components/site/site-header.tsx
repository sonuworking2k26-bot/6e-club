import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { EXTERNAL_PLAY_URL, MAIN_NAV } from "@/lib/nav";

const ctaClassLogin =
  "inline-flex h-9 items-center justify-center rounded-lg border border-primary/40 px-2.5 text-xs font-semibold text-foreground transition-colors hover:bg-primary/15 sm:h-10 sm:px-3.5 sm:text-sm";
const ctaClassRegister =
  "inline-flex h-9 items-center justify-center rounded-lg bg-gold px-2.5 text-xs font-semibold text-gold-foreground transition-colors hover:bg-gold/90 sm:h-10 sm:px-3.5 sm:text-sm";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gold-foreground"
      >
        Skip to main content
      </a>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:px-6">
          <Link
            to="/"
            className="flex min-w-0 shrink items-center gap-2.5"
            aria-label="6E Club homepage"
          >
            <img
              src="/images/brand/6e-club-header-logo.webp"
              alt=""
              width={160}
              height={38}
              className="h-7 w-auto sm:h-8"
            />
            <span className="sr-only">6E Club</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-3.5 xl:gap-5 lg:flex">
            {MAIN_NAV.filter((l) => l.label !== "Login" && l.label !== "Register").map(
              (link) => (
                <Link
                  key={`${link.to}-${link.hash ?? link.label}`}
                  to={link.to}
                  hash={link.hash}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
            <a
              href={EXTERNAL_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassLogin}
            >
              Login
            </a>
            <a
              href={EXTERNAL_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassRegister}
            >
              Register
            </a>
          </nav>

          {/* Always visible Login + Register (mobile + tablet) */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <a
              href={EXTERNAL_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassLogin}
            >
              Login
            </a>
            <a
              href={EXTERNAL_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassRegister}
            >
              Register
            </a>
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-foreground sm:h-10 sm:w-10"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="border-t border-border bg-background px-4 pb-6 pt-3 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {MAIN_NAV.filter((l) => l.label !== "Login" && l.label !== "Register").map(
                (link) => (
                  <li key={`${link.to}-${link.hash ?? link.label}`}>
                    <Link
                      to={link.to}
                      hash={link.hash}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        ) : null}
      </header>
    </>
  );
}
