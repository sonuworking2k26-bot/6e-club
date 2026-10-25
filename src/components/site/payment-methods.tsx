import { Link } from "@tanstack/react-router";

const METHODS = [
  {
    name: "UPI",
    body: "Pay with UPI apps such as PhonePe, Google Pay or Paytm when that option is shown on the deposit screen.",
    image: "/images/payments/6e-club-upi-payment.webp",
    imageAlt: "6E Club UPI payment option",
    accent: "from-emerald-500/25 via-transparent to-gold/10",
    glow: "shadow-emerald-500/20",
  },
  {
    name: "Bank Card",
    body: "Use a registered bank card or bank transfer when the platform lists those methods for your account.",
    image: "/images/payments/6e-club-bank-card-payment.webp",
    imageAlt: "6E Club bank card payment option",
    accent: "from-sky-500/25 via-transparent to-violet-500/15",
    glow: "shadow-sky-500/20",
  },
  {
    name: "USDT",
    body: "Send USDT on the network shown in the deposit order. Always verify the address and network before confirming.",
    image: "/images/payments/6e-club-usdt-payment.webp",
    imageAlt: "6E Club USDT payment option",
    accent: "from-gold/30 via-transparent to-amber-600/15",
    glow: "shadow-gold/25",
  },
] as const;

export function PaymentMethods() {
  return (
    <section
      id="payments"
      className="border-y border-border bg-card/50 py-16 lg:py-24"
      aria-labelledby="payments-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Payments</p>
          <h2
            id="payments-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Available payment methods
          </h2>
          <p className="mt-4 text-muted-foreground">
            The deposit screen commonly shows UPI, bank card and USDT. Exact options can change —
            always check the live form before sending money.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3 md:[perspective:1400px]">
          {METHODS.map(({ name, body, image, imageAlt, accent, glow }, index) => (
            <li
              key={name}
              className="group [transform-style:preserve-3d]"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-br from-card via-background to-secondary/40 shadow-[0_18px_40px_-18px_rgb(0_0_0_/_0.65)] transition-all duration-500 ease-out will-change-transform hover:-translate-y-3 hover:border-gold/50 hover:shadow-[0_28px_55px_-16px_rgb(0_0_0_/_0.75)] md:hover:[transform:translateY(-0.75rem)_rotateY(-8deg)_rotateX(4deg)] ${glow}`}
              >
                {/* depth rim */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
                  aria-hidden="true"
                />
                <div
                  className={`pointer-events-none absolute -right-8 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${accent} blur-2xl transition-opacity duration-500 group-hover:opacity-100 opacity-70`}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-center overflow-hidden px-6 pb-4 pt-10">
                  <div
                    className="absolute inset-x-8 bottom-2 h-10 rounded-[100%] bg-black/50 blur-md transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <img
                    src={image}
                    alt={imageAlt}
                    width={320}
                    height={200}
                    loading="lazy"
                    className="relative z-[1] mx-auto h-28 w-auto max-w-full object-contain drop-shadow-[0_16px_24px_rgb(0_0_0_/_0.55)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-110 group-hover:[transform:translateY(-0.5rem)_scale(1.1)_rotateY(12deg)] sm:h-32"
                  />
                </div>

                <div className="relative flex flex-1 flex-col border-t border-white/5 bg-background/40 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-bold tracking-tight">{name}</h3>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Deposit
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Other methods such as Paytm, PhonePe, UPI QR, ARPay or bank transfer may also appear.{" "}
          <Link
            to="/6e-club-deposit"
            className="font-semibold text-gold underline-offset-2 hover:underline"
          >
            Open the deposit guide
          </Link>{" "}
          for the full steps.
        </p>
      </div>
    </section>
  );
}
