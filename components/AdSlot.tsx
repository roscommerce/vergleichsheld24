"use client";

import { useEffect } from "react";

interface AdSlotProps {
  slot: string;           // AdSense slot ID (from your AdSense account)
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
  className?: string;
  style?: React.CSSProperties;
  label?: string;         // shown as placeholder before AdSense is active
}

// ============================================================
// ANLEITUNG:
// 1. Sobald dein AdSense-Konto genehmigt ist:
//    - Ersetze "ca-pub-XXXXXXXXXXXXXXXX" mit deiner Publisher-ID in layout.tsx
//    - Kommentiere den AdSense <script>-Tag in layout.tsx ein
//    - Ersetze die slot-IDs in den Seiten mit deinen echten Ad-Unit IDs
// 2. Bis dahin zeigt die Komponente einen Platzhalter an
// ============================================================

export default function AdSlot({
  slot,
  format = "auto",
  className = "",
  style = {},
  label = "Werbung",
}: AdSlotProps) {
  const isAdSenseActive =
    typeof window !== "undefined" &&
    typeof (window as Window & { adsbygoogle?: unknown[] }).adsbygoogle !==
      "undefined";

  useEffect(() => {
    if (isAdSenseActive) {
      try {
        ((window as Window & { adsbygoogle?: unknown[] }).adsbygoogle =
          (window as Window & { adsbygoogle?: unknown[] }).adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, [isAdSenseActive]);

  if (isAdSenseActive) {
    return (
      <div className={className} style={style}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", ...style }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // ← deine Publisher-ID
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Placeholder (während Entwicklung oder vor AdSense-Genehmigung)
  return (
    <div
      className={`ad-slot ${className}`}
      style={{
        minHeight: "90px",
        ...style,
      }}
    >
      <span>{label}</span>
    </div>
  );
}
