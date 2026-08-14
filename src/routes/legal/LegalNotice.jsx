import React from "react";

import styles from "./legal.module.css";
import MetaTags from "../../components/MetaTags";
import { Link } from "react-router-dom";

export default function LegalNotice() {
  return (
    <>
      <MetaTags
        title={"Wrodit Impressum"}
        description={"Impressum von Wrodit"}
        author={"Thierry Morgenthaler"}
      />
      <div className={styles.container}>
        <div className={styles.limiter}>
          <h1>Imperssum</h1>
          <h2>Betreiber</h2>
          <p>
            <strong>Thierry Morgenthaler</strong>
            <br /> Berkenstrasse 6
            <br /> 3373 Heimenhausen
            <br /> Schweiz
          </p>
          <h2>Kontakt</h2>
          <p>E-Mail: morgenthalerthierry+wrodit@gmail.com</p>

          <h2>Verantwortlich für den Inhalt</h2>
          <p>
            <strong>Thierry Morgenthaler</strong>
            <br /> Berkenstrasse 6
            <br /> 3373 Heimenhausen
            <br /> Schweiz
          </p>
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
            <Link to={"/wrodit/datenschutz"}>Zur Datenschutzerklärung </Link>
          </p>
          <p> Stand: 14.08.2026 </p>
        </div>
      </div>
    </>
  );
}
