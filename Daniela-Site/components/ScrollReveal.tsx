"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: boolean;
}

export function ScrollReveal({ children, className = "", delay = 0, staggerChildren }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 32, filter: "blur(6px)" }
      }
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      style={{
        transition: typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "opacity 0.2s ease"
          : undefined,
      }}
    >
      {staggerChildren ? (
        <motion.div
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, staggerDirection: 1 },
            },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
}
