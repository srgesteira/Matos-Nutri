import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, IMAGES } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre",
  description: `Conheça ${SITE_CONFIG.name}, nutricionista funcional. Atendimento personalizado para emagrecimento, ganho de massa e mais.`,
  openGraph: {
    title: `Sobre | ${SITE_CONFIG.name}`,
    description: `Conheça ${SITE_CONFIG.name}, nutricionista funcional. Atendimento personalizado.`,
  },
};

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <div className="flex-1">
          <h1 className="mb-6 text-3xl font-bold text-sage-green md:text-4xl">
            Sobre mim
          </h1>
          <div className="prose prose-lg text-gray-700">
            <p>
              Sou <strong>{SITE_CONFIG.name}</strong>, nutricionista funcional{SITE_CONFIG.crn ? ` (${SITE_CONFIG.crn})` : ""},
              com foco em ajudar mulheres a alcançarem seus objetivos de forma sustentável,
              sem dietas restritivas ou radicalismos.
            </p>
            <p>
              Meu trabalho é baseado em um plano alimentar simples e funcional, adaptado à sua
              rotina e preferências. Acredito que a alimentação deve ser prazerosa e que
              pequenas mudanças fazem grande diferença.
            </p>
            <p>
              Ofereço atendimento presencial e online, com acompanhamento via WhatsApp por
              30 dias após cada consulta, para você ter suporte contínuo na sua jornada.
            </p>
          </div>
          <Link
            href="https://wa.me/5511951731751?text=Olá%20Daniela,%20quero%20agendar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-sage-green px-6 py-3 font-semibold text-white hover:bg-sage-green-dark"
          >
            Agendar consulta
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src={IMAGES.danielaPhoto}
            alt={`${SITE_CONFIG.name} - Nutricionista Funcional`}
            width={400}
            height={500}
            className="rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}
