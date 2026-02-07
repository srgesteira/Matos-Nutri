"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  icon?: React.ReactNode;
  pulse?: boolean;
}

export function CTAButton({
  children,
  href = SITE_CONFIG.whatsappLink,
  variant = "primary",
  className = "",
  icon,
  pulse = false,
}: CTAButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-full overflow-hidden transition-colors focus:outline-none focus:ring-2 focus:ring-sage-green focus:ring-offset-2";
  const variants = {
    primary: "bg-sage-green text-white hover:bg-sage-green-dark",
    secondary: "bg-soft-pink text-white hover:bg-soft-pink-dark",
    outline: "border-2 border-sage-green text-sage-green hover:bg-sage-green hover:text-white",
  };

  const content = (
    <>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </span>
      <span className="relative flex items-center gap-2">
        {icon}
        {children}
      </span>
    </>
  );

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group"
      animate={
        pulse
          ? {
              boxShadow: [
                "0 4px 14px 0 rgba(139, 154, 123, 0.3)",
                "0 4px 24px 4px rgba(139, 154, 123, 0.5)",
                "0 4px 14px 0 rgba(139, 154, 123, 0.3)",
              ],
            }
          : undefined
      }
      transition={
        pulse
          ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
          : undefined
      }
    >
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </Link>
    </motion.div>
  );
}
