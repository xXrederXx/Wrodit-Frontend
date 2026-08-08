import RelativeTime from "../ui/RelativeTime.jsx";
import ThreadDisplay from "../thread/ThreadDisplay.jsx";

import styles from "./PostHeader.module.css";

export default function PostHeader({ post }) {
  if (!post) {
    return <p>Loading</p>;
  }
  return (
    <header className={styles.header}>
      <p>{post.user.username}</p>
      <ThreadDisplay thread={post.thread} />
      <RelativeTime dateTime={post.createdAt} />
    </header>
  );
}
