import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import PostFooter from "./PostFooter";
import PostInformation from "./PostInformation";
import {
  fetchCommentByPost,
  fetchCommentByParent,
  fetchUser,
} from "../lib/wrodit";
import { Link } from "react-router-dom";

export default function Comment({ name, postId, data, lvl }) {
  const [children, setChildren] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {

        const newData = await fetchCommentByParent(data.id);

        const childUsername = await Promise.all(
          newData.content.map(async (item) => {
            const dataUser = await fetchUser(item.userId);

            return {
              ...item,
              username: dataUser.username,
            };
          }),
        );

        setChildren(childUsername);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
      }
    };

    if (data?.id) {
      fetchComments();
    }
  }, [data.id]);

  return (<>
    <div style={{display:"flex"}}>
      <div style={{flex:lvl}}></div>
      <div className={styles.comment} style={{flex:10, minWidth:"20rem"}}>
        <PostInformation name={name} createdAt={data.createdAt} />
        <p>{data.content}</p>
        <PostFooter vote={data.votes} />
        <Link
          to={`/wrodit/create/comment/parent/${postId}/${data.id}`}
          className={styles.linkButton}
        >
          Komentieren
        </Link>
      </div>
    </div>
      {children.map((child) => (
        <Comment
          name={child.username}
          postId={postId}
          key={child.id}
          data={child}
          lvl={lvl + 1}
        />
      ))}</>
  );
}
