import Link from "next/link";
import type { Service } from "@/config/services";
import { services } from "@/config/services";
import { faqGroups } from "@/config/faq";
import { projects } from "@/config/portfolio";
import { resolveCheckout } from "@/lib/payments";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { PortfolioCard } from "./PortfolioCard";
import { ConsultationCTA } from "./ConsultationCTA";
import { ContactForm } from "./ContactForm";
import { Process } from "./Process";

/**
 * Shared template for the dedicated service landing pages.
 *
 * Everything on the page — copy, price, includes, FAQ, related work — comes
 * from the same data the home page uses, so a new landing page is a data
 * change rather than a new design.
 */
export function ServiceLanding({ service }: { service: Service }) {
  const checkout = resolveCheckout(
    service.product,
    `/?service=${service.id}#contact`,
  );
  const faq = faqGroups.find((group) => group.id === service.id);
  const related = projects.filter((p) => p.services.includes(service.id)).slice(0, 3);
  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 lg:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent_75%)]" />
          <div className="accent-bloom absolute inset-x-0 top-0 h-[480px]" />
        </div>

        <Container className="relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="text-[0.8rem] text-fg-subtle">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span className="text-fg-muted">{service.name}</span>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="grid size-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <ServiceIcon id={service.id} className="size-5.5" />
                </span>
                <h1 className="mt-7 text-h1 text-gradient">{service.name}</h1>
                <p className="mt-5 max-w-xl text-lead text-fg-muted">
                  {service.summary}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Button
                    href={checkout.href}
                    size="lg"
                    withArrow
                    event={checkout.isCheckout ? "checkout_start" : "cta_click"}
                    eventProps={{ location: `landing_${service.id}`, label: service.cta }}
                  >
                    {service.cta}
                  </Button>
                  <Button
                    href="#consultation"
                    variant="secondary"
                    size="lg"
                    event="consultation_click"
                    eventProps={{ location: `landing_${service.id}` }}
                  >
                    Book a Free Consultation
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Price panel */}
            <Reveal delay={160}>
              <div className="rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-display text-4xl leading-none font-medium tracking-tight text-fg">
                    {service.price}
                  </span>
                  <span className="text-sm text-fg-muted">{service.priceNote}</span>
                </div>
                {service.secondaryPrice ? (
                  <p className="mt-2 text-[0.875rem] text-fg-muted">
                    {service.secondaryPrice}
                  </p>
                ) : null}
                {service.priceCaveat ? (
                  <p className="mt-3.5 text-[0.8rem] leading-relaxed text-fg-subtle">
                    {service.priceCaveat}
                  </p>
                ) : null}

                <h2 className="mt-7 border-t border-line pt-7 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
                  What&rsquo;s included
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[0.875rem] text-fg-muted">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="mt-1 size-3.5 shrink-0 text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 8.5 6 12l7.5-8" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Examples */}
      {service.examples ? (
        <Section bordered className="py-16! sm:py-20!" aria-labelledby="examples-title">
          <Container>
            <Reveal>
              <h2 id="examples-title" className="text-h3 text-fg">
                What we build
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {service.examples.map((example, i) => (
                <Reveal
                  as="li"
                  key={example}
                  delay={(i % 4) * 60}
                  className="bg-bg p-5 text-[0.9rem] text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  {example}
                </Reveal>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Process />

      {/* Related work */}
      {related.length > 0 ? (
        <Section bordered aria-labelledby="related-title">
          <Container>
            <SectionHeader
              titleId="related-title"
              eyebrow="Work"
              title={`${service.name} projects`}
              description="Illustrative examples of this kind of work. Real client projects are added here as they are published."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((project, i) => (
                <Reveal key={project.slug} delay={i * 80} className="h-full">
                  <PortfolioCard project={project} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* Service-specific FAQ */}
      {faq ? (
        <Section bordered aria-labelledby="landing-faq-title">
          <Container className="max-w-3xl">
            <SectionHeader
              titleId="landing-faq-title"
              eyebrow="FAQ"
              title={`${service.name} questions`}
              align="center"
            />
            <ul className="mt-12 rounded-2xl border border-line bg-surface/30 px-6 sm:px-8">
              {faq.items.map((item) => (
                <li key={item.question} className="border-b border-line py-6 last:border-b-0">
                  <h3 className="font-display text-[1.02rem] leading-snug tracking-tight text-fg">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-[0.925rem] leading-relaxed text-fg-muted">
                    {item.answer}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ConsultationCTA />

      {/* Other services */}
      <Section bordered className="py-16! sm:py-20!" aria-labelledby="other-title">
        <Container>
          <Reveal>
            <h2 id="other-title" className="text-h3 text-fg">
              Other services
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {others.map((other, i) => (
              <Reveal as="li" key={other.id} delay={i * 70} className="bg-bg">
                <Link
                  href={`/${other.slug}`}
                  className="group flex h-full flex-col p-7 transition-colors hover:bg-surface"
                >
                  <span className="text-accent">
                    <ServiceIcon id={other.id} className="size-5" />
                  </span>
                  <h3 className="mt-5 font-display text-[1.05rem] tracking-tight text-fg">
                    {other.name}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-fg-muted">
                    {other.summary}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 pt-6 text-[0.82rem] font-medium text-fg-muted transition-colors group-hover:text-accent">
                    Learn more
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                    </svg>
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactForm />
    </>
  );
}
