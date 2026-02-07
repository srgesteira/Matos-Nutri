"use client";

import { motion } from "framer-motion";

const blobVariants = {
  animate: {
    x: [0, 30, -20, 0],
    y: [0, -25, 15, 0],
    scale: [1, 1.05, 0.98, 1],
    transition: {
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const blobVariants2 = {
  animate: {
    x: [0, -25, 20, 0],
    y: [0, 20, -15, 0],
    scale: [1, 0.95, 1.08, 1],
    transition: {
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export function OrganicBlobs({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-sage-green/10"
        variants={blobVariants}
        initial="animate"
        animate="animate"
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-soft-pink/15"
        variants={blobVariants2}
        initial="animate"
        animate="animate"
        style={{ filter: "blur(50px)" }}
      />
    </div>
  );
}
