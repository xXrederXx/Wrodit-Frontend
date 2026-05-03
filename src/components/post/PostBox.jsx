import PostText from "./PostText.jsx";
import PostTitle from "./PostTitle.jsx";
import PostHeader from "./PostInformation.jsx";
import styles from "./PostBox.module.css";
import PostFooter from "./PostFooter.jsx";
import { Link } from "react-router-dom";

export default function PostBox({ post }) {
  return (
    <article className={styles.article}>
      <PostHeader post={post} />{" "}
      <Link className={styles.link} to={`/wrodit/post/${post.id}`}>
        <PostTitle title={post.title} />
        <PostText text={post.content} />{" "}
      </Link>
      <PostFooter vote={post.vote} postId={post.id} />
    </article>
  );
}
