import PostText from "./PostText";
import PostInformation from "./PostInformation";
import PostFooter from "./PostFooter";
import styles from "./PostDetail.module.css";


export default function PostDetail({
  title,
  text,
  vote,
  createdAt,
  name,
  threadId,
  threadName,
}) {
  return (
    <article className={styles.article}>
      <PostInformation
        name={name}
        threadId={threadId}
        threadName={threadName}
        createdAt={createdAt}
      />
      <h1 className={styles.title}>{title}</h1>
      <PostText text={text} /> <PostFooter vote={vote} />
    </article>
  );
}
