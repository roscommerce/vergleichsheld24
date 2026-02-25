import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinie",
  description: "Informationen über den Einsatz von Cookies auf Vergleichsheld24",
  robots: { index: false, follow: false },
};

export default function CookieRichtliniePage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Cookie-Richtlinie
        </h1>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", marginBottom: "3rem" }}>
          Informationen gemäß DSGVO & ePrivacy-Richtlinie
        </p>

        {[
          {
            title: "Was sind Cookies?",
            content: "Cookies sind kleine Textdateien, die dein Browser auf deinem Gerät speichert, wenn du eine Website besuchst. Sie ermöglichen es, dich bei einem erneuten Besuch wiederzuerkennen und Einstellungen zu speichern.",
          },
          {
            title: "Welche Cookies verwenden wir?",
            content: null,
            table: [
              { name: "vh24_cookie_consent", typ: "Notwendig", zweck: "Speichert deine Cookie-Einstellungen", dauer: "1 Jahr" },
              { name: "_ga, _ga_*", typ: "Analyse", zweck: "Google Analytics – Seitenaufrufanalyse (nur mit Einwilligung)", dauer: "2 Jahre" },
              { name: "IDE, DSID", typ: "Marketing", zweck: "Google AdSense – Personalisierte Werbung (nur mit Einwilligung)", dauer: "1 Jahr" },
            ],
          },
          {
            title: "Wie kannst du Cookies verwalten?",
            content: "Du kannst deine Cookie-Einstellungen jederzeit anpassen – entweder über unseren Cookie-Banner (der beim ersten Besuch erscheint) oder über die Einstellungen deines Browsers. Beachte, dass das Deaktivieren bestimmter Cookies die Funktionalität der Website einschränken kann.",
          },
          {
            title: "Browser-Einstellungen",
            content: "Alle gängigen Browser ermöglichen es, Cookies zu verwalten. Weitere Informationen findest du in der Hilfe deines Browsers: Chrome, Firefox, Safari, Edge.",
          },
          {
            title: "Opt-Out Google Analytics",
            content: "Du kannst die Erfassung durch Google Analytics verhindern, indem du das Browser-Add-on von Google installierst: https://tools.google.com/dlpage/gaoptout",
          },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", color: "#7dd3fc", marginBottom: "0.875rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(14,165,233,0.15)" }}>
              {s.title}
            </h2>
            {s.content && <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>{s.content}</p>}
            {s.table && (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.82rem" }}>
                  <thead>
                    <tr>
                      {["Name", "Typ", "Zweck", "Speicherdauer"].map((h) => (
                        <th key={h} style={{ padding: "0.625rem 0.875rem", textAlign: "left", color: "rgba(255,255,255,0.5)", fontWeight: 600, borderBottom: "1px solid rgba(255,255,255,0.08)", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {s.table.map((row, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <td style={{ padding: "0.625rem 0.875rem", color: "#7dd3fc", fontFamily: "monospace", fontSize: "0.78rem" }}>{row.name}</td>
                        <td style={{ padding: "0.625rem 0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.typ}</td>
                        <td style={{ padding: "0.625rem 0.875rem", color: "rgba(255,255,255,0.6)" }}>{row.zweck}</td>
                        <td style={{ padding: "0.625rem 0.875rem", color: "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{row.dauer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
}
