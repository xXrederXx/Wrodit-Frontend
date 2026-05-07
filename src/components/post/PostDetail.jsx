import { Link } from "react-router-dom";

import CopyLinkButton from "../ui/CopyLinkButton.jsx";

import PostText from "./PostText.jsx";
import PostInformation from "./PostInformation.jsx";
import PostFooter from "./PostFooter.jsx";
import styles from "./PostDetail.module.css";

export default function PostDetail({ post }) {
  return (
    <article className={styles.article}>
      <PostInformation post={post} />
      <h1 className={styles.title}>{post.title}</h1>
      <PostText text={post.content} />
      <PostFooter vote={post.vote} postId={post.id} />
      <Link to={`/wrodit/create/comment/${post.id}`} className={styles.linkButton}>
        Komentieren
      </Link>
      <CopyLinkButton />
    </article>
  );
}
