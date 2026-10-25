/**
 * Blog content for the 6E Club guide hub. Articles are original editorial
 * content stored as structured blocks — no CMS, no external calls. The
 * "author" is the site's editorial team; no individual credentials are claimed.
 */

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; tone: "gold" | "caution"; text: string };

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  authorLabel: string;
  /** ISO date strings, shown with date-fns formatting. */
  publishedAt: string;
  modifiedAt: string;
  readingMinutes: number;
  blocks: ArticleBlock[];
}

export type ArticleCategory = "How it works" | "Safety" | "Responsible play";

export const ARTICLE_CATEGORIES: ArticleCategory[] = ["How it works", "Safety", "Responsible play"];

export const ARTICLES: BlogArticle[] = [
  {
    slug: "how-colour-prediction-rounds-work",
    title: "How a colour prediction round actually works",
    excerpt:
      "A digit is drawn, the digit maps to a colour, and your pick either matches or it doesn't. Here is the full anatomy of one round — and why no two rounds are connected.",
    category: "How it works",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-10-05",
    modifiedAt: "2026-10-05",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Colour prediction games look mysterious from the outside — charts, colours, countdown timers — but a single round is one of the simplest games you can describe. Here is everything that happens, in order, every time.",
      },
      { type: "h2", text: "The five parts of one round" },
      {
        type: "ul",
        items: [
          "The countdown: a short timer, usually under a minute, while picks are open.",
          "Your pick: a colour (red, green or violet), or a range like Big or Small.",
          "The draw: the game picks one digit from 0 to 9.",
          "The mapping: each digit belongs to a colour — that mapping is fixed and published in the game's returns table.",
          "The result: if your pick matches the draw, you get the payout shown in that same table; if not, the round is simply over.",
        ],
      },
      {
        type: "p",
        text: "That is the whole mechanic. There is no hidden skill layer: once the pick is made, the outcome is entirely the draw. This is why 'systems' based on watching results do not hold up — the game has no memory.",
      },
      { type: "h2", text: "Why independent draws matter" },
      {
        type: "p",
        text: "Each round's digit is drawn independently. After five greens in a row, the next draw has exactly the same chance of being green, red or violet as the very first round you ever played. Streaks are only visible looking backwards — they never point forwards.",
      },
      {
        type: "callout",
        tone: "gold",
        text: "The returns table is your best reality check. It shows the payout for every outcome, and payouts are always set so the game keeps a small edge over many rounds. That edge is the whole business model — and it is why no trick can beat it.",
      },
      {
        type: "p",
        text: "Understanding one round is enough to understand the game. Everything else people add — signals, charts, 'predictions' — is decoration on top of a single random digit.",
      },
    ],
  },
  {
    slug: "why-login-works-on-one-device",
    title: "Why a 6E Club login only works on one device",
    excerpt:
      "Browser-stored accounts don't sync, and that's by design. What that means when you switch phones, clear your browser, or hear a 'recovery agent' offer.",
    category: "How it works",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-10-08",
    modifiedAt: "2026-10-08",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "One of the most common surprises with browser-based games is that an account made on one phone simply doesn't exist on another. This isn't a bug — it's how browser-stored accounts work.",
      },
      { type: "h2", text: "Where your account actually lives" },
      {
        type: "p",
        text: "When you register, the username and password are saved in that browser's local storage on that device. There is no central account database holding your profile, no email on file and nothing to sync. Your account is, quite literally, stored inside the browser where you created it.",
      },
      { type: "h2", text: "What this means in practice" },
      {
        type: "ul",
        items: [
          "Switching phones or browsers? You'll need to create a new account there — the old one can't travel.",
          "Clearing browser data removes the saved account along with it. If you clear data often, note your username and password somewhere safe first.",
          "There is no password-reset email, because no email was ever collected. Nobody can 'look up' your account, including the game itself.",
        ],
      },
      {
        type: "callout",
        tone: "caution",
        text: "This is exactly what scammers exploit. Anyone who calls, texts or messages you offering to 'recover' a 6E Club account is lying — there is nothing on any server to recover. They are after your money or your details, not your account.",
      },
      { type: "h2", text: "Protecting the account you have" },
      {
        type: "p",
        text: "Since the password is the only lock on your account, make it one you don't use anywhere else. Passwords reused from other apps are the first thing tried in any credential attack, and a game account with a reused password is a weak link in your wider security — even when the account itself holds nothing of value.",
      },
    ],
  },
  {
    slug: "fake-gift-codes-and-telegram-scams",
    title: "How fake gift codes and Telegram 'prediction' scams work",
    excerpt:
      "Paid codes, guaranteed-win channels, coin sellers, account recovery agents — a field guide to the scams that cluster around colour prediction game names.",
    category: "Safety",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-09-21",
    modifiedAt: "2026-10-10",
    readingMinutes: 6,
    blocks: [
      {
        type: "p",
        text: "Popular game names attract a whole economy of scams. None of them need the game's cooperation — they only need the name. Here are the four patterns you'll actually meet, and how each one falls apart under ten seconds of thought.",
      },
      { type: "h2", text: "1. The paid gift code" },
      {
        type: "p",
        text: "Someone sells a 'working code' for a small amount — a few hundred rupees. But ask what the code could even do: on a free game, codes would hand out practice coins with no cash value. Paying real money for something worthless is the scam in one sentence.",
      },
      { type: "h2", text: "2. The guaranteed prediction channel" },
      {
        type: "p",
        text: "A Telegram channel posts 'sure shot' predictions, often with fake screenshots of big wins. The trick is volume: hundreds of members get told red, hundreds get told green. Half of each group sees a 'correct' prediction, and the channel screenshots the winners. The losers are blocked or ignored.",
      },
      { type: "h2", text: "3. The coin seller or 'top-up agent'" },
      {
        type: "p",
        text: "Someone offers to sell coins or 'recharge' your balance. On a game with no deposits and no withdrawals, there is no balance to top up in any real sense — you'd be sending money to a stranger for nothing.",
      },
      { type: "h2", text: "4. The recovery or verification agent" },
      {
        type: "p",
        text: "The most dangerous one: a caller claims to be from 'customer care' and needs your password, an OTP, or a small 'verification payment'. There is no customer care in this ecosystem, no OTP system, and no server-side account. It's pure social engineering.",
      },
      {
        type: "callout",
        tone: "caution",
        text: "The one-line filter: in this game's ecosystem, no legitimate party will ever ask you for money, an OTP or a password. Whoever does — by any story, in any channel — is the scam.",
      },
      {
        type: "p",
        text: "If you've already paid someone, don't chase them with more 'release fees' — that's the classic second stage of the scam. Report the account on the platform you paid through, and in India you can file a cybercrime complaint at cybercrime.gov.in or call the helpline 1930.",
      },
    ],
  },
  {
    slug: "apk-files-vs-browser-play",
    title: "APK files vs browser play: what the difference really is",
    excerpt:
      "Why browser games don't need an APK, what an unknown-source install actually risks, and the two-minute checks before you ever install any APK.",
    category: "Safety",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-09-28",
    modifiedAt: "2026-09-28",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "'Is there an APK?' is the most-asked question around browser games — and the honest answer is usually 'you don't need one'. Understanding why makes you much harder to scam, on this game and every other.",
      },
      { type: "h2", text: "Why no APK is needed" },
      {
        type: "p",
        text: "A browser game runs entirely in the browser: you open the site, the page loads, you play. There is no installation step, which also means no APK file exists that the game's operator needs to distribute. Every 'official APK' offered under such a game's name was packaged by someone else.",
      },
      {
        type: "callout",
        tone: "gold",
        text: "Want one-tap access anyway? Both major mobile browsers have 'Add to Home screen' in their menu. It creates an icon that opens the site directly — the safe equivalent of an app install.",
      },
      { type: "h2", text: "What an APK from a random link actually risks" },
      {
        type: "ul",
        items: [
          "Android asks apps for permissions — contacts, SMS, storage, accessibility. A game should need almost none. A 'game' APK asking for SMS or accessibility rights can read your messages and control your phone.",
          "Modified APKs are the standard delivery method for banking trojans and SMS-stealers, which are built to intercept the OTPs your bank sends.",
          "There is no update channel, no review process and no publisher accountability for a file from a random link or Telegram group.",
        ],
      },
      { type: "h2", text: "If you ever do install an APK, check these first" },
      {
        type: "ul",
        items: [
          "Source: is it the app's official site or a major, vetted store? A Telegram forward is not a source.",
          "Permissions: does the request list make sense for what the app does? 'Game' plus SMS access never does.",
          "Reviews and package name: a fresh upload with no history and a scrambled package name is a red flag on its own.",
        ],
      },
      {
        type: "p",
        text: "For this game specifically, the safest choice is also the simplest: play in the browser, add it to your home screen, and treat every APK offer under the name as the scam it almost certainly is.",
      },
    ],
  },
  {
    slug: "past-results-predict-nothing",
    title: "Past results predict nothing: the gambler's fallacy in colour games",
    excerpt:
      "Five reds in a row feel like green is 'due'. It isn't. A short tour of the fallacy, why charts feed it, and the mindset that keeps play honest.",
    category: "Responsible play",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-10-12",
    modifiedAt: "2026-10-12",
    readingMinutes: 4,
    blocks: [
      {
        type: "p",
        text: "If you've watched a colour game for more than a few rounds, you've felt it: after a string of one colour, the other one starts to feel overdue. That feeling has a name — the gambler's fallacy — and it's the single most expensive misunderstanding in gaming.",
      },
      { type: "h2", text: "The coin-flip version" },
      {
        type: "p",
        text: "Flip a fair coin five times and get five heads. What are the odds on the next flip? Still 50/50. The coin has no memory, no debt to repay, no 'balancing force'. Colour game draws work the same way: the next digit is independent of every digit before it.",
      },
      { type: "h2", text: "Why charts and history screens make it worse" },
      {
        type: "p",
        text: "Result history screens exist because they're engaging — humans are pattern-finding machines, and a wall of reds and greens will always look like a code waiting to be cracked. But the patterns you find are in your head, not in the draw. Every 'trend' has exactly zero predictive value for the next round.",
      },
      {
        type: "callout",
        tone: "gold",
        text: "A quick self-check: if you catch yourself saying the results are 'due', 'hot', or 'following a pattern' — you're reasoning about randomness, not about the game. That's the moment to stand up and take a break.",
      },
      { type: "h2", text: "The honest way to play" },
      {
        type: "ul",
        items: [
          "Treat each round as fresh entertainment, not part of a strategy.",
          "Never raise stakes to chase a loss — in a game with a fixed house edge, that only speeds the losses up.",
          "Decide your time and attention budget before you start, and let the timer decide the rest.",
        ],
      },
      {
        type: "p",
        text: "Randomness isn't a puzzle to solve — it's the reason the game can stay light. The moment it feels like a system to beat is the moment it's stopped being a game.",
      },
    ],
  },
  {
    slug: "setting-time-limits-free-play",
    title: "Setting time limits on free-play games",
    excerpt:
      "No money at stake doesn't mean no cost. How to budget attention on free games, the warning signs of overplay, and where to find free support in India.",
    category: "Responsible play",
    authorLabel: "6E Club editorial team",
    publishedAt: "2026-10-16",
    modifiedAt: "2026-10-16",
    readingMinutes: 5,
    blocks: [
      {
        type: "p",
        text: "Free-play games remove the financial risk, which makes them genuinely safer — but 'free' is not the same as 'free of cost'. The currency a free game actually spends is your time and attention, and those deserve a budget too.",
      },
      { type: "h2", text: "A simple three-line budget" },
      {
        type: "ul",
        items: [
          "A time cap: decide before you open the game how long you'll play, and set a phone timer to match.",
          "A context rule: no rounds during work, study or the last hour before sleep — the points where quick rounds quietly become long ones.",
          "A mood check: play only when it's a break. If you're playing to escape a feeling, the game will take more than it gives.",
        ],
      },
      { type: "h2", text: "Warning signs worth taking seriously" },
      {
        type: "ul",
        items: [
          "Rounds stretch past the timer you set, regularly.",
          "You feel restless or irritable when you can't play.",
          "You're hiding how long you play from people close to you.",
          "The game is the first thing you open and the last thing you close.",
        ],
      },
      {
        type: "callout",
        tone: "gold",
        text: "One sign is enough to act on — no diagnosis required. Free, confidential support exists: Tele-MANAS in India offers counselling in multiple languages on 14416, around the clock.",
      },
      { type: "h2", text: "Making the budget stick" },
      {
        type: "p",
        text: "Willpower at the moment of 'one more round' is the weakest tool available. External structure works better: the phone timer you set in advance, a game time report if your phone tracks screen time, or simply playing in company. The account you're protecting is your own attention — and unlike coins, it doesn't reset.",
      },
    ],
  },
];

export function getArticle(slug: string): BlogArticle | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function relatedArticles(slug: string, limit = 3): BlogArticle[] {
  const current = getArticle(slug);
  if (!current) return [];
  const sameCategory = ARTICLES.filter(
    (article) => article.slug !== slug && article.category === current.category,
  );
  const others = ARTICLES.filter(
    (article) => article.slug !== slug && article.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}

/** Blog listing pagination settings. */
export const ARTICLES_PER_PAGE = 4;

export function pageArticles(category: ArticleCategory | "all", page: number) {
  const filtered =
    category === "all" ? ARTICLES : ARTICLES.filter((article) => article.category === category);
  const pageCount = Math.max(1, Math.ceil(filtered.length / ARTICLES_PER_PAGE));
  const safePage = Math.min(Math.max(1, page), pageCount);
  const start = (safePage - 1) * ARTICLES_PER_PAGE;
  return {
    articles: filtered.slice(start, start + ARTICLES_PER_PAGE),
    total: filtered.length,
    pageCount,
    page: safePage,
  };
}
