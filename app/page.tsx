import type { Metadata } from "next";
import Link from "next/link";
import { getByGroup, InsuranceItem } from "@/lib/categories";
import AdSlot from "@/components/AdSlot";

export const dynamic = "force-dynamic";


export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  metadataBase: new URL("https://www.vergleichsheld24.de"),
  title: "Vergleichsheld24 – Versicherungen, Finanzen & Solar vergleichen",
  description:
    "Kostenloser Vergleich von Versicherungen, Finanzprodukten und Solaranlagen. Über 100 Anbieter im direkten Vergleich – unabhängig, kostenlos, sofort.",
};


export const dynamic = "force-dynamic";
function CategoryCard({ item, basePath }: { item: InsuranceItem; basePath: string }) {
  return (
    <Link href={`/${basePath}/${item.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div className="glass glass-hover" style={{ borderRadius: "1rem", padding: "1.25rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "1rem" }}>
        <div style={{ width: "44px", height: "44px", background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", border: "1px solid rgba(14,165,233,0.15)", flexShrink: 0 }}>
          {item.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#fff", marginBottom: "0.2rem" }}>{item.label}</div>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.shortDesc}</div>
        </div>
        {item.badge && <span className={`badge badge-${item.badgeType || "blue"}`} style={{ fontSize: "0.65rem", flexShrink: 0 }}>{item.badge}</span>}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" style={{ flexShrink: 0 }}><polyline points="9 18 15 12 9 6" /></svg>
      </div>
    </Link>
  );
}


export const dynamic = "force-dynamic";
export default function HomePage() {
  const versicherungen = getByGroup("versicherungen");
  const finanzen = getByGroup("finanzen");


export const dynamic = "force-dynamic";
  const featured = versicherungen.filter((v) =>
    ["kfz", "haftpflicht", "hausrat", "berufsunfaehigkeit", "pkv-vollversicherung", "rechtsschutz"].includes(v.slug)
  );
  const rest = versicherungen.filter((v) => !featured.find((f) => f.slug === v.slug));


export const dynamic = "force-dynamic";
  return (
    <div className="mesh-bg">


export const dynamic = "force-dynamic";
      {/* HERO */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", padding: "140px 1.5rem 80px", maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
        <div style={{ position: "absolute", top: "60px", right: "5%", width: "500px", height: "500px", background: "radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "780px", position: "relative" }}>
          <div className="badge badge-blue animate-on-scroll" style={{ marginBottom: "1.5rem" }}>
            <span>✦</span> Versicherungen · Finanzen · Solar
          </div>
          <h1 className="animate-on-scroll stagger-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.4rem, 6vw, 4.5rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1.5rem" }}>
            Der clevere Vergleich für{" "}
            <span className="gradient-text">Versicherungen,<br />Finanzen & Solar.</span>
          </h1>
          <p className="animate-on-scroll stagger-2" style={{ fontSize: "1.15rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "600px" }}>
            Über <strong style={{ color: "#fff" }}>100 Anbieter</strong> im direkten Vergleich.
            Kostenlos, unabhängig und in unter 3 Minuten zum besten Tarif.
          </p>
          <div className="animate-on-scroll stagger-3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem" }}>
            <Link href="/versicherungen/kfz" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              <span>🚗</span> Kfz vergleichen
            </Link>
            <Link href="/solar/solar" className="btn-accent" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              <span>☀️</span> Solar NEU
            </Link>
            <Link href="#versicherungen" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              Alle Vergleiche →
            </Link>
          </div>
          <div className="animate-on-scroll stagger-4" style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem" }}>
            {[{ val: "100+", desc: "Anbieter" }, { val: "26", desc: "Produkte" }, { val: "3 Min.", desc: "zum besten Tarif" }, { val: "100%", desc: "kostenlos" }].map((s) => (
              <div key={s.desc}>
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.25rem", color: "#7dd3fc", display: "block" }}>{s.val}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* AD TOP */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 3rem", padding: "0 1.5rem" }}>
        <AdSlot slot="1234567890" format="horizontal" style={{ height: "90px" }} />
      </div>


export const dynamic = "force-dynamic";
      {/* VERSICHERUNGEN */}
      <section id="versicherungen" style={{ maxWidth: "1280px", margin: "0 auto 5rem", padding: "0 1.5rem" }}>
        <div className="animate-on-scroll" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <div>
            <div className="badge badge-blue" style={{ marginBottom: "0.75rem" }}>🛡️ Versicherungen</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#fff", letterSpacing: "-0.02em" }}>
              Alle <span className="gradient-text">Versicherungen</span> vergleichen
            </h2>
          </div>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem" }}>{versicherungen.length} Vergleiche</span>
        </div>


export const dynamic = "force-dynamic";
        {/* Featured als große Karten */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
          {featured.map((item, i) => (
            <Link key={item.slug} href={`/versicherungen/${item.slug}`} className="animate-on-scroll" style={{ textDecoration: "none", transitionDelay: `${i * 60}ms` }}>
              <div className="glass glass-hover" style={{ borderRadius: "1.25rem", padding: "1.5rem", height: "100%", cursor: "pointer", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20px", right: "-20px", width: "80px", height: "80px", background: "radial-gradient(circle, rgba(14,165,233,0.07), transparent 70%)", pointerEvents: "none" }} />
                <div style={{ width: "46px", height: "46px", background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", border: "1px solid rgba(14,165,233,0.15)", marginBottom: "1rem" }}>{item.icon}</div>
                {item.badge && <span className={`badge badge-${item.badgeType}`} style={{ marginBottom: "0.75rem", display: "inline-flex", fontSize: "0.7rem" }}>{item.badge}</span>}
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1rem", color: "#fff", marginBottom: "0.5rem" }}>{item.label}</h3>
                <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1rem" }}>{item.shortDesc}</p>
                {item.avgSaving && (
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", padding: "0.3rem 0.625rem", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", fontSize: "0.73rem", fontWeight: 600, color: "#86efac", marginBottom: "0.875rem" }}>
                    ✓ Ø {item.avgSaving} Ersparnis
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#38bdf8", fontSize: "0.82rem", fontWeight: 600 }}>
                  Vergleich starten
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>


export const dynamic = "force-dynamic";
        {/* Rest als kompakte Liste */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
          {rest.map((item) => <CategoryCard key={item.slug} item={item} basePath="versicherungen" />)}
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* AD MID */}
      <div style={{ maxWidth: "1280px", margin: "0 auto 3rem", padding: "0 1.5rem" }}>
        <AdSlot slot="0987654321" format="rectangle" style={{ height: "250px", maxWidth: "728px", margin: "0 auto" }} />
      </div>


export const dynamic = "force-dynamic";
      {/* FINANZEN */}
      <section id="finanzen" style={{ maxWidth: "1280px", margin: "0 auto 5rem", padding: "0 1.5rem" }}>
        <div className="animate-on-scroll" style={{ marginBottom: "2rem" }}>
          <div className="badge badge-green" style={{ marginBottom: "0.75rem" }}>💶 Finanzen</div>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "#fff", letterSpacing: "-0.02em" }}>
            <span className="gradient-text">Finanzen</span> vergleichen
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
            Girokonto, Kredit, Baufinanzierung & Kreditkarte.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem" }}>
          {finanzen.map((item) => <CategoryCard key={item.slug} item={item} basePath="finanzen" />)}
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* SOLAR */}
      <section id="solar" style={{ maxWidth: "1280px", margin: "0 auto 5rem", padding: "0 1.5rem" }}>
        <div className="animate-on-scroll" style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(251,191,36,0.06))", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "1.5rem", padding: "clamp(2rem, 5vw, 3.5rem)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <div className="badge badge-orange" style={{ marginBottom: "1rem" }}>☀️ NEU bei Tarifcheck</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 2.4rem)", color: "#fff", letterSpacing: "-0.02em", marginBottom: "0.875rem" }}>
              <span className="gradient-text-warm">Solaranlage</span> vergleichen
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "520px", marginBottom: "1.5rem" }}>
              Photovoltaik-Anlagen für dein Eigenheim vergleichen.
              Strom selbst erzeugen, Kosten senken, Umwelt schützen.
            </p>
            <Link href="/solar/solar" className="btn-accent" style={{ fontSize: "1rem", padding: "0.875rem 1.75rem" }}>
              ☀️ Jetzt Solar vergleichen →
            </Link>
          </div>
          <div style={{ fontSize: "5rem" }}>☀️</div>
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* TRUST */}
      <section style={{ maxWidth: "1280px", margin: "0 auto 5rem", padding: "0 1.5rem" }}>
        <div className="animate-on-scroll" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "#fff", letterSpacing: "-0.02em" }}>
            Warum <span className="gradient-text">Vergleichsheld24?</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
          {[
            { icon: "🔒", title: "Sicher & verschlüsselt", text: "SSL-Verschlüsselung. Deine Daten werden nicht an Dritte weitergegeben." },
            { icon: "⚡", title: "Sofortiger Vergleich", text: "In Sekunden alle Tarife im direkten Vergleich – ohne Wartezeit." },
            { icon: "💰", title: "Immer kostenlos", text: "Dein Vergleich ist 100 % kostenlos und völlig unverbindlich." },
            { icon: "🏆", title: "Powered by Tarifcheck", text: "Über 18 Jahre Erfahrung – Deutschlands führendes Vergleichsportal." },
          ].map((t, i) => (
            <div key={t.title} className="glass animate-on-scroll" style={{ borderRadius: "1.25rem", padding: "1.5rem", transitionDelay: `${i * 80}ms` }}>
              <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>{t.icon}</div>
              <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: "0.5rem" }}>{t.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.85rem", lineHeight: 1.65 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* BOTTOM CTA */}
      <section style={{ maxWidth: "1280px", margin: "0 auto 5rem", padding: "0 1.5rem" }}>
        <div className="animate-on-scroll" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.12), rgba(14,165,233,0.04))", border: "1px solid rgba(14,165,233,0.2)", borderRadius: "1.5rem", padding: "clamp(2.5rem, 6vw, 4rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-80px", left: "50%", transform: "translateX(-50%)", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(14,165,233,0.07), transparent 70%)", pointerEvents: "none" }} />
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🛡️</div>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#fff", letterSpacing: "-0.02em", marginBottom: "1rem" }}>
              Starte deinen <span className="gradient-text">kostenlosen Vergleich</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", marginBottom: "2rem", maxWidth: "460px", margin: "0 auto 2rem", lineHeight: 1.65 }}>
              26 Vergleiche. Kein Aufwand, keine Kosten. Finde in Minuten den besten Tarif.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/versicherungen/kfz" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 1.75rem" }}>🚗 Kfz vergleichen</Link>
              <Link href="/versicherungen/haftpflicht" className="btn-accent" style={{ fontSize: "1rem", padding: "1rem 1.75rem" }}>🏠 Haftpflicht vergleichen</Link>
              <Link href="/solar/solar" className="btn-ghost" style={{ fontSize: "1rem", padding: "1rem 1.75rem" }}>☀️ Solar vergleichen</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
