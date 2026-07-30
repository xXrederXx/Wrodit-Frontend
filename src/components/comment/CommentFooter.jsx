import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { useEffect, useState } from "react";

import styles from "../post/PostFooter.module.css";
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
