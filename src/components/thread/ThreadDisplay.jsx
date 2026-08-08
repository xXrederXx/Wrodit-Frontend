import React from "react";
import { Link } from "react-router-dom";

import styles from "./ThreadDisplay.module.css";

export default function ThreadDisplay({ thread }) {
  return (
    <Link className={styles.link} to={`/wrodit/thread/${thread.id}`}>
      <p>w/{thread.name}</p>
    </Link>
  );
}
