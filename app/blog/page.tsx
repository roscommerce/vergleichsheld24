import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-dynamic";


export const metadata: Metadata = {
  title: "Ratgeber & Blog – Versicherungswissen für jeden",
  description: "Tipps, Ratgeber und Neuigkeiten rund um Versicherungen. Spare Geld, verstehe deine Verträge und finde den besten Schutz.",
  alternates: { canonical: "https://www.vergleichsheld24.de/blog" },
};


const articles = [
  {
    slug: "kfz-versicherung-wechseln",
    title: "Kfz-Versicherung wechseln: So gehst du vor",
    excerpt: "Erfahre, wann und wie du deine Kfz-Versicherung wechselst – und wie du dabei bis zu 850 € sparst.",
    category: "Kfz",
    date: "2025-01-15",
    readTime: "5 Min.",
  },
  {
    slug: "haftpflicht-braucht-jeder",
    title: "Warum jeder eine Haftpflichtversicherung braucht",
    excerpt: "Ein Moment der Unachtsamkeit kann teuer werden. Wie du dich mit der privaten Haftpflicht schützt.",
    category: "Haftpflicht",
    date: "2025-01-10",
    readTime: "4 Min.",
  },
  {
    slug: "bu-versicherung-wann-sinnvoll",
    title: "Berufsunfähigkeitsversicherung: Ab wann lohnt sie sich?",
    excerpt: "Statistisch wird jeder vierte Arbeitnehmer berufsunfähig. Wir erklären, für wen eine BU unverzichtbar ist.",
    category: "BU",
    date: "2025-01-05",
    readTime: "7 Min.",
  },
];


export default function BlogPage() {
  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ marginBottom: "3rem" }}>
          <div className="badge badge-blue" style={{ marginBottom: "1rem" }}>Ratgeber & Tipps</div>
          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3rem)", color: "#0f172a", letterSpacing: "-0.03em", marginBottom: "0.75rem" }}>
            Versicherungs-<span className="gradient-text">Ratgeber</span>
          </h1>
          <p style={{ color: "#64748b", fontSize: "1rem" }}>
            Expertenwissen rund um Versicherungen – verständlich erklärt.
          </p>
        </div>


        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none" }}
            >
              <div className="glass glass-hover" style={{ borderRadius: "1.25rem", padding: "1.75rem", height: "100%", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span className="badge badge-blue">{article.category}</span>
                  <span style={{ color: "#94a3b8", fontSize: "0.75rem" }}>{article.readTime} Lesezeit</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "#0f172a", marginBottom: "0.625rem", lineHeight: 1.35 }}>
                  {article.title}
                </h2>
                <p style={{ color: "#64748b", fontSize: "0.875rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "#38bdf8", fontSize: "0.875rem", fontWeight: 600 }}>
                  Artikel lesen
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
