"use client";

import Script from "next/script";
import { useEffect } from "react";
import { analyticsConfig, captureAttribution } from "@/lib/analytics";

/**
 * Loads an analytics script only when one is configured. With no environment
 * variables set this renders nothing at all — no third-party request, no
 * cookie, no consent banner needed.
 */
export function Analytics() {
  useEffect(() => {
    captureAttribution();
  }, []);

  const { plausibleDomain, gaMeasurementId } = analyticsConfig;

  return (
    <>
      {plausibleDomain ? (
        <Script
          defer
          strategy="afterInteractive"
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.tagged-events.js"
        />
      ) : null}

      {gaMeasurementId ? (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}');`}
          </Script>
        </>
      ) : null}
    </>
  );
}
