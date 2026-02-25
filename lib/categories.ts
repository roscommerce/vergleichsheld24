// ================================================================
// Zentrale Datei aller Tarifcheck-Kategorien
// Alle Links mit deiner Partner-ID aktualisieren: DEINE_PARTNER_ID
// ================================================================

export type CategoryGroup = "versicherungen" | "finanzen" | "solar";

export interface InsuranceItem {
  slug: string;
  label: string;
  icon: string;
  description: string;
  shortDesc: string;
  badge?: string;
  badgeType?: "blue" | "green" | "orange";
  avgSaving?: string;
  group: CategoryGroup;
  tarifcheckUrl: string;
  tarifcheckType: string;
}

const BASE = "https://www.tarifcheck.de";
const REF = "?ref=DEINE_PARTNER_ID"; // ← Deine Tarifcheck Partner-ID

export const ALL_CATEGORIES: InsuranceItem[] = [

  // ============================================================
  // 🚗 KFZ
  // ============================================================
  {
    slug: "kfz",
    label: "Kfz-Versicherung",
    icon: "🚗",
    description: "Vergleiche Haftpflicht, Teilkasko und Vollkasko. Mit dem richtigen Tarif sparst du mehrere Hundert Euro im Jahr.",
    shortDesc: "Haftpflicht, Teil- & Vollkasko",
    badge: "Beliebt",
    badgeType: "orange",
    avgSaving: "850 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/kfzversicherung/${REF}`,
    tarifcheckType: "kfz",
  },
  {
    slug: "motorrad",
    label: "Motorradversicherung",
    icon: "🏍️",
    description: "Günstige Motorradversicherung für alle Typen – Chopper, Sportbike oder Roller. Jetzt Tarife vergleichen.",
    shortDesc: "Für alle Motorrad-Typen",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/motorradversicherung/${REF}`,
    tarifcheckType: "motorrad",
  },

  // ============================================================
  // 💼 VORSORGE
  // ============================================================
  {
    slug: "rente",
    label: "Rentenversicherung",
    icon: "🏦",
    description: "Private Altersvorsorge für später: Finde die beste Rentenversicherung und sichere deinen Ruhestand ab.",
    shortDesc: "Private Altersvorsorge",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/rentenversicherung/${REF}`,
    tarifcheckType: "rente",
  },
  {
    slug: "berufsunfaehigkeit",
    label: "Berufsunfähigkeit",
    icon: "💼",
    description: "Sicher dein Einkommen ab, wenn du nicht mehr arbeiten kannst. Eine der wichtigsten Versicherungen für Berufstätige.",
    shortDesc: "Einkommensschutz bei BU",
    badge: "Wichtig",
    badgeType: "orange",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/berufsunfaehigkeitsversicherung/${REF}`,
    tarifcheckType: "berufsunfaehigkeit",
  },
  {
    slug: "leben",
    label: "Lebensversicherung",
    icon: "❤️",
    description: "Schütze deine Familie finanziell für den Ernstfall. Kapital- oder Risikolebensversicherung – wir zeigen dir den Unterschied.",
    shortDesc: "Schutz für die Familie",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/lebensversicherung/${REF}`,
    tarifcheckType: "leben",
  },
  {
    slug: "unfall",
    label: "Unfallversicherung",
    icon: "🩹",
    description: "Absicherung rund um die Uhr – auch in der Freizeit. Die Unfallversicherung zahlt bei dauerhaften Unfallfolgen.",
    shortDesc: "24h Schutz bei Unfällen",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/unfallversicherung/${REF}`,
    tarifcheckType: "unfall",
  },
  {
    slug: "riester-rente",
    label: "Riester-Rente",
    icon: "📈",
    description: "Staatlich geförderte Altersvorsorge mit Zulagen und Steuervorteilen. Jetzt Anbieter vergleichen und Förderung sichern.",
    shortDesc: "Mit staatlicher Förderung",
    badge: "Staatliche Förderung",
    badgeType: "green",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/riester-rente/${REF}`,
    tarifcheckType: "riester",
  },
  {
    slug: "risikoleben",
    label: "Risikolebensversicherung",
    icon: "🛡️",
    description: "Günstiger Schutz für Hinterbliebene im Todesfall. Ideal für Familien mit Kindern oder laufendem Kredit.",
    shortDesc: "Günstig & effektiv",
    avgSaving: "300 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/risikolebensversicherung/${REF}`,
    tarifcheckType: "risikoleben",
  },
  {
    slug: "ruerup-rente",
    label: "Rürup-Rente",
    icon: "💰",
    description: "Besonders attraktiv für Selbstständige und Freiberufler. Hohe steuerliche Absetzbarkeit, lebenslange Rente.",
    shortDesc: "Ideal für Selbstständige",
    badge: "Steuervorteile",
    badgeType: "green",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/ruerup-rente/${REF}`,
    tarifcheckType: "ruerup",
  },
  {
    slug: "pflegezusatz",
    label: "Pflegezusatzversicherung",
    icon: "👴",
    description: "Die gesetzliche Pflege reicht oft nicht aus. Mit einer Pflegezusatz sicherst du dir im Alter die nötige Versorgung.",
    shortDesc: "Ergänzt gesetzliche Pflege",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/pflegezusatzversicherung/${REF}`,
    tarifcheckType: "pflege",
  },

  // ============================================================
  // 🏥 KRANKENVERSICHERUNGEN
  // ============================================================
  {
    slug: "pkv-vollversicherung",
    label: "PKV Vollversicherung",
    icon: "🏥",
    description: "Private Krankenversicherung mit Chefarztbehandlung, Einzelzimmer und kürzeren Wartezeiten. Jetzt vergleichen.",
    shortDesc: "Private Vollversicherung",
    badge: "Top Schutz",
    badgeType: "blue",
    avgSaving: "200 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/krankenversicherung/${REF}`,
    tarifcheckType: "pkv",
  },
  {
    slug: "pkv-beamte",
    label: "PKV für Beamte",
    icon: "🎖️",
    description: "Als Beamter hast du Anspruch auf Beihilfe – die PKV ergänzt diese optimal. Finde den besten Ergänzungstarif.",
    shortDesc: "Mit Beihilfe-Ergänzung",
    badge: "Nur für Beamte",
    badgeType: "blue",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/krankenversicherung/beamte/${REF}`,
    tarifcheckType: "pkv-beamte",
  },
  {
    slug: "krankenzusatz",
    label: "Krankenzusatzversicherung",
    icon: "➕",
    description: "Ergänze deine gesetzliche Krankenversicherung: Zahnersatz, Brille, Heilpraktiker und mehr – zum günstigen Monatsbeitrag.",
    shortDesc: "Ergänzt die GKV optimal",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/krankenzusatzversicherung/${REF}`,
    tarifcheckType: "krankenzusatz",
  },
  {
    slug: "pkv-studenten",
    label: "PKV für Studenten",
    icon: "🎓",
    description: "Günstige private Krankenversicherung speziell für Studierende. Bessere Leistungen als die GKV – oft zum halben Preis.",
    shortDesc: "Spezial für Studenten",
    badge: "Studentenrabatt",
    badgeType: "green",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/krankenversicherung/studenten/${REF}`,
    tarifcheckType: "pkv-studenten",
  },
  {
    slug: "pkv-ue55",
    label: "PKV für Ü55",
    icon: "🧓",
    description: "Private Krankenversicherung für Personen über 55 Jahre. Wir zeigen dir die besten Tarife für deinen Bedarf.",
    shortDesc: "Optimal ab 55 Jahren",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/krankenversicherung/senioren/${REF}`,
    tarifcheckType: "pkv-senior",
  },

  // ============================================================
  // 🛡️ SACHVERSICHERUNGEN
  // ============================================================
  {
    slug: "haftpflicht",
    label: "Haftpflichtversicherung",
    icon: "🏠",
    description: "Die wichtigste Versicherung überhaupt. Schütze dich vor finanziellen Forderungen Dritter – ab 2 € im Monat.",
    shortDesc: "Pflichtschutz für jeden",
    badge: "Pflichtschutz",
    badgeType: "orange",
    avgSaving: "120 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/haftpflichtversicherung/${REF}`,
    tarifcheckType: "haftpflicht",
  },
  {
    slug: "hausrat",
    label: "Hausratversicherung",
    icon: "🛋️",
    description: "Dein Inventar optimal versichert. Bei Einbruch, Feuer, Wasserschäden und mehr – für jeden Haushalt sinnvoll.",
    shortDesc: "Schutz für dein Zuhause",
    avgSaving: "85 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/hausratversicherung/${REF}`,
    tarifcheckType: "hausrat",
  },
  {
    slug: "tierhalter",
    label: "Tierhalterhaftpflicht",
    icon: "🐾",
    description: "Als Tierbesitzer haftest du für Schäden, die dein Tier verursacht. Pflicht für Hundehalter in vielen Bundesländern.",
    shortDesc: "Haftpflicht für Tierhalter",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/tierhalterhaftpflicht/${REF}`,
    tarifcheckType: "tierhalter",
  },
  {
    slug: "hundekranken",
    label: "Hundekrankenversicherung",
    icon: "🐕",
    description: "Tierarztkosten können schnell in die Tausende gehen. Mit der Hundekrankenversicherung bist du auf der sicheren Seite.",
    shortDesc: "Für deinen Hund",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/hundekrankenversicherung/${REF}`,
    tarifcheckType: "hundekranken",
  },
  {
    slug: "wohngebaeude",
    label: "Wohngebäudeversicherung",
    icon: "🏡",
    description: "Schütze deine Immobilie vor Feuer, Sturm, Hagel und Leitungswasser. Pflicht für jeden Eigenheimbesitzer.",
    shortDesc: "Für Haus- & Wohnungseigentümer",
    badge: "Für Eigenheimbesitzer",
    badgeType: "blue",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/wohngebaeudeversicherung/${REF}`,
    tarifcheckType: "wohngebaeude",
  },
  {
    slug: "haus-grundbesitz",
    label: "Haus- & Grundbesitz",
    icon: "🏘️",
    description: "Haftpflichtschutz für Haus- und Grundstücksbesitzer. Schützt vor Ansprüchen von Mietern und Passanten.",
    shortDesc: "Haftpflicht für Eigentümer",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/haus-und-grundbesitzerhaftpflicht/${REF}`,
    tarifcheckType: "haus-grundbesitz",
  },
  {
    slug: "rechtsschutz",
    label: "Rechtsschutzversicherung",
    icon: "⚖️",
    description: "Anwalts- und Gerichtskosten können schnell fünfstellig werden. Mit Rechtsschutz bist du auf der sicheren Seite.",
    shortDesc: "Schutz vor Gerichtskosten",
    avgSaving: "95 €",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/rechtsschutzversicherung/${REF}`,
    tarifcheckType: "rechtsschutz",
  },
  {
    slug: "firmen",
    label: "Firmenversicherungen",
    icon: "🏢",
    description: "Gewerbliche Absicherung für Selbstständige und Unternehmer. Betriebshaftpflicht, Inhaltsversicherung und mehr.",
    shortDesc: "Für Selbstständige & Unternehmen",
    badge: "Für Unternehmen",
    badgeType: "blue",
    group: "versicherungen",
    tarifcheckUrl: `${BASE}/firmenversicherung/${REF}`,
    tarifcheckType: "firmen",
  },

  // ============================================================
  // 💶 FINANZEN
  // ============================================================
  {
    slug: "girokonto",
    label: "Girokonto",
    icon: "🏦",
    description: "Das beste Girokonto für dich – kostenlos, mit hohen Zinsen oder Top-Service. Vergleiche jetzt alle Anbieter.",
    shortDesc: "Kostenlos & mit Vorteilen",
    badge: "Kostenlos",
    badgeType: "green",
    group: "finanzen",
    tarifcheckUrl: `${BASE}/girokonto/${REF}`,
    tarifcheckType: "girokonto",
  },
  {
    slug: "baufinanzierung",
    label: "Baufinanzierung",
    icon: "🏗️",
    description: "Günstige Baufinanzierung für deinen Traum vom Eigenheim. Vergleiche Zinsen und spare tausende Euro über die Laufzeit.",
    shortDesc: "Günstige Zinsen sichern",
    badge: "Jetzt Zinsen sichern",
    badgeType: "orange",
    group: "finanzen",
    tarifcheckUrl: `${BASE}/baufinanzierung/${REF}`,
    tarifcheckType: "baufinanzierung",
  },
  {
    slug: "kredit",
    label: "Kredit",
    icon: "💳",
    description: "Ratenkredit oder Sofortkredit – finde den günstigsten Kredit für deine Bedürfnisse. Schnell, einfach, online.",
    shortDesc: "Günstige Ratenkredite",
    group: "finanzen",
    tarifcheckUrl: `${BASE}/kredit/${REF}`,
    tarifcheckType: "kredit",
  },
  {
    slug: "kreditkarte",
    label: "Kreditkarte",
    icon: "💳",
    description: "Kostenlose Kreditkarten mit Cashback, Reiseversicherung oder hohen Zinsen auf dein Guthaben. Jetzt vergleichen.",
    shortDesc: "Kostenlos mit Vorteilen",
    badge: "0 € Jahresgebühr",
    badgeType: "green",
    group: "finanzen",
    tarifcheckUrl: `${BASE}/kreditkarte/${REF}`,
    tarifcheckType: "kreditkarte",
  },

  // ============================================================
  // ☀️ SOLAR
  // ============================================================
  {
    slug: "solar",
    label: "Solaranlage",
    icon: "☀️",
    description: "NEU bei Tarifcheck: Solaranlagen vergleichen und Photovoltaik-Angebote für dein Zuhause finden. Jetzt Strom selbst erzeugen.",
    shortDesc: "PV-Anlage für Eigenheim",
    badge: "NEU",
    badgeType: "orange",
    group: "solar",
    tarifcheckUrl: `${BASE}/solar/${REF}`,
    tarifcheckType: "solar",
  },
];

// Helper: Alle Kategorien einer Gruppe
export const getByGroup = (group: CategoryGroup) =>
  ALL_CATEGORIES.filter((c) => c.group === group);

// Helper: Einzelne Kategorie per Slug
export const getBySlug = (slug: string) =>
  ALL_CATEGORIES.find((c) => c.slug === slug);

// Gruppen-Metadaten
export const GROUP_META = {
  versicherungen: {
    label: "Versicherungen",
    icon: "🛡️",
    description: "Alle Versicherungen im direkten Vergleich",
  },
  finanzen: {
    label: "Finanzen",
    icon: "💶",
    description: "Konten, Kredite und Finanzprodukte vergleichen",
  },
  solar: {
    label: "Solaranlage",
    icon: "☀️",
    description: "Photovoltaik-Anlagen für dein Zuhause",
  },
};
