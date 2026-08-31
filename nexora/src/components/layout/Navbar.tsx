"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks, cta } from "@/config/site";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";

/**
 * Sticky navbar. Compacts slightly on scroll: shorter bar, blurred background
 * and a hairline appear once the page has moved.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-accent-strong focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
          scrolled
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <nav
          aria-label="Main"
          className={cn(
            "mx-auto flex w-full max-w-7xl items-center justify-between px-5 transition-[height] duration-300 ease-out sm:px-8 lg:px-10",
            scrolled ? "h-14" : "h-20",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() =>
                    track("nav_click", { label: link.label, surface: "desktop" })
                  }
                  className="rounded-full px-3.5 py-2 text-[0.85rem] text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              href={cta.primary.href}
              size="sm"
              className="hidden sm:inline-flex"
              event="cta_click"
              eventProps={{ location: "navbar", label: cta.primary.label }}
            >
              {cta.primary.label}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="-mr-2 flex size-10 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface lg:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
