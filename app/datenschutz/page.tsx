import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung von Vergleichsheld24 gemäß DSGVO",
  robots: { index: false, follow: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2.75rem" }}>
      <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.15rem", color: "#7dd3fc", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(14,165,233,0.15)" }}>
        {title}
      </h2>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.8 }}>
        {children}
      </div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: "1.25rem" }}>
      <h3 style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default function DatenschutzPage() {
  return (
    <div style={{ background: "var(--dark)", minHeight: "100vh", paddingTop: "90px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 2.8rem)", color: "#fff", letterSpacing: "-0.03em", marginBottom: "0.5rem" }}>
          Datenschutzerklärung
        </h1>
        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", marginBottom: "3rem" }}>
          Gemäß DSGVO, BDSG und TMG
        </p>

        <Section title="1. Verantwortlicher">
          <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
          <div style={{ marginTop: "0.75rem", padding: "1rem 1.25rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "0.75rem" }}>
            <p style={{ fontWeight: 600, color: "#fff" }}>Sven Rosenthal</p>
            <p>In der Landwehr 21</p>
            <p>34376 Immenhausen OT Holzhausen</p>
            <p>Deutschland</p>
            <p style={{ marginTop: "0.5rem" }}>
              E-Mail:{" "}
              <a href="mailto:info@rosenthal-e-commerce.de" style={{ color: "#7dd3fc", textDecoration: "none" }}>
                info@rosenthal-e-commerce.de
              </a>
            </p>
          </div>
        </Section>

        <Section title="2. Deine Rechte als betroffene Person">
          <p>Du hast gemäß DSGVO folgende Rechte gegenüber uns als Verantwortlichem:</p>
          <ul style={{ marginTop: "0.75rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Auskunftsrecht</strong> (Art. 15 DSGVO): Du kannst Auskunft über deine bei uns gespeicherten Daten verlangen.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Berichtigungsrecht</strong> (Art. 16 DSGVO): Unrichtige Daten können berichtigt werden.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Löschungsrecht</strong> (Art. 17 DSGVO): Unter bestimmten Voraussetzungen kannst du die Löschung deiner Daten verlangen.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Einschränkungsrecht</strong> (Art. 18 DSGVO): Du kannst die Einschränkung der Verarbeitung verlangen.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Widerspruchsrecht</strong> (Art. 21 DSGVO): Du kannst der Datenverarbeitung widersprechen.</li>
            <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Beschwerderecht</strong> (Art. 77 DSGVO): Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren.</li>
          </ul>
          <p style={{ marginTop: "1rem" }}>
            Zuständige Aufsichtsbehörde: Der Hessische Beauftragte für Datenschutz und Informationsfreiheit,
            Postfach 3163, 65021 Wiesbaden, <a href="https://www.datenschutz.hessen.de" target="_blank" rel="noopener noreferrer" style={{ color: "#7dd3fc", textDecoration: "none" }}>www.datenschutz.hessen.de</a>
          </p>
        </Section>

        <Section title="3. Datenerfassung auf dieser Website">
          <SubSection title="3.1 Server-Logfiles">
            <p>
              Der Hosting-Anbieter (Netlify Inc., 44 Montgomery Street, Suite 300, San Francisco, CA 94104, USA)
              erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die dein Browser
              automatisch übermittelt. Dies sind:
            </p>
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse (anonymisiert)</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Rechtsgrundlage ist
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb der Website).
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Netlify ist unter dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:
              <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "#7dd3fc", textDecoration: "none", marginLeft: "0.25rem" }}>
                Netlify Privacy Policy
              </a>
            </p>
          </SubSection>

          <SubSection title="3.2 Cookies">
            <p>
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die dein Browser auf
              deinem Gerät speichert. Wir unterscheiden zwischen:
            </p>
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Technisch notwendige Cookies:</strong> Erforderlich für den Betrieb der Website (keine Einwilligung erforderlich)</li>
              <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Analyse-Cookies:</strong> Nur mit deiner Einwilligung (Google Analytics)</li>
              <li><strong style={{ color: "rgba(255,255,255,0.8)" }}>Marketing-Cookies:</strong> Nur mit deiner Einwilligung (Google AdSense)</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>
              Du kannst deine Cookie-Einstellungen jederzeit über den{" "}
              <a href="/cookie-richtlinie" style={{ color: "#7dd3fc", textDecoration: "none" }}>Cookie-Banner</a>{" "}
              anpassen oder über die Einstellungen deines Browsers verwalten.
            </p>
          </SubSection>

          <SubSection title="3.3 Kontaktaufnahme per E-Mail">
            <p>
              Wenn du uns per E-Mail kontaktierst, werden die übermittelten Daten (E-Mail-Adresse,
              Name, Nachrichteninhalt) zum Zweck der Bearbeitung deiner Anfrage verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung / vorvertragliche Maßnahmen)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald
              dein Anliegen abschließend bearbeitet wurde.
            </p>
          </SubSection>
        </Section>

        <Section title="4. Drittanbieter & externe Dienste">

          <SubSection title="4.1 Tarifcheck.de (Affiliate-Partner)">
            <p>
              Diese Website enthält Links und eingebettete Inhalte von Tarifcheck.de (Betreiber: CHECK24
              Vergleichsportal GmbH, Erika-Mann-Str. 62-66, 80636 München). Wenn du über unsere Links auf
              Tarifcheck.de weitergeleitet wirst oder deren Widgets nutzt, gelten die Datenschutzbestimmungen
              von Tarifcheck.de. Wir erhalten lediglich eine anonymisierte Provisionsbenachrichtigung bei
              erfolgreichem Abschluss.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Datenschutz Tarifcheck:{" "}
              <a href="https://www.tarifcheck.de/datenschutz/" target="_blank" rel="noopener noreferrer" style={{ color: "#7dd3fc", textDecoration: "none" }}>
                tarifcheck.de/datenschutz
              </a>
            </p>
          </SubSection>

          <SubSection title="4.2 Google Analytics (nur mit Einwilligung)">
            <p>
              Mit deiner Einwilligung nutzen wir Google Analytics 4 (Anbieter: Google Ireland Limited,
              Gordon House, Barrow Street, Dublin 4, Irland). Google Analytics verwendet Cookies, um
              dein Nutzungsverhalten auf unserer Website zu analysieren. Die durch Cookies erzeugten
              Informationen über deine Benutzung dieser Website werden in der Regel an einen Server von
              Google in den USA übertragen und dort gespeichert.
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              IP-Anonymisierung ist aktiviert. Google ist unter dem EU-US Data Privacy Framework
              zertifiziert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
              Du kannst deine Einwilligung jederzeit widerrufen.
            </p>
          </SubSection>

          <SubSection title="4.3 Google AdSense (nur mit Einwilligung)">
            <p>
              Mit deiner Einwilligung schalten wir personalisierte Werbung über Google AdSense
              (Anbieter: Google Ireland Limited). Google AdSense verwendet Cookies und ähnliche
              Technologien, um Werbung auf Grundlage deiner Interessen auszuspielen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              Weitere Informationen:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "#7dd3fc", textDecoration: "none" }}>
                Google Datenschutzerklärung
              </a>
            </p>
          </SubSection>

          <SubSection title="4.4 Google Fonts">
            <p>
              Diese Website verwendet Google Fonts (Anbieter: Google Ireland Limited). Beim Aufruf
              der Seite werden die Schriftarten direkt von Google-Servern geladen. Dabei wird deine
              IP-Adresse an Google übertragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an der einheitlichen Darstellung unserer Website).
            </p>
          </SubSection>
        </Section>

        <Section title="5. Speicherdauer">
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen
            Verarbeitungszweck erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
            Kontaktanfragen per E-Mail werden nach abschließender Bearbeitung gelöscht, spätestens
            nach 3 Jahren. Server-Logfiles werden nach 7 Tagen automatisch gelöscht.
          </p>
        </Section>

        <Section title="6. Datensicherheit">
          <p>
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
            Inhalte eine SSL/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran,
            dass die Adresszeile des Browsers von „http://" auf „https://" wechselt.
          </p>
        </Section>

        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          Stand: {new Date().toLocaleDateString("de-DE", { month: "long", year: "numeric" })}
        </p>
      </div>
    </div>
  );
}
