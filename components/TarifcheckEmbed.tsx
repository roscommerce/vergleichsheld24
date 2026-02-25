"use client";

import Script from "next/script";
import { WIDGETS } from "@/lib/widgets";

interface TarifcheckWidgetProps {
  slug: string;
  label: string;
}

export default function TarifcheckEmbed({ slug, label }: TarifcheckWidgetProps) {
  const widget = WIDGETS[slug];

  if (!widget) {
    return (
      <div style={{ padding: "2rem", textAlign: "center", background: "#f8fafc", borderRadius: "12px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
        Widget für „{label}" wird demnächst verfügbar sein.
      </div>
    );
  }

  return (
    <div style={{ width: "100%", minHeight: "400px" }}>
      <div
        style={{ width: "100%" }}
        id={widget.divId}
        {...(widget.extraAttrs || {})}
      />
      <Script src={widget.scriptSrc} strategy="lazyOnload" />
    </div>
  );
}
