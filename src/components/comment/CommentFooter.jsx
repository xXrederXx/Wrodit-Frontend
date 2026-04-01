import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import styles from "../post/PostFooter.module.css";
import { fetchSelfLikesComment, likeComment } from "../../lib/wrodit.js";
import { useEffect, useState } from "react";

export default function CommentFooter({ vote, commentId }) {
  const [userVote, setUserVote] = useState(0);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeSelf = await fetchSelfLikesComment(commentId);
        setUserVote(likeSelf.vote ? likeSelf.vote : 0);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
      }
    };
    fetchLikes();
  }, [commentId]);

  const handleLike = async value => {
    try {
      await likeComment(commentId, value);
      setUserVote(value);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className={styles.footer}>
      {vote + userVote}
      {userVote === 1 ?
        <FcLike onClick={() => handleLike(0)} />
      : <AiOutlineHeart onClick={() => handleLike(1)} />}
      {userVote === -1 ?
        <AiFillDislike onClick={() => handleLike(0)} />
      : <AiOutlineDislike onClick={() => handleLike(-1)} />}
    </footer>
  );
}
