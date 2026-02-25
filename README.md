# 🛡️ Vergleichsheld24

Modernes Versicherungs-Affiliate-Portal auf Basis von Next.js 14 + Tailwind CSS.

## 🚀 Schnellstart

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000)

---

## 📁 Projektstruktur

```
vergleichsheld24/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root Layout (Meta, Fonts, AdSense)
│   ├── page.tsx                  # Startseite
│   ├── sitemap.ts                # Auto-Sitemap
│   ├── robots.ts                 # robots.txt
│   └── versicherungen/           # Versicherungsseiten
│       ├── kfz/
│       ├── haftpflicht/
│       ├── hausrat/
│       ├── kranken/
│       ├── berufsunfaehigkeit/
│       └── rechtsschutz/
├── components/
│   ├── Header.tsx                # Navigation
│   ├── Footer.tsx                # Footer mit Links
│   ├── InsuranceCard.tsx         # Versicherungskarten
│   ├── TarifcheckWidget.tsx      # Tarifcheck Einbindung ⭐
│   └── AdSlot.tsx                # Google AdSense ⭐
└── netlify.toml                  # Netlify Deployment Config
```

---

## ⚙️ Wichtige Konfigurationen

### 1. Tarifcheck Affiliate-Links einrichten

Öffne `components/TarifcheckWidget.tsx` und ersetze alle `DEINE_PARTNER_ID` mit deiner echten Tarifcheck Partner-ID:

```tsx
kfz: {
  url: "https://www.tarifcheck.de/kfzversicherung/?ref=DEINE_PARTNER_ID",
  // ^^^^ hier deine echte ID eintragen
}
```

Du findest deine Partner-ID im [Tarifcheck Partnerprogramm Dashboard](https://www.tarifcheck-partnerprogramm.de/).

**Tarifcheck Widget einbinden:**
1. Login im Partnerprogramm
2. Gehe zu "Werbemittel" → "Tarifrechner"
3. Kopiere den iframe-Code
4. Ersetze den Placeholder-Block in `TarifcheckWidget.tsx` mit dem echten iframe

### 2. Google AdSense einrichten

Sobald dein AdSense-Konto genehmigt ist:

1. Öffne `app/layout.tsx`
2. Ersetze `ca-pub-XXXXXXXXXXXXXXXX` mit deiner echten Publisher-ID
3. Kommentiere den AdSense `<script>`-Tag ein (Zeile ~37)
4. Öffne `components/AdSlot.tsx` und ersetze die Publisher-ID dort ebenfalls
5. Ersetze die `slot`-Werte in den Seiten mit deinen echten Ad-Unit IDs

### 3. Domain konfigurieren (Strato → Netlify)

1. Deploy das Projekt auf Netlify (automatisch via GitHub)
2. In Netlify: Site Settings → Domain Management → Add custom domain
3. In Strato (DNS-Verwaltung):
   - CNAME: `www` → `dein-projekt.netlify.app`
   - A-Record: `@` → Netlify Load Balancer IP (aus Netlify Settings)
4. Netlify generiert automatisch ein SSL-Zertifikat (Let's Encrypt)

---

## 🚀 Deployment auf Netlify

### Option A: Via GitHub (empfohlen)

1. Push dieses Repo zu deinem GitHub Account
2. Netlify → "New site from Git" → GitHub → Repo auswählen
3. Build-Einstellungen werden automatisch aus `netlify.toml` gelesen
4. Fertig! Bei jedem Push wird automatisch deployed

### Option B: Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --build
```

---

## 📈 SEO-Features (bereits eingebaut)

- ✅ Dynamische `metadata` für jede Seite (Title, Description, OG Tags)
- ✅ Automatische Sitemap unter `/sitemap.xml`
- ✅ `robots.txt` unter `/robots.txt`
- ✅ Strukturierte Daten (JSON-LD): Organization, WebSite, FAQPage, BreadcrumbList
- ✅ Kanonische URLs auf jeder Seite
- ✅ Open Graph & Twitter Card Tags
- ✅ Performance: next/image, lazy loading, optimierte Fonts
- ✅ Responsive Design für alle Geräte

---

## 🎯 Nächste Schritte

1. **Pflicht:** Impressum, Datenschutzerklärung, Cookie-Hinweis erstellen
2. **Affiliate:** Tarifcheck Partner-ID in `TarifcheckWidget.tsx` eintragen
3. **SEO:** Google Search Console einrichten, Sitemap einreichen
4. **Analytics:** Google Analytics 4 einbinden (in `layout.tsx`)
5. **AdSense:** Nach Genehmigung Publisher-ID einsetzen
6. **Content:** Blog-Artikel für Long-Tail Keywords schreiben

---

## 📝 Rechtliche Hinweise

⚠️ Pflicht vor dem Launch:
- Impressum erstellen (gesetzlich vorgeschrieben)
- Datenschutzerklärung (DSGVO-konform)
- Cookie-Hinweis / Cookie-Banner
- Affiliate-Hinweis auf allen relevanten Seiten (bereits im Footer)

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + Custom CSS
- **Fonts:** Syne (Display) + Plus Jakarta Sans (Body)
- **Deployment:** Netlify
- **SEO:** Next.js Metadata API, JSON-LD

---

Built with ❤️ for vergleichsheld24.de
