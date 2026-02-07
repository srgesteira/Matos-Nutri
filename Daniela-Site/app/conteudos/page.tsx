import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conteúdos",
  description:
    "Conteúdos sobre nutrição, alimentação saudável e dicas da Daniela Matos.",
  openGraph: {
    title: "Conteúdos | Daniela Matos Nutricionista",
  },
};

export default function ConteudosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
      <h1 className="mb-4 text-3xl font-bold text-sage-green md:text-4xl">
        Conteúdos
      </h1>
      <p className="mb-12 text-lg text-gray-600">
        Em breve, artigos e dicas sobre nutrição e bem-estar.
      </p>
      <div className="rounded-2xl bg-warm-beige/50 p-12 text-center">
        <p className="text-gray-600">
          Acompanhe o Instagram{" "}
          <a
            href="https://instagram.com/danielamatosnutri"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sage-green hover:underline"
          >
            @danielamatosnutri
          </a>{" "}
          para conteúdos sobre nutrição.
        </p>
      </div>
    </div>
  );
}
