import React from "react";
import RelativeTime from "../ui/RelativeTime.jsx"

import styles from "./CommentHeader.module.css";

export default function CommentHeader({ data }) {
  return (
    <header className={styles.header}>
      <p>{data.user.username}</p>
      <RelativeTime dateTime={data.createdAt} />
    </header>
  );
}
