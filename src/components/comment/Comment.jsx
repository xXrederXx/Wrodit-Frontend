import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PostInformation from "../post/PostInformation.jsx";
import { fetchAllUserData, fetchCommentByParent, fetchUser } from "../../lib/wrodit.js";

import styles from "./Comment.module.css";
import CommentEditButton from "./CommentEditButton.jsx";
import CommentFooter from "./CommentFooter.jsx";

export default function Comment({ username, postId, data, lvl, canEdit, commentId }) {
  const [children, setChildren] = useState([]);
  const [thisCommentData, setThisCommentData] = useState(false);

  // fetch children
  useEffect(() => {
    const fetchChildComments = async () => {
      try {
        const childComments = await fetchCommentByParent(data.id);
        const user = await fetchAllUserData();

        const childUsername = await Promise.all(
          childComments.content.map(async item => {
            const dataUser = await fetchUser(item.userId);

            return {
              ...item,
              username: dataUser.username,
            };
          }),
        );

        setThisCommentData(user);
        setChildren(childUsername);
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
          <PostInformation post={{ user: { username }, thread: {}, createdAt: data.createdAt }} />

          <p>{data.content}</p>
          <CommentFooter vote={data.votes} commentId={data.id} />
          <div>
            <Link
              to={`/wrodit/create/comment/parent/${postId}/${data.id}`}
              className={styles.linkButton}>
              Komentieren
            </Link>
            <CommentEditButton commentId={commentId} isValid={canEdit} />{" "}
          </div>
        </div>
      </div>
      {children.map(child => {
        const userCanEdit = thisCommentData.id === child.userId;

        return (
          <Comment
            key={child.id}
            username={child.username}
            postId={postId}
            commentId={child.id}
            data={child}
            lvl={lvl + 1}
            canEdit={userCanEdit}
          />
        );
      })}
    </>
  );
}
