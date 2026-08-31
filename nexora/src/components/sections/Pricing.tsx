"use client";

import { useEffect, useRef } from "react";
import { pricingPlans, pricingNote } from "@/config/pricing";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";
import { PricingCard } from "./PricingCard";

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  /** Pricing views are the strongest intent signal on the page — track once. */
  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track("pricing_view");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="pricing" bordered aria-labelledby="pricing-title">
      <Container>
        <SectionHeader
          titleId="pricing-title"
          eyebrow="Pricing"
          title="Clear pricing, agreed before anything is built."
          description="No hourly surprises and no quotes that arrive after the work. Fixed prices where the scope is fixed, and an honest starting point where it is not."
          align="center"
        />

        <div
          ref={ref}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-center"
        >
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80} className="h-full">
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[0.82rem] leading-relaxed text-fg-subtle">
            {pricingNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
