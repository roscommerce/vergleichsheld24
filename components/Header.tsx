"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const insuranceLinks = [
  { href: "/versicherungen/kfz", label: "Kfz-Versicherung" },
  { href: "/versicherungen/haftpflicht", label: "Haftpflicht" },
  { href: "/versicherungen/hausrat", label: "Hausrat" },
  { href: "/versicherungen/kranken", label: "Krankenversicherung" },
  { href: "/versicherungen/berufsunfaehigkeit", label: "Berufsunfähigkeit" },
  { href: "/versicherungen/rechtsschutz", label: "Rechtsschutz" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10,15,30,0.95)"
          : "rgba(10,15,30,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              boxShadow: "0 4px 16px rgba(14,165,233,0.4)",
            }}
          >
            🛡️
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            Vergleichs<span style={{ color: "#0ea5e9" }}>held24</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="hidden-mobile"
        >
          {/* Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.5rem 1rem",
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.8)",
                fontSize: "0.9rem",
                fontWeight: 500,
                cursor: "pointer",
                borderRadius: "0.5rem",
                transition: "all 0.2s",
                fontFamily: "var(--font-inter)",
              }}
            >
              Versicherungen
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)",
                  transition: "transform 0.2s",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#0f172a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "0.875rem",
                  padding: "0.5rem",
                  minWidth: "220px",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  zIndex: 200,
                }}
              >
                {insuranceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    style={{
                      display: "block",
                      padding: "0.625rem 0.875rem",
                      color: "rgba(255,255,255,0.75)",
                      textDecoration: "none",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      borderRadius: "0.5rem",
                      transition: "all 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.background =
                        "rgba(14,165,233,0.1)";
                      (e.target as HTMLElement).style.color = "#7dd3fc";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.background = "transparent";
                      (e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.75)";
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            style={{
              padding: "0.5rem 1rem",
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: "0.9rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
              transition: "color 0.2s",
            }}
          >
            Ratgeber
          </Link>
        </nav>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/versicherungen/kfz" className="btn-primary" style={{ fontSize: "0.85rem", padding: "0.625rem 1.25rem" }}>
            Jetzt vergleichen
          </Link>
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              color: "#fff",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
            aria-label="Menü öffnen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {insuranceLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: "0.75rem 1rem",
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 500,
                borderRadius: "0.5rem",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            onClick={() => setMobileOpen(false)}
            style={{
              padding: "0.75rem 1rem",
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
              borderRadius: "0.5rem",
            }}
          >
            Ratgeber
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
