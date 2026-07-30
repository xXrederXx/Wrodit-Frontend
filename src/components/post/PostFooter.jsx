import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import { useEffect, useState } from "react";

import { DislikeLikePost, fetchSelfLikesPost, likePost, RemoveLikePost } from "../../lib/wrodit.js";

import styles from "./PostFooter.module.css";
import VoteBar from "../VoteBar.jsx";

export default function PostFooter({ vote, postId }) {
  return (
    <VoteBar id={postId} totalVotes={vote} getOwnVote={fetchSelfLikesPost} postOwnVote={likePost} />
  );
}
