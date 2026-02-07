"use client";

import { Variants } from "framer-motion";

const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const motionConfig = (variants: Variants, fallback?: Variants): Variants =>
  reducedMotion && fallback ? fallback : variants;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export const fadeInUpReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: 1,
    },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, x: -8 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: { opacity: 0, x: 8, transition: { duration: 0.25 } },
};

export const floatAnimation = {
  y: [0, -4, 0],
  transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
};

export const pulseGlowAnimation = {
  boxShadow: [
    "0 0 0 0 rgba(139, 154, 123, 0.3)",
    "0 0 20px 4px rgba(139, 154, 123, 0.5)",
    "0 0 0 0 rgba(139, 154, 123, 0.3)",
  ],
  transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
};
