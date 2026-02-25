"use client";

import { useState, useEffect } from "react";

type ConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "vh24_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      // Kurze Verzögerung damit die Seite zuerst lädt
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (c: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...c, timestamp: Date.now() }));
    setVisible(false);

    // Google Consent Mode aktualisieren (für Analytics & AdSense)
    if (typeof window !== "undefined" && (window as Window & { gtag?: Function }).gtag) {
      (window as Window & { gtag?: Function }).gtag?.("consent", "update", {
        analytics_storage: c.analytics ? "granted" : "denied",
        ad_storage: c.marketing ? "granted" : "denied",
        ad_user_data: c.marketing ? "granted" : "denied",
        ad_personalization: c.marketing ? "granted" : "denied",
      });
    }
  };

  const acceptAll = () => saveConsent({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () => saveConsent({ necessary: true, analytics: false, marketing: false });
  const saveSelection = () => saveConsent(consent);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(4px)",
          zIndex: 9998,
        }}
      />

      {/* Banner */}
      <div
        role="dialog"
        aria-label="Cookie-Einstellungen"
        aria-modal="true"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(720px, calc(100vw - 2rem))",
          background: "#0f172a",
          border: "1px solid rgba(14,165,233,0.25)",
          borderRadius: "1.25rem",
          padding: "1.75rem",
          zIndex: 9999,
          boxShadow: "0 30px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(14,165,233,0.1)",
          animation: "slideUpIn 0.4s ease",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
          <div style={{ fontSize: "1.75rem", flexShrink: 0 }}>🍪</div>
          <div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "0.375rem" }}>
              Wir respektieren deine Privatsphäre
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.6 }}>
              Wir verwenden Cookies, um dir die beste Nutzungserfahrung zu bieten, Zugriffe zu
              analysieren und relevante Werbung anzuzeigen. Du kannst selbst entscheiden, welche
              Cookies du erlaubst.{" "}
              <a href="/datenschutz" style={{ color: "#7dd3fc", textDecoration: "none" }}>
                Datenschutzerklärung
              </a>
            </p>
          </div>
        </div>

        {/* Detailed Settings */}
        {showDetails && (
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "0.875rem",
              padding: "1rem",
              marginBottom: "1.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            {/* Necessary */}
            <CookieToggle
              title="Notwendige Cookies"
              description="Technisch erforderlich für den Betrieb der Website. Können nicht deaktiviert werden."
              checked={true}
              disabled={true}
              onChange={() => {}}
            />
            {/* Analytics */}
            <CookieToggle
              title="Analyse-Cookies (Google Analytics)"
              description="Hilft uns zu verstehen, wie Besucher unsere Website nutzen. Alle Daten werden anonymisiert."
              checked={consent.analytics}
              onChange={(v) => setConsent((c) => ({ ...c, analytics: v }))}
            />
            {/* Marketing */}
            <CookieToggle
              title="Marketing-Cookies (Google AdSense)"
              description="Ermöglicht personalisierte Werbeanzeigen basierend auf deinen Interessen."
              checked={consent.marketing}
              onChange={(v) => setConsent((c) => ({ ...c, marketing: v }))}
            />
          </div>
        )}

        {/* Actions */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.45)",
              fontSize: "0.82rem",
              cursor: "pointer",
              textDecoration: "underline",
              padding: "0",
              fontFamily: "var(--font-inter)",
            }}
          >
            {showDetails ? "Details verbergen" : "Einstellungen anpassen"}
          </button>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button
              onClick={rejectAll}
              style={{
                padding: "0.625rem 1.25rem",
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "0.625rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
                fontWeight: 500,
                cursor: "pointer",
                fontFamily: "var(--font-inter)",
                transition: "all 0.2s",
              }}
            >
              Nur Notwendige
            </button>

            {showDetails && (
              <button
                onClick={saveSelection}
                style={{
                  padding: "0.625rem 1.25rem",
                  background: "rgba(14,165,233,0.15)",
                  border: "1px solid rgba(14,165,233,0.3)",
                  borderRadius: "0.625rem",
                  color: "#7dd3fc",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "var(--font-inter)",
                }}
              >
                Auswahl speichern
              </button>
            )}

            <button
              onClick={acceptAll}
              style={{
                padding: "0.625rem 1.5rem",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                border: "none",
                borderRadius: "0.625rem",
                color: "#fff",
                fontSize: "0.85rem",
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "var(--font-inter)",
                boxShadow: "0 4px 16px rgba(14,165,233,0.3)",
              }}
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUpIn {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}

function CookieToggle({
  title,
  description,
  checked,
  disabled = false,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
      <div style={{ flex: 1 }}>
        <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.2rem" }}>
          {title}
          {disabled && (
            <span style={{ marginLeft: "0.5rem", padding: "0.15rem 0.5rem", background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", fontSize: "0.65rem", color: "#86efac" }}>
              Immer aktiv
            </span>
          )}
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", lineHeight: 1.5 }}>{description}</div>
      </div>
      {/* Toggle */}
      <button
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        style={{
          flexShrink: 0,
          width: "44px",
          height: "24px",
          borderRadius: "100px",
          border: "none",
          cursor: disabled ? "default" : "pointer",
          background: checked ? "#0ea5e9" : "rgba(255,255,255,0.15)",
          position: "relative",
          transition: "background 0.2s",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: checked ? "calc(100% - 22px)" : "2px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#fff",
            transition: "left 0.2s",
          }}
        />
      </button>
    </div>
  );
}
