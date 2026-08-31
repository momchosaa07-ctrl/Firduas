import { services } from "@/config/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <Section id="services" aria-labelledby="services-title">
      <Container>
        <SectionHeader
          titleId="services-title"
          eyebrow="Services"
          title="Everything Your Business Needs to Go Digital."
          description="From your first website to custom systems and automation, we help businesses build a stronger digital foundation."
        />

        <div className="mt-14 grid gap-5 sm:gap-6 lg:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80} className="flex">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
