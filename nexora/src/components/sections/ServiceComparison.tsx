import Link from "next/link";
import { serviceComparison, getService } from "@/config/services";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

/**
 * "Which one do I need?" — written for a business owner who knows the problem
 * but not the product name.
 */
export function ServiceComparison() {
  return (
    <Section className="pt-0!" aria-labelledby="compare-title">
      <Container>
        <div className="rounded-2xl border border-line bg-surface/40 p-7 sm:p-10">
          <Reveal>
            <h2 id="compare-title" className="text-h3 text-fg">
              Not sure which one you need?
            </h2>
            <p className="mt-2.5 max-w-2xl text-[0.95rem] text-fg-muted">
              Start from the problem, not the product. Most businesses begin with
              one of these and add the rest as they grow.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {serviceComparison.map((row, i) => {
              const service = getService(row.serviceId);
              return (
                <Reveal as="li" key={row.serviceId} delay={i * 70} className="bg-bg">
                  <Link
                    href={`/${service.slug}`}
                    className="group flex h-full flex-col p-6 transition-colors hover:bg-surface"
                  >
                    <p className="text-[0.9rem] leading-relaxed text-fg-muted">
                      {row.need}
                    </p>
                    <div className="mt-auto flex items-center gap-2.5 pt-6">
                      <span className="text-accent">
                        <ServiceIcon id={row.serviceId} className="size-4" />
                      </span>
                      <span className="font-display text-lg tracking-tight text-fg">
                        {row.answer}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        className="ml-auto size-3.5 text-fg-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-accent"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                      </svg>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
