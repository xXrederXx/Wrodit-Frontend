import { useEffect, useState } from "react";

import { fetchCommentByParent } from "../../lib/wrodit.js";

import Comment from "./Comment.jsx";
import styles from "./CommentsContainer.module.css";

export default function CommentsContainer({ postId, data, lvl }) {
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
      <div className={styles.container}>
        <div style={{ flex: lvl }} />
        <Comment data={data} postId={postId} />
      </div>
      {children.map(child => {
        return <CommentsContainer key={child.id} postId={postId} data={child} lvl={lvl + 1} />;
      })}
    </>
  );
}
