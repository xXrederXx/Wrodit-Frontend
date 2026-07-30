import { fetchSelfLikesComment, likeComment } from "../../lib/wrodit.js";
import VoteBar from "../VoteBar.jsx";

export default function CommentFooter({ vote, commentId }) {
  return (
    <VoteBar
      id={commentId}
      totalVotes={vote}
      getOwnVote={fetchSelfLikesComment}
      postOwnVote={likeComment}
    />
  );
}
