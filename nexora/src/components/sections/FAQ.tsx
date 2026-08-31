"use client";

import { useId, useState } from "react";
import { faqGroups } from "@/config/faq";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Accordion built on <button> + a controlled region rather than <details>, so
 * the open/close height can animate. Keyboard behaviour is the native button
 * behaviour: Tab to move, Enter/Space to toggle. `aria-expanded` and
 * `aria-controls` tie each header to its panel.
 */
function AccordionItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <li className="border-b border-line last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent"
        >
          <span
            className={cn(
              "font-display text-[1.02rem] leading-snug tracking-tight transition-colors",
              open ? "text-accent" : "text-fg group-hover:text-accent",
            )}
          >
            {question}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              "mt-0.5 grid size-6 shrink-0 place-items-center rounded-full border transition-all duration-300",
              open
                ? "rotate-45 border-accent/50 bg-accent/10 text-accent"
                : "border-line text-fg-subtle group-hover:border-line-strong group-hover:text-fg",
            )}
          >
            <svg
              viewBox="0 0 16 16"
              className="size-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M8 3.5v9M3.5 8h9" />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="grid"
      >
        <p className="max-w-3xl pr-10 pb-6 text-[0.925rem] leading-relaxed text-fg-muted">
          {answer}
        </p>
      </div>
    </li>
  );
}

export function FAQ() {
  const [activeGroup, setActiveGroup] = useState(faqGroups[0]!.id);
  /** Key is `${groupId}:${index}` so open state survives switching tabs. */
  const [openKey, setOpenKey] = useState<string | null>(null);

  const group = faqGroups.find((g) => g.id === activeGroup) ?? faqGroups[0]!;

  return (
    <Section id="faq" bordered aria-labelledby="faq-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.4fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              titleId="faq-title"
              eyebrow="FAQ"
              title="Questions, answered plainly."
              description="If something is not covered here, ask us directly — we will give you a straight answer."
            />

            <Reveal delay={120}>
              <nav aria-label="FAQ categories" className="mt-9">
                <ul className="flex flex-wrap gap-2">
                  {faqGroups.map((g) => (
                    <li key={g.id}>
                      <button
                        type="button"
                        onClick={() => setActiveGroup(g.id)}
                        aria-current={activeGroup === g.id ? "true" : undefined}
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-[0.82rem] font-medium transition-colors",
                          activeGroup === g.id
                            ? "border-accent/40 bg-accent/10 text-accent"
                            : "border-line bg-surface/50 text-fg-muted hover:border-line-strong hover:text-fg",
                        )}
                      >
                        {g.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 hidden lg:block">
                <Button
                  href="/#contact"
                  variant="secondary"
                  withArrow
                  event="cta_click"
                  eventProps={{ location: "faq", label: "Ask a question" }}
                >
                  Ask us a question
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ul className="rounded-2xl border border-line bg-surface/30 px-6 sm:px-8">
              {group.items.map((item, i) => {
                const key = `${group.id}:${i}`;
                return (
                  <AccordionItem
                    key={key}
                    question={item.question}
                    answer={item.answer}
                    open={openKey === key}
                    onToggle={() => {
                      const next = openKey === key ? null : key;
                      setOpenKey(next);
                      if (next) {
                        track("faq_open", { group: group.id, question: item.question });
                      }
                    }}
                  />
                );
              })}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
