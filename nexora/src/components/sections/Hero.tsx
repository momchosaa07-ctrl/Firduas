import { hero } from "@/config/content";
import { cta } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-44 lg:pb-28">
      {/* Decorative background: fading grid + single accent bloom. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-[0.55] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent_75%)]" />
        <div className="accent-bloom absolute inset-x-0 top-0 h-[640px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          <div className="max-w-2xl">
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pr-4 pl-2.5 text-[0.72rem] tracking-wide text-fg-muted backdrop-blur-sm">
                <span
                  className="size-1.5 rounded-full bg-accent"
                  style={{ animation: "pulse-dot 2.6s ease-in-out infinite" }}
                />
                {hero.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-display text-gradient">
                {hero.headline}
                <span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lead text-fg-muted">
                {hero.subheadline}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  href={cta.primary.href}
                  size="lg"
                  withArrow
                  event="cta_click"
                  eventProps={{ location: "hero", label: cta.primary.label }}
                >
                  {cta.primary.label}
                </Button>
                <Button
                  href={cta.work.href}
                  variant="secondary"
                  size="lg"
                  event="cta_click"
                  eventProps={{ location: "hero", label: cta.work.label }}
                >
                  {cta.work.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-8 text-sm text-fg-subtle">
                No setup fee on websites · Free consultation on larger projects
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:pl-4">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
