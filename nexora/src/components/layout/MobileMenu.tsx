"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { navLinks, cta } from "@/config/site";
import { brand } from "@/config/brand";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { track } from "@/lib/analytics";

/**
 * Full-screen mobile navigation.
 *
 * Accessibility: rendered as a modal dialog, focus moves in on open and
 * returns to the trigger on close, Escape closes, and focus is trapped while
 * open. Background scrolling is locked.
 */
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      // Kept mounted so the panel can transition; fully inert when closed.
      className={`fixed inset-0 z-50 lg:hidden ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      // `inert` removes the closed panel from the tab order and the a11y tree.
      inert={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-bg/85 backdrop-blur-md transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${brand.name} navigation`}
        className={`absolute inset-x-0 top-0 flex max-h-dvh flex-col overflow-y-auto border-b border-line bg-surface/95 shadow-2xl transition-all duration-300 ease-(--ease-out-quint) ${
          open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Logo asLink={false} />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 flex size-10 items-center justify-center rounded-full text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
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
              <path d="M5 5l10 10M15 5L5 15" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile" className="px-5 py-3">
          <ul>
            {navLinks.map((link, i) => (
              <li key={link.href} className="border-b border-line/60 last:border-0">
                <Link
                  href={link.href}
                  onClick={() => {
                    track("nav_click", { label: link.label, surface: "mobile" });
                    onClose();
                  }}
                  style={{ transitionDelay: open ? `${60 + i * 35}ms` : "0ms" }}
                  className={`flex items-center justify-between py-4 font-display text-xl tracking-tight text-fg transition-all duration-300 hover:text-accent ${
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                  }`}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-fg-subtle">
                    <svg
                      viewBox="0 0 16 16"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 3.5 10.5 8 6 12.5" />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 border-t border-line px-5 py-6">
          <Button
            href={cta.primary.href}
            size="lg"
            withArrow
            onClick={onClose}
            event="cta_click"
            eventProps={{ location: "mobile_menu", label: cta.primary.label }}
          >
            {cta.primary.label}
          </Button>
          <Button
            href={cta.secondary.href}
            variant="secondary"
            size="lg"
            onClick={onClose}
            event="consultation_click"
            eventProps={{ location: "mobile_menu" }}
          >
            {cta.secondary.label}
          </Button>
          <a
            href={`mailto:${brand.contact.email}`}
            className="mt-2 text-center text-sm text-fg-muted transition-colors hover:text-fg"
          >
            {brand.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
