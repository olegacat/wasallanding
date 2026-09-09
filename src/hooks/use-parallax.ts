import { useEffect, useRef, useState } from "react";

/**
 * Light parallax drift: returns a translateY offset (px) driven by scroll
 * position relative to the element. Disabled for prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(strength = 24) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // -1 (below fold) → 1 (above fold)
      const progress = (vh / 2 - (rect.top + rect.height / 2)) / (vh / 2);
      setOffset(Math.max(-1, Math.min(1, progress)) * strength);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return { ref, offset };
}
