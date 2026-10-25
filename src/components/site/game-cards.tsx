import { Cherry, Dices, Fish, Footprints, Palette, Plane, Puzzle, Spade, Trophy } from "lucide-react";

/**
 * Game-category directory data. These describe common game *genres* found in
 * apps of this type — the site explains the genres, it does not host, link to
 * or integrate any game. Artwork is pure CSS (tile-art placeholder).
 */
export const GAME_CATEGORIES = [
  {
    name: "Colour Prediction",
    icon: Palette,
    tint: "oklch(0.64 0.22 295 / 40%)",
    body: "The genre 6E Club belongs to: a digit is drawn each round and maps to a colour — red, green or violet — plus Big/Small picks. Rounds last seconds and every draw is independent.",
  },
  {
    name: "Lottery",
    icon: Dices,
    tint: "oklch(0.84 0.13 88 / 30%)",
    body: "Number-draw games where a set of digits is picked at random. Outcomes are lottery-style draws: nothing you choose can change which numbers come up.",
  },
  {
    name: "Slots",
    icon: Cherry,
    tint: "oklch(0.62 0.2 25 / 30%)",
    body: "Reel games with themed symbols and random spins. Results land the instant the reels stop, and no spin is influenced by the one before it.",
  },
  {
    name: "Mini Games",
    icon: Puzzle,
    tint: "oklch(0.72 0.24 302 / 35%)",
    body: "Short, simple games built for quick rounds — scratch cards, wheels and instant picks. Each round stands alone, so a win or loss says nothing about the next.",
  },
  {
    name: "Sports",
    icon: Trophy,
    tint: "oklch(0.84 0.13 88 / 30%)",
    body: "Score- and match-themed prediction categories. Real match outcomes depend on teams and form, not patterns — and this site never links to real-money betting.",
  },
  {
    name: "Fishing",
    icon: Fish,
    tint: "oklch(0.64 0.22 295 / 40%)",
    body: "Arcade-style games where you catch fish for points. The prize size usually depends on the fish, and catches are decided by the game's random engine.",
  },
  {
    name: "Casino",
    icon: Spade,
    tint: "oklch(0.62 0.2 25 / 30%)",
    body: "Card and table classics — Andar Bahar style, Dragon Tiger style, roulette-style wheels. On free-play apps these use practice coins with no cash value.",
  },
  {
    name: "Chicken Road",
    icon: Footprints,
    tint: "oklch(0.72 0.24 302 / 35%)",
    body: "A lane-crossing arcade game: step forward for a growing multiplier, but one wrong step ends the run. The temptation is to push one lane further — that is where runs end.",
  },
  {
    name: "Aviator",
    icon: Plane,
    tint: "oklch(0.84 0.13 88 / 30%)",
    body: "A rising-curve game: a multiplier climbs from 1.00x until it randomly 'flies away'. You choose when to stop — waiting longer raises both the reward and the risk of losing the round.",
  },
];
