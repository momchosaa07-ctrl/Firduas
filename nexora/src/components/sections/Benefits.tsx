import { benefits } from "@/config/content";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function Benefits() {
  return (
    <Section id="why" bordered aria-labelledby="why-title">
      <Container>
        <SectionHeader
          titleId="why-title"
          eyebrow="Why us"
          title="Why businesses work with us."
          description="Not the cheapest option, and not trying to be. Here is what you actually get."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal
              key={benefit.title}
              delay={i * 70}
              className={cn(
                "group flex flex-col bg-bg p-8 transition-colors duration-300 hover:bg-surface",
                // The last card fills the trailing gap on 3-up layouts.
                i === benefits.length - 1 && "lg:col-span-1",
              )}
            >
              <span
                aria-hidden="true"
                className="h-px w-8 bg-line-strong transition-all duration-300 group-hover:w-14 group-hover:bg-accent"
              />
              <h3 className="mt-6 font-display text-[1.15rem] tracking-tight text-fg">
                {benefit.title}
              </h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-fg-muted">
                {benefit.description}
              </p>
            </Reveal>
          ))}

          {/* Balances the grid without inventing a sixth claim. */}
          <div className="hidden bg-bg lg:block" aria-hidden="true" />
        </div>
      </Container>
    </Section>
  );
}
