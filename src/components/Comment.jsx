import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import PostInformation from "./PostInformation";
import {
  fetchAllUserData,
  fetchCommentByParent,
  fetchUser,
} from "../lib/wrodit";
import { Link } from "react-router-dom";
import CommentEditButton from "./CommentEditButton";
import CommentFooter from "./CommentFooter";

export default function Comment({
  name,
  postId,
  data,
  lvl,
  isEditValid,
  commentId,
}) {
  const [children, setChildren] = useState([]);
  const [error, setError] = useState("");
  const [self, setSelf] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const newData = await fetchCommentByParent(data.id);
        const user = await fetchAllUserData();

        const childUsername = await Promise.all(
          newData.content.map(async (item) => {
            const dataUser = await fetchUser(item.userId);

            return {
              ...item,
              username: dataUser.username,
            };
          }),
        );

        setSelf(user);
        setChildren(childUsername);
      } catch (err) {
        setError(err.message || "Fehler beim Laden");
        console.log("Fehler beim Laden der Kommentare:", error);
      }
    };

    if (data?.id) {
      fetchComments();
    }
  }, [data.id]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ flex: lvl }}></div>

        <div className={styles.comment} style={{ flex: 10, minWidth: "20rem" }}>
          <PostInformation name={name} createdAt={data.createdAt} />

          <p>{data.content}</p>
          <CommentFooter vote={data.votes} commentId={data.id}/>
          <div>
            <Link
              to={`/wrodit/create/comment/parent/${postId}/${data.id}`}
              className={styles.linkButton}
            >
              Komentieren
            </Link>
            <CommentEditButton
              commentId={commentId}
              isValid={isEditValid}
            />{" "}
          </div>
        </div>
      </div>
      {children.map((child) => {
        const isValid = self.id === child.userId;

        return (
          <Comment
            name={child.username}
            postId={postId}
            commentId={child.id}
            data={child}
            lvl={lvl + 1}
            isEditValid={isValid}
          />
        );
      })}
    </>
  );
}
