"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

// The transition list is explicit rather than `transition-all` on purpose:
// `all` includes outline-width, which makes the focus ring grow in from 0
// instead of appearing the instant focus lands. It is also cheaper.
const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "whitespace-nowrap duration-200 ease-out " +
  "transition-[background-color,border-color,color,box-shadow,transform,opacity] " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  // Fill stays put on hover — the glow and lift carry the interaction, so the
  // white label keeps its 5.2:1 contrast in every state.
  primary:
    "bg-accent-strong text-white shadow-[0_1px_0_0_rgba(255,255,255,0.18)_inset,0_8px_24px_-14px_var(--color-accent)] " +
    "hover:-translate-y-px hover:shadow-[0_1px_0_0_rgba(255,255,255,0.26)_inset,0_14px_34px_-12px_var(--color-accent-hover)] " +
    "active:translate-y-0",
  secondary:
    "border border-line-strong/70 bg-surface/60 text-fg backdrop-blur-sm " +
    "hover:border-line-strong hover:bg-surface-2 active:translate-y-px",
  ghost:
    "text-fg-muted hover:text-fg px-0! " +
    "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent " +
    "after:transition-[width] after:duration-300 hover:after:w-full",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.82rem]",
  md: "h-11 px-6 text-[0.9rem]",
  lg: "h-13 px-7 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  /** Trailing arrow that nudges on hover. */
  withArrow?: boolean;
  /** Conversion tracking. Fires before navigation. */
  event?: AnalyticsEvent;
  eventProps?: AnalyticsProps;
};

type AnchorProps = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type NativeButtonProps = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export type ButtonProps = AnchorProps | NativeButtonProps;

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow,
    event,
    eventProps,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow ? <Arrow /> : null}
    </>
  );

  const fireEvent = () => {
    if (event) track(event, eventProps);
  };

  if ("href" in props && props.href !== undefined) {
    const { href, external, onClick, ...anchorRest } =
      rest as AnchorProps & { onClick?: React.MouseEventHandler<HTMLAnchorElement> };

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      fireEvent();
      onClick?.(e);
    };

    const isExternal =
      external ?? (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:"));

    if (isExternal) {
      return (
        <a
          {...anchorRest}
          href={href}
          onClick={handleClick}
          className={classes}
          {...(/^https?:\/\//.test(href)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {content}
        </a>
      );
    }

    return (
      <Link {...anchorRest} href={href} onClick={handleClick} className={classes}>
        {content}
      </Link>
    );
  }

  const { onClick, type, ...buttonRest } = rest as NativeButtonProps;

  return (
    <button
      {...buttonRest}
      type={type ?? "button"}
      onClick={(e) => {
        fireEvent();
        onClick?.(e);
      }}
      className={classes}
    >
      {content}
    </button>
  );
}
