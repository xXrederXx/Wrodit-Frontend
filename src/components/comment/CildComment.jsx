import styles from "./ChildComment.module.css";
import CommentFooter from "./CommentFooter.jsx";
import PostInformation from "../post/PostInformation.jsx";

export default function ChildComment({ content, votes, createdAt, name }) {
  return (
    <div className={styles.comment}>
      <PostInformation name={name} createdAt={createdAt} />
      <p>{content}</p>
      <CommentFooter vote={votes} />
    </div>
  );
}
