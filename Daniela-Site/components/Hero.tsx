"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, IMAGES } from "@/lib/config";
import { OrganicBlobs } from "./OrganicBlobs";
import { CTAButton } from "./CTAButton";

const headlineWords = "Cansada de tentar emagrecer e não ver resultado?".split(" ");
const subHeadline = "Plano alimentar simples e funcional, sem radicalismos.";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-warm-beige md:min-h-[85vh]">
      <OrganicBlobs className="opacity-80" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 pt-12 pb-16 md:flex-row md:gap-12 md:px-6 md:pt-20">
        <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
          <motion.h1
            className="mb-4 text-3xl font-bold leading-tight text-sage-green md:text-4xl lg:text-5xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.2 },
              },
            }}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
                  },
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mb-6 text-lg text-soft-pink-dark md:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            {subHeadline}
          </motion.p>

          <motion.ul
            className="mb-8 space-y-2 text-left text-gray-700"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1 } },
            }}
          >
            {["Atendimento Online e Presencial", "Resultado sem dietas restritivas"].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-center gap-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-green" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-sage-green"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(139, 154, 123, 0.3)",
                    "0 0 0 8px rgba(139, 154, 123, 0)",
                  ],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              />
              <CTAButton pulse variant="primary" className="relative">
                AGENDAR NO WHATSAPP
              </CTAButton>
            </div>
            <CTAButton href="/servicos" variant="outline">
              Ver serviços
            </CTAButton>
          </motion.div>

          <motion.div
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-sage-green px-4 py-2 font-medium text-sage-green transition-colors hover:bg-sage-green hover:text-white"
            >
              (11) 95173-1751
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex flex-1 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div
            className="relative"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="absolute -inset-4 rounded-full bg-sage-green/20 blur-2xl"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative overflow-hidden rounded-2xl bg-sage-green/20 shadow-xl">
              <Image
                src={IMAGES.danielaPhoto}
                alt={`${SITE_CONFIG.name} - Nutricionista Funcional`}
                width={400}
                height={500}
                priority
                className="relative z-10 h-auto w-full max-w-md object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-4 flex items-center gap-3 md:left-8">
        <Image
          src={IMAGES.logo}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
        />
        <div>
          <p className="font-semibold text-sage-green">{SITE_CONFIG.name}</p>
          <p className="text-sm text-gray-600">
            {SITE_CONFIG.title}{SITE_CONFIG.crn ? ` ${SITE_CONFIG.crn}` : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
