import { Link } from "react-router-dom";
import { fetchSelfLikesComment, likeComment } from "../../lib/wrodit.js";
import VoteBar from "../VoteBar.jsx";
import CommentEditButton from "./CommentEditButton.jsx";
import { getLoggedInUserId } from "../../lib/session.js";
import styles from "./CommentFooter.module.css";

export default function CommentFooter({ postId, data }) {
  return (
    <div className={styles.container}>
      <VoteBar
        id={data.id}
        totalVotes={data.votes}
        getOwnVote={fetchSelfLikesComment}
        postOwnVote={likeComment}
      />
      <Link to={`/wrodit/create/comment/parent/${postId}/${data.id}`} className={styles.linkButton}>
        Komentieren
      </Link>
      {data.user.id === getLoggedInUserId() && <CommentEditButton commentId={data.id} />}{" "}
    </div>
  );
}
