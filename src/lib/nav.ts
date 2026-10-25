/** Shared nav + footer links — only real published routes / homepage anchors. */

/**
 * ═══════════════════════════════════════════════════════════
 * UPDATE EXTERNAL LINK HERE ONLY
 * Change this once → Login, Register, category tiles, guide CTAs
 * and every “Open 6E Club” button update site-wide.
 * ═══════════════════════════════════════════════════════════
 */
export const EXTERNAL_PLAY_URL =
  "https://www.6clubi.com/#/register?invitationCode=466122943641";

/** Aliases — same URL; prefer EXTERNAL_PLAY_URL in new code. */
export const EXTERNAL_LOGIN_URL = EXTERNAL_PLAY_URL;
export const EXTERNAL_REGISTER_URL = EXTERNAL_PLAY_URL;

export type NavLink = {
  label: string;
  to: "/" | `/${string}`;
  hash?: string;
};

export const MAIN_NAV: NavLink[] = [
  { label: "Login", to: "/6e-club-login" },
  { label: "Register", to: "/6e-club-register" },
  { label: "Deposit", to: "/6e-club-deposit" },
  { label: "Withdrawal", to: "/6e-club-withdrawal" },
  { label: "Invitation", to: "/6e-club-invitation" },
  { label: "VIP", to: "/6e-club-vip" },
  { label: "FAQ", to: "/faq" },
  { label: "Support", to: "/6e-club-customer-service" },
];

export const FOOTER_GROUPS: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Guides",
    links: [
      { label: "6E Club Login", to: "/6e-club-login" },
      { label: "6E Club Register", to: "/6e-club-register" },
      { label: "6E Club Game", to: "/", hash: "game" },
      { label: "6E Club APK", to: "/", hash: "apk" },
      { label: "Customer Service", to: "/6e-club-customer-service" },
      { label: "Deposit", to: "/6e-club-deposit" },
      { label: "Withdrawal", to: "/6e-club-withdrawal" },
      { label: "Invitation", to: "/6e-club-invitation" },
      { label: "VIP", to: "/6e-club-vip" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQ", to: "/faq" },
      { label: "Customer Service", to: "/6e-club-customer-service" },
      { label: "Deposit", to: "/6e-club-deposit" },
      { label: "Withdrawal", to: "/6e-club-withdrawal" },
      { label: "Invitation", to: "/6e-club-invitation" },
      { label: "VIP", to: "/6e-club-vip" },
      { label: "Responsible play", to: "/responsible-play" },
      { label: "About", to: "/about" },
      { label: "Contact", to: "/", hash: "contact" },
    ],
  },
  {
    heading: "Policies",
    links: [
      { label: "Privacy policy", to: "/privacy-policy" },
      { label: "Terms of use", to: "/terms" },
    ],
  },
];

/** Default / homepage share image (1200×630). */
export const OG_IMAGE = "https://6e-club.org/images/og/og-home.jpg";

/** Per-page Open Graph images — built from guide heroes / banners. */
export const OG_IMAGES = {
  home: OG_IMAGE,
  login: "https://6e-club.org/images/og/og-login.jpg",
  register: "https://6e-club.org/images/og/og-register.jpg",
  deposit: "https://6e-club.org/images/og/og-deposit.jpg",
  withdrawal: "https://6e-club.org/images/og/og-withdrawal.jpg",
  customerService: "https://6e-club.org/images/og/og-customer-service.jpg",
  invitation: "https://6e-club.org/images/og/og-invitation.jpg",
  vip: "https://6e-club.org/images/og/og-vip.jpg",
  game: "https://6e-club.org/images/og/og-game.jpg",
  apk: "https://6e-club.org/images/og/og-apk.jpg",
  faq: "https://6e-club.org/images/og/og-faq.jpg",
  responsiblePlay: "https://6e-club.org/images/og/og-responsible-play.jpg",
  about: "https://6e-club.org/images/og/og-about.jpg",
  contact: "https://6e-club.org/images/og/og-contact.jpg",
  privacy: "https://6e-club.org/images/og/og-privacy.jpg",
  terms: "https://6e-club.org/images/og/og-terms.jpg",
} as const;
