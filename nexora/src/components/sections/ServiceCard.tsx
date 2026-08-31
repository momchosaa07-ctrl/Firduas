import type { Service } from "@/config/services";
import { resolveCheckout } from "@/lib/payments";
import { Button } from "@/components/ui/Button";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { cn } from "@/lib/cn";

export function ServiceCard({ service }: { service: Service }) {
  /**
   * CTA destination comes from the payment layer, not from the card. Today
   * every product resolves to the enquiry form; once a Stripe Payment Link is
   * configured for a fixed-price product this becomes a checkout link with no
   * change here.
   */
  const checkout = resolveCheckout(
    service.product,
    `/?service=${service.id}#contact`,
  );

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-surface/50 p-7 transition-all duration-300 sm:p-8",
        "hover:-translate-y-1 hover:border-line-strong hover:bg-surface",
        service.featured
          ? "border-accent/35 bg-surface/70 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_30px_60px_-40px_rgba(59,130,246,0.5)]"
          : "border-line",
      )}
    >
      {service.featured ? (
        <span className="absolute -top-2.5 left-7 rounded-full border border-accent/40 bg-bg px-3 py-0.5 font-sans text-[0.62rem] font-medium tracking-[0.14em] text-accent uppercase sm:left-8">
          Most popular
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-4">
        <span
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl border transition-colors",
            service.featured
              ? "border-accent/30 bg-accent/10 text-accent"
              : "border-line bg-bg text-fg-muted group-hover:border-accent/30 group-hover:text-accent",
          )}
        >
          <ServiceIcon id={service.id} />
        </span>
      </div>

      <h3 className="mt-6 text-h3 text-fg">{service.name}</h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-3xl leading-none font-medium tracking-tight text-fg">
          {service.price}
        </span>
        <span className="text-sm text-fg-muted">{service.priceNote}</span>
      </div>
      {service.secondaryPrice ? (
        <p className="mt-1.5 text-sm text-fg-muted">{service.secondaryPrice}</p>
      ) : null}
      {service.priceCaveat ? (
        <p className="mt-3 text-[0.8rem] leading-relaxed text-fg-subtle">
          {service.priceCaveat}
        </p>
      ) : null}

      <p className="mt-5 text-[0.925rem] leading-relaxed text-fg-muted">
        {service.description}
      </p>

      <div className="mt-6 h-px rule-fade" />

      <h4 className="mt-6 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
        What&rsquo;s included
      </h4>
      <ul className="mt-4 space-y-2.5">
        {service.includes.map((item) => (
          <li key={item} className="flex gap-2.5 text-[0.875rem] text-fg-muted">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="mt-1 size-3.5 shrink-0 text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2.5 8.5 6 12l7.5-8" />
            </svg>
            {item}
          </li>
        ))}
      </ul>

      {service.examples ? (
        <>
          <h4 className="mt-7 font-sans text-[0.68rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
            Examples
          </h4>
          <ul className="mt-3.5 flex flex-wrap gap-1.5">
            {service.examples.map((example) => (
              <li
                key={example}
                className="rounded-full border border-line bg-bg/60 px-2.5 py-1 text-[0.75rem] text-fg-muted"
              >
                {example}
              </li>
            ))}
          </ul>
        </>
      ) : null}

      <div className="mt-8 flex flex-col gap-2.5 pt-2 sm:flex-row">
        <Button
          href={checkout.href}
          variant={service.featured ? "primary" : "secondary"}
          withArrow
          className="w-full sm:w-auto"
          event={checkout.isCheckout ? "checkout_start" : "cta_click"}
          eventProps={{ location: "services", service: service.id, label: service.cta }}
        >
          {service.cta}
        </Button>
        {service.leadWithConsultation ? (
          <Button
            href="/#consultation"
            variant="ghost"
            size="md"
            className="w-full justify-center px-4! sm:w-auto"
            event="consultation_click"
            eventProps={{ location: "services", service: service.id }}
          >
            Book a call
          </Button>
        ) : null}
      </div>
    </article>
  );
}
