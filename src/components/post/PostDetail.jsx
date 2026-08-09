import MarkdownContainer from "../ui/MarkdownContainer.jsx";

import PostHeader from "./PostHeader.jsx";
import PostFooter from "./PostFooter.jsx";
import styles from "./PostDetail.module.css";

export default function PostDetail({ post }) {
  return (
    <article className={styles.article}>
      <PostHeader post={post} />
      <h1 className={styles.title}>{post.title}</h1>
      <MarkdownContainer text={post.content} />
      <PostFooter post={post} />
    </article>
  );
}
