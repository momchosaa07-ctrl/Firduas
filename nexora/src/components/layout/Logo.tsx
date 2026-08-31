import Image from "next/image";
import Link from "next/link";
import { brand } from "@/config/brand";
import { cn } from "@/lib/cn";

/**
 * The one place the brand mark is rendered.
 *
 * Today it is a text wordmark, because there is no final logo yet. To swap in
 * a real logo: drop the file in /public, then set `logo.type: "image"` and the
 * src/dimensions in src/config/brand.ts. The navbar and footer do not change.
 */
export function Logo({
  className,
  /** Renders as a link to the homepage. Off inside the mobile menu header. */
  asLink = true,
}: {
  className?: string;
  asLink?: boolean;
}) {
  const mark =
    brand.logo.type === "image" ? (
      <Image
        src={brand.logo.src}
        alt={brand.logo.alt}
        width={brand.logo.width}
        height={brand.logo.height}
        priority
        className="h-7 w-auto"
      />
    ) : (
      <span className="flex items-baseline gap-[0.18em]">
        <span className="font-display text-[1.15rem] leading-none font-semibold tracking-[-0.02em] text-fg">
          {brand.name}
        </span>
        <span aria-hidden="true" className="size-1 rounded-full bg-accent" />
      </span>
    );

  if (!asLink) {
    return <span className={cn("inline-flex items-center", className)}>{mark}</span>;
  }

  return (
    <Link
      href="/"
      aria-label={`${brand.name} — home`}
      className={cn(
        "inline-flex items-center rounded-sm transition-opacity hover:opacity-80",
        className,
      )}
    >
      {mark}
    </Link>
  );
}
