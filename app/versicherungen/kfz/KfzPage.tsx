"use client";

import Link from "next/link";
import { InsuranceItem, ALL_CATEGORIES } from "@/lib/categories";
import Script from "next/script";

export default function KfzPage({ item }: { item: InsuranceItem }) {
  const related = ALL_CATEGORIES.filter(
    (c) => c.group === "versicherungen" && c.slug !== "kfz"
  ).slice(0, 5);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", paddingTop: "70px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "2rem 1.5rem" }}>

        {/* Breadcrumb */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-light)", fontSize: "0.82rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--text-light)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <Link href="/#versicherungen" style={{ color: "var(--text-light)", textDecoration: "none" }}>Versicherungen</Link>
          <span>/</span>
          <span style={{ color: "var(--primary)" }}>Kfz-Versicherung</span>
        </nav>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "2rem", alignItems: "start" }} className="page-grid">

          {/* MAIN */}
          <div>
            {/* Hero */}
            <div style={{
              background: "linear-gradient(135deg, #eff6ff, #f8fafc)",
              border: "1px solid #dbeafe", borderRadius: "16px",
              padding: "2rem", marginBottom: "1.5rem",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", marginBottom: "1rem" }}>
                <div style={{ width: "56px", height: "56px", background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "26px", flexShrink: 0, boxShadow: "0 2px 8px rgba(37,99,235,0.08)" }}>
                  🚗
                </div>
                <span className="badge badge-orange">Beliebt</span>
              </div>
              <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.75rem, 4vw, 2.5rem)", color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.15, marginBottom: "0.75rem" }}>
                Kfz-Versicherung <span className="gradient-text">vergleichen</span>
              </h1>
              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.25rem", maxWidth: "560px" }}>
                {item.description}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["✓ Kostenlos", "✓ Unverbindlich", "✓ Sofort online", "✓ Ø 850 € Ersparnis"].map((f) => (
                  <span key={f} style={{ padding: "0.3rem 0.75rem", background: "#fff", border: "1px solid #dbeafe", borderRadius: "100px", fontSize: "0.78rem", color: "#1d4ed8", fontWeight: 500 }}>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* ===== ECHTER TARIFCHECK WIDGET ===== */}
            <div style={{
              background: "#fff", border: "1px solid #e2e8f0", borderRadius: "16px",
              overflow: "hidden", marginBottom: "1.5rem",
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                padding: "1.25rem 1.5rem",
                background: "linear-gradient(135deg, #eff6ff, #fff)",
                borderBottom: "1px solid #e2e8f0",
                display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem",
              }}>
                <div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--primary)", marginBottom: "0.2rem" }}>
                    Powered by Tarifcheck.de
                  </div>
                  <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1rem", color: "#0f172a" }}>
                    Kfz-Versicherung – Kostenloser Vergleich
                  </div>
                </div>
              </div>

              {/* Echter Widget-Code von Tarifcheck */}
              <div style={{ padding: "1.5rem", minHeight: "400px" }}>
                <div style={{ width: "100%" }} id="tcpp-iframe-kfz"></div>
                <Script
                  src="https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-kfz/kfz-iframe.js"
                  strategy="lazyOnload"
                />
              </div>
            </div>
          </div>

          {/* SIDEBAR */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} className="sidebar">
            <div style={{ background: "#fff", border: "1px solid #dbeafe", borderRadius: "14px", padding: "1.25rem" }}>
              <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>💡</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.95rem", marginBottom: "0.4rem" }}>
                Kostenlos & unverbindlich
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                Dein Vergleich ist immer kostenlos. Kein Abschluss nötig, keine versteckten Kosten.
              </p>
            </div>

            {related.length > 0 && (
              <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#0f172a", fontSize: "0.9rem", marginBottom: "0.875rem" }}>
                  Weitere Vergleiche
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  {related.map((r) => (
                    <Link key={r.slug} href={`/versicherungen/${r.slug}`} className="related-link">
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
