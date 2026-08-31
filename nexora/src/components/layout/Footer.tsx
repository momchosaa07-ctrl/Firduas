import Link from "next/link";
import { brand } from "@/config/brand";
import { footerNav } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

const columns = [
  { title: "Services", links: footerNav.services },
  { title: "Company", links: footerNav.company },
  { title: "Legal", links: footerNav.legal },
] as const;

export function Footer() {
  const socials = brand.social.filter((s) => s.href);

  return (
    <footer className="relative border-t border-line bg-surface/40">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-fg-muted">
              {brand.shortDescription}
            </p>

            <div className="mt-6 space-y-1.5 text-sm">
              <a
                href={`mailto:${brand.contact.email}`}
                className="block text-fg-muted transition-colors hover:text-accent"
              >
                {brand.contact.email}
              </a>
              {brand.contact.showPhone ? (
                <a
                  href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                  className="block text-fg-muted transition-colors hover:text-accent"
                >
                  {brand.contact.phone}
                </a>
              ) : null}
              <p className="text-fg-subtle">{brand.contact.location}</p>
            </div>

            {socials.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-fg-muted transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-sans text-[0.7rem] font-semibold tracking-[0.16em] text-fg-subtle uppercase">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <p>
            {/* Honest about the placeholder rather than hiding it. */}
            <span className="text-fg-subtle">
              {brand.name} is a working name — brand and company details are being finalised.
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
