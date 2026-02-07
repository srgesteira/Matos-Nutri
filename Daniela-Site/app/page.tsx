import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
