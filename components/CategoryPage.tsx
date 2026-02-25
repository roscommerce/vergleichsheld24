"use client";

// ================================================================
// Universelle Seiten-Komponente für alle Tarifcheck-Kategorien
// Wird von allen Unterseiten genutzt – kein Duplikat-Code
// ================================================================

import Link from "next/link";
import { InsuranceItem, ALL_CATEGORIES } from "@/lib/categories";
import AdSlot from "@/components/AdSlot";

interface CategoryPageProps {
  item: InsuranceItem;
}

export default function CategoryPage({ item }: CategoryPageProps) {
  // Ähnliche Kategorien (gleiche Gruppe, max 4)
  const related = ALL_CATEGORIES.filter(
    (c) => c.group === item.group && c.slug !== item.slug
  ).slice(0, 4);

  const groupLabel =
    item.group === "versicherungen"
      ? "Versicherungen"
      : item.group === "finanzen"
      ? "Finanzen"
      : "Solar";

  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem" }}>

        {/* Breadcrumb */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.8rem",
            marginBottom: "2.5rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
            Startseite
          </Link>
          <span>/</span>
          <Link href={`/#${item.group}`} style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
            {groupLabel}
          </Link>
          <span>/</span>
          <span style={{ color: "#7dd3fc" }}>{item.label}</span>
        </nav>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr min(340px, 30%)",
            gap: "2rem",
            alignItems: "start",
          }}
          className="page-grid"
        >
          {/* MAIN CONTENT */}
          <div>
            {/* Hero */}
            <div style={{ marginBottom: "2.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "linear-gradient(135deg, rgba(14,165,233,0.2), rgba(14,165,233,0.05))",
                    border: "1px solid rgba(14,165,233,0.2)",
                    borderRadius: "18px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                {item.badge && (
                  <span className={`badge badge-${item.badgeType || "blue"}`}>
                    {item.badge}
                  </span>
                )}
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  color: "#fff",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  marginBottom: "1rem",
                }}
              >
                {item.label}{" "}
                <span className="gradient-text">vergleichen</span>
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  maxWidth: "620px",
                  marginBottom: "1.5rem",
                }}
              >
                {item.description}
              </p>

              {/* Feature pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                {[
                  "✓ 100% kostenlos",
                  "✓ Unverbindlich",
                  "✓ Sofort online",
                  ...(item.avgSaving ? [`✓ Ø ${item.avgSaving} Ersparnis`] : []),
                ].map((f) => (
                  <span
                    key={f}
                    style={{
                      padding: "0.375rem 0.75rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "100px",
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.65)",
                      fontWeight: 500,
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* ============================================================
                TARIFCHECK WIDGET
                Ersetze diesen Block mit deinem echten iframe-Code von
                Tarifcheck, sobald du im Partnerprogramm eingeloggt bist.
                ============================================================ */}
            <div
              style={{
                borderRadius: "1.25rem",
                overflow: "hidden",
                border: "1px solid rgba(14,165,233,0.15)",
                background: "rgba(255,255,255,0.02)",
                marginBottom: "2.5rem",
                boxShadow: "0 20px 80px rgba(0,0,0,0.4)",
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
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7dd3fc", marginBottom: "0.2rem" }}>
                    Powered by Tarifcheck.de
                  </div>
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "1rem", fontFamily: "var(--font-syne)" }}>
                    {item.label} — Kostenloser Vergleich
                  </div>
                </div>
                <a
                  href={item.tarifcheckUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-primary"
                  style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
                >
                  Direkt vergleichen ↗
                </a>
              </div>

              {/* Widget Body – HIER deinen Tarifcheck iframe einsetzen */}
              <div
                style={{
                  minHeight: "480px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.25rem",
                  padding: "2.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "3.5rem" }}>{item.icon}</div>
                <div>
                  <p style={{ color: "#fff", fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem", fontFamily: "var(--font-syne)" }}>
                    {item.label} – {item.shortDesc}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", maxWidth: "360px", lineHeight: 1.6 }}>
                    Trage hier deinen Tarifcheck Affiliate-Widget-Code ein.
                    Du findest ihn in deinem Partnerprogramm unter „Werbemittel".
                  </p>
                </div>
                <a
                  href={item.tarifcheckUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="btn-accent"
                >
                  Jetzt kostenlos vergleichen →
                </a>
              </div>
            </div>

            {/* Ad Slot – In Content */}
            <AdSlot
              slot="5544332211"
              format="horizontal"
              style={{ height: "90px", marginBottom: "2rem" }}
            />
          </div>

          {/* SIDEBAR */}
          <div className="sidebar" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>

            {/* CTA Box */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04))",
                border: "1px solid rgba(249,115,22,0.2)",
                borderRadius: "1.25rem",
                padding: "1.5rem",
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>💡</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#fff", fontSize: "1rem", marginBottom: "0.5rem" }}>
                Kostenlos & unverbindlich
              </h3>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                Dein Vergleich auf Vergleichsheld24 ist immer kostenlos und 100 % unverbindlich. Kein Abschluss nötig.
              </p>
              <a
                href={item.tarifcheckUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-accent"
                style={{ fontSize: "0.85rem", padding: "0.7rem 1.25rem", display: "inline-flex" }}
              >
                Jetzt vergleichen →
              </a>
            </div>

            {/* Ad Slot Sidebar */}
            <AdSlot
              slot="9988776655"
              format="vertical"
              style={{ height: "300px" }}
            />

            {/* Related */}
            {related.length > 0 && (
              <div className="glass" style={{ borderRadius: "1.25rem", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#fff", fontSize: "0.95rem", marginBottom: "1rem" }}>
                  Weitere Vergleiche
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/${r.group === "versicherungen" ? "versicherungen" : r.group === "finanzen" ? "finanzen" : "solar"}/${r.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        padding: "0.625rem 0.75rem",
                        borderRadius: "0.625rem",
                        color: "rgba(255,255,255,0.65)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        transition: "all 0.15s",
                      }}
                      className="related-link"
                    >
                      <span>{r.icon}</span>
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .page-grid { grid-template-columns: 1fr !important; }
          .sidebar { order: -1; }
        }
        .related-link:hover {
          background: rgba(14,165,233,0.08) !important;
          color: #7dd3fc !important;
        }
      `}</style>
    </div>
  );
}
