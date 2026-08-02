import React from "react";
import PostInformation from "../post/PostInformation";
import { timeAgo } from "../../lib/util";

import styles from "./CommentHeader.module.css";

export default function CommentHeader({ data }) {
  return (
    <header className={styles.header}>
      <p>{data.user.username}</p>
      <p>Vor {timeAgo(data.createdAt)}</p>
    </header>
  );
}
