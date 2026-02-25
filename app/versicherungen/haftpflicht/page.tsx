import type { Metadata } from "next";
import Link from "next/link";
import TarifcheckWidget from "@/components/TarifcheckWidget";

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: "Haftpflichtversicherung vergleichen – ab 2 € im Monat",
  description:
    "Private Haftpflichtversicherung jetzt vergleichen. Die wichtigste Versicherung für jeden – ab 2 € im Monat. 100+ Anbieter kostenlos vergleichen.",
  alternates: {
    canonical: "https://www.vergleichsheld24.de/versicherungen/haftpflicht",
  },
};


export default function HaftpflichtPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "1.5rem" }}>
        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: "0.5rem", color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", marginBottom: "2rem" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Startseite</Link>
          <span>/</span>
          <span style={{ color: "#7dd3fc" }}>Haftpflichtversicherung</span>
        </nav>


        <div style={{ maxWidth: "700px", marginBottom: "2.5rem" }}>
          <div className="badge badge-orange" style={{ marginBottom: "1rem" }}>Pflichtschutz für jeden</div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.25rem" }}>
            Haftpflichtversicherung{" "}
            <span className="gradient-text">ab 2 € im Monat</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}>
            Die private Haftpflicht ist die wichtigste Versicherung, die du haben kannst.
            Sie schützt dich vor existenzbedrohenden Schadensersatzforderungen.
          </p>
        </div>


        <div style={{ marginBottom: "3rem" }}>
          <TarifcheckWidget type="haftpflicht" height={520} />
        </div>


        <div className="glass" style={{ borderRadius: "1.25rem", padding: "2rem", marginBottom: "2rem" }}>
          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.4rem", color: "#fff", marginBottom: "1rem" }}>
            Warum ist die private Haftpflicht so wichtig?
          </h2>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.925rem", lineHeight: 1.75, display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p>
              Wer anderen einen Schaden zufügt, haftet im schlimmsten Fall mit seinem <strong style={{ color: "#fff" }}>gesamten Vermögen – ein Leben lang</strong>.
              Ein unachtsamer Moment kann zu sechsstelligen Schadensersatzforderungen führen.
            </p>
            <p>
              Die <strong style={{ color: "#fff" }}>private Haftpflichtversicherung</strong> springt ein, wenn du versehentlich
              eine Vase im Freundeshaus zerbrichst, jemanden beim Radfahren anrempelst oder dein Kind in der Schule etwas beschädigt.
            </p>
            <p>
              Für wenige Euro im Monat bist du umfassend geschützt – für Einzel- und Familienpolicen gleichermaßen.
            </p>
          </div>
        </div>


        <div style={{ marginBottom: "3rem" }}>
