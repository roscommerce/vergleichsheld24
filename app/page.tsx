import type { Metadata } from "next";
import Link from "next/link";
import { getByGroup, InsuranceItem } from "@/lib/categories";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vergleichsheld24.de"),
  title: "Vergleichsheld24 – Versicherungen, Finanzen & Solaranlagen vergleichen",
  description: "Kostenloser Vergleich von Versicherungen, Finanzprodukten und Solaranlagen. Über 100 Anbieter im direkten Vergleich – unabhängig, kostenlos, sofort.",
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

export default function HomePage() {
  const versicherungen = getByGroup("versicherungen");
  const finanzen = getByGroup("finanzen");
  const solar = getByGroup("solar");

  return (
    <div style={{ background: "var(--bg)", paddingTop: "70px" }}>

      {/* ========== HERO – kompakt, volle Breite, zentriert ========== */}
      <section style={{
        background: "linear-gradient(160deg, #eff6ff 0%, #f8fafc 60%, #f0fdf4 100%)",
        borderBottom: "1px solid #e2e8f0",
        padding: "3rem 1.5rem",           /* kompakter als vorher */
        textAlign: "center",
        width: "100%",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div className="badge badge-blue" style={{ marginBottom: "1rem", display: "inline-flex" }}>
            ✦ Versicherungen · Finanzen · Solaranlagen
          </div>
          <h1 style={{
            fontFamily: "var(--font-syne)", fontWeight: 800,
            fontSize: "clamp(2rem, 5vw, 3.2rem)",   /* etwas kleiner = weniger hoch */
            color: "#0f172a", letterSpacing: "-0.03em", lineHeight: 1.15,
            marginBottom: "1rem",
          }}>
            Clever vergleichen —{" "}
            <span className="gradient-text">kostenlos & unabhängig.</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            Über <strong style={{ color: "#0f172a" }}>100 Anbieter</strong> im direkten Vergleich.
            Finde in wenigen Minuten den besten Tarif.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "2rem" }}>
            <Link href="/versicherungen/kfz" className="btn-primary">🚗 Kfz vergleichen</Link>
            <Link href="/solar" className="btn-accent">☀️ Solaranlage vergleichen</Link>
            <Link href="#versicherungen" className="btn-ghost">Alle Vergleiche</Link>
          </div>
          {/* Stats */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
            {[{ val: "100+", label: "Anbieter" }, { val: "26", label: "Produkte" }, { val: "100%", label: "kostenlos" }, { val: "0 €", label: "Mehrkosten" }].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.4rem", color: "var(--primary)", display: "block" }}>{s.val}</span>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VERSICHERUNGEN ========== */}
      <section id="versicherungen" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Versicherungen" icon="🛡️"
          title={<>Alle <span className="gradient-text">Versicherungen</span> vergleichen</>}
          count={versicherungen.length} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(185px, 1fr))", gap: "1rem" }}>
          {versicherungen.map((item) => <CatCard key={item.slug} item={item} basePath="versicherungen" />)}
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />
      </div>

      {/* ========== FINANZEN – zentriert ========== */}
      <section id="finanzen" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Finanzen" icon="💶"
          title={<><span className="gradient-text">Finanzen</span> vergleichen</>}
          count={finanzen.length} />
        {/* Kacheln zentriert wenn weniger als 5 */}
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

      {/* ========== SOLAR – gleiche Kachel wie alle anderen ========== */}
      <section id="solar" style={{ maxWidth: "1280px", margin: "0 auto", padding: "3.5rem 1.5rem" }}>
        <SectionHeader label="Solaranlagen" icon="☀️"
          title={<><span className="gradient-text">Solaranlage</span> vergleichen</>}
          count={1} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "185px" }}>
            <CatCard item={solar[0]} basePath="solar" />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0" }} />
      </div>

      {/* ========== TRUST – zentriert ========== */}
      <section style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#0f172a", letterSpacing: "-0.02em", marginBottom: "2rem", textAlign: "center" }}>
            Warum <span className="gradient-text">Vergleichsheld24?</span>
          </h2>
          {/* Trust-Kacheln zentriert */}
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

      {/* ========== CTA – zentriert ========== */}
      <section style={{ background: "#fff", borderTop: "1px solid #e2e8f0", padding: "3.5rem 1.5rem", textAlign: "center" }}>
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
    </div>
  );
}
