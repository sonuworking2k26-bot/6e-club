import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    q: "What is 6E Club?",
    a: "6E Club is a colour prediction game that runs in your phone or computer browser. Each round draws a digit from 0 to 9, the digit decides a colour — red, green or violet — and you pick a colour or Big/Small before the timer ends. You play with practice coins, which have no cash value.",
  },
  {
    q: "Is 6E Club free to play?",
    a: "Yes. There is nothing to buy, nothing to deposit and nothing to cash out. New accounts start with practice coins, and if the balance runs low it can simply be reset. The free version is the only version.",
  },
  {
    q: "Do I need to download an APK to play?",
    a: "No. The game runs in your browser, so no APK or app-store download is needed. If you want one-tap access, open your browser menu and choose “Add to Home screen”. Any APK file offered under this name came from an untrusted source — do not install it.",
  },
  {
    q: "How does 6E Club login work?",
    a: "Sign-in uses the username and password you chose at registration. Because the account is stored only in the browser where you created it, login works on that device and browser — it does not sync to other phones or apps.",
  },
  {
    q: "How do I register a 6E Club account?",
    a: "Registration asks for a username (3–20 characters: lowercase letters, numbers and underscore), a password of at least 6 characters, and a tick confirming you are 18 or older. No phone number, email or OTP is requested. New accounts begin with practice coins.",
  },
  {
    q: "Can 6E Club coins be turned into real money?",
    a: "No. Coins cannot be bought, sold, swapped or withdrawn, and no account holds any money. If a person or website promises to convert coins into cash, it is a scam — there is nothing for anyone to pay out.",
  },
  {
    q: "Do gift codes or prediction tricks actually work?",
    a: "No. There are no working gift codes, and no tool or Telegram channel can predict a random digit. Paid tips, “hack” apps and guaranteed-win offers are all scams built around this game's name.",
  },
  {
    q: "Who is 6E Club for, and is it safe?",
    a: "It is for adults 18 and over who want to understand colour prediction games without risking money. Safety comes from what it leaves out: no deposits, no withdrawals, no personal data collection and no downloads. Set a time limit before you play, and stop when rounds stop being fun.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="border-t border-border bg-card/50 py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">FAQ</p>
          <h2 id="faq-heading" className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions people ask about 6E Club
          </h2>
          <p className="mt-4 text-muted-foreground">
            The short version of every guide, in one place.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map(({ q, a }, index) => (
            <AccordionItem key={q} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-display text-base font-semibold hover:text-gold">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
