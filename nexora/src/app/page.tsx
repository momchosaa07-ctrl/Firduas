import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { ServiceComparison } from "@/components/sections/ServiceComparison";
import { Pricing } from "@/components/sections/Pricing";
import { Bundles } from "@/components/sections/Bundles";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd, faqJsonLd } from "@/lib/seo";

/**
 * The conversion funnel, in order:
 * understand → services → compare → pricing → bundles → process → proof →
 * why us → about → consultation → contact.
 */
export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Hero />
      <TrustBar />
      <Services />
      <ServiceComparison />
      <Pricing />
      <Bundles />
      <Process />
      <Portfolio />
      <Benefits />
      <Testimonials />
      <About />
      <ConsultationCTA />
      <FAQ />
      <ContactForm />
    </>
  );
}
