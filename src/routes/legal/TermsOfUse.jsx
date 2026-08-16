import React from "react";

import styles from "./legal.module.css";
import MetaTags from "../../components/MetaTags";
import { Link } from "react-router-dom";
import OperatorInformation from "./OperatorInformation";
import OperatorMail from "./OperatorMail";

export default function TermsOfUse() {
  const lastUpdated = "14.08.2026";
  return (
    <>
      <MetaTags
        title={"Wordit Nutzungsbedingungen"}
        description={"Nutzungsbedingungen von Wrodit"}
        author={"Thierry Morgenthaler"}
      />
      <div className={styles.container}>
        <div className={styles.limiter}>
          <h1>Nutzungsbedingungen</h1>
          <p>
            <strong>Stand: {lastUpdated}</strong>
          </p>
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Nutzungsbedingungen regeln die Nutzung der Online-Plattform{" "}
            <strong>Wrodit</strong> durch Besucherinnen und Besucher sowie registrierte Nutzerinnen
            und Nutzer.
          </p>
          <p> Betreiber der Plattform ist: </p>
          <OperatorInformation />
          <h2>2. Nutzung der Plattform</h2>
          <p>
            Wrodit bietet eine Plattform, auf der Nutzerinnen und Nutzer Beiträge, Kommentare und
            andere Inhalte veröffentlichen und miteinander interagieren können.
          </p>
          <p>
            Die Nutzung der Plattform ist nur im Rahmen dieser Nutzungsbedingungen und der
            anwendbaren gesetzlichen Bestimmungen erlaubt.
          </p>
          <h2>3. Registrierung und Benutzerkonto</h2>
          <p> Für bestimmte Funktionen ist die Erstellung eines Benutzerkontos erforderlich. </p>
          <p>
            {" "}
            Bei der Registrierung müssen die angegebenen Informationen korrekt und aktuell
            sein.{" "}
          </p>
          <p>
            Jede Person darf grundsätzlich nur ein Benutzerkonto erstellen, sofern Wrodit nichts
            anderes erlaubt.
          </p>
          <p>
            Zugangsdaten sind vertraulich zu behandeln und dürfen nicht unbefugt an Dritte
            weitergegeben werden.
          </p>
          <p>Bei Verdacht auf einen unbefugten Zugriff ist Wrodit unverzüglich zu informieren.</p>
          <h2>4. Mindestalter</h2>
          <p>
            Die Nutzung der Plattform ist Personen ab <strong>16</strong> Jahren erlaubt.
          </p>
          <p>
            Soweit für bestimmte Nutzerinnen und Nutzer nach anwendbarem Recht die Zustimmung einer
            gesetzlichen Vertretung erforderlich ist, muss diese vorliegen.
          </p>
          <h2>5. Inhalte der Nutzerinnen und Nutzer</h2>
          <p>
            Nutzerinnen und Nutzer können auf Wrodit eigene Inhalte veröffentlichen, insbesondere
            Beiträge, Kommentare, Bilder, Links und andere Inhalte.
          </p>
          <p>
            Die jeweilige Nutzerin bzw. der jeweilige Nutzer ist für die von ihr bzw. ihm
            veröffentlichten Inhalte selbst verantwortlich.
          </p>
          <p>
            Nutzerinnen und Nutzer müssen sicherstellen, dass ihre Inhalte keine Rechte Dritter
            verletzen und nicht gegen geltendes Recht oder diese Nutzungsbedingungen verstossen.
          </p>
          <h2>6. Verbotene Inhalte und Verhalten</h2> <p> Nicht erlaubt sind insbesondere: </p>
          <ul>
            <li>rechtswidrige Inhalte oder Aktivitäten</li>
            <li>Bedrohungen oder gezielte Belästigung anderer Personen</li>
            <li>Hassrede und Aufrufe zu Gewalt</li>
            <li>Darstellungen oder Angebote illegaler Aktivitäten</li>
            <li>Betrug, Täuschung oder Identitätsmissbrauch</li>
            <li>Spam und massenhafte unerwünschte Inhalte</li>
            <li>Schadsoftware oder andere schädliche Dateien</li>
            <li>Versuche, Benutzerkonten anderer Personen zu übernehmen</li>
            <li>Veröffentlichung vertraulicher oder unrechtmässig erlangter Daten</li>
            <li>Verletzung von Urheberrechten oder anderen Schutzrechten</li>
            <li>Umgehung technischer Sicherheitsmassnahmen</li>
            <li>Manipulation von Abstimmungen, Bewertungen oder Rankings</li>
            <li>Automatisierte Zugriffe, sofern diese nicht ausdrücklich erlaubt sind</li>
            <li>sonstige Inhalte oder Verhaltensweisen, die gegen geltendes Recht verstossen</li>
          </ul>
          <h2>7. Moderation</h2>
          <p>
            Wrodit kann Inhalte überprüfen und moderieren, soweit dies zur Durchsetzung dieser
            Nutzungsbedingungen, zum Schutz der Plattform oder aufgrund gesetzlicher Verpflichtungen
            erforderlich ist.
          </p>
          <p>
            Wir können insbesondere Inhalte entfernen, einschränken oder deren Sichtbarkeit
            verändern, wenn sie gegen diese Nutzungsbedingungen oder geltendes Recht verstossen.
          </p>
          <p>
            Ein Anspruch auf Veröffentlichung oder dauerhafte Verfügbarkeit bestimmter Inhalte
            besteht grundsätzlich nicht.
          </p>
          <h2>8. Meldung von Inhalten</h2>
          <p>
            Nutzerinnen und Nutzer können Inhalte, die möglicherweise gegen diese
            Nutzungsbedingungen oder geltendes Recht verstossen, über die vorgesehenen
            Meldefunktionen oder per E-Mail melden.
          </p>
          <p> Meldungen können an folgende Adresse gesendet werden: </p>
          <p><OperatorMail/></p>
          <h2>9. Geistiges Eigentum</h2>
          <p>
            Die Rechte an den von Nutzerinnen und Nutzern veröffentlichten Inhalten verbleiben
            grundsätzlich bei den jeweiligen Rechteinhaberinnen und Rechteinhabern.
          </p>
          <p>
            Durch das Hochladen oder Veröffentlichen eines Inhalts räumt die Nutzerin bzw. der
            Nutzer Wrodit die für den Betrieb der Plattform erforderlichen Rechte ein, insbesondere
            das Recht, diesen Inhalt technisch zu speichern, zu vervielfältigen, öffentlich
            zugänglich zu machen und innerhalb der Plattform anzuzeigen.
          </p>
          <p>
            Diese Einräumung erfolgt zeitlich unbegrenzt und soweit erforderlich für den Betrieb der
            Plattform.
          </p>
          <h2>10. Inhalte von Wrodit</h2>
          <p>
            Aufbau, Design, Software, Logos, Marken und sonstige Inhalte von Wrodit können
            urheberrechtlich oder anderweitig geschützt sein.
          </p>
          <p>
            Eine Nutzung ausserhalb des bestimmungsgemässen Gebrauchs der Plattform ist nur mit
            vorheriger Zustimmung der jeweiligen Rechteinhaber erlaubt, soweit keine gesetzlichen
            Ausnahmen gelten.
          </p>
          <h2>11. Links zu Drittanbietern</h2>
          <p> Die Plattform kann Links zu externen Websites oder Diensten enthalten. </p>
          <p>
            Für Inhalte, Verfügbarkeit und Datenschutzpraktiken externer Websites sind grundsätzlich
            deren jeweilige Betreiber verantwortlich.
          </p>
          <h2>12. Verfügbarkeit</h2>
          <p>
            Wir bemühen uns um einen möglichst zuverlässigen Betrieb der Plattform. Eine
            jederzeitige, störungsfreie oder ununterbrochene Verfügbarkeit kann jedoch nicht
            garantiert werden.
          </p>
          <p>
            Wartungsarbeiten, technische Probleme oder Ereignisse ausserhalb unseres
            Einflussbereichs können zu Einschränkungen oder Unterbrechungen führen.
          </p>
          <h2>13. Haftung</h2>
          <p> Die Haftung von Wrodit richtet sich nach dem anwendbaren Schweizer Recht. </p>
          <p>
            Soweit gesetzlich zulässig, wird die Haftung für Schäden ausgeschlossen, die
            insbesondere durch die Nutzung oder Nichtverfügbarkeit der Plattform, durch Inhalte von
            Nutzerinnen und Nutzern oder durch externe Websites entstehen.
          </p>
          <p> Zwingende gesetzliche Haftungsbestimmungen bleiben vorbehalten. </p>
          <h2>14. Sperrung und Beendigung</h2>
          <p>
            Wrodit kann Benutzerkonten vorübergehend oder dauerhaft sperren oder schliessen, wenn
            Nutzerinnen oder Nutzer gegen diese Nutzungsbedingungen, geltendes Recht oder die
            Sicherheit der Plattform verstossen.
          </p>
          <p>
            Bei schwerwiegenden Verstössen kann eine Sperrung ohne vorherige Warnung erfolgen,
            soweit dies angemessen und rechtlich zulässig ist.
          </p>
          <p>
            Nutzerinnen und Nutzer können ihr Benutzerkonto jederzeit löschen, soweit keine
            gesetzlichen oder sonstigen berechtigten Gründe für eine weitere Aufbewahrung bestimmter
            Daten bestehen.
          </p>
          <h2>15. Änderungen der Nutzungsbedingungen</h2>
          <p>
            Wir können diese Nutzungsbedingungen ändern, wenn dies aufgrund von Änderungen der
            Plattform, neuer Funktionen, rechtlicher Anforderungen oder anderer sachlicher Gründe
            erforderlich ist.
          </p>
          <p> Wesentliche Änderungen werden den Nutzerinnen und Nutzern angemessen mitgeteilt. </p>
          <p> Es gilt jeweils die auf Wrodit veröffentlichte aktuelle Fassung. </p>
          <h2>16. Datenschutz</h2>
          <p> Die Bearbeitung von Personendaten erfolgt gemäss unserer Datenschutzerklärung. </p>
          <p>
            <Link to={"/wrodit/datenschutz"}>Zur Datenschutzerklärung </Link>
          </p>
          <h2>17. Anwendbares Recht</h2>
          <p>
            Diese Nutzungsbedingungen unterstehen dem Schweizer Recht, soweit keine zwingenden
            gesetzlichen Bestimmungen entgegenstehen.
          </p>
          <h2>18. Gerichtsstand</h2>
          <p>
            Soweit gesetzlich zulässig, ist der Gerichtsstand <strong>Bern, Schweiz</strong>.
          </p>
          <p> Zwingende gesetzliche Gerichtsstände bleiben vorbehalten. </p> <h2>19. Kontakt</h2>
          <p> Bei Fragen zu diesen Nutzungsbedingungen können Sie uns kontaktieren: </p>
          <OperatorInformation />
          <p>E-Mail: <OperatorMail/></p>
          <p> Stand: {lastUpdated} </p>
        </div>
      </div>
    </>
  );
}
