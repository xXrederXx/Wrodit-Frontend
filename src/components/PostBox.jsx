import PostText from "./PostText";
import PostTitle from "./PostTitle";
import PostInformation from "./PostInformation";
import styles from "./PostBox.module.css";
import PostFooter from "./PostFooter";
import { Link } from "react-router-dom";

export default function PostBox({ title, text, vote, createdAt, name, threadId, threadName, to }) {
  return (
    <article className={styles.article}>
      <PostInformation
        name={name}
        threadId={threadId}
        threadName={threadName}
        createdAt={createdAt}
      />{" "}
      <Link className={styles.link} to={`/wrodit/post/${to}`}>
        <PostTitle title={title} />
        <PostText text={text} />{" "}
      </Link>
      <PostFooter vote={vote} postId={to} />
    </article>
  );
}
