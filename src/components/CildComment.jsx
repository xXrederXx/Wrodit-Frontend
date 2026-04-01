import styles from "./ChildComment.module.css";
import CommentFooter from "./CommentFooter";
import PostInformation from "./PostInformation";

export default function ChildComment({ content, votes, createdAt, name }) {
  return (
    <div className={styles.comment}>
      <PostInformation name={name} createdAt={createdAt} />
      <p>{content}</p>
      <CommentFooter vote={votes} />
    </div>
  );
}
