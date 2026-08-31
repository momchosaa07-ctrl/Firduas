import { NextResponse } from "next/server";
import { validateLead, type LeadFormValues } from "@/config/leadForm";

/**
 * Lead intake.
 *
 * This is a real endpoint with real validation — but deliberately no fake CRM
 * integration. Where the lead goes is configuration:
 *
 *   LEAD_WEBHOOK_URL   POST the lead as JSON (Zapier, Make, n8n, a CRM, Slack)
 *   (unset)            log it server-side and accept it
 *
 * Adding an email provider or a CRM SDK later is a change to this file only;
 * the form does not know or care.
 */

export const runtime = "nodejs";

type LeadPayload = Partial<LeadFormValues> & {
  website_hp?: string;
  attribution?: Record<string, string>;
};

const MAX_FIELD_LENGTH = 5000;

function asString(value: unknown): string {
  return typeof value === "string" ? value.slice(0, MAX_FIELD_LENGTH).trim() : "";
}

export async function POST(request: Request) {
  let payload: LeadPayload;

  try {
    payload = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  // Honeypot. Answer 200 so bots do not learn they were caught.
  if (asString(payload.website_hp)) {
    return NextResponse.json({ ok: true });
  }

  const values: LeadFormValues = {
    name: asString(payload.name),
    email: asString(payload.email),
    company: asString(payload.company),
    website: asString(payload.website),
    service: asString(payload.service) as LeadFormValues["service"],
    budget: asString(payload.budget) as LeadFormValues["budget"],
    timeline: asString(payload.timeline) as LeadFormValues["timeline"],
    message: asString(payload.message),
  };

  // Same validation the browser ran — never trust the client's word for it.
  const errors = validateLead(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Please check the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const lead = {
    ...values,
    attribution: payload.attribution ?? {},
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!response.ok) {
        throw new Error(`Webhook responded ${response.status}`);
      }
    } catch (error) {
      console.error("[leads] delivery failed", error);
      return NextResponse.json(
        {
          ok: false,
          message: "We could not deliver your enquiry just now.",
        },
        { status: 502 },
      );
    }
  } else {
    // No delivery target configured yet — record it rather than lose it
    // silently, and be explicit in the logs that this needs wiring up.
    console.info(
      "[leads] LEAD_WEBHOOK_URL is not set; lead logged only:",
      JSON.stringify(lead),
    );
  }

  return NextResponse.json({ ok: true });
}
