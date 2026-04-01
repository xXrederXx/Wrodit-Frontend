import styles from "./PostInformation.module.css";
import { Link } from "react-router-dom";

function timeAgo(createdAt) {
  const now = new Date();
  const postDate = new Date(createdAt);
  const diffMs = now - postDate; // Differenz in Millisekunden

  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHours = Math.floor(diffMin / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSec < 60) return `${diffSec} Sekunden`;
  if (diffMin < 60) return `${diffMin} Minuten`;
  if (diffHours < 24) return `${diffHours} Stunden`;
  return `${diffDays} Tagen`;
}

export default function PostInformation({ username, threadId, threadName, createdAt }) {
  return (
    <header className={styles.header}>
      <p>{username}</p>
      <Link className={styles.link} to={`/wrodit/thread/${threadId}`}>
        {" "}
        <p>{threadName}</p>
      </Link>
      <p>Vor {timeAgo(createdAt)}</p>
    </header>
  );
}
