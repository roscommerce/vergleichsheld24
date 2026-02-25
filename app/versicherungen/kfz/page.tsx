import type { Metadata } from "next";
import Link from "next/link";
import TarifcheckWidget from "@/components/TarifcheckWidget";
import AdSlot from "@/components/AdSlot";


export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Kfz-Versicherung vergleichen – bis zu 850 € sparen",
  description:
    "Kfz-Versicherung jetzt online vergleichen. Haftpflicht, Teilkasko, Vollkasko – über 100 Anbieter im direkten Vergleich. Kostenlos, unverbindlich, sofort.",
  openGraph: {
    title: "Kfz-Versicherung vergleichen – bis zu 850 € sparen | Vergleichsheld24",
    description: "Kfz-Versicherung kostenlos vergleichen. 100+ Anbieter, sofort online abschließen.",
  },
  alternates: {
    canonical: "https://www.vergleichsheld24.de/versicherungen/kfz",
  },
};


export const dynamic = "force-dynamic";
const faqItems = [
  {
    q: "Was ist der Unterschied zwischen Haftpflicht, Teilkasko und Vollkasko?",
    a: "Die Kfz-Haftpflicht ist gesetzlich vorgeschrieben und zahlt bei Schäden, die du anderen zufügst. Teilkasko deckt Schäden durch Diebstahl, Unwetter oder Wildunfälle. Vollkasko kommt zusätzlich auch für selbst verursachte Unfälle auf.",
  },
  {
    q: "Wann sollte ich meine Kfz-Versicherung wechseln?",
    a: "Jährlich zum 30. November endet die reguläre Kündigungsfrist. Du kannst aber auch unterjährig wechseln – etwa nach einem Schadensfall oder wenn sich dein SF-Rabatt verbessert.",
  },
  {
    q: "Was ist der SF-Rabatt und wie wirkt er sich aus?",
    a: "Der Schadenfreiheitsrabatt (SF-Rabatt) belohnt unfallfreies Fahren. Je höher deine SF-Klasse, desto günstiger wird dein Beitrag – bis zu 80 % Nachlass sind möglich.",
  },
  {
    q: "Wie kann ich am meisten bei der Kfz-Versicherung sparen?",
    a: "Durch einen Direktvergleich verschiedener Anbieter, Erhöhung der Selbstbeteiligung, Nutzung von Telematik-Tarifen und die jährliche Zahlweise statt monatlich kannst du bis zu 850 € im Jahr sparen.",
  },
];


export const dynamic = "force-dynamic";
export default function KfzPage() {
  return (
    <div
      style={{
        background: "var(--dark)",
        minHeight: "100vh",
        paddingTop: "90px",
      }}
    >
      {/* Breadcrumb */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "1.5rem 1.5rem 0",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.8rem",
          }}
          aria-label="Breadcrumb"
        >
          <Link href="/" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
            Startseite
          </Link>
          <span>/</span>
          <Link href="/#versicherungen" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
            Versicherungen
          </Link>
          <span>/</span>
          <span style={{ color: "#7dd3fc" }}>Kfz-Versicherung</span>
        </nav>
      </div>


export const dynamic = "force-dynamic";
      {/* Hero */}
      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "3rem 1.5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <div
            className="badge badge-orange"
            style={{ marginBottom: "1rem" }}
          >
            🔥 Sparaktion: Kfz-Saison 2025
          </div>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#fff",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Kfz-Versicherung{" "}
            <span className="gradient-text">vergleichen</span>
            <br />
            & bis zu 850 € sparen
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.1rem",
              lineHeight: 1.7,
              marginBottom: "2rem",
            }}
          >
            Vergleiche Haftpflicht, Teilkasko und Vollkasko von über 100 Anbietern.
            Kostenlos, unverbindlich und in wenigen Minuten zum besten Tarif.
          </p>


export const dynamic = "force-dynamic";
          {/* Feature pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              "✓ 100+ Anbieter",
              "✓ Kostenlos & unverbindlich",
              "✓ Sofort online abschließen",
              "✓ TÜV-geprüft",
            ].map((f) => (
              <span
                key={f}
                style={{
                  padding: "0.4rem 0.875rem",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "100px",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.7)",
                  fontWeight: 500,
                }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>


export const dynamic = "force-dynamic";
      {/* Main Grid */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
          display: "grid",
          gridTemplateColumns: "1fr min(340px, 30%)",
          gap: "2rem",
          alignItems: "start",
        }}
        className="page-grid"
      >
        {/* Left: Widget + Content */}
        <div>
          {/* Tarifcheck Widget */}
          <div style={{ marginBottom: "3rem" }}>
            <TarifcheckWidget type="kfz" height={560} />
          </div>


export const dynamic = "force-dynamic";
          {/* SEO Content */}
          <div
            className="glass"
            style={{
              borderRadius: "1.25rem",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              Kfz-Versicherung: Was du wissen musst
            </h2>
            <div
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.925rem",
                lineHeight: 1.75,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p>
                Die <strong style={{ color: "#fff" }}>Kfz-Haftpflichtversicherung</strong> ist in Deutschland
                für alle Fahrzeughalter gesetzlich vorgeschrieben. Sie übernimmt Schäden, die du mit deinem
                Fahrzeug an anderen Personen, Fahrzeugen oder Gegenständen verursachst.
              </p>
              <p>
                Mit der <strong style={{ color: "#fff" }}>Teilkaskoversicherung</strong> sicherst du dein
                Fahrzeug gegen Diebstahl, Glasbruch, Sturm, Hagel, Überschwemmung sowie Kollisionen mit
                Tieren ab. Die <strong style={{ color: "#fff" }}>Vollkaskoversicherung</strong> bietet
                darüber hinaus Schutz bei selbst verschuldeten Unfällen und Vandalismus.
              </p>
              <p>
                Wer regelmäßig vergleicht, kann <strong style={{ color: "#fff" }}>mehrere Hundert Euro
                im Jahr</strong> sparen – allein durch den Wechsel zu einem günstigeren Anbieter mit
                gleichwertigen Leistungen.
              </p>
            </div>
          </div>


export const dynamic = "force-dynamic";
          {/* FAQ */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "1.5rem",
                color: "#fff",
                marginBottom: "1.25rem",
              }}
            >
              Häufige Fragen
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="glass"
                  style={{
                    borderRadius: "1rem",
                    padding: "0",
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      padding: "1.25rem 1.5rem",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      cursor: "pointer",
                      listStyle: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    {item.q}
                    <span style={{ color: "#0ea5e9", fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>+</span>
                  </summary>
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      color: "rgba(255,255,255,0.55)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                      paddingTop: "1rem",
                    }}
                  >
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>


export const dynamic = "force-dynamic";
        {/* Sidebar */}
        <div
          className="sidebar"
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          {/* Quick tip */}
          <div
            style={{
              background: "linear-gradient(135deg, rgba(249,115,22,0.12), rgba(249,115,22,0.04))",
              border: "1px solid rgba(249,115,22,0.2)",
              borderRadius: "1.25rem",
              padding: "1.5rem",
            }}
          >
            <div style={{ fontSize: "1.75rem", marginBottom: "0.75rem" }}>💡</div>
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                color: "#fff",
                fontSize: "1rem",
                marginBottom: "0.625rem",
              }}
            >
              Tipp: Jetzt wechseln
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.85rem",
                lineHeight: 1.65,
                marginBottom: "1rem",
              }}
            >
              Kfz-Versicherungen können jährlich zum 30. November gekündigt werden.
              Vergleiche jetzt und sichere dir den günstigsten Tarif für das neue Jahr.
            </p>
            <Link href="#" className="btn-accent" style={{ fontSize: "0.85rem", padding: "0.7rem 1.25rem", display: "inline-flex" }}>
              Jetzt wechseln →
            </Link>
          </div>


export const dynamic = "force-dynamic";
          {/* Ad Slot Sidebar */}
          <AdSlot
            slot="1122334455"
            format="vertical"
            style={{ height: "300px" }}
            label="Werbung"
          />


export const dynamic = "force-dynamic";
          {/* Other insurance links */}
          <div
            className="glass"
            style={{ borderRadius: "1.25rem", padding: "1.5rem" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                color: "#fff",
                fontSize: "0.95rem",
                marginBottom: "1rem",
              }}
            >
              Weitere Versicherungen
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { href: "/versicherungen/haftpflicht", label: "Haftpflichtversicherung", icon: "🏠" },
                { href: "/versicherungen/hausrat", label: "Hausratversicherung", icon: "🛋️" },
                { href: "/versicherungen/kranken", label: "Krankenversicherung", icon: "🏥" },
                { href: "/versicherungen/rechtsschutz", label: "Rechtsschutz", icon: "⚖️" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.625rem 0.75rem",
                    borderRadius: "0.625rem",
                    color: "rgba(255,255,255,0.65)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(14,165,233,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#7dd3fc";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "transparent";
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)";
                  }}
                >
                  <span>{l.icon}</span>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>


export const dynamic = "force-dynamic";
      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />


export const dynamic = "force-dynamic";
      {/* JSON-LD BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Startseite",
                item: "https://www.vergleichsheld24.de",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Kfz-Versicherung",
                item: "https://www.vergleichsheld24.de/versicherungen/kfz",
              },
            ],
          }),
        }}
      />


export const dynamic = "force-dynamic";
      <style>{`
        @media (max-width: 900px) {
          .page-grid {
            grid-template-columns: 1fr !important;
          }
          .sidebar {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
}
