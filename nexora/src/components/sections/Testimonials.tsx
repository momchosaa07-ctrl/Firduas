import { testimonials, showTestimonials } from "@/config/portfolio";
import { getService } from "@/config/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Testimonials. Every card is currently a labelled placeholder — no quote here
 * came from a real customer, and the UI says so rather than implying otherwise.
 * Replace the data in src/config/portfolio.ts and flip `placeholder: false`.
 */
export function Testimonials() {
  if (!showTestimonials || testimonials.length === 0) return null;

  const allPlaceholder = testimonials.every((t) => t.placeholder);

  return (
    <Section bordered aria-labelledby="testimonials-title">
      <Container>
        <SectionHeader
          titleId="testimonials-title"
          eyebrow="Client feedback"
          title="What clients say."
          description={
            allPlaceholder
              ? "This section is reserved for real, attributed client quotes. The cards below are placeholders — we will not publish a testimonial we did not receive."
              : undefined
          }
          align="center"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={i} delay={i * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface/40 p-7">
                {testimonial.placeholder ? (
                  <span className="mb-5 w-fit rounded-full border border-dashed border-line-strong px-2.5 py-0.5 font-sans text-[0.62rem] font-medium tracking-[0.12em] text-fg-subtle uppercase">
                    Placeholder
                  </span>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mb-5 size-6 text-accent/50"
                    fill="currentColor"
                  >
                    <path d="M9.5 5C6.5 6.7 5 9.4 5 13v6h6v-6H8.2c.1-2.2 1-3.8 2.6-4.8L9.5 5Zm9 0c-3 1.7-4.5 4.4-4.5 8v6h6v-6h-2.8c.1-2.2 1-3.8 2.6-4.8L18.5 5Z" />
                  </svg>
                )}

                <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-fg-muted">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-7 border-t border-line pt-5">
                  <div className="font-display text-[0.95rem] tracking-tight text-fg">
                    {testimonial.author}
                  </div>
                  <div className="mt-0.5 text-[0.82rem] text-fg-subtle">
                    {testimonial.role} ·{" "}
                    {getService(testimonial.serviceId).shortName}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
