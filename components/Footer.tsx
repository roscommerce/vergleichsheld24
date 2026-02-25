"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#070b16",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 1.5rem 2rem",
        marginTop: "5rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                }}
              >
                🛡️
              </div>
              <span
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                Vergleichs<span style={{ color: "#0ea5e9" }}>held24</span>
              </span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                maxWidth: "220px",
              }}
            >
              Dein unabhängiger Versicherungsvergleich. Spare bares Geld mit dem richtigen Schutz.
            </p>
          </div>

          {/* Versicherungen */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Versicherungen
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/versicherungen/kfz", label: "Kfz-Versicherung" },
                { href: "/versicherungen/haftpflicht", label: "Haftpflichtversicherung" },
                { href: "/versicherungen/hausrat", label: "Hausratversicherung" },
                { href: "/versicherungen/kranken", label: "Krankenversicherung" },
                { href: "/versicherungen/berufsunfaehigkeit", label: "Berufsunfähigkeit" },
                { href: "/versicherungen/rechtsschutz", label: "Rechtsschutzversicherung" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#7dd3fc")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Service
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/blog", label: "Ratgeber & Blog" },
                { href: "/ueber-uns", label: "Über uns" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#7dd3fc")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              style={{
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Rechtliches
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/impressum", label: "Impressum" },
                { href: "/datenschutz", label: "Datenschutz" },
                { href: "/cookie-richtlinie", label: "Cookie-Richtlinie" },
                { href: "/affiliate-hinweis", label: "Affiliate-Hinweis" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#7dd3fc")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom */}
        <div
          style={{
            paddingTop: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Vergleichsheld24. Alle Rechte vorbehalten.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem", maxWidth: "500px", textAlign: "right" }}>
            * Affiliate-Hinweis: Diese Seite enthält Partnerlinks. Bei einem Abschluss über unsere Links erhalten wir eine Provision. Dies beeinflusst nicht unsere unabhängige Bewertung.
          </p>
        </div>
      </div>
    </footer>
  );
}
