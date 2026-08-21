import React from "react";
import { Link } from "react-router-dom";

import styles from "./CommentButton.module.css";

export default function CommentButton({ postId, commentId }) {
  return (
    <Link
      to={commentId ? `/create/comment/parent/${postId}/${commentId}` : `/create/comment/${postId}`}
      className={styles.linkButton}>
      Komentieren
    </Link>
  );
}
