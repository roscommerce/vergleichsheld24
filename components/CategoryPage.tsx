"use client";

import Link from "next/link";
import { InsuranceItem, ALL_CATEGORIES } from "@/lib/categories";
import TarifcheckEmbed from "@/components/TarifcheckEmbed";

export default function CategoryPage({ item }: { item: InsuranceItem }) {
  const related = ALL_CATEGORIES.filter(
    (c) => c.group === item.group && c.slug !== item.slug
  ).slice(0, 6);

  const basePath = item.group === "finanzen" ? "finanzen"
    : item.group === "solar" ? "solar" : "versicherungen";

  const groupLabel = item.group === "finanzen" ? "Finanzen"
    : item.group === "solar" ? "Solaranlagen" : "Versicherungen";

  const groupAnchor = item.group;

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "70px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-light)", fontSize: "0.82rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <Link href={`/#${groupAnchor}`} style={{ color: "var(--text-light)", textDecoration: "none" }}>{groupLabel}</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)" }}>{item.label}</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "2rem", alignItems: "start" }} className="page-grid">

          {/* MAIN */}
          <div>
            <div style={{ background: "linear-gradient(135deg, #eff6ff, #f8fafc)", border: "1px solid #dbeafe", borderRadius: "16px", padding: "1.75rem", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "0.875rem" }}>
                <div style={{ width: "52px", height: "52px", background: "#fff", border: "1px solid #dbeafe", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
                  {item.icon}
                </div>
                {item.badge && <span className={`badge badge-${item.badgeType || "blue"}`}>{item.badge}</span>}
              </div>
              <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 4vw, 2.2rem)", color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: "0.625rem" }}>
                {item.label} <span className="gradient-text">vergleichen</span>
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "1rem", maxWidth: "560px" }}>
                {item.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {["✓ Kostenlos", "✓ Unverbindlich", "✓ Sofort online", ...(item.avgSaving ? [`✓ Ø ${item.avgSaving} Ersparnis`] : [])].map((f) => (
                  <span key={f} style={{ padding: "0.25rem 0.7rem", background: "#fff", border: "1px solid #dbeafe", borderRadius: "100px", fontSize: "0.75rem", color: "#1d4ed8", fontWeight: 500 }}>{f}</span>
                ))}
              </div>
            </div>

            {/* Tarifcheck Widget */}
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px", overflow: "hidden", marginBottom: "1.5rem", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ padding: "1rem 1.5rem", background: "linear-gradient(135deg, #eff6ff, #fff)", borderBottom: "1px solid #e2e8f0" }}>
                <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.15rem" }}>
                  Powered by Tarifcheck.de
                </div>
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.95rem", color: "#0f172a" }}>
                  {item.label} – Kostenloser Vergleich
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <TarifcheckEmbed slug={item.slug} label={item.label} />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="sidebar">
            <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", padding: "1.25rem" }}>
              <div style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>💡</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.375rem" }}>Kostenlos & unverbindlich</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.6 }}>Dein Vergleich ist immer kostenlos. Kein Abschluss nötig, keine versteckten Kosten.</p>
            </div>
            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.88rem", marginBottom: "0.75rem" }}>Weitere {groupLabel}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/${basePath}/${r.slug}`} className="related-link">
                      <span>{r.icon}</span><span>{r.label}</span>
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
