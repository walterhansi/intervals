# Änderungen

Format: neueste Version oben. Die Versionsnummer steht in der Datei `VERSION`.

- **x.y.Z** (Patch): Fehlerbehebungen, kleine Anpassungen (z. B. Bluetooth-Korrekturen)
- **x.Y.0** (Minor): neue Funktionen
- **X.0.0** (Major): grundlegende Umbauten

## 1.7.1 – 2026-10-15

- **Neuladen bringt sofort die neue Version:** Die App lädt ihre Dateien jetzt zuerst aus dem Netz und nur ohne Netz (oder wenn es länger als 3 Sekunden dauert) aus dem Speicher. Am PC genügt deshalb einfaches Neuladen. Der Hinweis „Neue Version verfügbar“ erscheint dann nicht mehr unnötig.
- Läuft die App am Handy gerade, kommt wie bisher „Aktualisieren“ – nie mitten im Training.
- Einmalig beim Umstieg von 1.7.0 ist noch „Aktualisieren“ nötig, danach gilt das neue Verhalten.

## 1.7.1 – 2026-10-15

- **Navigation immer sichtbar:** Die Seite selbst kann nicht mehr verrutschen – auch nicht nach Tastatur-Eingaben oder beim Ein-/Ausblenden der Browserleiste. Die vier Knöpfe stehen immer am unteren Rand. Ist ein Bildschirm auf kleinen Handys zu lang (z. B. Zones), scrollt nur dessen Inhalt.

## 1.7.0 – 2026-10-15

- **Neue ao-Farbwelt:** Anthrazit-Hintergrund (#131419, Flächen #1d1f27) und neue Zonenfarben – Z1 Türkis #00b5a6, Z2 Blau #124f92, Z3 Grün #247d4d, Z4 Orange #f9a73b, Z5 Rot #cc2d3f. „frei“ ist jetzt Grau #717378 statt Lila.
- Alle Schriften auf farbigen Flächen (Pulszahl, Infozeile, „Gleich: …“, Zonenfelder in Intervals) wählen automatisch Schwarz oder Weiß – je nachdem, was mehr Kontrast ergibt.
- Anleitung und QR-Dialog in derselben Farbwelt.

## 1.6.0 – 2026-10-14

- **Anleitung** für den Sportler (`anleitung.html`): Schnellstart, Anzeige lesen, typische Anwendungsfälle, Intervalle bauen, PC → Handy, unterwegs, Probleme. Aufruf über ein kleines „?“ oben rechts auf Bluetooth, Zones und Intervals; öffnet im App-Fenster, Bluetooth und Training laufen weiter. Auch offline verfügbar.

## 1.5.0 – 2026-10-14

- **Haken für „in der Soll-Zone“:** Haben Fläche und Kreis dieselbe Farbe, erscheinen oben mittig Haken – 1 Haken nach 5 s, 2 nach 15 s, 3 nach 25 s. Beim Verlassen der Zone verschwinden sie und die Zählung beginnt beim Zurückkehren neu. Folgt ein Abschnitt mit derselben Zone, läuft die Zählung weiter. Während des Hinweises „Gleich: …“ rücken die Haken etwas nach unten.

## 1.4.1 – 2026-10-14

- „Intervall“, „SOLL“, „Training“ und die Zahlen darunter ohne weißen Rand. Die Schriftfarbe wird jetzt automatisch nach dem höchsten Kontrast zur Fläche gewählt: schwarz auf allen Zonenfarben und Lila, weiß auf Dunkelgrau und Fast-Schwarz.

## 1.4.1 – 2026-10-14

- „Intervall“, „SOLL“, „Training“ und die Zahlen darunter ohne weißen Rand. Die Schriftfarbe wird automatisch nach dem höchsten Kontrast zur Fläche gewählt: schwarz auf allen Zonenfarben und Lila, weiß auf Dunkelgrau und Fast-Schwarz.
- Richtungspfeile neu abgestuft: 1 Pfeil bis 8 bpm, 2 Pfeile 9–12 bpm, 3 Pfeile ab 13 bpm Abstand zur Soll-Zone.

## 1.4.0 – 2026-10-14

- **Restzeit-Ring:** Während eines Intervalls umgibt ein weißer Ring den Pulskreis. Er startet voll bei 12 Uhr und leert sich im Uhrzeigersinn bis zum Ende des aktiven Abschnitts.
- **Besser lesbar:** „Intervall“, „SOLL“, „Training“ und die Zahlen darunter sind etwas größer, schwarz mit weißem Rand.
- **Stärkere Richtungspfeile:** schwarz mit weißem Rand; Anzahl zeigt den Abstand zur Soll-Zone – 1 Pfeil bis 5 bpm, 2 Pfeile bis 15 bpm, 3 Pfeile darüber (ab 1.4.1 geändert).

## 1.3.3 – 2026-10-14

- **Zonen-Farbe sofort gespeichert:** Jeder Tipp schaltet zur nächsten Zone und ist sofort übernommen. Langer Druck geht eine Zone zurück. Bisher musste man lang drücken, sonst wurde die Änderung beim Antippen einer anderen Zeile verworfen.

## 1.3.2 – 2026-10-14

- **Zonen-Farbe in Intervals robuster:** Beim Antippen wird nur noch genau die berührte Zeile geändert. Verrutschen des Fingers, Loslassen außerhalb des Felds oder ein zweiter Finger brechen ab, statt eine Nachbarzeile zu treffen.
- Die Zeile, deren Farbe gerade gewählt wird, ist hervorgehoben.

## 1.3.1 – 2026-10-11

- Anleitungstexte beim Senden und Einlesen nennen jetzt die tatsächlichen Knöpfe („QR einlesen“ bzw. „QR fürs Handy“ unter Intervals oder Zones).

## 1.3.0 – 2026-10-11

- **QR-Übertragung direkt auf Intervals und Zones:** Knöpfe „QR fürs Handy“ (grün) und „QR einlesen“ statt versteckt unter „Aus Liste holen“.
- **Übertragen werden jetzt Zonen, aktuelle Intervall-Tabelle (samt „Gesichert“-Zustand) und gesicherte Liste.** Jeweils gewinnt die neuere Fassung; auf dem Handy wird nichts gelöscht. Läuft am Handy gerade ein Intervall-Training, bleibt dessen Tabelle unangetastet.
- Installations-Hinweis mit QR-Code am PC entfernt.

## 1.2.0 – 2026-10-11

- **Übertragung PC → Handy per QR-Code:** Unter „Aus Liste holen“ gibt es „Senden (QR)“ und „Empfangen (QR)“. Das sendende Gerät zeigt die gesicherte Intervall-Liste als QR-Code (bei viel Inhalt mehrere Codes im Wechsel), das empfangende scannt ihn mit der Kamera. Kein Internet und kein Konto nötig.
- Auf dem empfangenden Gerät wird nichts gelöscht. Bei gleichem Namen (Groß-/Kleinschreibung egal) gewinnt die Fassung mit dem jüngeren Sicherungszeitpunkt. Danach zeigt die App, was neu, aktualisiert oder behalten wurde.
- Jedes Programm merkt sich jetzt seinen Sicherungszeitpunkt. Programme, die vor dieser Version gesichert wurden, haben noch keinen; existieren sie auf beiden Geräten mit unterschiedlichem Inhalt, bleibt das Handy unverändert und die App weist darauf hin.

## 1.1.0 – 2026-10-09

- **Training fortsetzen:** Wird die App während eines Trainings geschlossen oder stürzt ab, bietet sie beim nächsten Öffnen „Training fortsetzen?“ an. Trainingszeit und Intervall laufen nach der echten Uhrzeit weiter.
- **Vorwarnung:** 5 Sekunden vor jedem Abschnittswechsel zeigt ein Rand die nächste Soll-Farbe, oben steht dezent „Gleich: Z4 · 152–170“ (bzw. „frei“ / „Ende“). Beides verschwindet nach dem Wechsel.
- **Bluetooth schneller und robuster:**
  - Die zuletzt genutzte Uhr wird gemerkt; beim Öffnen der App sucht die App automatisch nach ihr (sofern Chrome das unterstützt), zusätzlich Knopf „Mit … verbinden“ ohne Geräteliste.
  - Wächter: kommen 8 Sekunden keine Pulswerte, wird die Verbindung automatisch neu aufgebaut.
  - Schnellere Wiederholversuche (höchstens 5 Sekunden Pause), sofortiger Versuch beim Zurückkehren in die App.
  - Zeitlimits für jeden Verbindungsschritt, damit nichts hängen bleibt.
  - Hilfe-Assistent: „Uhr nicht in der Liste? Alle Bluetooth-Geräte anzeigen“.
- Pfeile etwas nach innen gerückt.

## 1.0.0 – 2026-10-09

Erste Version.

- **Bluetooth:** Verbindung zur Amazfit-Uhr über „Herzfrequenz-Push“ (Standard-Bluetooth-Pulssensor), automatisches Wiederverbinden, Schritt-für-Schritt-Hilfe mit „Ist das Problem behoben?“, Testmodus ohne Uhr.
- **Measure:** Großer Puls im Kreis, Rechteck mit Soll-Farbe des laufenden Abschnitts, ruhiges Blinken bei Abweichung, Pfeile hoch/runter, Countdown, Soll-Bereich, Trainingszeit, Sperren per langem Druck.
- **Zones:** 5 Zonen mit festen Untergrenzen, Obergrenzen werden automatisch berechnet.
- **Intervals:** Tabelle mit Zeit, Farbe (5 Zonen + lila), Kopieren, Löschen, Drag & Drop, Liste mit Namen, Sichern als Freigabe für „Start mit Intervall“.
- **PWA:** Installierbar, offline nutzbar, Update-Hinweis in der App, Versionsanzeige.
