import { processSteps } from "@/config/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <Section id="process" bordered aria-labelledby="process-title">
      <Container>
        <SectionHeader
          titleId="process-title"
          eyebrow="How it works"
          title="Five steps, and you know where you stand at every one."
          description="No black box, no disappearing for six weeks. You see the plan before it is built and the price before it is agreed."
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={i * 70}
              className="group relative flex flex-col bg-bg p-7 transition-colors duration-300 hover:bg-surface"
            >
              <span className="font-display text-3xl leading-none font-medium tracking-tight text-line-strong transition-colors duration-300 group-hover:text-accent">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-[1.05rem] leading-snug tracking-tight text-fg">
                {step.title}
              </h3>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-fg-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
