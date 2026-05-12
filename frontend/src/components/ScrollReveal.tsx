import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

import "./ScrollReveal.css";

export type ScrollRevealVariant = "fade-up" | "fade" | "scale";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Délai avant le début de la transition (ms) */
  delayMs?: number;
  /** Marge du viewport : valeurs négatives en bas = déclenchement plus tôt */
  rootMargin?: string;
  variant?: ScrollRevealVariant;
};

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  rootMargin = "0px 0px -10% 0px",
  variant = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(() => prefersReducedMotion());

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { root: null, rootMargin, threshold: 0.08 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  const style = {
    "--sr-delay": `${delayMs}ms`,
  } as CSSProperties;

  const variantClass =
    variant === "fade" ? "scroll-reveal--fade" : variant === "scale" ? "scroll-reveal--scale" : "scroll-reveal--fade-up";

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${variantClass} ${visible ? "scroll-reveal--visible" : ""} ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
