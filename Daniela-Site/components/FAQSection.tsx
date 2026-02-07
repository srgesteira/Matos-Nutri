"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Como funciona o atendimento online?",
    a: "O atendimento online é realizado por videochamada. Você recebe o plano alimentar por e-mail e tem suporte via WhatsApp por 30 dias após a consulta.",
  },
  {
    q: "Preciso fazer exames antes da consulta?",
    a: "Se você já tiver exames recentes, traga para a análise. Caso contrário, posso solicitar os exames necessários durante a consulta.",
  },
  {
    q: "Quanto tempo dura o acompanhamento?",
    a: "O tempo varia conforme seus objetivos. Geralmente fazemos retornos mensais ou a cada 2 meses, dependendo do caso.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-warm-beige/50 py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-sage-green md:text-3xl">
          Perguntas frequentes
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      className="overflow-hidden rounded-xl border border-warm-beige-dark/40 bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-800 hover:bg-warm-beige/30"
      >
        {question}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-sage-green"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="border-t border-warm-beige-dark/20 px-6 py-4 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
