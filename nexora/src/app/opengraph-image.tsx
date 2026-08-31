import { ImageResponse } from "next/og";
import { brand } from "@/config/brand";

export const alt = `${brand.name} — ${brand.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Open Graph card, generated at build time from the brand config — so it
 * renames along with everything else instead of being a stale exported PNG.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0A",
          backgroundImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(59,130,246,0.20), transparent 70%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{ fontSize: 34, color: "#F5F5F5", fontWeight: 700, letterSpacing: -1 }}
          >
            {brand.name}
          </span>
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#3B82F6",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              lineHeight: 1.1,
              color: "#F5F5F5",
              fontWeight: 600,
              letterSpacing: -2.5,
              maxWidth: 940,
            }}
          >
            We Build the Digital Systems Behind Modern Businesses.
          </div>
          <div style={{ display: "flex", marginTop: 34, gap: 18, alignItems: "center" }}>
            {["Websites", "Branding", "Automation", "Applications"].map((label) => (
              <span key={label} style={{ fontSize: 26, color: "#A1A1AA" }}>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #27272A",
            paddingTop: 28,
            fontSize: 24,
            color: "#71717A",
          }}
        >
          {brand.contact.email}
        </div>
      </div>
    ),
    size,
  );
}
