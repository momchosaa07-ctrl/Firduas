import type { PricingPlan } from "@/config/pricing";
import { resolveCheckout } from "@/lib/payments";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function PricingCard({ plan }: { plan: PricingPlan }) {
  const checkout = resolveCheckout(plan.product, `/?service=${plan.id}#contact`);

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300",
        plan.featured
          ? "border-accent/40 bg-surface shadow-[0_0_0_1px_rgba(59,130,246,0.1),0_40px_80px_-50px_rgba(59,130,246,0.65)] lg:-my-4 lg:py-11"
          : "border-line bg-surface/40 hover:border-line-strong hover:bg-surface/70",
      )}
    >
      {plan.featured ? (
        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 rounded-full border border-accent/40 bg-bg px-3 py-0.5 font-sans text-[0.62rem] font-medium tracking-[0.14em] text-accent uppercase">
          Core plan
        </span>
      ) : null}

      <h3 className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
        {plan.name}
      </h3>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-2">
        <span
          className={cn(
            "font-display leading-none font-medium tracking-tight text-fg",
            plan.featured ? "text-5xl" : "text-4xl",
          )}
        >
          {plan.price}
        </span>
        <span className="text-sm text-fg-muted">{plan.priceNote}</span>
      </div>
      {plan.secondaryPrice ? (
        <p className="mt-2 text-[0.82rem] text-fg-muted">{plan.secondaryPrice}</p>
      ) : null}

      <p className="mt-4 text-[0.85rem] leading-relaxed text-fg-subtle">
        {plan.caption}
      </p>

      <ul className="mt-7 space-y-2.5 border-t border-line pt-7">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2.5 text-[0.875rem] text-fg-muted">
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
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href={checkout.href}
          variant={plan.featured ? "primary" : "secondary"}
          className="w-full"
          withArrow
          event={checkout.isCheckout ? "checkout_start" : "cta_click"}
          eventProps={{ location: "pricing", service: plan.id, label: plan.cta }}
        >
          {plan.cta}
        </Button>
      </div>
    </article>
  );
}
