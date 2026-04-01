import { FcLike } from "react-icons/fc";
import {
  AiOutlineHeart,
  AiOutlineDislike,
  AiFillDislike,
} from "react-icons/ai";
import styles from "./PostFooter.module.css";
import { useEffect, useState } from "react";
import {
  DislikeLikePost,
  fetchSelfLikesPost,
  likePost,
  RemoveLikePost,
} from "../lib/wrodit";

export default function PostFooter({ vote, postId }) {
  const [userVote, setUserVote] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeSelf = await fetchSelfLikesPost(postId, true);
        setUserVote(likeSelf.vote || 0);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
      }
    };
    fetchLikes();
  }, [postId]);

  const handleLike = async (value) => {
    const previous = userVote;

    // optimistic update
    setUserVote(value);

    try {
      await likePost(postId, value);
    } catch (err) {
      console.error(err);

      // rollback if failed
      setUserVote(previous);
    }
  };

  return (
    <footer className={styles.footer}>
      {vote + userVote}

      {userVote === 1 ? (
        <FcLike onClick={() => handleLike(0)} />
      ) : (
        <AiOutlineHeart onClick={() => handleLike(1)} />
      )}

      {userVote === -1 ? (
        <AiFillDislike onClick={() => handleLike(0)} />
      ) : (
        <AiOutlineDislike onClick={() => handleLike(-1)} />
      )}
    </footer>
  );
}
