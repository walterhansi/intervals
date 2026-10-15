# ao Puls-Intervalle

Große Pulsanzeige mit Intervalltraining fürs Radfahren. Die App läuft im Chrome-Browser auf dem Smartphone (Hochformat) und bekommt den Puls per Bluetooth direkt von der Amazfit-Uhr.

**App öffnen:** https://walterhansi.github.io/intervals/

![QR-Code zur App](https://walterhansi.github.io/intervals/qr.png)

## Installation auf dem Handy

1. QR-Code mit dem Handy scannen oder den Link oben in **Chrome** öffnen.
2. Unten erscheint „App installieren“ (oder in der App auf dem Bluetooth-Screen „Jetzt installieren“). Antippen, bestätigen.
3. Falls nichts erscheint: in Chrome oben rechts **⋮ → App installieren**.

Danach liegt „ao Puls“ mit dem Herz-Symbol auf dem Startbildschirm und startet ohne Browserleiste. Die App funktioniert auch offline.

## Uhr vorbereiten

Auf der Amazfit Active 2 die App **Herzfrequenz-Push** öffnen und das Senden per Bluetooth einschalten. Dann in der App auf dem Bluetooth-Screen „Verbinden“ tippen und die Uhr auswählen. Klappt es nicht, führt die App Schritt für Schritt zur Lösung.

## Updates

Jede Änderung in diesem Repository wird automatisch geprüft und veröffentlicht (GitHub Actions → GitHub Pages). Am PC genügt **Neuladen** – die App holt sich ihre Dateien zuerst aus dem Netz (ohne Netz aus dem Speicher). Läuft die App am Handy gerade, erscheint oben **„Neue Version verfügbar – Aktualisieren“**. Während eines laufenden Trainings wird nicht aktualisiert; der Hinweis kommt erst nach „Stopp“.

Welche Version läuft, steht ganz unten auf dem Bluetooth-Screen, z. B. „Version 1.0.0 (Build 3)“.

## Versionsverwaltung

| Datei | Zweck |
|---|---|
| `VERSION` | Versionsnummer (z. B. `1.0.1`). Bei jeder Erhöhung wird automatisch ein Git-Tag `v1.0.1` gesetzt. |
| `CHANGELOG.md` | Was sich in welcher Version geändert hat. |
| Build-Nummer | Zählt bei jeder Veröffentlichung automatisch hoch. |

Ältere Stände lassen sich über die Tags jederzeit wiederherstellen.

## Aufbau

```
app/                    Die App (wird 1:1 veröffentlicht)
  index.html            Alle 4 Screens in einer Datei
  manifest.webmanifest  App-Name, Icons, eigene Kennung (de.walterhansi.ao-puls-intervalle)
  sw.js                 Offline-Betrieb und Update-Erkennung
  icons/                App-Symbole
.github/workflows/      Automatische Prüfung und Veröffentlichung
```

Lokal testen: `app/index.html` im PC-Browser öffnen und auf dem Bluetooth-Screen den **Testmodus ohne Uhr** nutzen.
