/* =====================================================================
   MEINE DATEN – alle persönlichen Angaben des Dashboards an einer Stelle
   =====================================================================
   Diese Datei wird vom Dashboard (Browser) UND vom Datensammler
   (GitHub Actions, alle 10 Minuten) gelesen.

   Ändern: auf GitHub diese Datei öffnen → Stift-Symbol → Werte ändern →
   „Commit changes“. Nach dem nächsten Lauf des Datensammlers
   (spätestens 10 Minuten) ist alles aktiv.

   Regeln:
   - Nur die Werte in Anführungszeichen bzw. die Zahlen ändern.
   - Die "key"-Werte (dus, korschenbroich, mgladbach) NICHT ändern –
     daran hängen interne Verknüpfungen im Programm.
   - Kommas und Klammern stehen lassen.
   ===================================================================== */
window.MEINE_DATEN = {

  // Kopfzeile und Fußzeile
  titel: "Dashboard 2026",
  name: "Michael Brüls",

  // Push-Nachrichten (Warnungen, Wecker) über die App „ntfy“: dieses Thema in der App abonnieren
  ntfy_thema: "dashboard-mb-6f9e272baa0e",

  // Adresse des eigenen Dashboards (für Links in Push-Nachrichten)
  adresse: "https://mbruels.github.io/Dashboard_2025/",

  // ---------- Düsseldorf ----------
  duesseldorf: {
    bezirk: 3,                                   // Standard-Stadtbezirk (3 = Bilk / Friedrichstadt)
    haltestelle: "Düsseldorf Friedrichstadt",    // Abfahrten vor Ort
    bahnhof: "Düsseldorf-Friedrichstadt",        // Bahnhof für die Bahnverbindungen
    // Pressemeldungen: [Bezeichnung, RSS-Adresse, nur Meldungen mit diesem Kürzel]
    presse: [
      ["Feuerwehr Düsseldorf", "https://www.presseportal.de/rss/polizei/r/D%C3%BCsseldorf.rss2", "^FW-D\\b"]
    ]
  },

  // ---------- Weitere Orte (Knöpfe oben) ----------
  orte: [
    {
      key: "korschenbroich",
      name: "Korschenbroich",
      detail: "Rhein-Kreis Neuss",
      lat: 51.1914, lon: 6.5135,
      ars: "051620000000",                       // Regionalschlüssel Kreis (für NINA-Warnungen)
      autobahnen: ["A44", "A52", "A46", "A57", "A61"],
      haltestelle: "Korschenbroich Bf",
      bahnhof: "Korschenbroich",
      presse: [
        ["Polizei Rhein-Kreis Neuss", "https://www.presseportal.de/rss/polizei/r/Korschenbroich.rss2", ""]
      ]
    },
    {
      key: "mgladbach",
      name: "Mönchengladbach",
      detail: "Kreisfreie Stadt",
      lat: 51.1805, lon: 6.4428,
      ars: "051160000000",
      autobahnen: ["A61", "A52", "A44", "A46"],
      haltestelle: "Mönchengladbach Hbf",
      bahnhof: "Mönchengladbach Hbf",
      presse: [
        ["Feuerwehr Mönchengladbach", "https://www.presseportal.de/rss/polizei/r/M%C3%B6nchengladbach.rss2", "^FW-MG\\b"],
        ["Polizei Mönchengladbach", "https://www.presseportal.de/rss/dienststelle_30127.rss2", ""]
      ]
    }
  ],

  // ---------- Bahn (Kachel „Bus & Bahn“) ----------
  // Verbindung zwischen Korschenbroich und Düsseldorf-Friedrichstadt (S8)
  bahn: { linie: "S8" },

  // ---------- Autofahrt (Fahrzeit live ab aktuellem Standort) ----------
  autofahrt: { ziel: "Ruwerstraße, Mönchengladbach", kurz: "Ruwerstraße" },

  // ---------- Autobahn-Strecken mit Richtung (Priorität in „Reise & Verkehr“) ----------
  strecken: {
    dus: "A46 Neuss; A52 Mönchengladbach; A57 Krefeld; A44 Mönchengladbach",
    korschenbroich: "A52 Düsseldorf; A44 Düsseldorf; A46 Düsseldorf; A61 Koblenz",
    mgladbach: "A52 Düsseldorf; A61 Venlo; A61 Koblenz; A44 Düsseldorf"
  }
};
