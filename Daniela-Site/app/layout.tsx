import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing" });

export const metadata: Metadata = {
  metadataBase: new URL("https://danielamatosnutri.com.br"),
  title: {
    default: "Daniela Matos | Nutricionista Funcional",
    template: "%s | Daniela Matos Nutricionista",
  },
  description:
    "Plano alimentar simples e funcional, sem radicalismos. Atendimento online e presencial. Emagrecimento, ganho de massa, diabetes e mais.",
  keywords: ["nutricionista", "nutricionista funcional", "emagrecimento", "plano alimentar", "consulta nutricional"],
  authors: [{ name: "Daniela Matos", url: "https://danielamatosnutri.com.br" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Daniela Matos Nutricionista",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className="min-h-screen bg-warm-beige font-sans text-gray-800 antialiased">
        <JsonLd />
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </body>
    </html>
  );
}
