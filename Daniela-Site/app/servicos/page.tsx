import { Metadata } from "next";
import { SERVICES_BULLETS, ATENDIMENTO_PARA } from "@/lib/config";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Consultas nutricionais presenciais e online. Plano alimentar personalizado, bioimpedância, análise de exames. Atendimento para emagrecimento, diabetes e mais.",
  openGraph: {
    title: "Serviços | Daniela Matos Nutricionista",
    description: "Plano alimentar personalizado, bioimpedância, acompanhamento via WhatsApp.",
  },
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <h1 className="mb-4 text-3xl font-bold text-sage-green md:text-4xl">
        Serviços
      </h1>
      <p className="mb-12 text-lg text-gray-600">
        Atendimento completo para você atingir seus objetivos de forma sustentável.
      </p>

      <div className="mb-16 rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-xl font-bold text-sage-green md:text-2xl">
          O que está incluso
        </h2>
        <ul className="space-y-4">
          {SERVICES_BULLETS.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage-green" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16 rounded-2xl bg-warm-beige/80 p-8">
        <h2 className="mb-2 text-xl font-bold text-sage-green md:text-2xl">
          Consulta Presencial no Espaço da Dra. Synara
        </h2>
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
        <a
          href="https://wa.me/5511951731751?text=Olá%20Daniela,%20quero%20agendar%20uma%20consulta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-sage-green px-6 py-3 font-semibold text-white hover:bg-sage-green-dark"
        >
          Agendar no WhatsApp
        </a>
      </div>

      <div className=" rounded-2xl border border-warm-beige-dark/40 p-8">
        <h2 className="mb-4 text-xl font-bold text-sage-green md:text-2xl">
          Atendimento para
        </h2>
        <p className="text-gray-700">{ATENDIMENTO_PARA.join(", ")}</p>
      </div>
    </div>
  );
}
