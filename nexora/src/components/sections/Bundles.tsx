import { bundles, bundlesNote } from "@/config/pricing";
import { getService } from "@/config/services";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/cn";

export function Bundles() {
  return (
    <Section id="bundles" aria-labelledby="bundles-title">
      <Container>
        <SectionHeader
          titleId="bundles-title"
          eyebrow="Bundles"
          title="Combine services and build the whole system at once."
          description="Most businesses need more than one thing. These are the combinations we are asked for most — each one adjustable to what you actually need."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {bundles.map((bundle, i) => (
            <Reveal key={bundle.id} delay={i * 80} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8",
                  bundle.featured
                    ? "border-accent/35 bg-surface shadow-[0_30px_60px_-45px_rgba(59,130,246,0.6)]"
                    : "border-line bg-surface/40 hover:border-line-strong hover:bg-surface/70",
                )}
              >
                <h3 className="font-display text-xl tracking-tight text-fg">
                  {bundle.name}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {bundle.includes.map((id) => {
                    const service = getService(id);
                    return (
                      <li
                        key={id}
                        className="flex items-center gap-1.5 rounded-full border border-line bg-bg/60 py-1 pr-2.5 pl-2 text-[0.75rem] text-fg-muted"
                      >
                        <ServiceIcon id={id} className="size-3 text-accent" />
                        {service.shortName}
                      </li>
                    );
                  })}
                </ul>

                <p className="mt-6 text-[0.9rem] leading-relaxed text-fg-muted">
                  {bundle.description}
                </p>

                <div className="mt-6 border-t border-line pt-6">
                  <p className="font-display text-[1.05rem] leading-snug tracking-tight text-fg">
                    {bundle.price}
                  </p>
                  {bundle.priceNote ? (
                    <p className="mt-1 text-[0.8rem] text-fg-subtle">
                      {bundle.priceNote}
                    </p>
                  ) : null}
                </div>

                <div className="mt-auto pt-7">
                  <Button
                    href="/#contact"
                    variant={bundle.featured ? "primary" : "secondary"}
                    className="w-full"
                    withArrow
                    event="cta_click"
                    eventProps={{ location: "bundles", bundle: bundle.id, label: bundle.cta }}
                  >
                    {bundle.cta}
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-9 text-center text-[0.85rem] text-fg-subtle">
            {bundlesNote}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
