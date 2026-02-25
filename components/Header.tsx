"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  {
    label: "Versicherungen",
    items: [
      { href: "/versicherungen/kfz", label: "🚗 Kfz-Versicherung" },
      { href: "/versicherungen/haftpflicht", label: "🏠 Haftpflicht" },
      { href: "/versicherungen/hausrat", label: "🛋️ Hausrat" },
      { href: "/versicherungen/berufsunfaehigkeit", label: "💼 Berufsunfähigkeit" },
      { href: "/versicherungen/pkv-vollversicherung", label: "🏥 PKV" },
      { href: "/versicherungen/rechtsschutz", label: "⚖️ Rechtsschutz" },
      { href: "/versicherungen/wohngebaeude", label: "🏡 Wohngebäude" },
      { href: "/versicherungen/rente", label: "🏦 Rente" },
    ],
  },
  {
    label: "Finanzen",
    items: [
      { href: "/finanzen/girokonto", label: "🏦 Girokonto" },
      { href: "/finanzen/baufinanzierung", label: "🏗️ Baufinanzierung" },
      { href: "/finanzen/kredit", label: "💳 Kredit" },
      { href: "/finanzen/kreditkarte", label: "💳 Kreditkarte" },
    ],
  },
  {
    label: "Solaranlage",
    items: [
      { href: "/solar", label: "☀️ Solaranlage vergleichen" },
    ],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "#fff",
      borderBottom: scrolled ? "1px solid #e2e8f0" : "1px solid #f1f5f9",
      boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.2s ease",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem",
        height: "70px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "2rem",
      }}>

        {/* Logo – größer */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.625rem", textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: "42px", height: "42px",
            background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
            borderRadius: "12px", display: "flex", alignItems: "center",
            justifyContent: "center", fontSize: "22px",
            boxShadow: "0 3px 12px rgba(37,99,235,0.3)",
          }}>🛡️</div>
          <div>
            <span style={{
              fontFamily: "var(--font-syne)", fontWeight: 800,
              fontSize: "1.25rem", color: "#0f172a", letterSpacing: "-0.03em",
            }}>
              Vergleichs<span style={{ color: "#2563eb" }}>held24</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.125rem" }} className="desktop-nav">
          {NAV.map((group) => (
            <div
              key={group.label}
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown(group.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button style={{
                display: "flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 0.875rem",
                background: openDropdown === group.label ? "#f1f5f9" : "transparent",
                border: "none", borderRadius: "8px",
                color: "#374151", fontSize: "0.9rem", fontWeight: 500,
                cursor: "pointer", fontFamily: "var(--font-inter)",
                transition: "all 0.15s",
              }}>
                {group.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: openDropdown === group.label ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {openDropdown === group.label && (
                <div style={{
                  position: "absolute", top: "calc(100% + 4px)", left: "50%",
                  transform: "translateX(-50%)",
                  background: "#fff", border: "1px solid #e2e8f0",
                  borderRadius: "12px", padding: "0.5rem",
                  minWidth: "220px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  zIndex: 200,
                }}>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="dropdown-link">
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/blog" className="nav-link">Ratgeber</Link>
        </nav>

        {/* CTA + Mobile */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/#versicherungen" className="btn-primary desktop-cta" style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}>
            Jetzt vergleichen
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none", background: "transparent",
              border: "1px solid #e2e8f0", borderRadius: "8px",
              padding: "0.5rem", color: "#374151", cursor: "pointer",
            }}
            className="mobile-btn"
            aria-label="Menü"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          borderTop: "1px solid #e2e8f0",
          padding: "1rem 1.5rem 1.5rem",
          background: "#fff",
          display: "flex", flexDirection: "column", gap: "0.25rem",
          maxHeight: "70vh", overflowY: "auto",
        }}>
          {NAV.map((group) => (
            <div key={group.label}>
              <div style={{ padding: "0.5rem 0.5rem 0.25rem", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#94a3b8" }}>
                {group.label}
              </div>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.625rem 0.75rem", color: "#374151", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, borderRadius: "8px" }}
                  className="dropdown-link">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <Link href="/blog" onClick={() => setMobileOpen(false)}
            style={{ display: "block", padding: "0.625rem 0.75rem", color: "#374151", textDecoration: "none", fontSize: "0.9rem", fontWeight: 500, borderRadius: "8px", marginTop: "0.5rem" }}
            className="dropdown-link">
            📖 Ratgeber
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
