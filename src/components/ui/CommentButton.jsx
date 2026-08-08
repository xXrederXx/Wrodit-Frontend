import React from "react";

import styles from "./CommentButton.module.css"
import { Link } from "react-router-dom";

export default function CommentButton({postId, commentId}) {
  return (
    
    <Link to={commentId ? `/wrodit/create/comment/parent/${postId}/${commentId}` : `/wrodit/create/comment/${postId}`} className={styles.linkButton}>
      Komentieren
    </Link>
  );
}
