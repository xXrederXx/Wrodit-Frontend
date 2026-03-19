import styles from "./PostInformation.module.css";

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

export default function PostInformation({name, threadName, createdAt}) {
    return(
        <header className={styles.header}>
        <p>Von: {name}</p>
        <p>Aus: {threadName}</p>
        <p>Vohr {timeAgo(createdAt)}</p>
        </header>
    )
}