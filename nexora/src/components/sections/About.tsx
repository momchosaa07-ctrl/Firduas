import { about } from "@/config/content";
import { brand } from "@/config/brand";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function About() {
  return (
    <Section id="about" bordered aria-labelledby="about-title">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="mb-4 flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-accent/50" />
                {about.eyebrow}
              </p>
              <h2 id="about-title" className="text-h2 text-gradient">
                {about.headline}
              </h2>
            </Reveal>

            <div className="mt-7 space-y-5">
              {about.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={60 + i * 60}>
                  <p className="text-[0.975rem] leading-relaxed text-fg-muted">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={260}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href="/#contact"
                  withArrow
                  event="cta_click"
                  eventProps={{ location: "about", label: "Get Started" }}
                >
                  Get Started
                </Button>
                <Button
                  href="/#consultation"
                  variant="secondary"
                  event="consultation_click"
                  eventProps={{ location: "about" }}
                >
                  Book a Free Consultation
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:pt-16">
            <Reveal delay={120}>
              <div className="rounded-2xl border border-line bg-surface/40 p-2">
                <ul className="grid gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-2">
                  {about.principles.map((principle) => (
                    <li key={principle.title} className="bg-bg p-6">
                      <h3 className="font-display text-[0.98rem] tracking-tight text-fg">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-[0.85rem] leading-relaxed text-fg-muted">
                        {principle.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={220}>
              {/*
                Honest placeholder rather than invented credentials. Replace
                this panel with real company detail — registration, team,
                location — once it exists.
              */}
              <div className="mt-5 rounded-2xl border border-dashed border-line bg-surface/20 p-6">
                <h3 className="font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
                  Company details
                </h3>
                <p className="mt-3 text-[0.85rem] leading-relaxed text-fg-muted">
                  <span className="text-fg">{brand.name}</span> is a working name.
                  Company registration, team and full business details will be
                  published here once finalised. We would rather leave this blank
                  than fill it with claims we cannot back up.
                </p>
                <dl className="mt-5 grid gap-3 text-[0.85rem] sm:grid-cols-2">
                  <div>
                    <dt className="text-fg-subtle">Based</dt>
                    <dd className="mt-0.5 text-fg-muted">{brand.contact.location}</dd>
                  </div>
                  <div>
                    <dt className="text-fg-subtle">Contact</dt>
                    <dd className="mt-0.5">
                      <a
                        href={`mailto:${brand.contact.email}`}
                        className="text-fg-muted transition-colors hover:text-accent"
                      >
                        {brand.contact.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
