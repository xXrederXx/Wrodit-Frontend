import { Link } from "react-router-dom";

import PostHeader from "../PostHeader.jsx";
import styles from "./PostPreview.module.css";
import PostFooter from "../PostFooter.jsx";
import MarkdownContainer from "../../ui/MarkdownContainer.jsx";

export default function PostPreview({ post }) {
  return (
    <article className={styles.article}>
      <PostHeader post={post} />{" "}
      <Link className={styles.link} to={`/wrodit/post/${post.id}`}>
        <h3>{post.title}</h3>
        <MarkdownContainer text={post.content} />{" "}
      </Link>
      <PostFooter post={post} />
    </article>
  );
}
