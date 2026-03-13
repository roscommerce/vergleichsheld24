import type { Metadata } from "next";
import Link from "next/link";
import { getByGroup, InsuranceItem } from "@/lib/categories";


export const metadata: Metadata = {
  metadataBase: new URL("https://www.vergleichsheld24.de"),
  title: "Vergleichsheld24 – Versicherungen, Finanzen & Solaranlagen vergleichen",
  description: "Kostenloser Vergleich von Versicherungen, Finanzprodukten und Solaranlagen. Über 100 Anbieter im direkten Vergleich – unabhängig, kostenlos, sofort.",
  alternates: { canonical: "https://www.vergleichsheld24.de" },
};

function CatCard({ item, basePath }: { item: InsuranceItem; basePath: string }) {
  return (
    <Link href={`/${basePath}/${item.slug}`} className="cat-card">
      <div className="cat-card-icon">{item.icon}</div>
      <div className="cat-card-title">{item.label}</div>
      <div className="cat-card-desc">{item.shortDesc}</div>
      {item.avgSaving && <div className="cat-card-saving">✓ Ø {item.avgSaving} Ersparnis</div>}
      <div className="cat-card-arrow">
        Vergleichen <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    </Link>
  );
}

function SectionHeader({ label, icon, title, count }: { label: string; icon: string; title: React.ReactNode; count: number }) {
  return (
    <div style={{ marginBottom: "2rem", textAlign: "center" }}>
      <div className="section-label" style={{ margin: "0 auto 0.75rem", display: "inline-flex" }}>{icon} {label}</div>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap" }}>
        <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", color: "#0f172a", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          {title}
        </h2>
        <span style={{ color: "var(--text-light)", fontSize: "0.85rem", fontWeight: 400 }}>{count} Vergleiche</span>
      </div>
    </div>
  );
}

// Orbit-Berechnung
function orbitPos(angle: number, r: number, cx: number, cy: number) {
  const rad = (angle - 90) * Math.PI / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export default function HomePage() {
  const versicherungen = getByGroup("versicherungen");
  const finanzen = getByGroup("finanzen");
  const solar = getByGroup("solar");
  const orbitItems = [
    { icon: "🚗", angle: 0 }, { icon: "🏠", angle: 72 }, { icon: "💶", angle: 144 },
    { icon: "☀️", angle: 216 }, { icon: "💼", angle: 288 },
  ];

  return (
    <div style={{ background: "var(--bg)", paddingTop: "70px" }}>

      {/* ========== HERO ========== */}
      <section style={{ position: "relative", width: "100%", overflow: "hidden", borderBottom: "1px solid #e2e8f0" }}>

        {/* Hintergrund */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }} aria-hidden="true">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="heroBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eff6ff" />
                <stop offset="55%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#f0fdf4" />
              </linearGradient>
              <radialGradient id="glow1" cx="78%" cy="25%" r="45%">
                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#bfdbfe" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="glow2" cx="10%" cy="80%" r="35%">
                <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroBg)" />
            <rect width="100%" height="100%" fill="url(#glow1)" />
            <rect width="100%" height="100%" fill="url(#glow2)" />
            {/* Gepunktetes Grid */}
            {[...Array(7)].map((_, row) =>
              [...Array(14)].map((_, col) => (
                <circle key={`${row}-${col}`} cx={`${col * 7.5 + 3}%`} cy={row * 45 + 22} r="1.3" fill="#93c5fd" opacity="0.2" />
              ))
            )}
            {/* Große dezente Ringe oben rechts */}
            <circle cx="92%" cy="-5%" r="280" fill="none" stroke="#bfdbfe" strokeWidth="1.5" opacity="0.4" />
            <circle cx="92%" cy="-5%" r="200" fill="none" stroke="#bfdbfe" strokeWidth="1" strokeDasharray="6 8" opacity="0.35" />
          </svg>
        </div>

        {/* Inhalt */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "2.5rem 2rem 3rem", display: "grid", gridTemplateColumns: "1fr 260px", alignItems: "center", gap: "3rem" }} className="hero-grid">

          {/* Text-Block */}
          <div>
            <div className="badge badge-blue" style={{ marginBottom: "1rem", display: "inline-flex" }}>
              ✦ Versicherungen · Finanzen · Solaranlagen
            </div>
            <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.03em", lineHeight: 1.12, marginBottom: "1rem" }}>
              <span style={{ color: "#0f172a", display: "block" }}>Clever vergleichen —</span>
              <span className="gradient-text" style={{ display: "block" }}>kostenlos & unabhängig.</span>
            </h1>
            <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.5rem", maxWidth: "500px" }}>
              Über <strong style={{ color: "#0f172a" }}>100 Anbieter</strong> im direkten Vergleich.
              Spare in wenigen Minuten — unverbindlich und 100% kostenlos.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", marginBottom: "2rem" }}>
              <Link href="#versicherungen" className="btn-primary">🛡️ Versicherungen</Link>
              <Link href="#finanzen" className="btn-ghost">💶 Finanzen</Link>
              <Link href="#solar" className="btn-ghost">☀️ Solaranlagen</Link>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem" }}>
              {[{ val: "100+", label: "Anbieter" }, { val: "26", label: "Vergleiche" }, { val: "100%", label: "kostenlos" }, { val: "0 €", label: "Mehrkosten" }].map((s) => (
                <div key={s.label}>
                  <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.3rem", color: "var(--primary)", display: "block", lineHeight: 1 }}>{s.val}</span>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.2rem", display: "block" }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dekoratives Orbit-Element */}
          <div className="hero-deco" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ width: "240px", height: "240px", position: "relative" }}>
              {/* Ringe */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid #bfdbfe", opacity: 0.7 }} />
              <div style={{ position: "absolute", inset: "18px", borderRadius: "50%", border: "1px dashed #93c5fd", opacity: 0.5 }} />
              {/* Zentrum */}
              <div style={{ position: "absolute", inset: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(37,99,235,0.18), 0 2px 8px rgba(37,99,235,0.1)" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2.2rem", lineHeight: 1, marginBottom: "0.3rem" }}>🛡️</div>
                  <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "0.72rem", color: "#1d4ed8", lineHeight: 1.3 }}>Vergleichen<br />& Sparen</div>
                </div>
              </div>
              {/* Orbit-Icons */}
              {orbitItems.map(({ icon, angle }) => {
                const pos = orbitPos(angle, 96, 120, 120);
                return (
                  <div key={angle} style={{ position: "absolute", left: pos.x - 19, top: pos.y - 19, width: "38px", height: "38px", borderRadius: "50%", background: "#fff", border: "1.5px solid #dbeafe", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "17px", boxShadow: "0 2px 10px rgba(37,99,235,0.12)" }}>
                    {icon}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========== VERSICHERUNGEN ========== */}
      <section id="versicherungen" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Versicherungen" icon="🛡️" title={<>Alle <span className="gradient-text">Versicherungen</span> vergleichen</>} count={versicherungen.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))", gap: "1rem" }}>
          {versicherungen.map((item) => <CatCard key={item.slug} item={item} basePath="versicherungen" />)}
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />
      </div>

      {/* ========== FINANZEN ========== */}
      <section id="finanzen" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Finanzen" icon="💶" title={<><span className="gradient-text">Finanzen</span> vergleichen</>} count={finanzen.length} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          {finanzen.map((item) => (
            <div key={item.slug} style={{ width: "calc(25% - 0.75rem)", minWidth: "185px", flex: "0 1 calc(25% - 0.75rem)" }}>
              <CatCard item={item} basePath="finanzen" />
            </div>
          ))}
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />
      </div>

      {/* ========== SOLAR ========== */}
      <section id="solar" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Solaranlagen" icon="☀️" title={<><span className="gradient-text">Solaranlage</span> vergleichen</>} count={1} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "185px" }}>
            <CatCard item={solar[0]} basePath="solar" />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />
      </div>

      {/* ========== TRUST ========== */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "2rem", textAlign: "center" }}>
            Warum <span className="gradient-text">Vergleichsheld24?</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            {[
              { icon: "🔒", title: "Sicher & verschlüsselt", text: "SSL-Verschlüsselung. Deine Daten werden nicht an Dritte weitergegeben." },
              { icon: "💰", title: "100% kostenlos", text: "Dein Vergleich ist immer kostenlos und völlig unverbindlich." },
              { icon: "⚡", title: "Sofortergebnis", text: "In Sekunden alle Tarife im direkten Vergleich – ohne Wartezeit." },
              { icon: "🏆", title: "Powered by Tarifcheck", text: "Über 18 Jahre Erfahrung – eines der führenden Vergleichsportale Deutschlands." },
            ].map((t) => (
              <div key={t.title} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "14px", padding: "1.25rem", flex: "1 1 200px", maxWidth: "280px" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.625rem" }}>{t.icon}</div>
                <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#0f172a", marginBottom: "0.375rem" }}>{t.title}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.82rem", lineHeight: 1.6 }}>{t.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "3rem 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "0.75rem" }}>
            Bereit zum <span className="gradient-text">Vergleichen?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            26 Vergleiche, 100% kostenlos. Finde jetzt den besten Tarif.
          </p>
          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/versicherungen/kfz" className="btn-primary">🚗 Kfz vergleichen</Link>
            <Link href="/versicherungen/haftpflicht" className="btn-ghost">🏠 Haftpflicht vergleichen</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-deco { display: none !important; }
        }
      `}</style>
    </div>
  );
}
