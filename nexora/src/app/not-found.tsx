import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/config/services";

export default function NotFound() {
  return (
    <div className="relative overflow-hidden pt-40 pb-32">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      </div>
      <Container className="relative max-w-2xl text-center">
        <p className="font-display text-6xl font-medium tracking-tight text-line-strong">
          404
        </p>
        <h1 className="mt-6 text-h2 text-gradient">This page does not exist.</h1>
        <p className="mt-5 text-lead text-fg-muted">
          The link may be out of date, or the page may have moved. Here is the
          way back.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Button href="/#contact" variant="secondary">
            Contact us
          </Button>
        </div>

        <nav aria-label="Services" className="mt-14 border-t border-line pt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/${service.slug}`}
                  className="text-[0.875rem] text-fg-muted transition-colors hover:text-accent"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </div>
  );
}
