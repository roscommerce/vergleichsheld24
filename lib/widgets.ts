// ================================================================
// Tarifcheck Widget-Codes – alle 25 Vergleiche
// Partner-ID: 191158
// ================================================================

export interface WidgetConfig {
  divId: string;
  scriptSrc: string;
  extraAttrs?: Record<string, string>;
}

export const WIDGETS: Record<string, WidgetConfig> = {
  // Fahrzeuge
  "kfz":                { divId: "tcpp-iframe-kfz",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-kfz/kfz-iframe.js" },
  "motorrad":           { divId: "tcpp-iframe-mot",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-mot/mot-iframe.js" },
  // Solar
  "solar":              { divId: "tcpp-iframe-solar",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-solar/solar-iframe.js" },
  // Vorsorge
  "rente":              { divId: "tcpp-iframe-rente",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-rente/rente-iframe.js" },
  "berufsunfaehigkeit": { divId: "tcpp-iframe-buv",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-buv/buv-iframe.js" },
  "leben":              { divId: "tcpp-iframe-leben",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-leben/leben-iframe.js" },
  "unfall":             { divId: "tcpp-iframe-unf",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-unf/unf-iframe.js" },
  "riester-rente":      { divId: "tcpp-iframe-riester",    scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-riester/riester-iframe.js" },
  "risikoleben":        { divId: "tcpp-iframe-rlv",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-rlv/rlv-iframe.js" },
  "ruerup-rente":       { divId: "tcpp-iframe-r-rente",    scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-r-rente/r-rente-iframe.js" },
  "pflegezusatz":       { divId: "tcpp-iframe-prv",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-prv/prv-iframe.js" },
  // Kranken
  "pkv-vollversicherung": { divId: "tcpp-iframe-pkv",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-pkv/pkv-iframe.js" },
  "pkv-beamte":         { divId: "tcpp-iframe-pkv-beamte", scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-pkv-beamte/pkv-beamte-iframe.js" },
  "krankenzusatz":      { divId: "tcpp-iframe-pkv-z",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-pkv-z/pkv-z-iframe.js" },
  "pkv-studenten":      { divId: "tcpp-iframe-pkv-s",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-pkv-s/pkv-s-iframe.js" },
  "pkv-ue55":           { divId: "tcpp-iframe-pkv55",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-pkv55/pkv55-iframe.js" },
  "hundekranken":       { divId: "tcpp-iframe-tkv",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-tkv/tkv-iframe.js" },
  // Sach
  "haftpflicht":        { divId: "tcpp-iframe-phv",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-phv/phv-iframe.js" },
  "hausrat":            { divId: "tcpp-iframe-hr",         scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-hr/hr-iframe.js" },
  "tierhalter":         { divId: "tcpp-iframe-tie",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-tie/tie-iframe.js" },
  "wohngebaeude":       { divId: "tcpp-iframe-wg",         scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-wg/wg-iframe.js" },
  "haus-grundbesitz":   { divId: "tcpp-iframe-hug",        scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-hug/hug-iframe.js" },
  "rechtsschutz":       { divId: "tcpp-iframe-rs",         scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-rs/rs-iframe.js" },
  "firmen":             { divId: "tcpp-iframe-fc",         scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-fc/fc-iframe.js" },
  // Finanzen
  "girokonto":          { divId: "tcpp-iframe-giro",       scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-giro/giro-iframe.js" },
  "baufinanzierung":    { divId: "tcpp-iframe-baufi",      scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-baufi/baufi-iframe.js" },
  "kredit":             { divId: "tcpp-iframe-kredit",     scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-kredit/kredit-iframe.js",
                          extraAttrs: { "data-duration": "12", "data-purpose": "8", "data-amount": "5000" } },
  "kreditkarte":        { divId: "tcpp-iframe-cc",         scriptSrc: "https://form.partner-versicherung.de/widgets/191158/tcpp-iframe-cc/cc-iframe.js" },
};
