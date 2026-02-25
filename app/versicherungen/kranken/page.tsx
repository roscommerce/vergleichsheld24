import type { Metadata } from "next";
import Link from "next/link";
import TarifcheckWidget from "@/components/TarifcheckWidget";

export const metadata: Metadata = {
  title: "Krankenversicherung vergleichen – PKV & GKV im Vergleich",
  description: "Private und gesetzliche Krankenversicherung vergleichen. Finde den besten Tarif für deine Gesundheit. 100+ Anbieter im direkten Vergleich.",
  alternates: { canonical: "https://www.vergleichsheld24.de/versicherungen/kranken" },
};

export default function KrankenPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem" }}>
        <nav style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <span style={{ color: "#7dd3fc" }}>Krankenversicherung</span>
        </nav>
        <div style={{ maxWidth: "700px", marginBottom: "2.5rem" }}>
          <div className="badge badge-green" style={{ marginBottom: "1rem" }}>Gesundheit schützen</div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Krankenversicherung <span className="gradient-text">vergleichen</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            PKV oder GKZ? Finde den optimalen Krankenversicherungsschutz für deine individuelle Situation.
          </p>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <TarifcheckWidget type="kranken" height={520} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/" className="btn-ghost">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
}
