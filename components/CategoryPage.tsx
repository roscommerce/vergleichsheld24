"use client";

import Link from "next/link";
import { InsuranceItem, ALL_CATEGORIES } from "@/lib/categories";

interface CategoryPageProps {
  item: InsuranceItem;
}

export default function CategoryPage({ item }: CategoryPageProps) {
  const related = ALL_CATEGORIES.filter(
    (c) => c.group === item.group && c.slug !== item.slug
  ).slice(0, 5);

  const basePath = item.group === "versicherungen" ? "versicherungen"
    : item.group === "finanzen" ? "finanzen" : "solar";

  const groupLabel = item.group === "versicherungen" ? "Versicherungen"
    : item.group === "finanzen" ? "Finanzen" : "Solaranlagen";

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "70px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-light)", fontSize: "0.82rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <Link href={`/#${item.group}`} style={{ color: "var(--text-light)", textDecoration: "none" }}>{groupLabel}</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)" }}>{item.label}</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "2rem", alignItems: "start" }} className="page-grid">

          {/* MAIN */}
          <div>
            {/* Hero */}
            <div style={{
              background: "linear-gradient(135deg, #eff6ff, #f8fafc)",
              border: "1px solid #dbeafe",
              borderRadius: "16px",
              padding: "2rem",
              marginBottom: "1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
                <div style={{ width: "56px", height: "56px", background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
                  {item.icon}
                </div>
                {item.badge && (
                  <span className={`badge badge-${item.badgeType || "blue"}`}>{item.badge}</span>
                )}
              </div>

              <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                {item.label} <span className="gradient-text">vergleichen</span>
              </h1>

              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "560px" }}>
                {item.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["✓ Kostenlos", "✓ Unverbindlich", "✓ Sofort online", ...(item.avgSaving ? [`✓ Ø ${item.avgSaving} Ersparnis`] : [])].map((f) => (
                  <span key={f} style={{ padding: "0.3rem 0.75rem", background: "#fff", border: "1px solid #dbeafe", borderRadius: "100px", fontSize: "0.78rem", color: "#1d4ed8", fontWeight: 500 }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Widget */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              {/* Widget Header */}
              <div style={{ padding: "1.25rem 1.5rem", background: "linear-gradient(135deg, #eff6ff, #fff)", borderBottom: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.2rem" }}>
                    Powered by Tarifcheck.de
                  </div>
                  <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1rem", color: "#0f172a" }}>
                    {item.label} – Kostenloser Vergleich
                  </div>
                </div>
                <a href={item.tarifcheckUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}>
                  Direkt vergleichen ↗
                </a>
              </div>

              {/* Widget Body – Hier Tarifcheck-iframe einsetzen */}
              <div style={{ minHeight: "440px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", padding: "2.5rem", textAlign: "center", background: "#fafbfc" }}>
                <div style={{ fontSize: "3rem" }}>{item.icon}</div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "1rem", color: "#0f172a", marginBottom: "0.4rem", fontFamily: "var(--font-syne)" }}>
                    {item.label} – {item.shortDesc}
                  </p>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", maxWidth: "340px", lineHeight: 1.6 }}>
                    Trage hier deinen Tarifcheck Affiliate-Widget-Code ein.
                    Du findest ihn in deinem Partnerprogramm unter „Werbemittel".
                  </p>
                </div>
                <a href={item.tarifcheckUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary">
                  Jetzt kostenlos vergleichen →
                </a>
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="sidebar">

            {/* CTA Box */}
            <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", padding: "1.25rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>💡</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                Kostenlos & unverbindlich
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                Dein Vergleich ist immer kostenlos. Kein Abschluss nötig, keine versteckten Kosten.
              </p>
              <a href={item.tarifcheckUrl} target="_blank" rel="noopener noreferrer nofollow" className="btn-primary" style={{ fontSize: "0.82rem", padding: "0.6rem 1rem", width: "100%", justifyContent: "center" }}>
                Jetzt vergleichen →
              </a>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.875rem" }}>
                  Weitere Vergleiche
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/${basePath}/${r.slug}`} className="related-link">
                      <span>{r.icon}</span>
                      <span>{r.label}</span>
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
      `}</style>
    </div>
  );
}
