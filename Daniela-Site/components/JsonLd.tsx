import { SITE_CONFIG } from "@/lib/config";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://danielamatosnutri.com.br/#person",
        name: SITE_CONFIG.name,
        jobTitle: SITE_CONFIG.title,
        description: "Nutricionista Funcional - Plano alimentar personalizado, emagrecimento, ganho de massa muscular.",
        image: "https://danielamatosnutri.com.br/images/daniela-photo.jpg",
        url: "https://danielamatosnutri.com.br",
        sameAs: [SITE_CONFIG.instagramUrl],
        telephone: SITE_CONFIG.whatsapp.replace(/\D/g, ""),
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://danielamatosnutri.com.br/#business",
        name: `${SITE_CONFIG.name} - ${SITE_CONFIG.title}`,
        description: "Consultas nutricionais presenciais e online. Plano alimentar personalizado, bioimpedância, análise de exames.",
        image: "https://danielamatosnutri.com.br/images/logo.png",
        url: "https://danielamatosnutri.com.br",
        telephone: SITE_CONFIG.whatsapp.replace(/\D/g, ""),
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
          addressRegion: "SP",
        },
        priceRange: "$$",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
