import styles from "./ChildComment.module.css";
import PostFooter from "./PostFooter";
import PostInformation from "./PostInformation";

export default function ChildComment({
  content,
  votes,
  createdAt,
  name,
}) {
  return (
    <div className={styles.comment}>
      <PostInformation name={name} createdAt={createdAt} />
      <p>{content}</p>
      <PostFooter vote={votes} />
    </div>
  );
}
