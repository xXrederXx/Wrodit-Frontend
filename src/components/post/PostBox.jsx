import PostText from "./PostText.jsx";
import PostTitle from "./PostTitle.jsx";
import PostHeader from "./PostInformation.jsx";
import styles from "./PostBox.module.css";
import PostFooter from "./PostFooter.jsx";
import { Link } from "react-router-dom";

export default function PostBox({ title, text, vote, createdAt, username, threadId, threadName, to }) {
  return (
    <article className={styles.article}>
      <PostHeader
        username={username}
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
