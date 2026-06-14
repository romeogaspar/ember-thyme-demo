import { useEffect, useRef } from "react";

/**
 * Adds .is-visible to an element when it enters the viewport.
 * Pair with the .reveal class in Home.css for a fade-up effect.
 * Respects prefers-reduced-motion (CSS side disables the transform).
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}