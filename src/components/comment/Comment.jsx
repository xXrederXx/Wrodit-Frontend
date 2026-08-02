import { Link } from "react-router-dom";

import { getLoggedInUserId } from "../../lib/session.js";

import styles from "./Comment.module.css";
import CommentEditButton from "./CommentEditButton.jsx";
import CommentFooter from "./CommentFooter.jsx";
import CommentHeader from "./CommentHeader.jsx";

export default function Comment({ postId, data }) {
  return (
    <div className={styles.comment} style={{ flex: 10, minWidth: "20rem" }}>
      <CommentHeader data={data} />
      <p>{data.content}</p>
      <CommentFooter vote={data.votes} commentId={data.id} />
      <div>
        <Link
          to={`/wrodit/create/comment/parent/${postId}/${data.id}`}
          className={styles.linkButton}>
          Komentieren
        </Link>
        {data.user.id === getLoggedInUserId() && <CommentEditButton commentId={data.id} />}{" "}
      </div>
    </div>
  );
}
