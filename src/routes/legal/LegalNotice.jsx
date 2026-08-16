import React from "react";

import styles from "./legal.module.css";
import MetaTags from "../../components/MetaTags";
import { Link } from "react-router-dom";
import OperatorInformation from "./OperatorInformation";
import OperatorMail from "./OperatorMail";

export default function LegalNotice() {
  const lastChanged = "14.08.2026"
  return (
    <>
      <MetaTags
        title={"Wrodit Impressum"}
        description={"Impressum von Wrodit"}
        author={"Thierry Morgenthaler"}
      />
      <div className={styles.container}>
        <div className={styles.limiter}>
          <h1>Imperessum</h1>
          <h2>Betreiber</h2>
          <OperatorInformation />
          <h2>Kontakt</h2>
          <p>E-Mail: <OperatorMail/></p>

          <h2>Verantwortlich für den Inhalt</h2>
          <OperatorInformation />
          <h2>Hinweis zur Plattform</h2>
          <p>
            Wrodit ist eine selbst entwickelte Online-Plattform, auf der Nutzerinnen und Nutzer
            Inhalte veröffentlichen und miteinander interagieren können.
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Betreiberin bzw. der Betreiber bemüht sich um korrekte und aktuelle Inhalte. Für die
            von Nutzerinnen und Nutzern veröffentlichten Inhalte ist grundsätzlich die jeweilige
            veröffentlichende Person verantwortlich.
          </p>
          <p>
            Rechtswidrige Inhalte können über die dafür vorgesehenen Kontaktmöglichkeiten gemeldet
            werden.
          </p>
          <h2>Datenschutz</h2>
          <p>
            Informationen zur Bearbeitung von Personendaten finden Sie in unserer
            <Link to={"/wrodit/datenschutz"}>Datenschutzerklärung </Link>
          </p>
          <p> Stand: {lastChanged} </p>
        </div>
      </div>
    </>
  );
}
