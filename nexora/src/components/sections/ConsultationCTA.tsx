import { consultation } from "@/config/content";
import { brand } from "@/config/brand";
import { bookingUrl } from "@/config/site";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

/**
 * The secondary conversion path, for people not ready to fill in a form.
 *
 * There is no fake booking widget here. If NEXT_PUBLIC_BOOKING_URL is set
 * (Cal.com, Calendly, anything with a URL) the CTA points at the real booking
 * system; otherwise it routes to the enquiry form and says so honestly. A
 * future embedded scheduler drops into this component alone.
 */
export function ConsultationCTA() {
  const hasBooking = Boolean(bookingUrl);

  return (
    <Section id="consultation" bordered aria-labelledby="consultation-title">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
          >
            <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_70%_at_80%_50%,black,transparent)]" />
            <div className="absolute -top-32 -right-24 size-96 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--color-accent)_18%,transparent),transparent_65%)]" />
          </div>

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-16 lg:p-16">
            <div>
              <Reveal>
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-3 py-1 text-[0.72rem] tracking-wide text-fg-muted">
                  <span className="size-1.5 rounded-full bg-success" />
                  {consultation.eyebrow}
                </p>
                <h2 id="consultation-title" className="text-h2 text-gradient">
                  {consultation.headline}
                </h2>
                <p className="mt-5 max-w-xl text-lead text-fg-muted">
                  {consultation.description}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  {hasBooking ? (
                    <Button
                      href={bookingUrl}
                      size="lg"
                      withArrow
                      event="consultation_click"
                      eventProps={{ location: "consultation_section", method: "booking" }}
                    >
                      Book a Free Consultation
                    </Button>
                  ) : (
                    <Button
                      href={`mailto:${brand.contact.email}?subject=${encodeURIComponent(
                        "Free consultation request",
                      )}`}
                      size="lg"
                      withArrow
                      event="consultation_click"
                      eventProps={{ location: "consultation_section", method: "email" }}
                    >
                      Request a Consultation
                    </Button>
                  )}
                  <Button
                    href="/#contact"
                    variant="secondary"
                    size="lg"
                    event="cta_click"
                    eventProps={{ location: "consultation_section", label: "Send details instead" }}
                  >
                    Send your details instead
                  </Button>
                </div>
              </Reveal>

              {!hasBooking ? (
                <Reveal delay={180}>
                  <p className="mt-5 text-[0.82rem] text-fg-subtle">
                    Online scheduling is coming. For now, email us or use the form
                    and we will send you times that work — usually within one
                    business day.
                  </p>
                </Reveal>
              ) : null}
            </div>

            <Reveal delay={160}>
              <ul className="space-y-4">
                {consultation.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.5 8.5 6 12l7.5-8" />
                    </svg>
                    <span className="text-[0.925rem] leading-relaxed text-fg-muted">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
