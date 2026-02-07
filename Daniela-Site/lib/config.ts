export const SITE_CONFIG = {
  name: "Daniela Matos",
  title: "Nutricionista Funcional",
  crn: "", // Deixe vazio para não exibir. Ex: "CRN3 33737"
  whatsapp: "+5511951731751",
  whatsappLink: "https://wa.me/5511951731751?text=Olá%20Daniela,%20quero%20agendar%20uma%20consulta",
  instagram: "@danielamatosnutri",
  instagramUrl: "https://www.instagram.com/danielamatosnutri?igsh=dzJpbWN3cXJxMzEw",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" },
] as const;

export const SERVICES_BULLETS = [
  "Plano alimentar personalizado",
  "Indicação de suplementos (se necessário)",
  "Bioimpedância (peso, gordura, músculo, gordura visceral e idade metabólica)",
  "Análise ou solicitação de exames de sangue",
  "Consultoria via WhatsApp por 30 dias após a consulta",
] as const;

export const IMAGES = {
  logo: "/images/logo.png",
  danielaPhoto: "/images/daniela-photo.png",
  banner: "/images/banner.png",
  bannerVertical: "/images/banner-vertical.png",
} as const;

export const ATENDIMENTO_PARA = [
  "Emagrecimento",
  "Ganho de massa muscular",
  "Funcionamento intestinal",
  "Compulsão alimentar",
  "Colesterol alto",
  "Diabetes",
  "e mais",
] as const;
