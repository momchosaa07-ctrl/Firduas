"use client";

import { useState } from "react";
import { projects, portfolioCategories, type PortfolioCategory } from "@/config/portfolio";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PortfolioCard } from "./PortfolioCard";
import { cn } from "@/lib/cn";

type Filter = PortfolioCategory | "All";
const filters: Filter[] = ["All", ...portfolioCategories];

export function Portfolio() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  const anyPlaceholder = visible.some((p) => p.placeholder);

  return (
    <Section id="work" bordered aria-labelledby="work-title">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            titleId="work-title"
            eyebrow="Work"
            title="The kind of work we build."
            description="Websites, brand identity, automated workflows and custom applications — built for businesses that need them to work, not just to look good."
            className="lg:mb-1"
          />

          <Reveal delay={100} className="lg:shrink-0">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="-mx-5 flex w-fit max-w-[calc(100%+2.5rem)] gap-1.5 overflow-x-auto px-5 sm:mx-0 sm:max-w-full sm:rounded-full sm:border sm:border-line sm:bg-surface/50 sm:p-1.5 sm:px-1.5"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={active === filter}
                  onClick={() => setActive(filter)}
                  className={cn(
                    "shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors sm:border-transparent",
                    active === filter
                      ? "border-accent-strong bg-accent-strong text-white"
                      : "border-line text-fg-muted hover:bg-surface-2 hover:text-fg",
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {anyPlaceholder ? (
          <Reveal>
            <p className="mt-10 rounded-xl border border-line bg-surface/40 px-5 py-4 text-[0.85rem] leading-relaxed text-fg-muted">
              <span className="font-medium text-fg">A note on this section.</span>{" "}
              The projects below are illustrative examples of the work we do — not
              client work we are claiming. We would rather show you placeholders
              than invent a portfolio. Real, named projects go here as clients
              agree to be featured.
            </p>
          </Reveal>
        ) : null}

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80} className="h-full">
              <PortfolioCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
