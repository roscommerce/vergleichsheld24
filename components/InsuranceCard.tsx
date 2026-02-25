import Link from "next/link";

interface InsuranceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
  badgeType?: "blue" | "green" | "orange";
  avgSaving?: string;
  delay?: number;
}

export default function InsuranceCard({
  icon,
  title,
  description,
  href,
  badge,
  badgeType = "blue",
  avgSaving,
  delay = 0,
}: InsuranceCardProps) {
  return (
    <Link
      href={href}
      className="animate-on-scroll"
      style={{
        display: "block",
        textDecoration: "none",
        animationDelay: `${delay}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="glass glass-hover"
        style={{
          borderRadius: "1.25rem",
          padding: "1.75rem",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: "100px",
            height: "100px",
            background: "radial-gradient(circle, rgba(14,165,233,0.08), transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          {/* Icon */}
          <div
            style={{
              width: "52px",
              height: "52px",
              background: "linear-gradient(135deg, rgba(14,165,233,0.15), rgba(14,165,233,0.05))",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              marginBottom: "1.25rem",
              border: "1px solid rgba(14,165,233,0.2)",
            }}
          >
            {icon}
          </div>

          {/* Badge */}
          {badge && (
            <div
              className={`badge badge-${badgeType}`}
              style={{ marginBottom: "0.875rem" }}
            >
              {badge}
            </div>
          )}

          {/* Title */}
          <h3
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "1.1rem",
              color: "#fff",
              marginBottom: "0.625rem",
              lineHeight: 1.3,
            }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.875rem",
              lineHeight: 1.65,
              marginBottom: avgSaving ? "1.25rem" : "1.5rem",
            }}
          >
            {description}
          </p>

          {/* Saving */}
          {avgSaving && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.375rem 0.75rem",
                background: "rgba(34,197,94,0.1)",
                border: "1px solid rgba(34,197,94,0.2)",
                borderRadius: "100px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#86efac",
                marginBottom: "1.25rem",
              }}
            >
              <span>✓</span>
              Ø {avgSaving} Ersparnis möglich
            </div>
          )}

          {/* CTA */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.375rem",
              color: "#38bdf8",
              fontSize: "0.875rem",
              fontWeight: 600,
            }}
          >
            Vergleich starten
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
