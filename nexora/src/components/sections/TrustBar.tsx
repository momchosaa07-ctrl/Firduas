import { trustPoints } from "@/config/content";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Value strip under the hero. Deliberately no client logos and no statistics —
 * there is nothing real to show yet, and invented proof is worse than none.
 */
export function TrustBar() {
  return (
    <div className="relative border-y border-line bg-surface/30">
      <Container>
        <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <Reveal
              as="li"
              key={point.title}
              delay={i * 70}
              className="py-7 sm:px-6 sm:py-8 sm:first:pl-0 sm:last:pr-0 lg:border-l lg:border-line lg:first:border-l-0 [&:nth-child(-n+2)]:sm:border-b [&:nth-child(-n+2)]:sm:border-line lg:[&:nth-child(-n+2)]:sm:border-b-0"
            >
              <div className="flex items-start gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 8.5 6 12l7.5-8" />
                </svg>
                <div>
                  <h2 className="font-display text-[0.95rem] tracking-tight text-fg">
                    {point.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-fg-muted">
                    {point.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </div>
  );
}
