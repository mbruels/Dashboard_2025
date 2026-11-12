# Dashboard 2026

Persönliches Dashboard von Michael Brüls für Düsseldorf (alle zehn Stadtbezirke, Standard: Bilk / Friedrichstadt), Korschenbroich und Mönchengladbach aus offenen Schnittstellen.
Läuft komplett im Browser, ohne Server und ohne Anmeldung. Grundlage: „Lagebild Düsseldorf“ von Thomas Hußmann.

## Eigene Daten ändern

Alle persönlichen Angaben stehen in **`config/meine-daten.js`**: Titel, Name, Orte, Haltestellen, Pressemeldungen, Bahnstrecke, Ziel der Autofahrt, Autobahn-Strecken und das ntfy-Thema für Push-Nachrichten. Weitere Haltestellen stehen in `config/haltestellen.json`.

Auf GitHub die Datei öffnen → Stift-Symbol → ändern → „Commit changes“. Nach dem nächsten Lauf des Datensammlers (höchstens 10 Minuten) ist alles aktiv.

Schlüssel, die nur auf dem eigenen Gerät gespeichert werden (Dashboard → Einstellungen): TomTom (Verkehrslage, Karte, Fahrzeiten), Tankerkönig (Spritpreise), optional Windy (Webcams).

## Inhalte und Schnittstellen

| Bereich | Quelle |
|---|---|
| Wetter, Vorhersage, Sonnenzeiten | Open-Meteo (u. a. DWD ICON) |
| Messwerte DWD-Station, Unwetterwarnungen | Bright Sky (DWD Open Data) |
| Bevölkerungswarnungen | BBK – NINA |
| Luftqualität (Modell) | Open-Meteo / Copernicus CAMS |
| Luftmessstationen | Umweltbundesamt |
| Pollenflug | DWD-Gefahrenindex |
| Rheinpegel | WSV – PEGELONLINE |
| Stadtverkehr live (Verkehrsfluss, Sperrungen, Baustellen, Veranstaltungen), Parkhausbelegung | Verkehrszentrale Düsseldorf (vtmanager) |
| P+R, Behindertenparkplätze, Defibrillatoren, Toiletten, Radstationen, Verkehrsüberwachung | Open Data Düsseldorf |
| Feuerwehr Düsseldorf, Feuerwehr und Polizei Mönchengladbach, Polizei Rhein-Kreis Neuss | Presseportal Blaulicht |
| Öffentliche Webcams (optional, eigener Schlüssel) | Windy Webcams API |
| Staus mit Karte, Autobahn-Meldungen, Sperrungen, Baustellen, Webcams, E-Laden | Autobahn GmbH des Bundes |
| Spritpreise (eigener kostenloser Schlüssel) | Tankerkönig |
| Abfahrten Nahverkehr | VRR – EFA |
| Abfahrten Bahn Hbf | db.transport.rest |
| Leihräder | nextbike |
| Feiertage, Schulferien NRW | Nager.Date, OpenHolidays API |
| Strompreis, Ökostrom-Ampel | Energy-Charts (Fraunhofer ISE) |
| Nachrichten NRW | tagesschau |

## Direktaufruf

`?ort=duesseldorf`, `?ort=dus-3` (Bezirk 3), `?ort=korschenbroich`, `?ort=mgladbach`

## Auf iPhone und iPad

Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.

## Veröffentlichung

GitHub Pages: Settings → Pages → Source „GitHub Actions“.

## Datensammler

`tools/collect.mjs` läuft alle 10 Minuten als GitHub Action (`.github/workflows/lagebild.yml`) und holt Quellen ohne Browser-Freigabe (NINA, Presseportal, UBA, DWD-Pollen, Energy-Charts, VRR, Bahn, Open Data) nach `data/*.json`. Voraussetzung: Settings → Pages → Source „GitHub Actions“.
