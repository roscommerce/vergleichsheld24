"use client";

interface TarifcheckWidgetProps {
  // Deine Partner-ID von Tarifcheck (aus deinem Affiliate-Account)
  partnerId?: string;
  // Versicherungstyp
  type:
    | "kfz"
    | "haftpflicht"
    | "hausrat"
    | "kranken"
    | "berufsunfaehigkeit"
    | "rechtsschutz"
    | "zahnzusatz"
    | "tierkranken";
  // Höhe des Widgets
  height?: number;
  // Eigener Deep-Link (falls du spezifische Affiliate-Links nutzt)
  customUrl?: string;
}

// ============================================================
// ANLEITUNG ZUR EINRICHTUNG:
// 1. Logge dich in dein Tarifcheck-Partnerprogramm ein
// 2. Gehe zu "Werbemittel" → "Tarifrechner"
// 3. Wähle den gewünschten Versicherungstyp
// 4. Kopiere die iframe-URL oder den Widget-Code
// 5. Ersetze die URLs unten mit deinen personalisierten Links
//
// Alternativ: Nutze Deep-Links direkt auf Tarifcheck mit
// deinem Affiliate-Tag: ?ref=DEINE_PARTNER_ID
// ============================================================

const WIDGET_CONFIG: Record<string, { url: string; label: string; description: string }> = {
  kfz: {
    url: "https://www.tarifcheck.de/kfzversicherung/?ref=DEINE_PARTNER_ID",
    label: "Kfz-Versicherung vergleichen",
    description: "Jetzt Kfz-Versicherung vergleichen und bis zu 850 € sparen",
  },
  haftpflicht: {
    url: "https://www.tarifcheck.de/haftpflichtversicherung/?ref=DEINE_PARTNER_ID",
    label: "Haftpflicht vergleichen",
    description: "Private Haftpflichtversicherung ab 2,14 € / Monat",
  },
  hausrat: {
    url: "https://www.tarifcheck.de/hausratversicherung/?ref=DEINE_PARTNER_ID",
    label: "Hausrat vergleichen",
    description: "Hausratversicherung günstig abschließen",
  },
  kranken: {
    url: "https://www.tarifcheck.de/krankenversicherung/?ref=DEINE_PARTNER_ID",
    label: "Krankenversicherung vergleichen",
    description: "Private und gesetzliche Krankenversicherung im Vergleich",
  },
  berufsunfaehigkeit: {
    url: "https://www.tarifcheck.de/berufsunfaehigkeitsversicherung/?ref=DEINE_PARTNER_ID",
    label: "BU-Versicherung vergleichen",
    description: "Berufsunfähigkeitsversicherung – dein wichtigster Schutz",
  },
  rechtsschutz: {
    url: "https://www.tarifcheck.de/rechtsschutzversicherung/?ref=DEINE_PARTNER_ID",
    label: "Rechtsschutz vergleichen",
    description: "Rechtsschutzversicherung – günstig und zuverlässig",
  },
  zahnzusatz: {
    url: "https://www.tarifcheck.de/zahnzusatzversicherung/?ref=DEINE_PARTNER_ID",
    label: "Zahnzusatz vergleichen",
    description: "Zahnzusatzversicherung im Vergleich",
  },
  tierkranken: {
    url: "https://www.tarifcheck.de/tierkrankenversicherung/?ref=DEINE_PARTNER_ID",
    label: "Tierkranken vergleichen",
    description: "Tierkrankenversicherung für Hund & Katze",
  },
};

export default function TarifcheckWidget({
  type,
  height = 500,
  customUrl,
}: TarifcheckWidgetProps) {
  const config = WIDGET_CONFIG[type];
  const targetUrl = customUrl || config?.url;

  if (!config || !targetUrl) {
    return null;
  }

  return (
    <div
      style={{
        borderRadius: "1.25rem",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 20px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(14,165,233,0.1)",
      }}
    >
      {/* Widget Header */}
      <div
        style={{
          padding: "1.25rem 1.5rem",
          background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(14,165,233,0.04))",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7dd3fc",
              marginBottom: "0.25rem",
            }}
          >
            Powered by Tarifcheck.de
          </div>
          <div
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1rem",
              fontFamily: "var(--font-syne)",
            }}
          >
            {config.label}
          </div>
        </div>
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-primary"
          style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
        >
          Direkt vergleichen ↗
        </a>
      </div>

      {/* ================================================================
          IFRAME EINBINDUNG:
          Sobald du deinen Tarifcheck-Partneraccount eingerichtet hast,
          ersetze den Placeholder unten mit dem echten iframe-Code.
          
          Beispiel:
          <iframe
            src="https://www.tarifcheck.de/embed/kfz/?ref=DEINE_ID&style=dark"
            width="100%"
            height={height}
            style={{ border: "none", display: "block" }}
            title={config.label}
            loading="lazy"
          />
          ================================================================ */}

      {/* PLACEHOLDER – durch echten iframe ersetzen */}
      <div
        style={{
          height: `${height}px`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.5rem",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
            marginBottom: "0.5rem",
          }}
        >
          🔍
        </div>
        <div>
          <p
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "1.1rem",
              marginBottom: "0.5rem",
              fontFamily: "var(--font-syne)",
            }}
          >
            {config.description}
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.85rem",
              maxWidth: "360px",
              lineHeight: 1.6,
            }}
          >
            Trage hier deinen Affiliate-Widget-Code von Tarifcheck.de ein. 
            Du findest ihn in deinem Partnerprogramm-Dashboard unter „Werbemittel".
          </p>
        </div>
        <a
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="btn-accent"
          style={{ fontSize: "0.9rem" }}
        >
          Jetzt kostenlos vergleichen →
        </a>
      </div>
    </div>
  );
}
