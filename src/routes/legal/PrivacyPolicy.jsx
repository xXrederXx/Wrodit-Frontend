import React from "react";

import MetaTags from "../../components/MetaTags.jsx";

import styles from "./legal.module.css";
import OperatorInformation from "./OperatorInformation.jsx";
import OperatorMail from "./OperatorMail.jsx";
export default function PrivacyPolicy() {
  const lastChanged = "14.08.2026";
  return (
    <>
      <MetaTags
        title={"Wrodit Datenschutzerklärung"}
        description={"Datenschutzerklärung von Wrodit"}
        author={"Thierry Morgenthaler"}
      />
      <div className={styles.container}>
        <div className={styles.limiter}>
          <h1>Datenschutzerklärung</h1>
          <p>
            <strong>Stand: {lastChanged}</strong>
          </p>
          <h2>1. Verantwortliche Stelle</h2>
          <p> Verantwortlich für die Bearbeitung von Personendaten auf Wrodit ist: </p>
          <OperatorInformation />
          <p>
            E-Mail: <OperatorMail />
          </p>
          <h2>2. Welche Daten wir bearbeiten</h2>
          <p>
            Je nach Nutzung unserer Plattform können insbesondere folgende Personendaten bearbeitet
            werden:
          </p>
          <ul>
            <li>Benutzername und Profilinformationen</li> <li>E-Mail-Adresse</li>
            <li>Passwort bzw. verschlüsselt gespeicherte Passwortdaten</li>
            <li>Beiträge, Kommentare und andere veröffentlichte Inhalte</li>
          </ul>
          <p>
            Welche Daten tatsächlich bearbeitet werden, hängt davon ab, welche Funktionen Sie auf
            Wrodit verwenden.
          </p>
          <h2>3. Zweck der Datenbearbeitung</h2>
          <p> Wir bearbeiten Personendaten insbesondere für folgende Zwecke: </p>
          <ul>
            <li>Bereitstellung und Betrieb der Plattform</li>
            <li>Erstellung und Verwaltung von Benutzerkonten</li>
            <li>Veröffentlichung von Beiträgen und Kommentaren</li>
            <li>Kommunikation mit Nutzerinnen und Nutzern</li>
            <li>Moderation und Verwaltung der Plattform</li>
            <li>Erkennung und Verhinderung von Missbrauch</li>
            <li>Gewährleistung der Sicherheit und Stabilität der Plattform</li>
            <li>Fehleranalyse und technische Weiterentwicklung</li>
            <li>Erfüllung gesetzlicher Pflichten</li>
          </ul>
          <h2>4. Benutzerkonto</h2>
          <p>
            Für bestimmte Funktionen kann ein Benutzerkonto erforderlich sein. Die bei der
            Registrierung angegebenen Daten werden verwendet, um das Benutzerkonto zu erstellen und
            zu verwalten.
          </p>
          <h2>5. Beiträge und Kommentare</h2>
          <p>
            Inhalte, die Nutzerinnen und Nutzer auf Wrodit veröffentlichen, sind für Angemeldete
            Nutzer öffentlich sichtbar.
          </p>
          <p>
            Bitte veröffentlichen Sie keine persönlichen Informationen, die nicht öffentlich
            zugänglich sein sollen.
          </p>
          <h2>6. Server und Hosting</h2>
          <p>
            Unsere Plattform wird auf Servern von <strong>Contabo</strong> betrieben.
          </p>
          <p>
            Dabei können insbesondere IP-Adressen, Zeitpunkte des Zugriffs, technische Informationen
            und Server-Logdaten bearbeitet werden.
          </p>
          <p>
            Serverstandort: <strong>Europäische Union</strong>
          </p>
          <h2>7. Weitergabe an Dritte</h2>
          <p>
            Personendaten können an Dienstleister weitergegeben werden, soweit dies für den Betrieb
            und die Weiterentwicklung der Plattform erforderlich ist.
          </p>
          <p> Dazu können insbesondere folgende Dienstleister gehören: </p>
          <ul>
            <li>Hosting- und Serveranbieter</li>
            <li>Speicher- und Backup-Anbieter</li>
            <li>Sicherheits- und Spam-Schutz-Dienstleister</li>
          </ul>
          <h2>8. Bekanntgabe ins Ausland</h2>
          <p>Personendaten können innerhalb der Europäischen Union bearbeitet werden.</p>
          <p>
            Soweit Personendaten ins Ausland bekanntgegeben werden, informieren wir über das
            betreffende Land und die gegebenenfalls eingesetzten Garantien für einen angemessenen
            Datenschutz.
          </p>
          <h2>9. Cookies und ähnliche Technologien</h2>
          <p>
            Unsere Website kann Cookies und ähnliche Technologien verwenden. Diese können für den
            technischen Betrieb, die Speicherung von Einstellungen oder für statistische Zwecke
            eingesetzt werden.
          </p>
          <p>
            Sie können Cookies über die Einstellungen Ihres browsers verwalten oder löschen. Je nach
            Einstellung können bestimmte Funktionen der Plattform möglicherweise nicht vollständig
            funktionieren.
          </p>
          <h2>10. Datensicherheit</h2>
          <p>
            Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um
            Personendaten vor unbefugtem Zugriff, Verlust, Veränderung oder Missbrauch zu schützen.
          </p>
          <p>
            Trotz dieser Massnahmen kann eine vollständige Sicherheit bei der Übertragung und
            Speicherung von Daten im Internet nicht garantiert werden.
          </p>
          <h2>11. Aufbewahrungsdauer</h2>
          <p>
            Wir speichern Personendaten nur so lange, wie dies für die jeweiligen Zwecke
            erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.
          </p>
          <p>
            Nach Ablauf der entsprechenden Fristen werden die Daten gelöscht oder anonymisiert,
            soweit keine gesetzlichen oder berechtigten Gründe für eine weitere Aufbewahrung
            bestehen.
          </p>
          <h2>12. Löschung des Benutzerkontos</h2>
          <p> Nutzerinnen und Nutzer können ihr Benutzerkonto grundsätzlich löschen lassen. </p>
          <p>
            Anfragen zur Löschung können an <OperatorMail /> gesendet werden.
          </p>
          <p>Bereits öffentlich veröffentlichte Inhalte werden gelöscht.</p>
          <h2>13. Rechte betroffener Personen</h2>
          <p>
            Im Rahmen des Schweizer Datenschutzgesetzes können betroffene Personen insbesondere ihre
            Rechte auf Auskunft, Berichtigung und unter den gesetzlichen Voraussetzungen Löschung
            geltend machen.
          </p>
          <p> Anfragen können an folgende Adresse gerichtet werden: </p>
          <p>
            <OperatorMail />
          </p>
          <h2>14. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir können diese Datenschutzerklärung jederzeit anpassen, wenn sich unsere
            Datenbearbeitungen, die Plattform oder die gesetzlichen Anforderungen ändern.
          </p>
          <p> Es gilt jeweils die auf dieser Website veröffentlichte Fassung. </p>
          <h2>15. Anwendbares Recht</h2>
          <p>
            Diese Datenschutzerklärung richtet sich nach dem anwendbaren Schweizer Datenschutzrecht,
            insbesondere dem Bundesgesetz über den Datenschutz (DSG).
          </p>
          <p> Stand: {lastChanged} </p>
        </div>
      </div>
    </>
  );
}
