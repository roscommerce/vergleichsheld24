import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Vergleichsheld24 – Angaben gemäß § 5 TMG",
  robots: { index: false, follow: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.5rem" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", color: "#7dd3fc", marginBottom: "0.875rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(14,165,233,0.15)" }}>
        {title}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Impressum
        </h1>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", marginBottom: "3rem" }}>
          Angaben gemäß § 5 Telemediengesetz (TMG)
        </p>

        <Section title="Angaben gemäß § 5 TMG">
          <p>Sven Rosenthal</p>
          <p>In der Landwehr 21</p>
          <p>34376 Immenhausen OT Holzhausen</p>
          <p>Deutschland</p>
        </Section>

        <Section title="Kontakt">
          <p>
            E-Mail:{" "}
            <a href="mailto:info@rosenthal-e-commerce.de" style={{ color: "#7dd3fc", textDecoration: "none" }}>
              info@rosenthal-e-commerce.de
            </a>
          </p>
        </Section>

        <Section title="Umsatzsteuer-ID">
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:</p>
          <p style={{ marginTop: "0.375rem", fontWeight: 600, color: "#fff" }}>DE300044005</p>
        </Section>

        <Section title="Hinweis zu Affiliate-Links">
          <p>
            Diese Website enthält Affiliate-Links zu Tarifcheck.de (tarifcheck-partnerprogramm.de).
            Bei Abschluss eines Vertrags über einen solchen Link erhält der Betreiber eine Provision
            vom Partnerunternehmen. Für den Nutzer entstehen dadurch keine zusätzlichen Kosten.
            Weitere Details findest du im{" "}
            <a href="/affiliate-hinweis" style={{ color: "#7dd3fc", textDecoration: "none" }}>
              Affiliate-Hinweis
            </a>.
          </p>
        </Section>

        <Section title="Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV">
          <p>Sven Rosenthal, In der Landwehr 21, 34376 Immenhausen OT Holzhausen</p>
        </Section>

        <Section title="Hinweis: Keine Versicherungsvermittlung">
          <p>
            Sven Rosenthal ist nicht als Versicherungsvermittler gemäß § 34d GewO zugelassen und
            übt keine Versicherungsvermittlung aus. Die auf dieser Website dargestellten Inhalte
            dienen ausschließlich der allgemeinen Information. Für die Durchführung von Vergleichen
            und den Abschluss von Verträgen wird auf den Anbieter Tarifcheck.de verwiesen.
          </p>
        </Section>

        <Section title="EU-Streitschlichtung">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#7dd3fc", textDecoration: "none" }}>
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </Section>

        <Section title="Haftung für Inhalte">
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
            Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
            Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
            Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
        </Section>

        <Section title="Haftung für Links">
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </Section>

        <Section title="Urheberrecht">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
            dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
            der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
            Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </Section>

        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
}
