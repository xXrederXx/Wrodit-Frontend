import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PostInformation from "../post/PostInformation.jsx";
import { fetchAllUserData, fetchCommentByParent, fetchUser } from "../../lib/wrodit.js";

import styles from "./Comment.module.css";
import CommentEditButton from "./CommentEditButton.jsx";
import CommentFooter from "./CommentFooter.jsx";
import { getLoggedInUserId } from "../../lib/session.js";
import CommentHeader from "./CommentHeader.jsx";

export default function Comment({ postId, data, lvl }) {
  const [children, setChildren] = useState([]);

  // fetch children
  useEffect(() => {
    const fetchChildComments = async () => {
      try {
        const childComments = await fetchCommentByParent(data.id);
        setChildren(childComments.content);
      } catch (err) {
        console.error("Fehler beim Laden der Kommentare:", err.message || "Fehler beim Laden");
      }
    };

    if (data?.id) {
      fetchChildComments();
    }
  }, [data.id]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: lvl }} />

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
            {data.user.id === getLoggedInUserId() && (
              <CommentEditButton commentId={data.id} />
            )}{" "}
          </div>
        </div>
      </div>
      {children.map(child => {
        return (
          <Comment
            key={child.id}
            postId={postId}
            data={child}
            lvl={lvl + 1}
          />
        );
      })}
    </>
  );
}
