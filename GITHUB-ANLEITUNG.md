# 🚀 Anleitung: Projekt zu GitHub hochladen & auf Netlify deployen

**Für:** vergleichsheld24.de  
**Zeit:** ca. 15–20 Minuten  
**Voraussetzung:** GitHub-Account ✅ | Netlify-Account ✅

---

## SCHRITT 1: GitHub Desktop installieren (einmalig)

GitHub Desktop ist die einfachste Methode – kein Terminal nötig.

1. Gehe zu **https://desktop.github.com**
2. Lade GitHub Desktop herunter und installiere es
3. Melde dich mit deinem GitHub-Account an

---

## SCHRITT 2: ZIP entpacken

1. Lade die **vergleichsheld24.zip** herunter (aus diesem Chat)
2. Entpacke die ZIP-Datei auf deinem Computer
   - Mac: Doppelklick auf die ZIP
   - Windows: Rechtsklick → „Alle extrahieren"
3. Du hast jetzt einen Ordner namens **`vergleichsheld24`**

---

## SCHRITT 3: In dein GitHub-Repo hochladen

### Option A: Direkt im Browser (einfachste Methode)

1. Gehe zu **github.com** und öffne dein Repo
2. Klicke auf **„Add file"** → **„Upload files"**
3. Ziehe den gesamten `vergleichsheld24`-Ordnerinhalt hinein  
   *(WICHTIG: den Inhalt des Ordners, nicht den Ordner selbst)*
4. Schreibe als Commit-Nachricht: `Initial commit – Vergleichsheld24`
5. Klicke auf **„Commit changes"**

### Option B: GitHub Desktop

1. Öffne GitHub Desktop
2. Klicke auf **„Add an Existing Repository from your Hard Drive"**
3. Wähle den `vergleichsheld24`-Ordner
4. Klicke auf **„Publish repository"** → wähle dein bestehendes Repo aus
5. Klicke auf **„Push origin"**

---

## SCHRITT 4: Netlify mit GitHub verbinden

1. Gehe zu **app.netlify.com**
2. Klicke auf **„Add new site"** → **„Import an existing project"**
3. Wähle **„Deploy with GitHub"**
4. Autorisiere Netlify für deinen GitHub-Account
5. Wähle dein **vergleichsheld24**-Repo aus
6. Build-Einstellungen (werden automatisch erkannt):
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
7. Klicke auf **„Deploy site"**

⏳ Der erste Build dauert ca. 2–3 Minuten.

---

## SCHRITT 5: Custom Domain einrichten (Strato → Netlify)

### In Netlify:
1. Gehe zu **Site Settings** → **Domain management**
2. Klicke auf **„Add custom domain"**
3. Trage ein: `vergleichsheld24.de` und `www.vergleichsheld24.de`
4. Netlify zeigt dir eine **IP-Adresse** und einen **CNAME-Wert** an – notiere diese!

### In Strato (DNS-Verwaltung):
1. Login bei **strato.de** → Mein Konto → Domains
2. Klicke auf deine Domain `vergleichsheld24.de`
3. Gehe zu **DNS-Verwaltung / Nameserver**
4. Füge folgende Einträge hinzu:

| Typ | Name | Wert |
|-----|------|------|
| A-Record | @ | `75.2.60.5` *(Netlify IP)* |
| CNAME | www | `dein-projekt.netlify.app` |

5. Speichern

⏰ DNS-Änderungen dauern 1–24 Stunden bis sie aktiv sind.

### SSL-Zertifikat:
- Netlify generiert automatisch ein **kostenloses Let's Encrypt SSL**
- In Netlify: Domain Settings → HTTPS → „Verify DNS configuration"
- Du kannst das Strato SSL deaktivieren, da Netlify das übernimmt

---

## SCHRITT 6: Tarifcheck Partner-ID eintragen

1. Login bei **tarifcheck-partnerprogramm.de**
2. Kopiere deine **Partner-ID**
3. Öffne in deinem Repo: `lib/categories.ts`
4. Ersetze in Zeile 14: `DEINE_PARTNER_ID` mit deiner echten ID
5. Committe die Änderung → Netlify deployed automatisch!

---

## SCHRITT 7: Tarifcheck Widgets einbinden

1. Login bei Tarifcheck → **„Werbemittel"** → **„Tarifrechner"**
2. Wähle z.B. Kfz-Versicherung
3. Kopiere den **iframe-Code**
4. Öffne `components/CategoryPage.tsx`
5. Suche den Kommentar `HIER deinen Tarifcheck iframe einsetzen`
6. Ersetze den Placeholder-Block mit deinem echten iframe-Code
7. Committe → automatisches Deploy

---

## SCHRITT 8: Google AdSense beantragen

1. Gehe zu **google.com/adsense**
2. Beantrage ein Konto mit deiner Domain `vergleichsheld24.de`
3. Sobald genehmigt:
   - Öffne `app/layout.tsx`
   - Ersetze `ca-pub-XXXXXXXXXXXXXXXX` mit deiner Publisher-ID
   - Kommentiere den AdSense `<script>`-Tag ein
   - Trage in `components/AdSlot.tsx` deine Publisher-ID ein
   - Ersetze die `slot`-Werte mit deinen Ad-Unit IDs

---

## SCHRITT 9: Google Search Console einrichten

1. Gehe zu **search.google.com/search-console**
2. Füge deine Property `vergleichsheld24.de` hinzu
3. Verifiziere via HTML-Tag (in `layout.tsx` einfügen)
4. Reiche deine Sitemap ein: `https://www.vergleichsheld24.de/sitemap.xml`

---

## 🔄 Zukünftige Updates

Jedes Mal wenn du Dateien im GitHub-Repo änderst:
- Via GitHub Desktop: Änderung → Commit → Push
- Via GitHub Browser: Datei bearbeiten → Commit
- **Netlify deployed automatisch** innerhalb von ~2 Minuten

---

## ⚠️ Rechtliche Pflichten vor dem Launch

| Was | Warum | Dringlichkeit |
|-----|-------|---------------|
| **Impressum** | Gesetzlich vorgeschrieben (TMG §5) | 🔴 Pflicht |
| **Datenschutzerklärung** | DSGVO-Pflicht | 🔴 Pflicht |
| **Cookie-Banner** | DSGVO + AdSense-Anforderung | 🔴 Pflicht |
| **Affiliate-Hinweis** | Bereits im Footer ✅ | ✅ Erledigt |

→ Empfehle ich im nächsten Schritt zu erstellen!

---

## 📞 Hilfe benötigt?

Wenn etwas nicht klappt, schick mir einen Screenshot und ich helfe sofort weiter!
