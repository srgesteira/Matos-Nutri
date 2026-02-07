"use client";

import { motion } from "framer-motion";
import { SERVICES_BULLETS, ATENDIMENTO_PARA } from "@/lib/config";
import { ScrollReveal } from "./ScrollReveal";
import { CTAButton } from "./CTAButton";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, staggerDirection: 1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ServiceCard({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        y: -2,
        rotateX: 1,
        transition: { duration: 0.2 },
      }}
      className="group relative rounded-2xl border border-warm-beige-dark/40 bg-white p-6 shadow-sm transition-shadow hover:border-sage-green/40 hover:shadow-md"
    >
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors group-hover:border-sage-green/30" />
      <div className="relative flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-green/15 text-sage-green">
          ✓
        </span>
        <p className="text-gray-700">{children}</p>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-sage-green md:text-4xl">
              O que está incluso no atendimento
            </h2>
            <p className="text-lg text-gray-600">
              Um acompanhamento completo para você atingir seus objetivos
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            className="mb-16 grid gap-4 sm:grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SERVICES_BULLETS.map((item, i) => (
              <ServiceCard key={i} index={i}>
                {item}
              </ServiceCard>
            ))}
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mb-16 rounded-2xl bg-warm-beige/80 p-8 md:p-12">
            <h3 className="mb-2 text-xl font-bold text-sage-green md:text-2xl">
              Consulta Presencial no Espaço da Dra. Synara
            </h3>
            <p className="mb-6 text-gray-600">
              Duração média: 1h de atendimento completo
            </p>
            <ul className="mb-8 space-y-2">
              {SERVICES_BULLETS.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-green" />
                  {item}
                </li>
              ))}
            </ul>
            <CTAButton>AGENDAR NO WHATSAPP</CTAButton>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="text-center">
            <h3 className="mb-4 text-xl font-bold text-sage-green md:text-2xl">
              Atendimento para
            </h3>
            <p className="text-gray-700">
              {ATENDIMENTO_PARA.join(", ")}
            </p>
            <div className="mt-8">
              <CTAButton variant="secondary">Agendar consulta</CTAButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
