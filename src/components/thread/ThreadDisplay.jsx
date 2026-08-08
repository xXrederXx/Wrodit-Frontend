import React from "react";
import styles from "./ThreadDisplay.module.css"
import { Link } from "react-router-dom";

export default function ThreadDisplay({ thread }) {
  return (
    <Link className={styles.link} to={`/wrodit/thread/${thread.id}`}>
      <p>w/{thread.name}</p>
    </Link>
  );
}
