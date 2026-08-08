import React from "react";
import styles from "./PostPreviewFooter.module.css";
import { fetchSelfLikesPost, likePost } from "../../../lib/wrodit";
import VoteBar from "../../VoteBar.jsx";
import ShareIcon from "../../icons/ShareIcon.jsx";

export default function PostPreviewFooter({ post }) {
  return (
    <div className={styles.container}>
      <VoteBar
        id={post.id}
        totalVotes={post.vote}
        getOwnVote={fetchSelfLikesPost}
        postOwnVote={likePost}
      />

      <button
        type="button"
        className={styles.button}
        onClick={() => navigator.clipboard.writeText(`${window.location.origin}/post/${post.id}`)}>
        <ShareIcon />
        <span>Teilen</span>
      </button>
    </div>
  );
}
