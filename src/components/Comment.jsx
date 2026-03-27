import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import PostFooter from "./PostFooter";
import PostInformation from "./PostInformation";
import { fetchCommentByPost, fetchCommentByParent } from "../lib/wrodit";
import { Link } from "react-router-dom";

export default function Comment({ postId, data, lvl }) {
  const [children, setChildren] = useState([]);
  const [error, setError] = useState("");
  let level = lvl;
  if (level >= 4){
    level = 4
  }
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const newData = await fetchCommentByParent(data.id);
          setChildren(newData.content);
        } catch (err) {
          setError(err);
        }
      };
      fetchComments();
    }, [data.id]);

  return (
    <div style={{ paddingLeft: level * 0.5 + "rem" }}>
      <div className={styles.comment}>
        <PostInformation name={data.name} createdAt={data.createdAt} />
        <p>{data.content}</p>
        <PostFooter vote={data.votes} />
        <Link
          to={`/wrodit/create/comment/parent/${postId}/${data.id}`}
          className={styles.linkButton}
        >
          Komentieren
        </Link>
      </div>
      {children.map((child) => (
        <Comment postId={postId} key={child.id} data={child} lvl={lvl + 1} />
      ))}
    </div>
  );
}
