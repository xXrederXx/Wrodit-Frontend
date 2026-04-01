import PostText from "./PostText";
import PostInformation from "./PostInformation";
import PostFooter from "./PostFooter";
import styles from "./PostDetail.module.css";
import { Link } from "react-router-dom";
import CopyLinkButton from "./ui/CopyLinkButton.jsx";

export default function PostDetail({
  title,
  text,
  vote,
  createdAt,
  name,
  threadId,
  threadName,
  postId,
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
      <PostText text={text} />
      <PostFooter vote={vote} postId={postId} />
      <Link to={`/wrodit/create/comment/${postId}`} className={styles.linkButton}>
        Komentieren
      </Link>
      <CopyLinkButton />
    </article>
  );
}
