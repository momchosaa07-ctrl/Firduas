"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  budgetOptions,
  emptyLead,
  serviceIdToOption,
  serviceOptions,
  timelineOptions,
  validateLead,
  type LeadErrors,
  type LeadFormValues,
  type ServiceOption,
} from "@/config/leadForm";
import { brand } from "@/config/brand";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SelectField, TextAreaField, TextField } from "@/components/ui/Field";
import { getAttribution, track } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Reads `?service=` and reports the matching dropdown option.
 *
 * It lives in its own component behind a null Suspense boundary on purpose:
 * `useSearchParams` opts its boundary out of static prerendering, and this
 * way that cost falls on an empty node instead of the entire form. The form
 * itself ships in the prerendered HTML, so it is there before hydration.
 */
function ServicePrefill({
  onResolve,
}: {
  onResolve: (option: ServiceOption) => void;
}) {
  const searchParams = useSearchParams();
  const requested = searchParams.get("service");

  useEffect(() => {
    if (!requested) return;
    const option = serviceIdToOption[requested];
    if (option) onResolve(option);
  }, [requested, onResolve]);

  return null;
}

function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const startedRef = useRef(false);
  const statusRef = useRef<HTMLDivElement>(null);

  /** Pre-fill the service when arriving from a service or pricing CTA. */
  const applyPrefill = useCallback((option: ServiceOption) => {
    setValues((prev) => (prev.service ? prev : { ...prev, service: option }));
  }, []);

  const set =
    <K extends keyof LeadFormValues>(key: K) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      if (!startedRef.current) {
        startedRef.current = true;
        track("form_start");
      }
      const value = e.target.value as LeadFormValues[K];
      setValues((prev) => ({ ...prev, [key]: value }));
      // Clear the error as soon as the field is touched again.
      setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
    };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const found = validateLead(values);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      track("form_error", { fields: Object.keys(found).join(",") });
      // Move focus to the first field with a problem.
      const firstKey = Object.keys(found)[0];
      const el = document.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      el?.focus();
      el?.scrollIntoView({ block: "center", behavior: "smooth" });
      return;
    }

    setStatus("submitting");
    track("form_submit", { service: values.service, budget: values.budget || "unset" });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          // Honeypot: real people leave this empty.
          website_hp: (
            document.querySelector<HTMLInputElement>('input[name="website_hp"]')
              ?.value ?? ""
          ),
          attribution: getAttribution(),
        }),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { errors?: LeadErrors; message?: string }
          | null;
        if (body?.errors) setErrors(body.errors);
        throw new Error(body?.message ?? "Something went wrong.");
      }

      setStatus("success");
      track("form_success", { service: values.service });
    } catch (error) {
      setStatus("error");
      setServerError(
        error instanceof Error ? error.message : "Something went wrong.",
      );
      track("form_error", { stage: "submit" });
    }
  }

  useEffect(() => {
    if (status === "success" || status === "error") statusRef.current?.focus();
  }, [status]);

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-2xl border border-success/30 bg-success/5 p-8 text-center sm:p-12"
      >
        <span className="mx-auto grid size-12 place-items-center rounded-full border border-success/40 bg-success/10 text-success">
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10.5 8 14.5 16 6" />
          </svg>
        </span>
        <h3 className="mt-6 text-h3 text-fg">Thanks — we have your enquiry.</h3>
        <p className="mx-auto mt-3 max-w-md text-[0.95rem] leading-relaxed text-fg-muted">
          {brand.contact.responseTime} If it is urgent, email us directly at{" "}
          <a
            href={`mailto:${brand.contact.email}`}
            className="text-accent underline underline-offset-4 hover:text-accent-hover"
          >
            {brand.contact.email}
          </a>
          .
        </p>
        <div className="mt-8">
          <Button
            variant="secondary"
            onClick={() => {
              setValues(emptyLead);
              setErrors({});
              setStatus("idle");
              startedRef.current = false;
            }}
          >
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-line bg-surface/40 p-6 sm:p-8"
    >
      <Suspense fallback={null}>
        <ServicePrefill onResolve={applyPrefill} />
      </Suspense>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website_hp">Leave this field empty</label>
        <input
          id="website_hp"
          name="website_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <TextField
          label="Name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          value={values.name}
          onChange={set("name")}
          error={errors.name}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          value={values.email}
          onChange={set("email")}
          error={errors.email}
        />
        <TextField
          label="Company"
          name="company"
          autoComplete="organization"
          placeholder="Your business name"
          value={values.company}
          onChange={set("company")}
          error={errors.company}
        />
        <TextField
          label="Website"
          name="website"
          autoComplete="url"
          inputMode="url"
          placeholder="yourbusiness.com"
          hint="If you already have one."
          value={values.website}
          onChange={set("website")}
          error={errors.website}
        />
        <SelectField
          label="What do you need?"
          name="service"
          required
          options={serviceOptions}
          placeholder="Select a service"
          value={values.service}
          onChange={set("service")}
          error={errors.service}
          className="sm:col-span-2"
        />
        <SelectField
          label="Budget"
          name="budget"
          options={budgetOptions}
          placeholder="Select a range"
          hint="A rough range is fine — it helps us recommend the right approach."
          value={values.budget}
          onChange={set("budget")}
          error={errors.budget}
        />
        <SelectField
          label="Timeline"
          name="timeline"
          options={timelineOptions}
          placeholder="Select a timeline"
          value={values.timeline}
          onChange={set("timeline")}
          error={errors.timeline}
        />
        <TextAreaField
          label="Tell us about your project"
          name="message"
          required
          placeholder="What are you trying to improve, and what is getting in the way? Plain language is perfect."
          value={values.message}
          onChange={set("message")}
          error={errors.message}
          className="sm:col-span-2"
        />
      </div>

      {status === "error" && serverError ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 rounded-xl border border-danger/40 bg-danger/5 px-4 py-3 text-[0.85rem] text-danger"
        >
          {serverError} You can also email us at{" "}
          <a href={`mailto:${brand.contact.email}`} className="underline underline-offset-4">
            {brand.contact.email}
          </a>
          .
        </div>
      ) : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          withArrow={status !== "submitting"}
          disabled={status === "submitting"}
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send Enquiry"}
        </Button>
        <p className="text-[0.78rem] leading-relaxed text-fg-subtle sm:max-w-xs sm:text-right">
          {brand.contact.responseTime} We never share your details.
        </p>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Section id="contact" bordered aria-labelledby="contact-title">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="mb-4 flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-accent uppercase">
                <span aria-hidden="true" className="h-px w-6 bg-accent/50" />
                Contact
              </p>
              <h2 id="contact-title" className="text-h2 text-gradient">
                Tell us what you need.
              </h2>
              <p className="mt-5 text-lead text-fg-muted">
                A few details is all it takes. We reply with a recommendation, a
                realistic price range and the next step — no obligation.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <dl className="mt-9 space-y-5 border-t border-line pt-8 text-[0.9rem]">
                <div>
                  <dt className="text-fg-subtle">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${brand.contact.email}`}
                      className="text-fg transition-colors hover:text-accent"
                    >
                      {brand.contact.email}
                    </a>
                  </dd>
                </div>
                {brand.contact.showPhone ? (
                  <div>
                    <dt className="text-fg-subtle">Phone</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${brand.contact.phone.replace(/\s/g, "")}`}
                        className="text-fg transition-colors hover:text-accent"
                      >
                        {brand.contact.phone}
                      </a>
                    </dd>
                  </div>
                ) : null}
                <div>
                  <dt className="text-fg-subtle">Hours</dt>
                  <dd className="mt-1 text-fg-muted">{brand.contact.hours}</dd>
                </div>
                <div>
                  <dt className="text-fg-subtle">Prefer a call?</dt>
                  <dd className="mt-1 text-fg-muted">
                    <a
                      href="#consultation"
                      className="text-accent underline underline-offset-4 hover:text-accent-hover"
                    >
                      Book a free consultation
                    </a>{" "}
                    instead.
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <LeadForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
