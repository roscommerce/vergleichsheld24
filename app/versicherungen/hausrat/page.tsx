import type { Metadata } from "next";
import Link from "next/link";
import TarifcheckWidget from "@/components/TarifcheckWidget";

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: "Hausratversicherung vergleichen – günstig & schnell",
  description: "Hausratversicherung jetzt vergleichen. Schutz für dein Inventar bei Einbruch, Feuer, Wasser & mehr. 100+ Anbieter kostenlos vergleichen.",
  alternates: { canonical: "https://www.vergleichsheld24.de/versicherungen/hausrat" },
};


export default function HausratPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem" }}>
        <nav style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <span style={{ color: "#7dd3fc" }}>Hausratversicherung</span>
        </nav>
        <div style={{ maxWidth: "700px", marginBottom: "2.5rem" }}>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Hausratversicherung <span className="gradient-text">günstig vergleichen</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Schütze dein Inventar vor Einbruch, Feuer, Leitungswasser und Sturm. Finde den besten Tarif für deinen Haushalt.
          </p>
        </div>
        <div style={{ marginBottom: "3rem" }}>
          <TarifcheckWidget type="hausrat" height={520} />
        </div>
        <div style={{ textAlign: "center" }}>
          <Link href="/" className="btn-ghost">← Zurück zur Übersicht</Link>
        </div>
      </div>
    </div>
  );
}
