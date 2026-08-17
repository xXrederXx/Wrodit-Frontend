import React from "react";

import styles from "./ThreadAside.module.css";
import { Link } from "react-router-dom";
import ThreadBirthIcon from "../icons/ThreadBirthIcon";
import DateTime from "../ui/DateTime";

export default function ThreadAside({ thread }) {
  return (
    <aside className={styles.container}>
      <div className={styles.contentContainer}>
        <Link to={`/thread/${thread.id}`} className={styles.threadName}>
          w/{thread.name}
        </Link>
        <p>{thread.description}</p>

        <p className={styles.birthText}>
          <ThreadBirthIcon className={styles.birthIcon} /> <DateTime dateTime={thread.createdAt} />
        </p>
      </div>
    </aside>
  );
}
