import { FcLike } from "react-icons/fc";
import { AiOutlineHeart, AiOutlineDislike, AiFillDislike } from "react-icons/ai";
import styles from "../PostFooter.module.css";
import {
  DislikeLikeComment,
  fetchSelfLikesComment,
  likeComment,
  RemoveLikeComment,
} from "../../lib/wrodit.js";
import { useEffect, useState } from "react";

export default function CommentFooter({ vote, commentId }) {
  const [self, setSelf] = useState(0);
  const [error, setError] = useState(""); // eslint-disable-line

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeSelf = await fetchSelfLikesComment(commentId);
        setSelf(likeSelf.vote ? likeSelf.vote : 0);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
      }
    };
    fetchLikes();
  }, [commentId]);

  const handleLike = async () => {
    try {
      await likeComment(commentId);
      setSelf(1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveLike = async () => {
    try {
      await RemoveLikeComment(commentId);
      setSelf(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDisLike = async () => {
    try {
      await DislikeLikeComment(commentId);
      setSelf(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className={styles.footer}>
      {vote + self}
      {self === 1 ?
        <FcLike onClick={handleRemoveLike} />
      : <AiOutlineHeart onClick={handleLike} />}
      {self === -1 ?
        <AiFillDislike onClick={handleRemoveLike} />
      : <AiOutlineDislike onClick={handleDisLike} />}
    </footer>
  );
}
