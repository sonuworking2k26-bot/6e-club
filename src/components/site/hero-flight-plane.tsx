import { useEffect, useRef } from "react";

/**
 * Aviator-style takeoff flight over the homepage hero.
 *
 * Asset: /images/aviator-style-plane.png
 * Source: OpenGameArt “Red Biplane” by Bert-o-Naught (CC0) — not affiliated with Spribe Aviator.
 *
 * Tune: CYCLE_MS, FLIGHT_MS
 */
const CYCLE_MS = 10000;
const FLIGHT_MS = 7200;

function isMobileViewport() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
}

/** Rising curve like a crash/takeoff multiplier flight */
function samplePath(t: number, mobile: boolean) {
  const ease = 1 - Math.pow(1 - t, 2.15);
  const x = -22 + ease * (mobile ? 135 : 128);
  const y = (mobile ? 92 : 98) - ease * (mobile ? 100 : 112) - Math.sin(ease * Math.PI) * 4;
  const rot = -4 - ease * (mobile ? 32 : 38);
  const scale = (mobile ? 1.05 : 1.2) - ease * (mobile ? 0.35 : 0.48);
  return { x, y, rot, scale };
}

export function HeroFlightPlane() {
  const craftRef = useRef<HTMLImageElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = craftRef.current;
    const trail = trailRef.current;
    if (!el) return;

    const mobile = isMobileViewport();
    el.style.width = mobile ? "clamp(7rem, 42vw, 11rem)" : "clamp(10rem, 30vw, 20rem)";
    if (trail) {
      trail.style.width = el.style.width;
    }

    let raf = 0;
    let start = performance.now() - FLIGHT_MS * 0.1;
    let cancelled = false;
    let running = true;

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running) start = performance.now() - ((performance.now() - start) % CYCLE_MS);
    };
    document.addEventListener("visibilitychange", onVisibility);

    const tick = (now: number) => {
      if (cancelled) return;
      if (!running) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = (now - start) % CYCLE_MS;

      if (elapsed <= FLIGHT_MS) {
        const t = elapsed / FLIGHT_MS;
        const { x, y, rot, scale } = samplePath(t, mobile);
        const opacity = t < 0.04 ? t / 0.04 : t > 0.9 ? (1 - t) / 0.1 : 1;
        const transform = `translate3d(${x}vw, ${y}vh, 0) rotate(${rot}deg) scale(${scale})`;
        el.style.transform = transform;
        el.style.opacity = String(Math.max(0, Math.min(1, opacity)));
        if (trail) {
          trail.style.transform = transform;
          trail.style.opacity = String(Math.max(0, Math.min(0.55, opacity * 0.5)));
        }
      } else {
        el.style.opacity = "0";
        el.style.transform = "translate3d(-22vw, 98vh, 0) rotate(-4deg) scale(1.2)";
        if (trail) trail.style.opacity = "0";
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 45,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* soft gold trail behind the craft */}
      <div
        ref={trailRef}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "clamp(10rem, 30vw, 20rem)",
          height: "4.5rem",
          marginTop: "2.5rem",
          marginLeft: "-18%",
          borderRadius: "999px",
          background:
            "linear-gradient(90deg, transparent, rgb(212 175 55 / 0.15), rgb(244 114 182 / 0.35))",
          filter: "blur(10px)",
          transformOrigin: "70% 50%",
          willChange: "transform, opacity",
          opacity: 0,
        }}
      />
      <img
        ref={craftRef}
        src="/images/aviator-style-plane.png"
        alt=""
        width={1200}
        height={654}
        decoding="async"
        fetchPriority="high"
        draggable={false}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "clamp(10rem, 30vw, 20rem)",
          height: "auto",
          maxWidth: "none",
          display: "block",
          transformOrigin: "60% 55%",
          willChange: "transform, opacity",
          filter: "drop-shadow(0 1.1rem 1.4rem rgb(0 0 0 / 0.5))",
          opacity: 0,
        }}
      />
    </div>
  );
}
