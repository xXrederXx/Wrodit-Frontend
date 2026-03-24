import styles from "./ThreadInformation.module.css";
import { Link } from "react-router-dom";

export default function ThreadInformation({ name, description, to }) {
  return (
    <div className={styles.ThreadInformation}>
      <div className={styles.topBar}>
        <h1>w/{name}</h1>
        <Link to={to} className={styles.linkButton}>
          Post erstellen
        </Link>
      </div>
      <p>{description}</p>
    </div>
  );
}
