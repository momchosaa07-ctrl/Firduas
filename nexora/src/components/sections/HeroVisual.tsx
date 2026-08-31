import { cn } from "@/lib/cn";

/**
 * The hero visual: an abstract composition of the four things we build —
 * a website, a brand mark, an automation flow and an application dashboard.
 *
 * Drawn entirely with CSS and inline SVG. No image request, no stock
 * photography, nothing to lazy-load, and it stays sharp at any resolution.
 * Decorative, so it is hidden from assistive technology.
 */
export function HeroVisual({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative select-none", className)}
    >
      {/* Main panel — website / application interface */}
      <div className="relative rounded-xl border border-line bg-surface/80 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <span className="size-2 rounded-full bg-line-strong" />
          <div className="ml-3 h-5 flex-1 rounded-md border border-line bg-bg/60" />
        </div>

        <div className="grid grid-cols-[auto_1fr] gap-4 p-4 sm:gap-5 sm:p-5">
          {/* Sidebar */}
          <div className="hidden w-32 flex-col gap-2.5 sm:flex">
            <div className="h-7 rounded-md bg-accent/15 ring-1 ring-accent/25 ring-inset" />
            {[70, 55, 80, 48].map((w, i) => (
              <div key={i} className="h-7 rounded-md bg-bg/50 px-2.5 py-2">
                <div className="h-full rounded-sm bg-line" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-4">
            {/* Metric row */}
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "Leads", value: "—" },
                { label: "Uptime", value: "—" },
                { label: "Saved", value: "—" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-line bg-bg/50 p-2.5 sm:p-3"
                >
                  <div className="font-sans text-[0.55rem] tracking-[0.14em] text-fg-subtle uppercase">
                    {m.label}
                  </div>
                  <div className="mt-1.5 font-display text-lg leading-none text-fg-muted sm:text-xl">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="relative h-28 overflow-hidden rounded-lg border border-line bg-bg/50 p-3 sm:h-36">
              <svg
                viewBox="0 0 320 100"
                preserveAspectRatio="none"
                className="h-full w-full"
              >
                <defs>
                  <linearGradient id="hv-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[25, 50, 75].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="320"
                    y2={y}
                    stroke="var(--color-line)"
                    strokeWidth="1"
                  />
                ))}
                <path
                  d="M0 82 C 40 78, 60 60, 96 58 S 150 66, 176 48 S 232 26, 264 22 S 306 12, 320 8 L320 100 L0 100 Z"
                  fill="url(#hv-fill)"
                />
                <path
                  d="M0 82 C 40 78, 60 60, 96 58 S 150 66, 176 48 S 232 26, 264 22 S 306 12, 320 8"
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {[92, 76, 84].map((w, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-line bg-bg/40 px-3 py-2.5"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-accent/70" />
                  <span className="h-2 rounded-full bg-line" style={{ width: `${w / 2}%` }} />
                  <span className="ml-auto h-2 w-8 rounded-full bg-line/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — automation flow */}
      <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-xl border border-line bg-surface-2/95 p-4 shadow-[0_24px_60px_-25px_rgba(0,0,0,1)] backdrop-blur-md sm:block lg:-left-10">
        <div className="mb-3 flex items-center gap-2">
          <span
            className="size-1.5 rounded-full bg-success"
            style={{ animation: "pulse-dot 2.6s ease-in-out infinite" }}
          />
          <span className="font-sans text-[0.6rem] tracking-[0.14em] text-fg-subtle uppercase">
            Workflow active
          </span>
        </div>
        <ul className="space-y-2.5">
          {["Form submitted", "Lead qualified", "CRM updated", "Follow-up sent"].map(
            (step, i, arr) => (
              <li key={step} className="relative flex items-center gap-2.5">
                <span className="relative flex size-4 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
                  <span className="size-1 rounded-full bg-accent" />
                  {i < arr.length - 1 ? (
                    <span className="absolute top-full left-1/2 h-2.5 w-px -translate-x-1/2 bg-line-strong" />
                  ) : null}
                </span>
                <span className="text-[0.7rem] text-fg-muted">{step}</span>
              </li>
            ),
          )}
        </ul>
      </div>

      {/* Floating card — brand mark */}
      <div className="absolute -top-5 -right-3 hidden rounded-xl border border-line bg-surface-2/95 px-4 py-3 shadow-[0_24px_60px_-25px_rgba(0,0,0,1)] backdrop-blur-md md:block lg:-right-8">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-lg border border-line bg-bg">
            <svg viewBox="0 0 24 24" className="size-4 text-accent" fill="none">
              <path
                d="M4 19 L12 5 L20 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M8 15 h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <div>
            <div className="font-display text-xs leading-none text-fg">Brand kit</div>
            <div className="mt-1 flex gap-1">
              {["bg-fg", "bg-accent", "bg-line-strong"].map((c) => (
                <span key={c} className={cn("size-2 rounded-full", c)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
