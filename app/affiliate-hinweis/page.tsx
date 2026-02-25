import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Affiliate-Hinweis",
  description: "Transparenzhinweis zu Affiliate-Links auf Vergleichsheld24",
  robots: { index: true, follow: true },
};

export default function AffiliateHinweisPage() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Affiliate-Hinweis
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "0.85rem", marginBottom: "3rem" }}>
          Transparenz ist uns wichtig – hier erklären wir, wie wir Geld verdienen.
        </p>

        <div
          style={{
            background: "linear-gradient(135deg, rgba(14,165,233,0.08), rgba(14,165,233,0.03))",
            border: "1px solid #bfdbfe",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", lineHeight: 1.75 }}>
            <strong style={{ color: "#2563eb" }}>Kurz zusammengefasst:</strong> Diese Website enthält
            Partnerlinks. Wenn du über diese Links einen Vertrag abschließt, erhalten wir eine Provision
            vom Anbieter. Für dich entstehen dabei keinerlei zusätzliche Kosten – im Gegenteil,
            du profitierst vom gleichen (oder besseren) Preis wie bei direktem Abschluss.
          </p>
        </div>

        {[
          {
            title: "Was ist Affiliate-Marketing?",
            content: `Affiliate-Marketing ist ein Vertriebsmodell, bei dem Website-Betreiber (sogenannte Publisher 
            oder Affiliates) für die Vermittlung von Kunden an ein Unternehmen eine Provision erhalten. 
            Vergleichsheld24 ist Partner des Tarifcheck.de-Partnerprogramms und erhält bei erfolgreichem 
            Vertragsabschluss eine Vergütung von Tarifcheck.de.`,
          },
          {
            title: "Welche Links sind Affiliate-Links?",
            content: `Alle Vergleichs-Buttons und Links, die auf Tarifcheck.de weiterleiten, sind Affiliate-Links. 
            Diese sind durch den Zusatz „ref=..." in der URL oder durch die Kennzeichnung „Powered by Tarifcheck.de" 
            erkennbar. Du kannst diese Links genauso nutzen wie direkte Links – es entstehen dir keine Nachteile.`,
          },
          {
            title: "Beeinflusst das unsere Bewertungen?",
            content: `Nein. Die Reihenfolge und Darstellung der Versicherungsprodukte auf Vergleichsheld24 
            basiert auf sachlichen Kriterien und den von Tarifcheck bereitgestellten Vergleichsergebnissen. 
            Wir haben keinen Einfluss auf die Tarifranglisten und präsentieren keine bevorzugten Anbieter 
            auf Basis von Provisionen.`,
          },
          {
            title: "Unser Partner: Tarifcheck.de",
            content: `Wir arbeiten ausschließlich mit Tarifcheck.de zusammen – einem der führenden 
            deutschen Versicherungs- und Finanzvergleichsportale mit über 18 Jahren Marktpräsenz und 
            mehr als 75.000 Partnern. Tarifcheck.de ist Teil der CHECK24 Gruppe.`,
          },
          {
            title: "Rechtliche Grundlage",
            content: `Dieser Hinweis entspricht den Anforderungen des § 5 TMG (Telemediengesetz), 
            den Richtlinien des Deutschen Presserats sowie den Transparenzanforderungen der 
            Werberichtlinien. Affiliate-Links müssen als kommerzielle Kommunikation erkennbar sein.`,
          },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", color: "#2563eb", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid #dbeafe" }}>
              {s.title}
            </h2>
            <p style={{ color: "#475569", fontSize: "0.9rem", lineHeight: 1.8 }}>
              {s.content}
            </p>
          </div>
        ))}

        <p style={{ color: "#cbd5e1", fontSize: "0.75rem", paddingTop: "1.5rem", borderTop: "1px solid #e2e8f0" }}>
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
}
