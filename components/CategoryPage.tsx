"use client";

import Link from "next/link";
import { InsuranceItem, ALL_CATEGORIES } from "@/lib/categories";

export default function CategoryPage({ item }: { item: InsuranceItem }) {
  const related = ALL_CATEGORIES.filter(
    (c) => c.group === item.group && c.slug !== item.slug
  ).slice(0, 6);

  const basePath = item.group === "finanzen" ? "finanzen"
    : item.group === "solar" ? "solar" : "versicherungen";

  const groupLabel = item.group === "finanzen" ? "Finanzen"
    : item.group === "solar" ? "Solaranlagen" : "Versicherungen";

  const groupAnchor = item.group;

  // Schritte je nach Kategorie
  const steps = item.group === "finanzen"
    ? [
        { icon: "📋", title: "Angaben machen", desc: "Gib deine gewünschten Konditionen ein – dauert nur 2 Minuten." },
        { icon: "🔍", title: "Angebote vergleichen", desc: "Über 100 Anbieter werden automatisch für dich verglichen." },
        { icon: "✅", title: "Bestes Angebot wählen", desc: "Wähle den passenden Tarif und schließe direkt online ab." },
      ]
    : item.group === "solar"
    ? [
        { icon: "📐", title: "Dachfläche angeben", desc: "Teile uns die Größe und Ausrichtung deines Dachs mit." },
        { icon: "☀️", title: "Angebote vergleichen", desc: "Regionale Installateure und Anbieter im direkten Vergleich." },
        { icon: "⚡", title: "Anlage installieren", desc: "Wähle das beste Angebot und spare dauerhaft Stromkosten." },
      ]
    : [
        { icon: "📋", title: "Daten eingeben", desc: "Fülle in wenigen Sekunden das kurze Formular aus." },
        { icon: "🔍", title: "Tarife vergleichen", desc: "Über 100 Anbieter werden automatisch für dich verglichen." },
        { icon: "✅", title: "Besten Tarif wählen", desc: "Schließe direkt online ab – kostenlos und unverbindlich." },
      ];

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "70px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-light)", fontSize: "0.82rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <Link href={`/#${groupAnchor}`} style={{ color: "var(--text-light)", textDecoration: "none" }}>{groupLabel}</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)" }}>{item.label}</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: "2rem", alignItems: "start" }} className="page-grid">

          {/* MAIN */}
          <div>

            {/* ===== HERO ===== */}
            <div style={{ background: "linear-gradient(135deg, #eff6ff, #f8fafc)", border: "1px solid #dbeafe", borderRadius: "20px", padding: "2rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ width: "56px", height: "56px", background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
                  {item.icon}
                </div>
                {item.badge && <span className={`badge badge-${item.badgeType || "blue"}`}>{item.badge}</span>}
              </div>
              <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.4rem)", color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                {item.label} <span className="gradient-text">vergleichen</span>
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "540px" }}>
                {item.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
                {["✓ Kostenlos", "✓ Unverbindlich", "✓ Sofort online", ...(item.avgSaving ? [`✓ Ø ${item.avgSaving} Ersparnis`] : [])].map((f) => (
                  <span key={f} style={{ padding: "0.3rem 0.8rem", background: "#fff", border: "1px solid #dbeafe", borderRadius: "100px", fontSize: "0.78rem", color: "#1d4ed8", fontWeight: 500 }}>{f}</span>
                ))}
              </div>

              {/* Haupt-CTA */}
              <a
                href={item.tarifcheckUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.75rem",
                  padding: "1rem 2rem",
                  background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                  color: "#fff", textDecoration: "none",
                  borderRadius: "12px", fontWeight: 700, fontSize: "1.05rem",
                  fontFamily: "var(--font-syne)",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.35)",
                  transition: "all 0.2s",
                }}
                className="main-cta-btn"
              >
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                Jetzt {item.label} vergleichen
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <p style={{ marginTop: "0.75rem", fontSize: "0.75rem", color: "var(--text-light)" }}>
                Du wirst zu Tarifcheck.de weitergeleitet · Kostenlos & unverbindlich · Powered by Tarifcheck
              </p>
            </div>

            {/* ===== SO FUNKTIONIERT'S ===== */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "2rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.2rem", color: "#0f172a", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
                So funktioniert der Vergleich
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="steps-grid">
                {steps.map((step, i) => (
                  <div key={i} style={{ position: "relative" }}>
                    {/* Verbindungslinie */}
                    {i < steps.length - 1 && (
                      <div style={{ position: "absolute", top: "28px", left: "calc(50% + 28px)", right: "calc(-50% + 28px)", height: "2px", background: "linear-gradient(90deg, #bfdbfe, #e2e8f0)", zIndex: 0 }} className="step-line" />
                    )}
                    <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 0.5rem" }}>
                      {/* Schritt-Nummer */}
                      <div style={{ position: "relative", marginBottom: "0.875rem" }}>
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "linear-gradient(135deg, #dbeafe, #eff6ff)", border: "2px solid #bfdbfe", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", fontSize: "22px" }}>
                          {step.icon}
                        </div>
                        <div style={{ position: "absolute", top: "-4px", right: "calc(50% - 36px)", width: "20px", height: "20px", borderRadius: "50%", background: "var(--primary)", color: "#fff", fontSize: "0.65rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {i + 1}
                        </div>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#0f172a", marginBottom: "0.375rem", lineHeight: 1.3 }}>{step.title}</div>
                      <div style={{ fontSize: "0.775rem", color: "var(--text-muted)", lineHeight: 1.55 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sekundär-CTA */}
              <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem", borderTop: "1px solid #f1f5f9", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  Bereit? Der Vergleich dauert nur <strong style={{ color: "#0f172a" }}>2–3 Minuten</strong>.
                </div>
                <a
                  href={item.tarifcheckUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary"
                  style={{ fontSize: "0.875rem", padding: "0.65rem 1.375rem" }}
                >
                  Jetzt vergleichen →
                </a>
              </div>
            </div>

            {/* ===== VORTEILE ===== */}
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "20px", padding: "1.75rem" }}>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem", color: "#0f172a", marginBottom: "1.25rem" }}>
                Warum bei Vergleichsheld24 vergleichen?
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }} className="benefits-grid">
                {[
                  { icon: "🔒", text: "SSL-verschlüsselt & sicher" },
                  { icon: "💰", text: "Kostenlos & unverbindlich" },
                  { icon: "⚡", text: "Ergebnis in unter 3 Minuten" },
                  { icon: "🏆", text: "Über 100 Anbieter im Vergleich" },
                  { icon: "📱", text: "Auch mobil nutzbar" },
                  { icon: "✅", text: "Direkt online abschließen" },
                ].map((b) => (
                  <div key={b.text} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.85rem", color: "#374151" }}>
                    <span style={{ fontSize: "1rem" }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== SIDEBAR ===== */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="sidebar">

            {/* Sticky CTA Box */}
            <div style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", borderRadius: "16px", padding: "1.5rem", color: "#fff" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1rem", marginBottom: "0.5rem" }}>
                Jetzt {item.label} vergleichen
              </h3>
              <p style={{ fontSize: "0.8rem", opacity: 0.85, lineHeight: 1.6, marginBottom: "1.25rem" }}>
                Kostenlos, unverbindlich und in nur wenigen Minuten.
              </p>
              <a
                href={item.tarifcheckUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "#fff", color: "#1d4ed8", borderRadius: "10px", textDecoration: "none", fontWeight: 700, fontSize: "0.875rem", fontFamily: "var(--font-syne)" }}
              >
                Vergleich starten →
              </a>
              {item.avgSaving && (
                <p style={{ marginTop: "0.875rem", fontSize: "0.72rem", opacity: 0.75, textAlign: "center" }}>
                  Ø {item.avgSaving} Ersparnis möglich
                </p>
              )}
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.88rem", marginBottom: "0.75rem" }}>
                  Weitere {groupLabel}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/${basePath}/${r.slug}`} className="related-link">
                      <span>{r.icon}</span><span>{r.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Tarifcheck Badge */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "1.25rem", textAlign: "center" }}>
              <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-light)", marginBottom: "0.5rem" }}>
                Vergleich powered by
              </div>
              <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.1rem", color: "#0f172a", marginBottom: "0.25rem" }}>
                Tarifcheck.de
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                Über 18 Jahre Erfahrung im Versicherungsvergleich
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .page-grid { grid-template-columns: 1fr !important; }
          .sidebar { order: -1; }
        }
        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .step-line { display: none !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
        }
        .main-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37,99,235,0.45) !important;
        }
      `}</style>
    </div>
  );
}
