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
  const [self, setSelf] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const likeSelf = await fetchSelfLikesPost(postId);
        setSelf(likeSelf.vote);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
      }
    };
    fetchLikes();
  }, [self]);

  const handleLike = async () => {
    try {
      await likePost(postId);
      setSelf(1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemoveLike = async () => {
    try {
      await RemoveLikePost(postId);
      setSelf(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDisLike = async () => {
    try {
      await DislikeLikePost(postId);
      setSelf(-1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className={styles.footer}>
      {vote + self}
      {self === 1 ? (
        <FcLike onClick={handleRemoveLike} />
      ) : (
        <AiOutlineHeart onClick={handleLike} />
      )}
      {self === -1 ? (
        <AiFillDislike onClick={handleRemoveLike} />
      ) : (
        <AiOutlineDislike onClick={handleDisLike} />
      )}
    </footer>
  );
}
