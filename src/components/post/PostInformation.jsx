import styles from "./PostInformation.module.css";
import { Link } from "react-router-dom";
import { timeAgo } from "../../lib/util.js";

export default function PostHeader({ username, threadId, threadName, createdAt }) {
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
