import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  className?: string;
  /** Renders a hairline at the top of the section. */
  bordered?: boolean;
  children: React.ReactNode;
  "aria-labelledby"?: string;
};

/** Vertical rhythm wrapper. Every top-level section on the site uses this. */
export function Section({
  id,
  className,
  bordered = false,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 py-(--spacing-section)",
        bordered && "border-t border-line",
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
}

type HeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Heading id, so the parent <section> can be labelled by it. */
  titleId?: string;
  align?: "left" | "center";
  /** h2 by default; landing page heroes use h1. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  titleId,
  align = "left",
  as: Heading = "h2",
  className,
}: HeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-accent uppercase",
            align === "center" && "justify-center",
          )}
        >
          <span
            aria-hidden="true"
            className={cn("h-px w-6 bg-accent/50", align === "center" && "hidden")}
          />
          {eyebrow}
        </p>
      ) : null}
      <Heading id={titleId} className="text-h2 text-gradient">
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 text-lead text-fg-muted">{description}</p>
      ) : null}
    </Reveal>
  );
}

export { Container };
